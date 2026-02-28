# Lumina Studio Website

A modern, responsive agency website built with React + Vite. Designed to showcase web design services to potential clients.

---

## Tech Stack

- **React 18** — component-based UI
- **Vite** — fast dev server and build tool
- **Plain CSS** — scoped per component, no CSS framework
- **Unsplash** — real images via URL (no downloads needed)

---

## Project Structure

```
src/
├── App.jsx                  # Root component, assembles all sections
├── main.jsx                 # Entry point, mounts App into the DOM
├── styles/
│   └── global.css           # Design tokens, shared styles, animations
├── data/
│   └── content.js           # All text, images, and copy in one place
├── hooks/
│   └── useScrollReveal.js   # Scroll-triggered fade-in animation hook
└── components/
    ├── Cursor.jsx            # Custom gold cursor with ring effect
    ├── Navbar.jsx            # Sticky nav, changes style on scroll
    ├── Hero.jsx              # Full-screen hero with images and stats
    ├── Marquee.jsx           # Scrolling ticker strip
    ├── Services.jsx          # 6-card services grid
    ├── Portfolio.jsx         # Image-based project showcase
    ├── Process.jsx           # 4-step process + stats panel
    ├── Testimonials.jsx      # 3 client testimonial cards
    ├── CTA.jsx               # Call-to-action with background image
    └── Footer.jsx            # Links, socials, copyright
```

---

## Getting Started

**Install dependencies:**
```bash
npm install
```

**Start the dev server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Preview the production build:**
```bash
npm run preview
```

---

## Customisation

All content is centralised in one file — you don't need to touch individual components to rebrand this site.

**To change text, images, services, testimonials:**
Open `src/data/content.js` and edit the values directly.

**To change colours and fonts:**
Open `src/styles/global.css` and update the CSS variables at the top:
```css
:root {
  --cream: #f5f0e8;
  --dark:  #0e0d0b;
  --gold:  #c9a84c;
  --muted: #7a7468;
}
```

**To change the site title:**
Open `src/App.jsx` and update this line:
```js
document.title = "Lumina Studio — Crafting Digital Experiences";
```

**To add or remove sections:**
Import/remove the component in `src/App.jsx` and add/remove its tag from the JSX.

---

## Deployment (Netlify + GitHub)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from GitHub
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click Deploy

Every push to `main` will automatically redeploy the site.

---

## Features

- Custom animated cursor with hover effect
- Scroll-triggered reveal animations on every section
- Sticky navbar that reacts to scroll position
- Fully responsive down to mobile
- Real Unsplash photography throughout
- Hover micro-interactions on cards and buttons
- Scrolling marquee ticker
- Modular — every section is an independent component

---

## License

Free to use and modify for client projects.