# Dependencies and Requirements

## System Requirements

This is a **client-side web application** that runs entirely in the browser. No server, Python, Node.js, or other runtime is required.

### Minimum Requirements

- **Web Browser**: 
  - Chrome 90+ (Recommended)
  - Firefox 88+
  - Safari 14+
  - Edge 90+
  - Internet Explorer 11 (Limited support)

- **Operating System**: Any OS with a modern web browser
  - Windows 7+
  - macOS 10.12+
  - Linux (any distribution)
  - Android 8+
  - iOS 12+

- **Internet Connection**: Required for:
  - Fetching Google Sheets data
  - Loading Google Fonts
  - CORS proxy access

### No Installation Required

✅ No Python packages  
✅ No npm packages  
✅ No server setup  
✅ No build process  
✅ No compilation  

Simply open `index.html` in a web browser!

## External Dependencies (CDN)

These are loaded automatically from CDN when you open the page:

1. **Google Fonts - Inter**
   - URL: `https://fonts.googleapis.com/css2?family=Inter`
   - Purpose: Typography
   - Fallback: System fonts

2. **CORS Proxies** (for fetching Google Sheets)
   - `https://corsproxy.io/`
   - `https://api.allorigins.win/`
   - Purpose: Bypass CORS restrictions when fetching Google Sheets

## Browser Features Used

- **localStorage**: For saving preferences and admin links
- **sessionStorage**: For admin authentication
- **Fetch API**: For loading Google Sheets
- **DOMParser**: For parsing HTML content
- **CSS Grid & Flexbox**: For responsive layout
- **ES6+ JavaScript**: Modern JavaScript features

## Optional Tools

### For Development
- **Git**: For version control
- **VS Code**: Recommended code editor (or any text editor)
- **Live Server**: VS Code extension for local development (optional)

### For Deployment
- **Web Server**: Optional (Apache, Nginx, or any static file server)
- **GitHub Pages**: Free hosting option
- **Cloudflare Tunnel**: For remote access (see deployment guide)

## Offline Capability

⚠️ **Partial offline support**:
- ✅ UI and application logic work offline
- ❌ Cannot fetch new schedule data without internet
- ✅ Previously loaded data may be cached by browser

## Browser Permissions

No special permissions required. The application uses:
- ✅ localStorage (automatic)
- ✅ sessionStorage (automatic)
- ❌ No camera access
- ❌ No microphone access
- ❌ No location access
- ❌ No notifications

## Compatibility Notes

### Internet Explorer
- Limited CSS Grid support
- May require polyfills for Fetch API
- Recommend using Chrome/Edge instead

### Mobile Browsers
- Fully supported on iOS Safari and Chrome
- Touch-friendly interface
- Responsive design adapts to screen size

## Troubleshooting

If you encounter issues:

1. **Clear browser cache**: Ctrl+Shift+Delete
2. **Check browser console**: F12 → Console tab
3. **Verify internet connection**: Required for Google Sheets
4. **Try incognito/private mode**: Rules out extension conflicts
5. **Update browser**: Ensure you're using a modern version

## No Build Process

Unlike many modern web apps, this project:
- ❌ No webpack/vite/parcel
- ❌ No transpilation needed
- ❌ No minification required
- ❌ No package.json
- ✅ Just open and run!

This makes deployment incredibly simple - just copy the files and open `index.html`.
