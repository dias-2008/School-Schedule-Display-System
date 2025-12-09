# Configuration Guide

## Setting Up Your Schedule Links

### Step 1: Copy the Template

```bash
cp sheets_config.template.js sheets_config.js
```

Or on Windows:
```cmd
copy sheets_config.template.js sheets_config.js
```

### Step 2: Get Your Google Sheets URLs

For each class schedule:

1. Open your Google Sheet
2. Go to **File → Share → Publish to web**
3. Select **"Entire Document"** and **"Web page"**
4. Click **"Publish"**
5. Copy the URL (it will look like: `https://docs.google.com/spreadsheets/d/e/2PACX-...`)

### Step 3: Edit sheets_config.js

Replace `YOUR_GOOGLE_SHEET_PUBLISHED_URL_HERE` with your actual URLs:

```javascript
const SHIFT_1 = [
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS...', name: '5B', shift: 1 },
    { url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT...', name: '5M', shift: 1 },
    // ... more classes
];
```

### Step 4: Assign Shifts

- **Shift 1**: Usually older grades (8-11) and some 5th grades
- **Shift 2**: Usually younger grades (5-7)

Make sure each entry has the correct `shift: 1` or `shift: 2`.

### Step 5: Test

1. Open `index.html` in your browser
2. Click the hamburger menu (☰)
3. Toggle between "Смена 1" and "Смена 2"
4. Verify all classes appear correctly

## Important Notes

⚠️ **Privacy**: The file `sheets_config.js` is excluded from Git (in `.gitignore`) to keep your schedule URLs private.

✅ **Template**: The file `sheets_config.template.js` is included in Git as an example.

🔄 **On New PC**: You'll need to create `sheets_config.js` from the template and add your URLs again.

## Alternative: Use Admin Panel

Instead of editing the config file, you can:

1. Open `admin.html`
2. Login (учитель / Айсулу)
3. Add links via the "Links" tab

Links added via admin panel are stored in browser localStorage and won't sync across devices.
