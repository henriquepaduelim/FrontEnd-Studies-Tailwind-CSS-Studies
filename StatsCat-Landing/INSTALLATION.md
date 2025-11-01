# Quick Installation Guide

## Get Started in 3 Minutes

### Prerequisites
- Node.js 16+ installed on your computer
- Code editor (VS Code recommended)
- Basic knowledge of React (helpful but not required)

### Step 1: Download & Extract
1. Download the template ZIP file
2. Extract to your desired folder
3. Open folder in your code editor

### Step 2: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```
Your site will open at `http://localhost:5173`

## Quick Customization

### Change Company Name
Edit `src/config.js`:
```javascript
company: {
  name: "Your Company Name",  // Change this
  tagline: "Your tagline",    // And this
  // ...
}
```

### Replace Logo
1. Add your logo to `public/assets/` folder
2. Name it `logo.png` (or update config)
3. Recommended size: 200x60px

### Update Contact Info
In `src/config.js`:
```javascript
contact: {
  email: "your@email.com",     // Your email
  phone: "+1 234 567 8890",    // Your phone  
  address: "Your Location",    // Your address
}
```

### Change Colors
In `src/config.js`:
```javascript
theme: {
  primary: "purple-600",       // Main color
  primaryHover: "purple-700",  // Hover color
  // See customization guide for more options
}
```

## Build for Production

When ready to deploy:
```bash
npm run build
```

Upload the `dist` folder to your hosting service.

## Common Issues

**Node.js not installed?**
Download from: https://nodejs.org

**Port 5173 already in use?**
The dev server will automatically find another port.

**Logo not showing?**
Make sure your logo is in `public/assets/` folder.

**Need more help?**
Check the full documentation in `README.md` and `CUSTOMIZATION.md`

---

**That's it! Your sports landing page is ready!**

For detailed customization options, see `CUSTOMIZATION.md`
