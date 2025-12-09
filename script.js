// Default sheets if none in localStorage
const DEFAULT_SHEETS = [
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSz57X3_30M1RVdRPSPR26enuAg1LdCIa3Bn1Tt-2fKH6K3kvGxm2L1wiv4u2aCKAGSmYh_Cw60HzyY/pubhtml/sheet?headers=false&gid=0', name: '11A' },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT9wTegCb61NxnBwbzy64Yo7Qm-ZPZi0iaL8hS2aTxXXj17bfhAW-sLOg8Jphdf5bNDHYrdpKcbdjx_/pubhtml', name: 'Other' }
];

const PROXIES = [
    { url: 'https://corsproxy.io/?', type: 'text' },
    { url: 'https://api.allorigins.win/raw?url=', type: 'text' },
    { url: 'https://api.allorigins.win/get?url=', type: 'json' }
];

// --- State Management ---

function getSheetUrls() {
    let sheets = [];

    // 1. Get Global Config Sheets (if defined)
    if (typeof GLOBAL_SHEETS !== 'undefined' && Array.isArray(GLOBAL_SHEETS)) {
        sheets = [...GLOBAL_SHEETS];
    } else {
        // Fallback default if no config
        sheets = [...DEFAULT_SHEETS];
    }

    // 2. Get Local Storage Sheets
    const stored = localStorage.getItem('schedule_sheet_urls');
    if (stored) {
        let parsed = JSON.parse(stored);

        // Migration: If array of strings, convert to objects
        if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0] === 'string') {
            parsed = parsed.map((url, i) => ({ url, name: `Sheet ${i + 1}` }));
            localStorage.setItem('schedule_sheet_urls', JSON.stringify(parsed));
        }

        // Merge: Add local sheets if they aren't already in the list (by URL)
        if (Array.isArray(parsed)) {
            parsed.forEach(localSheet => {
                if (!sheets.some(s => s.url === localSheet.url)) {
                    sheets.push(localSheet);
                }
            });
        }
    }

    // 3. Filter by selected shift
    const selectedShift = parseInt(localStorage.getItem('selected_shift') || '1');
    sheets = sheets.filter(sheet => {
        // If sheet has a shift property, filter by it
        if (sheet.shift) {
            return sheet.shift === selectedShift;
        }
        // If no shift property, include it (backward compatibility)
        return true;
    });

    return sheets;
}

function addSheetUrl(url, name) {
    const sheets = getSheetUrls();
    // Check if URL already exists
    if (!sheets.some(s => s.url === url)) {
        sheets.push({ url, name: name || `Sheet ${sheets.length + 1}` });
        localStorage.setItem('schedule_sheet_urls', JSON.stringify(sheets));
    }
}

function removeSheetUrl(index) {
    const sheets = getSheetUrls();
    sheets.splice(index, 1);
    localStorage.setItem('schedule_sheet_urls', JSON.stringify(sheets));
}

// --- Logging System ---

function log(source, message, type = 'info') {
    const logs = getLogs();
    logs.push({
        timestamp: Date.now(),
        source,
        message,
        type
    });
    if (logs.length > 100) logs.shift();
    localStorage.setItem('schedule_logs', JSON.stringify(logs));
    console.log(`[${source}] ${message}`);
}

function getLogs() {
    const stored = localStorage.getItem('schedule_logs');
    return stored ? JSON.parse(stored) : [];
}

// --- Fetching Logic ---

async function fetchAllSchedules() {
    const container = document.getElementById('schedule-container');

    // If first load, show loading
    if (container.children.length === 0 || container.querySelector('.loading')) {
        // container.innerHTML = '<div class="loading">Загрузка...</div>';
    }

    const sheets = getSheetUrls();
    let allClasses = [];
    let errors = [];

    log('System', `Starting fetch for ${sheets.length} sheets`);

    for (const sheet of sheets) {
        try {
            const classes = await fetchSingleSheet(sheet.url, sheet.name);
            allClasses = allClasses.concat(classes);
            log('Fetch', `Successfully fetched ${classes.length} classes from ${sheet.name || sheet.url}`);
        } catch (error) {
            console.error(error);
            errors.push(error.message);
            log('Fetch Error', `Failed to fetch ${sheet.name}: ${error.message}`, 'error');
        }
    }

    if (allClasses.length > 0) {
        cachedClasses = allClasses; // Update cache for filtering
        renderSchedule(allClasses);
    } else {
        if (errors.length > 0) {
            container.innerHTML = `<div class="loading">Ошибка: ${errors.join(', ')}</div>`;
        } else {
            container.innerHTML = '<div class="loading">Нет данных</div>';
        }
    }
}

