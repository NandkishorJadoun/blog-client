# Blog Client

A modern, performant, and modular blog client built with React, enabling seamless blog browsing, content rendering, and smooth navigation. This project provides a clean structure for scalable development and easy extensibility.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Getting Started](#getting-started)
- [Configuration](#configuration)

---

## Features

- **Modern SPA:** Built as a Single Page Application (SPA) using React.
- **Advanced Routing:** Uses React Router v7 for client-side page navigation.
- **Dynamic Content Parsing:** Incorporates `html-react-parser` to safely render HTML/Markdown.
- **Visual Feedback:** Integrates `react-top-loading-bar` for loading state indication.
- **Component-Based Architecture:** Organized into modular and reusable components.
- **Asset Management:** Dedicated assets folder for images, icons, and static resources.
- **High Performance:** Powered by Vite for instant reloads and optimized builds.
- **Strict Linting:** Enforced code standards using ESLint.

## Tech Stack

- **Languages:** JavaScript, CSS, HTML
- **Frontend Framework:** [React](https://react.dev/) (v19)
- **Routing:** [React Router](https://reactrouter.com/) (v7)
- **Content Parsing:** [html-react-parser](https://www.npmjs.com/package/html-react-parser)
- **Loading Bar:** [react-top-loading-bar](https://www.npmjs.com/package/react-top-loading-bar)
- **Build Tool:** [Vite](https://vitejs.dev/) (for fast development and builds)
- **Linting:** [ESLint](https://eslint.org/) with React-specific plugins and base config

## Project Structure

```
├── index.html                # HTML template
├── package.json              # Project metadata and dependencies
├── vite.config.js            # Vite configuration (uses @vitejs/plugin-react)
├── eslint.config.js          # ESLint configuration for code quality
├── src/
│   ├── AppLayout.jsx         # Main layout component
│   ├── main.jsx              # Entrypoint for React/Vite
│   ├── routes.jsx            # Routing configuration
│   ├── assets/               # Static assets (images, icons, etc.)
│   └── components/           # Modular React components
└── ...
```

## Scripts

| Command            | Description                              |
|--------------------|------------------------------------------|
| `npm run dev`      | Start local dev server with Vite         |
| `npm run build`    | Production build with Vite               |
| `npm run preview`  | Preview production build                 |
| `npm run lint`     | Lint the codebase using ESLint           |

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/NandkishorJadoun/blog-client.git
   cd blog-client
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   Visit `http://localhost:5173` (or indicated port) in your browser.

## Configuration

- **Vite:** Configured with React plugin for fast reload and build optimizations. ([vite.config.js](vite.config.js))
- **Routing & Pages:** All page routes managed via `src/routes.jsx`.

---

> _Crafted with React, Vite, and love by [NandkishorJadoun](https://github.com/NandkishorJadoun)_