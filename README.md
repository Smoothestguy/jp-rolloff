# JP Roll-Off Service — Production Website

Static HTML/CSS/JS website for **JP Roll-Off Service, Inc.**, a family-owned dumpster rental company serving the DMV area from Beltsville, MD.

## Business
- **Name:** JP Roll-Off Service, Inc.
- **Address:** PO Box 168, Beltsville, MD 20704
- **Phone:** (301) 252-3586
- **Office:** 301-879-7040
- **Sizes:** 10, 15, 20, 25, 30 yard roll-off dumpsters
- **Service area:** Beltsville, Greenbelt, College Park, Laurel, Hyattsville, and surrounding Prince George's County / DMV

## Stack
- Pure HTML5, CSS3, vanilla JavaScript — zero framework, zero build step
- Mobile-first, semantic markup, Core Web Vitals optimized
- Deployable to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host

## Structure
```
JP-Rolloff/
├── index.html               Homepage
├── about.html               About / Story
├── services.html            All dumpster sizes
├── pricing.html             Pricing + free quote
├── service-areas.html       DMV coverage map + city list
├── contact.html             Contact form + map
├── faq.html                 FAQ
├── locations/               Programmatic city pages (Phase 2)
├── services/                Size-specific deep pages (Phase 2)
├── css/
│   ├── reset.css            Modern CSS reset
│   ├── tokens.css           Design tokens (colors, type, spacing)
│   ├── base.css             Element defaults + typography
│   ├── components.css       Reusable components (buttons, cards, nav)
│   └── pages.css            Page-specific styles
├── js/
│   ├── main.js              Nav, mobile menu, language toggle, forms
│   └── animations.js        Scroll reveals, hero animations
├── images/                  Photography + graphics
├── assets/icons/            SVG icons
├── robots.txt
├── sitemap.xml
└── vercel.json              Headers + clean URLs
```

## Brand
- **Primary red:** `#CC0000`
- **Dark red:** `#990000`
- **Black:** `#0A0A0A`
- **White:** `#FFFFFF`
- **Bilingual:** English / Español toggle

## Local Development
Any static server works. Easiest:
```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy
```bash
vercel --prod
```

## SEO Architecture (Phase 2)
City pages, service-by-size pages, schema markup, sitemap automation — to be layered in after homepage approval.
