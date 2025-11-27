# AJR Building Solutions - Website

A modern, responsive static website for AJR Building Solutions, a professional building services company in Chennai.

## 📋 Business Information

- **Business Name:** AJR Building Solutions
- **Address:** 2nd floor 17/2 Bharatheeswara Colony 5th street, Kodambakkam, Chennai, Tamil Nadu - 600024
- **Phone:** 9843006765
- **Email:** ajrbuildingsolution@gmail.com
- **Working Hours:** Monday - Sunday, 9:00 AM - 8:00 PM

## 🌐 Website Pages

1. **Home (index.html)** - Landing page with hero section, services preview, and service areas
2. **Services (services.html)** - Detailed list of all 14 services offered
3. **About (about.html)** - Company information, mission, vision, and why choose us
4. **Contact (contact.html)** - Contact form, contact information, and location map

## 🛠️ Services Offered

1. Wooden polishing
2. Painting
3. Tank cleaning
4. Seepage arresting
5. Deep cleaning
6. Tiles work
7. Toughened glass work
8. Interior & exterior work
9. Electrical, plumbing, carpenter work
10. UPVC & glass door works
11. Sofa/mattress shampooing
12. Fabrication (MS/SS)
13. Move-in/Move-out package
14. Festive makeover package

## 📍 Service Areas

- Adyar
- Guindy
- Annanagar
- Thiruvanmiyur
- ECR & OMR
- Nungambakkam
- Velacherry
- Pallikaranai
- Besant Nagar
- Gopalapuram
- Alwarpet
- Poes Garden & Boat Club Road

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Contact Form** - Functional contact form with validation
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Loading** - Optimized CSS and JavaScript
- **Accessibility** - WCAG compliant design

## 📁 File Structure

```
ajr_building_solutions/
├── index.html          # Home page
├── services.html       # Services page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design Features

- **Color Scheme:** Modern blue gradient with accent colors
- **Typography:** Inter font family for clean, professional look
- **Animations:** Smooth scroll animations and hover effects
- **Icons:** Emoji icons for visual appeal (can be replaced with SVG icons)
- **Shadows & Gradients:** Modern depth and visual hierarchy

## 💻 How to Use

### Local Development

1. Simply open `index.html` in your web browser
2. No build process or server required - it's a static website
3. All pages are linked and fully functional

### Deployment Options

#### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

#### Option 2: Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop the entire folder
3. Your site will be live instantly with a custom URL

#### Option 3: Vercel (Free)
1. Sign up at vercel.com
2. Import your project
3. Deploy with one click

#### Option 4: Traditional Web Hosting
1. Upload all files to your web hosting via FTP
2. Ensure index.html is in the root directory
3. Access via your domain name

## 📧 Contact Form Setup

The contact form currently logs data to the console. To make it functional:

### Option 1: Using EmailJS (Recommended for static sites)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Uncomment the EmailJS code in `script.js`
4. Add your service ID and template ID

### Option 2: Using Formspree
1. Sign up at [Formspree](https://formspree.io/)
2. Update the form action in `contact.html`
3. No JavaScript changes needed

### Option 3: Using Backend API
1. Create a backend endpoint (Node.js, PHP, etc.)
2. Update the form submission code in `script.js`
3. Handle email sending on the server

## 🗺️ Google Maps Integration

The contact page includes a Google Maps embed. To show the exact location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" > "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `contact.html`

## 📱 Google My Business Setup

This website is designed to complement your GMB profile. Use the following for GMB:

### Required Information
- Business name: AJR Building Solutions
- Category: Building services / Construction company
- Address: 2nd floor 17/2 Bharatheeswara Colony 5th street, Kodambakkam, Chennai - 600024
- Phone: 9843006765
- Website: [Your deployed website URL]
- Hours: Mon-Sun 9:00 AM - 8:00 PM

### Recommended Photos
- Logo (1080×1080)
- Shop exterior with signboard
- Shop interior
- Service photos
- Team photos

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;  /* Main brand color */
    --secondary-color: #f59e0b; /* Accent color */
    /* ... other colors */
}
```

### Adding Images
1. Create an `images` folder
2. Add your images
3. Update the HTML to reference them:
```html
<img src="images/your-image.jpg" alt="Description">
```

### Modifying Content
- Edit the HTML files directly
- All text content is easily accessible
- No technical knowledge required for basic edits

## 📊 Analytics

To track website visitors:

1. Sign up for [Google Analytics](https://analytics.google.com/)
2. Get your tracking ID
3. Add the tracking code to all HTML files in the `<head>` section

## ✅ SEO Checklist

- [x] Descriptive page titles
- [x] Meta descriptions on all pages
- [x] Semantic HTML structure
- [x] Mobile responsive
- [x] Fast loading times
- [ ] Add Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Add structured data (Schema.org)
- [ ] Optimize images (when added)

## 🔒 Security Notes

- No sensitive data is stored
- Form submissions should be handled securely
- Use HTTPS when deployed
- Regular updates recommended

## 📞 Support

For questions or issues with the website:
- Email: ajrbuildingsolution@gmail.com
- Phone: 9843006765

## 📄 License

This website is proprietary to AJR Building Solutions.

---

**Built with ❤️ for AJR Building Solutions**
