# School Schedule Display System

A modern, responsive web application for displaying school schedules on TV screens, computers, and mobile devices. Features shift selection, class search, and an admin panel for managing schedule links.

## Features

- 📺 **TV-Optimized Display**: Automatic slideshow with multiple classes per screen
- 🔄 **Shift Selection**: Toggle between Shift 1 and Shift 2
- 🔍 **Class Search**: Quickly find specific classes
- 📱 **Fully Responsive**: Works on phones, tablets, and large screens
- ⚙️ **Admin Panel**: Manage schedule links with password protection
- 🌐 **Multi-language Support**: Supports Russian and Kazakh day names
- 💾 **Persistent Configuration**: Settings saved across devices

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/dias-2008/School-Schedule-Display-System.git
cd Scheduel
```

### 2. Configure Your Schedules

Edit `sheets_config.js` to add your Google Sheets URLs:

```javascript
const SHIFT_1 = [
    { url: 'YOUR_GOOGLE_SHEET_URL', name: '5B', shift: 1 },
    // Add more classes...
];

const SHIFT_2 = [
    { url: 'YOUR_GOOGLE_SHEET_URL', name: '7B', shift: 2 },
    // Add more classes...
];
```

### 3. Open in Browser

Simply open `index.html` in your web browser. No server required!

For TV deployment, see the [Deployment Guide](docs/deployment_guide.md).

## File Structure

```
Scheduel/
├── index.html          # Main schedule display page
├── admin.html          # Admin panel for managing links
├── script.js           # Core application logic
├── style.css           # Styling and responsive design
├── sheets_config.js    # Schedule configuration (EDIT THIS)
└── README.md           # This file
```

## Configuration

### Admin Panel Access

- **URL**: `admin.html`
- **Login**: `учитель`
- **Password**: `Айсулу`

To change credentials, edit the `CREDENTIALS` object in `admin.html`.

### Google Sheets Format

Your Google Sheets should be published to the web:
1. File → Share → Publish to web
2. Choose "Entire Document" and "Web page"
3. Copy the URL and add it to `sheets_config.js`

**Required Format:**
- First column: Time (e.g., "8:30-9:10")
- Subsequent columns: Days of the week with lessons
- Header row with day names (Russian or Kazakh)

## Usage

### For Students/Teachers

1. Open `index.html`
2. Click the hamburger menu (☰)
3. Select your shift (Смена 1 or Смена 2)
4. Use the search bar to find your class

### For Administrators

1. Open `admin.html`
2. Log in with credentials
3. Add/remove schedule links
4. View system logs

## Deployment Options

### Option 1: Local Network (Recommended for TV)

1. Place files in a folder accessible on your network
2. Open `index.html` on the TV browser
3. Bookmark the page for easy access

### Option 2: GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Access via `https://yourusername.github.io/Scheduel`

### Option 3: Cloudflare Tunnel (Remote Access)

See [Deployment Guide](docs/deployment_guide.md) for detailed instructions.

## Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ⚠️ Internet Explorer (Limited support)

## Customization

### Change Slide Duration

Edit `script.js`, line ~350:

```javascript
setInterval(() => { /* ... */ }, 10000); // 10 seconds
```

### Modify Colors

Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #50e3c2;
    /* ... */
}
```

## Troubleshooting

### Schedules Not Loading

1. Check browser console for errors (F12)
2. Verify Google Sheets are published to web
3. Check CORS proxy status
4. Clear browser cache (Ctrl+Shift+Delete)

### Admin Panel Not Accessible

1. Verify credentials in `admin.html`
2. Check if localStorage is enabled
3. Try incognito/private mode

## Contributing

Feel free to submit issues and pull requests!

## License

MIT License - feel free to use and modify for your school.

## Credits

Developed for school schedule display system with support for multiple shifts and responsive design.
