# Support & Help

## Getting Help

### Before Contacting Support
1. Check the `README.md` for installation instructions
2. Review `CUSTOMIZATION.md` for customization options  
3. Look through `INSTALLATION.md` for quick start
4. Check the FAQ section below

### Contact Support
**Email**: [your-support-email@domain.com]
**Response Time**: Within 24 hours (Monday-Friday)

**Please include in your message:**
- Template version number
- Operating system (Windows/Mac/Linux)
- Node.js version (`node --version`)
- Detailed description of the issue
- Screenshots if applicable
- Error messages (if any)

## Troubleshooting

### Installation Issues

**Q: `npm install` fails**
A: Try these solutions:
1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again
3. Make sure you have Node.js 16+ installed
4. Try `npm cache clean --force`

**Q: Development server won't start**
A: 
1. Check if port 5173 is already in use
2. Try `npm run dev -- --port 3000` to use different port
3. Restart your terminal/command prompt

**Q: Build command fails**
A:
1. Run `npm install` first
2. Delete `dist` folder if it exists
3. Try `npm run build` again

### Customization Issues

**Q: Logo doesn't appear**
A:
1. Make sure logo file is in `public/assets/` folder
2. Check the file name matches what's in `config.js`
3. Supported formats: PNG, JPG, SVG
4. Recommended size: 200x60px

**Q: Colors not changing**
A:
1. Make sure you're using valid Tailwind CSS color names
2. Clear browser cache (Ctrl+Shift+R)
3. Restart development server
4. Check `src/config.js` syntax

**Q: Background video not playing**
A:
1. Make sure video file is in `public/assets/`
2. Use MP4 format for best compatibility
3. Keep file size under 10MB for fast loading
4. Check browser autoplay policies

### Deployment Issues

**Q: Site doesn't work after deployment**
A:
1. Make sure you uploaded the `dist` folder contents
2. Check if hosting supports single-page applications
3. Verify all file paths are correct
4. Check browser console for errors

**Q: Images/videos not loading on live site**
A:
1. Verify all assets are in the uploaded files
2. Check file paths start with `/` not `./`
3. Ensure hosting service serves static files

## Frequently Asked Questions

### General

**Q: Can I use this template for client projects?**
A: Yes! With the commercial license, you can use it for unlimited client projects.

**Q: Can I remove the attribution/credits?**
A: Yes, with the Extended or Developer license.

**Q: Do I get free updates?**
A: Yes, all customers get bug fixes and minor updates for free.

**Q: What's included in the package?**
A: Source code, documentation, installation guide, and 6 months of support.

### Technical

**Q: Can I add more pages?**
A: Yes! Create new components and add them to `App.jsx`. See customization guide.

**Q: Is it SEO-friendly?**
A: Yes, the template includes proper meta tags and semantic HTML structure.

**Q: Can I integrate with a CMS?**
A: Yes, you can integrate with headless CMS like Strapi, Contentful, or Sanity.

**Q: Does it work with older browsers?**
A: Modern browsers (Chrome, Firefox, Safari, Edge) are supported. IE is not supported.

### Customization

**Q: How do I add more features to the carousel?**
A: Edit the `features` array in `src/components/Features.jsx`.

**Q: Can I change the layout?**
A: Yes! All components are modular and can be rearranged or modified.

**Q: How do I add more pricing plans?**
A: Add new plan objects to the `pricing.plans` array in `src/config.js`.

**Q: Can I use different fonts?**
A: Yes, update the Google Fonts link in `index.html` and modify CSS in `src/index.css`.

## Feature Requests

Have an idea for a new feature? We'd love to hear it!
Send your suggestions to: [your-email@domain.com]

Popular requests may be included in future updates.

## Additional Resources

### Learning Resources
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)

### Design Resources
- [FontAwesome Icons](https://fontawesome.com/icons)
- [Unsplash Photos](https://unsplash.com)
- [Google Fonts](https://fonts.google.com)

### Hosting Recommendations
- [Vercel](https://vercel.com) - Free tier available
- [Netlify](https://netlify.com) - Free tier available  
- [GitHub Pages](https://pages.github.com) - Free
- [Firebase Hosting](https://firebase.google.com/docs/hosting) - Free tier

## Feedback

Your feedback helps us improve! Please rate your experience:
- 5 stars: Excellent
- 4 stars: Good  
- 3 stars: Average
- 2 stars: Poor
- 1 star: Very Poor

Send feedback to: [your-email@domain.com]

---

**Thank you for choosing our Sports Landing Page Template!**
