// configuration file for Google Sheet links
// Add your sheets here to have them appear on all devices (PC, TV, etc.)
// Format: { url: '...', name: '...', shift: 1 or 2 }

// ============================================
// СМЕНА 1 (SHIFT 1)
// ============================================
const SHIFT_1 = [
    // Class 5
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '5B', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '5M', shift: 1 },

    // Class 8
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '8A', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '8B', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '8D', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '8F', shift: 1 },

    // Class 9
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '9B', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '9C', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '9D', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '9E', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '9F', shift: 1 },

    // Class 10
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '10B', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '10C', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '10E', shift: 1 },

    // Class 11
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '11A', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '11B', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '11C', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '11D', shift: 1 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '11I', shift: 1 },
];

// ============================================
// СМЕНА 2 (SHIFT 2)
// ============================================
const SHIFT_2 = [
    // Class 5
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '5E', shift: 2 },

    // Class 7 (All 7th grades belong to Shift 2)
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '7C', shift: 2 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '7D', shift: 2 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '7E', shift: 2 },
    { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '7F', shift: 2 },

    // Add other 5th and 6th grade classes here (except 5B and 5M)
    // Example:
    // { url: 'YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE', name: '6A', shift: 2 },
];

// ============================================
// COMBINED (for backward compatibility)
// ============================================
const GLOBAL_SHEETS = [...SHIFT_1, ...SHIFT_2];
