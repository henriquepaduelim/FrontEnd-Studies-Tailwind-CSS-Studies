# 🎨 Customization Guide

This guide will help you customize the Sports Landing Page Template to match your brand and business needs.

## 🚀 Quick Customization (5 minutes)

### 1. Update Company Information
Edit `src/config.js`:

```javascript
company: {
  name: "Your Company Name",
  tagline: "Your company tagline",
  description: "Your company description",
  logo: "/assets/logo.png"
}
```

### 2. Update Contact Information
```javascript
contact: {
  email: "your-email@domain.com",
  phone: "+1 (555) 123-4567",
  address: "Your City, Country",
  adminEmail: "admin@yourdomain.com"
}
```

### 3. Replace Logo and Assets
- Replace `public/assets/logo.png` with your logo
- Replace `public/assets/football-bg.mp4` with your background video
- Recommended logo size: 200x60px (PNG with transparent background)
- Video format: MP4, max 5MB for fast loading

## 🎨 Advanced Customization

### Colors and Branding

#### Method 1: Using Config (Recommended)
Update theme colors in `src/config.js`:
```javascript
theme: {
  primary: "your-color-600",      // Main brand color
  primaryHover: "your-color-700", // Hover state
  secondary: "your-color-100",    // Light background
  accent: "orange-500",           // Accent color
  background: "your-color-100"    // Page background
}
```

#### Method 2: Direct CSS Classes
Search and replace Tailwind classes throughout components:
- `bg-blue-600` → `bg-purple-600` (buttons, highlights)
- `text-blue-600` → `text-purple-600` (text colors)
- `border-blue-200` → `border-purple-200` (borders)

### Content Customization

#### Hero Section (`src/components/Hero.jsx`)
```javascript
// Update main headline and description
<h1>Your Amazing Product</h1>
<p>Your compelling description...</p>
```

#### Features Section (`src/components/Features.jsx`)
Update the features array:
```javascript
const features = [
  {
    title: 'Your Feature',
    desc: 'Feature description',
    icon: <FontAwesomeIcon icon={faYourIcon} />
  },
  // Add more features...
]
```

#### Pricing Plans (`src/config.js`)
```javascript
pricing: {
  plans: [
    {
      title: 'Basic Plan',
      price: '$29',
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Feature 1',
        'Feature 2',
        // Add your features...
      ],
      highlighted: false
    }
  ]
}
```

#### Testimonials (`src/config.js`)
```javascript
testimonials: [
  { 
    quote: 'Customer testimonial here...', 
    name: 'Customer Name', 
    role: 'Customer Title, Company' 
  }
]
```

### Navigation and Links

#### Update Navigation (`src/config.js`)
```javascript
navigation: [
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About' },    // Add new sections
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' }
]
```

#### Social Media Links (`src/config.js`)
```javascript
social: {
  twitter: "https://twitter.com/yourbrand",
  linkedin: "https://linkedin.com/company/yourbrand",
  facebook: "https://facebook.com/yourbrand",
  instagram: "https://instagram.com/yourbrand"
}
```

## 🔧 Adding New Sections

### 1. Create New Component
Create `src/components/About.jsx`:
```javascript
import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Your content here */}
      </div>
    </section>
  )
}
```

### 2. Import and Use
In `src/App.jsx`:
```javascript
import About from './components/About'

// Add to JSX
<About />
```

### 3. Update Navigation
Add to `src/config.js` navigation array.

## 📱 Responsive Customization

### Breakpoints (Tailwind CSS)
- `sm:` - 640px and up (mobile landscape)
- `md:` - 768px and up (tablet)
- `lg:` - 1024px and up (desktop)
- `xl:` - 1280px and up (large desktop)

### Common Responsive Patterns
```javascript
// Mobile: stack vertically, Desktop: side by side
className="flex flex-col md:flex-row"

// Mobile: full width, Desktop: half width
className="w-full md:w-1/2"

// Hide on mobile, show on desktop
className="hidden md:block"
```

## 🎭 Animation Customization

### Hover Effects
Already included in components. Customize by updating:
```javascript
// Scale on hover
className="transform hover:scale-105 transition-transform duration-300"

// Color change on hover
className="bg-blue-600 hover:bg-blue-700 transition-colors"
```

## 🔍 SEO Customization

### Update Meta Tags (`index.html`)
```html
<title>Your Website Title</title>
<meta name="description" content="Your website description" />
<meta name="keywords" content="your, keywords, here" />
```

### Update Config SEO (`src/config.js`)
```javascript
seo: {
  title: "Your Website Title",
  description: "Your website description",
  keywords: "your, keywords, here"
}
```

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Compress Video**: Keep background video under 5MB
3. **Minimize Dependencies**: Only import used FontAwesome icons
4. **Use Tailwind Purge**: Automatically removes unused CSS

## 🆘 Common Issues

### Logo Not Showing
- Ensure logo is in `public/assets/`
- Check file name matches config
- Verify image format (PNG/JPG/SVG)

### Colors Not Updating
- Clear browser cache
- Restart development server
- Check Tailwind class names are correct

### Mobile Layout Issues
- Test on actual devices
- Use browser dev tools responsive mode
- Check Tailwind responsive classes

## 📞 Need Help?

If you need assistance with customization:
1. Check this guide first
2. Review the component code
3. Contact support: [your-email@domain.com]

---

**Happy customizing! 🚀**
