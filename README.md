# React + Vite + Tailwind CSS + shadcn/ui Project Scaffold

A modern, fast, and lightweight project scaffold configured with **React 19**, **Vite**, **Tailwind CSS v4**, and **shadcn/ui** components.

Repository: [tlf-org/react-vite-project-scaffold](https://github.com/tlf-org/react-vite-project-scaffold)

---

## Tech Stack

- **[React 19](https://react.dev/)** — The library for web and native user interfaces.
- **[Vite](https://vite.dev/)** — Next-generation frontend tooling with lightning-fast HMR.
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Modern utility-first CSS framework configured via `@tailwindcss/vite`.
- **[shadcn/ui](https://ui.shadcn.com/)** — Reusable, accessible UI components built on Radix UI and styled with Tailwind CSS.
- **[Lucide React](https://lucide.dev/)** — Beautiful, consistent icons.
- **[ESLint](https://eslint.org/)** — Flat config linting for React hooks and refresh conventions.

---

## Pre-installed UI Components

The scaffold includes the following components in `src/components/ui/`:

- **`Button`** — Flexible button with variants (`default`, `outline`, `secondary`, `ghost`, `destructive`, `link`).
- **`Input`** — Styled input field supporting all standard HTML input types.
- **`Panel`** — Container panel with header, title, description, content, and footer.
- **`Dialog`** — Accessible modal dialog window with trigger, backdrop overlay, header, and footer.
- **`Card`** — Versatile card layout component.

---

## Adding More shadcn Components

To add additional shadcn/ui components:

```bash
npx shadcn add <component-name>
```

Examples:
```bash
npx shadcn add dropdown-menu
npx shadcn add tabs
npx shadcn add sheet
npx shadcn add avatar
```

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

Start the local Vite development server with hot module replacement:

```bash
npm run dev
```

### 3. Production Build

Build optimized static assets for production:

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
│   ├── assets/             # SVG icons & imagery
│   ├── components/
│   │   └── ui/             # shadcn/ui components (Button, Input, Panel, Dialog, Card)
│   ├── lib/
│   │   └── utils.js        # cn utility for className merging
│   ├── App.jsx             # Main demo application
│   ├── index.css           # Tailwind v4 imports, theme variables & design tokens
│   └── main.jsx            # Application entry point
├── components.json         # shadcn configuration
├── eslint.config.js        # ESLint flat configuration
├── index.html              # HTML template
├── jsconfig.json           # Path alias (@/*) configuration for JS
├── package.json            # Project manifest & scripts
└── vite.config.js          # Vite config with React, Tailwind, and @ alias
```