async function fetchSingleSheet(url, defaultName) {
    let fetchUrl = url;
    if (url.includes('/pubhtml')) {
        // Ensure we are fetching the sheet content, not the container
        if (!url.includes('/sheet')) {
            fetchUrl = url.replace(/\/pubhtml\/?(\?.*)?$/, '/pubhtml/sheet?headers=false&gid=0');
        } else if (!url.includes('headers=false')) {
            fetchUrl += '&headers=false';
        }
    }

    let lastError;
    let classes = [];

    const tryFetch = async (targetUrl) => {
        for (const proxy of PROXIES) {
            try {
                const response = await fetch(proxy.url + encodeURIComponent(targetUrl));
                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                let htmlContent;
                if (proxy.type === 'json') {
                    const data = await response.json();
                    htmlContent = data.contents;
                } else {
                    htmlContent = await response.text();
                }

                if (!htmlContent) throw new Error('Empty response');

                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlContent, 'text/html');
                const table = doc.querySelector('table.waffle') || doc.querySelector('table');

                if (!table) throw new Error('Table structure not found');
                return parseTableData(table, defaultName);
            } catch (error) {
                lastError = error;
                continue;
            }
        }
        throw new Error(`All proxies failed.`);
    };

    try {
        classes = await tryFetch(fetchUrl);
    } catch (e) {
        try {
            classes = await tryFetch(url);
        } catch (e2) {
            throw e2;
        }
    }

    return classes || [];
}

function parseTableData(table, defaultName) {
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const classes = [];

    // Initialize with default name if provided
    let currentClass = defaultName ? { name: defaultName, schedule: [] } : null;
    let currentDay = '';

    const normalizeDay = (str) => {
        if (!str) return null;
        const s = str.toLowerCase();
        if (s.includes('понедельник') || s.includes('дүйсенбі')) return 'понедельник';
        if (s.includes('вторник') || s.includes('сейсенбі')) return 'вторник';
        if (s.includes('среда') || s.includes('сәрсенбі')) return 'среда';
        if (s.includes('четверг') || s.includes('бейсенбі')) return 'четверг';
        if (s.includes('пятница') || s.includes('жұма')) return 'пятница';
        if (s.includes('суббота') || s.includes('сенбі')) return 'суббота';
        if (s.includes('воскресенье') || s.includes('жексенбі')) return 'воскресенье';
        return null;
    };

    // Helper to check if string is a day (uses normalization)
    const isDay = (str) => normalizeDay(str) !== null;

    // Time pattern regex: e.g. 8:30, 08:30, 8.30, 8-30
    const isTime = (str) => /^([0-1]?[0-9]|2[0-3])[:.-]\s*[0-5][0-9]/.test(str);

    for (let i = 0; i < rows.length; i++) {
        const cells = Array.from(rows[i].querySelectorAll('td'));
        if (cells.length === 0) continue;

        // Clean cell texts
        const cellTexts = cells.map(c => c.textContent.trim());
        const rowText = cellTexts.join(' ').toLowerCase();

        // 1. Header Check ("Расписание...")
        if (rowText.includes('расписание')) {
            if (currentClass && currentClass.name !== defaultName) classes.push(currentClass); // Push previous if it wasn't the default

            // Extract name if possible, otherwise rely on default or generic
            let name = cellTexts.find(t => t.toLowerCase().includes('расписание'));
            if (name) {
                name = name.replace(/расписание/i, '').trim();
            }
            if (!name && defaultName) name = defaultName;

            currentClass = { name: name || 'Unknown Class', schedule: [] };
            currentDay = '';

            // Allow looking for day in the same row
            const dayInRow = cellTexts.find(t => isDay(t));
            if (dayInRow) currentDay = normalizeDay(dayInRow);
            continue;
        }

        if (!currentClass && defaultName) {
            currentClass = { name: defaultName, schedule: [] };
        }
        if (!currentClass) continue;

        // 2. Day Check
        const dayCell = cellTexts.find(t => isDay(t));
        if (dayCell) {
            currentDay = normalizeDay(dayCell);
            // Sometimes day is in its own row, sometimes with data. 
            // We continue processing to check for time/subject in this same row.
        }

        // 3. Lesson Parsing (Smart Column Detection)
        // Find a cell that looks like time, and a cell that looks like subject (longer text)
        let time = '';
        let subject = '';

        // Strategy: Find first time-like cell
        const timeIndex = cellTexts.findIndex(t => isTime(t));

        if (timeIndex !== -1) {
            time = cellTexts[timeIndex];
            // Subject is likely the next non-empty cell
            for (let j = timeIndex + 1; j < cellTexts.length; j++) {
                if (cellTexts[j]) {
                    subject = cellTexts[j];
                    break;
                }
            }
        }

        // Strategy B: Fallback (Grab 2 adjacent non-empty cells)
        if ((!time || !subject) && cellTexts.length >= 2) {
            // Filter out empty cells and the day cell
            const cleanCells = cellTexts.filter(c => c && (!dayCell || c !== dayCell));
            if (cleanCells.length >= 2) {
                // Assume first is time, second is subject
                if (!time) time = cleanCells[0];
                if (!subject) subject = cleanCells[1];
            }
        }

        // Final validation
        // Clean up time (remove extra chars if needed, though regex check limits it)
        if (time && subject && currentDay) {
            // Clean subject from day name if accidentally grabbed
            if (isDay(subject)) continue;

            currentClass.schedule.push({ day: currentDay, time: time, subject: subject });
        }
    }

    if (currentClass) classes.push(currentClass);
    return classes;
}

// --- Rendering & Rotation ---

let slideInterval;
let activeSlideIndex = 0;

