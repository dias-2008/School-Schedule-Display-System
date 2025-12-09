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
