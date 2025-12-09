# Quick Setup Guide

## First Time Setup on New PC

1. **Install Git** (if not already installed)
   - Download from: https://git-scm.com/downloads

2. **Clone the Repository**
   ```bash
   git clone https://github.com/dias-2008/School-Schedule-Display-System.git
   cd Scheduel
   ```

3. **Open the Application**
   - Simply double-click `index.html`
   - Or right-click → Open with → Your Browser

4. **Configure (if needed)**
   - Edit `sheets_config.js` to update schedule links
   - Credentials are already set in `admin.html`

## For TV Setup

1. Copy the entire folder to a USB drive
2. Plug into TV or connect via network
3. Open `index.html` in the TV browser
4. Bookmark the page
5. Set to full screen (F11)

## For Remote Access (Optional)

To access your schedule from anywhere on the internet:

### Step 1: Download Cloudflare Tunnel

- **Windows**: https://github.com/cloudflare/cloudflared/releases
  - Download `cloudflared-windows-amd64.exe`
  - Place it in your project folder

- **Linux/Mac**: 
  ```bash
  # Install via package manager or download from releases
  wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64
  chmod +x cloudflared-linux-amd64
  ```

### Step 2: Start Local Server

Open terminal in your project folder:

```bash
# Python 3 (recommended)
python -m http.server 8000

# Python 2 (if Python 3 not available)
python -m SimpleHTTPServer 8000
```

### Step 3: Start Cloudflare Tunnel

Open a **new terminal** in your project folder:

```bash
# Windows
.\cloudflared-windows-amd64.exe tunnel --url localhost:8000

# Linux/Mac
./cloudflared tunnel --url localhost:8000
```

### Step 4: Access Your Schedule

Cloudflare will display a URL like:
```
https://random-name.trycloudflare.com
```

- Share this URL to access from anywhere
- URL changes each time you restart the tunnel
- Keep both terminals running

## Updating Schedules

### Method 1: Via Admin Panel
1. Open `admin.html`
2. Login (учитель / Айсулу)
3. Add/remove links in the Links tab

### Method 2: Edit Config File
1. Open `sheets_config.js`
2. Add your Google Sheet URLs to SHIFT_1 or SHIFT_2
3. Save and refresh the page

## Common Commands

```bash
# Check status
git status

# Pull latest changes
git pull

# Add all changes
git add .

# Commit changes
git commit -m "Updated schedules"

# Push to GitHub
git push
```

## Need Help?

Check the main [README.md](README.md) for detailed documentation.