// Global cache for resize handling
let cachedClasses = [];

function getChunkSize() {
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1200) return 2;
    if (w < 1600) return 3;
    return 4;
}

// Handle search and resize
let resizeTimeout;
const searchInput = document.getElementById('class-search');

const handleUpdate = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (cachedClasses.length > 0) {
            const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
            const filtered = query
                ? cachedClasses.filter(c => c.name.toLowerCase().includes(query))
                : cachedClasses;

            renderSchedule(filtered);
        }
    }, 200);
};

window.addEventListener('resize', handleUpdate);
if (searchInput) {
    searchInput.addEventListener('input', handleUpdate);
}

function renderSchedule(classes) {
    // Only update cache if we are rendering the FULL list (internal call/initial fetch)
    // determining this is tricky with just 'classes' arg.
    // Better strategy: cache is updated only by fetchAllSchedules.
    // But renderSchedule is called by handleUpdate (which passes subset).
    // So we remove line: "if (classes !== cachedClasses) cachedClasses = classes;"
    // fetched classes are stored in cachedClasses by fetchAllSchedules (we need to modify that function to set it).

    // Correction: We need to set cachedClasses in fetchAllSchedules, NOT here.
    // However, to avoid modifying fetchAllSchedules right now, we can check if it's likely the full list.
    // Actually, simpler: fetchAllSchedules calls renderSchedule. 
    // Let's modify fetchAllSchedules to set cachedClasses directly.

    const container = document.getElementById('schedule-container');
    container.innerHTML = ''; // Clear loading or old slides

    if (classes.length === 0) {
        container.innerHTML = '<div class="loading">Ничего не найдено</div>';
        return;
    }

    // Dynamic chunk size
    const chunkSize = getChunkSize();
    const chunks = [];
    for (let i = 0; i < classes.length; i += chunkSize) {
        chunks.push(classes.slice(i, i + chunkSize));
    }

    chunks.forEach((chunk, index) => {
        const slide = document.createElement('div');
        slide.className = `class-slide ${index === 0 ? 'active' : ''}`;

        // Create a grid for this chunk (1, 2, or 3 columns)
        const chunkGrid = document.createElement('div');
        chunkGrid.className = 'multi-class-grid';
        // Dynamic columns: if chunk has 2 classes, use 2 cols. If 3, use 3.
        chunkGrid.style.gridTemplateColumns = `repeat(${chunk.length}, 1fr)`;

        chunk.forEach(cls => {
            const classCol = document.createElement('div');
            classCol.className = 'class-column';

            // Class Header
            const header = document.createElement('div');
            header.className = 'class-header-small';
            header.textContent = cls.name;
            classCol.appendChild(header);

            // Days List (Vertical Stack)
            const daysList = document.createElement('div');
            daysList.className = 'days-vertical-list';

            // Group by Day
            const daysOrder = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница'];
            const daysMap = {};
            daysOrder.forEach(d => daysMap[d] = []);

            cls.schedule.forEach(item => {
                const dayLower = item.day.toLowerCase();
                const key = daysOrder.find(d => dayLower.includes(d));
                if (key) daysMap[key].push(item);
            });

            daysOrder.forEach(dayName => {
                const dayBlock = document.createElement('div');
                dayBlock.className = 'day-block';

                const dayTitle = document.createElement('div');
                dayTitle.className = 'day-title-small';
                dayTitle.textContent = dayName;
                dayBlock.appendChild(dayTitle);

                const lessonsContainer = document.createElement('div');
                lessonsContainer.className = 'lessons-container-small';

                const lessons = daysMap[dayName];
                if (lessons.length > 0) {
                    lessons.forEach(l => {
                        const row = document.createElement('div');
                        row.className = 'lesson-row-small';
                        row.innerHTML = `<span class="time">${l.time}</span><span class="subj">${l.subject}</span>`;
                        lessonsContainer.appendChild(row);
                    });
                } else {
                    lessonsContainer.innerHTML = '<div class="no-lessons">-</div>';
                }

                dayBlock.appendChild(lessonsContainer);
                daysList.appendChild(dayBlock);
            });

            classCol.appendChild(daysList);
            chunkGrid.appendChild(classCol);
        });

        slide.appendChild(chunkGrid);
        container.appendChild(slide);
    });

    // Restart Rotation
    startRotation(chunks.length);
}

function startRotation(count) {
    if (slideInterval) clearInterval(slideInterval);
    if (count <= 1) return; // No rotation needed if only 1 slide

    slideInterval = setInterval(() => {
        const slides = document.querySelectorAll('.class-slide');
        if (slides.length === 0) return;

        // Remove active from current
        slides[activeSlideIndex].classList.remove('active');

        // Next index
        activeSlideIndex = (activeSlideIndex + 1) % slides.length;

        // Add active to next
        slides[activeSlideIndex].classList.add('active');
    }, 15000); // 15 seconds per slide (more time to read 3 classes)
}

// Initial Load
if (document.getElementById('schedule-container')) {
    fetchAllSchedules();
    setInterval(fetchAllSchedules, 5 * 60 * 1000); // Refresh data every 5 mins
}
