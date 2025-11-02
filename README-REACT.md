# NSS Portal - React + Tailwind CSS

This is the React version of the NSS Portal website, converted from the original HTML/CSS version and using Tailwind CSS for styling.

## Features

- ⚛️ Built with React 18
- 🎨 Styled with Tailwind CSS
- 🚀 Fast development with Vite
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎯 Modern component architecture

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header component
│   │   ├── Hero.jsx        # Hero section component
│   │   ├── About.jsx       # About section component
│   │   ├── Activities.jsx  # Activities section component
│   │   ├── Events.jsx      # Events section component
│   │   ├── Gallery.jsx     # Gallery section component
│   │   └── Team.jsx        # Team section component
│   ├── App.jsx             # Main app component with routing
│   ├── index.jsx           # React entry point
│   └── index.css           # Global styles and Tailwind directives
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── postcss.config.js       # PostCSS configuration
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

Build for production:
```bash
npm run build
```

The production build will be in the `dist` folder.

## Preview Production Build

Preview the production build:
```bash
npm run preview
```

## Key Changes from HTML Version

1. **Component-based architecture**: The HTML has been broken down into reusable React components
2. **Tailwind CSS**: All custom CSS has been replaced with Tailwind utility classes
3. **React Hooks**: Vanilla JavaScript has been converted to React hooks (useState, useEffect)
4. **React Router**: Navigation is handled by React Router (ready for additional pages)
5. **Modern tooling**: Uses Vite for fast development and building

## Components Overview

- **Header**: Responsive navigation with mobile menu
- **Hero**: Landing section with call-to-action buttons
- **About**: Mission and objectives information
- **Activities**: Showcase of NSS activities
- **Events**: Upcoming events cards
- **Gallery**: Photo gallery of activities
- **Team**: Team members showcase

## Styling

The project uses Tailwind CSS with custom configuration:
- Custom color palette matching the original design
- Custom animations (fadeInUp, slideIn, float, glow, etc.)
- Responsive breakpoints
- Custom utility classes for common patterns

## Notes

- Font Awesome icons are loaded via CDN (already in index.html)
- Images use the same URLs as the original version
- The routing structure is set up for future expansion (about, activities, contact, gallery pages)

## Future Enhancements

You can extend this project by:
- Creating separate pages for About, Activities, Contact, and Gallery
- Adding authentication pages
- Implementing a backend API
- Adding more interactive features

