# Interactive Landing Page

A modern, interactive landing page built with React, Vite, and Tailwind CSS featuring scroll-based animations and responsive design.

## Features

- ✨ Sticky header with smooth scroll effects
- 🎨 5+ sections with fade-in animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Scroll-based interactions using IntersectionObserver
- 🎭 Multiple card variants (basic, highlighted, image)
- 🌈 Gradient backgrounds and modern UI
- ⚡ Optimized performance with requestAnimationFrame

## Tech Stack

- **React 18** (JavaScript/ES6)
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Native Browser APIs** - IntersectionObserver, requestAnimationFrame

## Project Structure

```
test_code/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Section.jsx
│   │   ├── Card.jsx
│   │   └── BannerGrid.jsx
│   ├── hooks/
│   │   ├── useInView.js
│   │   └── useScrollProgress.js
│   └── data/
│       └── banners.json
└── README.md
```

## Installation

1. Install dependencies:
```bash
yarn install
# or
npm install
```

## Running the Project

### Development Server

Start the development server with hot-reload:

**Option 1: Using Yarn**
```bash
yarn dev
# or
yarn start
```

**Option 2: Using NPM**
```bash
npm run dev
# or
npm start
```

**Option 3: Using the run script**
```bash
./run.sh
```

**Option 4: Direct Vite command**
```bash
./node_modules/.bin/vite
# or
npx vite
```

The application will be available at `http://localhost:5173`

### Troubleshooting

If you encounter error 127 (command not found):
1. Make sure dependencies are installed: `yarn install` or `npm install`
2. Verify Node.js is installed: `node --version`
3. Try using the direct path: `./node_modules/.bin/vite`
4. Use npx: `npx vite`
5. Check that you're in the project directory

### Build for Production

Create an optimized production build:

```bash
yarn build
# or
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
yarn preview
# or
npm run preview
```

## Sections

1. **Hero Section** - Large headline with gradient text and CTA buttons
2. **Features Section** - 6 feature cards with icons
3. **Showcase Section** - Split layout with text and image
4. **Banner Grid Section** - Responsive grid with multiple card variants
5. **CTA Section** - Email subscription form

## Components

- `Header` - Sticky navigation with scroll effects
- `Footer` - Multi-column footer with links
- `Section` - Reusable section wrapper with fade-in animation
- `Card` - Flexible card component with 3 variants
- `BannerGrid` - Responsive grid layout for banners

## Custom Hooks

- `useInView` - IntersectionObserver hook for scroll animations
- `useScrollProgress` - Tracks scroll progress for background effects

## Browser Support

Modern browsers that support:
- ES6+ JavaScript
- IntersectionObserver API
- CSS Grid and Flexbox

---

test code for task of 21st graduation preparation committtee , 27.12.2025
