# React + Vite + Tailwind CSS Project Scaffold

A modern, fast, and lightweight project scaffold configured with **React 19**, **Vite**, and **Tailwind CSS v4** according to official best practices.

Repository: [tlf-org/react-vite-project-scaffold](https://github.com/tlf-org/react-vite-project-scaffold)

---

## Tech Stack

- **[Vite](https://vite.dev/)** — Next generation frontend tooling & lightning-fast HMR.
- **[React 19](https://react.dev/)** — The library for web and native user interfaces.
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS framework configured via the official `@tailwindcss/vite` plugin.
- **[ESLint](https://eslint.org/)** — Flat config linting for React hooks and refresh conventions.

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

Start Vite dev server with hot module replacement:

```bash
npm run dev
```

### 3. Production Build

Build and bundle optimized static assets for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### 4. Code Quality & Linting

```bash
npm run lint
```

---

## Project Structure

```
├── public/                 # Static assets (favicons, icons)
├── src/
│   ├── assets/             # Images and SVG icons
│   ├── App.jsx             # Root component styled with Tailwind CSS
│   ├── index.css           # Global stylesheet with @import "tailwindcss";
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint flat configuration
├── index.html              # HTML template
├── package.json            # Project manifest & scripts
└── vite.config.js          # Vite config with React & Tailwind plugins
```

---

## Configuration Details

Tailwind CSS v4 uses first-class Vite integration without requiring legacy `tailwind.config.js` or `postcss.config.js` files:

- **`vite.config.js`**:
  ```javascript
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [react(), tailwindcss()],
  })
  ```
- **`src/index.css`**:
  ```css
  @import "tailwindcss";
  ```
