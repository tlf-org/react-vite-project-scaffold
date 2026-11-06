# React + Vite + Tailwind CSS + shadcn/ui Project Scaffold

A modern, fast, and production-ready project scaffold configured with **React 19**, **Vite**, **Tailwind CSS v4**, **shadcn/ui**, and **React Router**.

Repository: [tlf-org/react-vite-project-scaffold](https://github.com/tlf-org/react-vite-project-scaffold)

---

## Tech Stack

- **[React 19](https://react.dev/)** — The library for web and native user interfaces.
- **[Vite](https://vite.dev/)** — Next-generation frontend tooling with lightning-fast HMR.
- **[React Router DOM](https://reactrouter.com/)** — Declarative client-side routing and nested layouts.
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Modern utility-first CSS framework configured via `@tailwindcss/vite`.
- **[shadcn/ui](https://ui.shadcn.com/)** — Reusable, accessible UI components built on Radix UI and styled with Tailwind CSS.
- **[Lucide React](https://lucide.dev/)** — Beautiful, consistent icons.
- **[ESLint](https://eslint.org/)** — Flat config linting for React hooks and refresh conventions.

---

## Layouts & Application Architecture

The project is structured with two decoupled layouts mimicking real-world production web applications:

1. **Public Layout (`/`)** — `src/layouts/PublicLayout.jsx`:
   - Designed for marketing, landing pages, and showcases.
   - Includes a public header with an **"Open App"** action button in the top-right corner.
   - Hosts `src/pages/LandingPage.jsx` with the interactive "Hello World" card, name update form, and modal dialog.

2. **App Layout (`/app/*`)** — `src/layouts/AppLayout.jsx`:
   - Designed for internal workspace and dashboard views.
   - Top navigation bar featuring active links:
     - **Dashboard** (`/app/dashboard`) — `src/pages/DashboardPage.jsx`: overview with metrics and getting-started guidance.
     - **Components** (`/app/components`) — `src/pages/ComponentsPage.jsx`: educational 2-column component library showcasing buttons, badges, inputs, cards, and modal dialogs.
   - Top-right controls: quick link back to Home.

> **Tip for Students:** `src/pages/ComponentsPage.jsx` is an educational UI kit. Once students are comfortable with the components, they can safely delete this page and remove its route from `src/App.jsx` and `src/layouts/AppLayout.jsx`.

---

## Pre-installed UI Components

The scaffold includes the following components in `src/components/ui/`:

- **`Button`** — Flexible button with variants (`default`, `outline`, `secondary`, `ghost`, `destructive`, `link`).
- **`Badge`** — Visual status labels and tags with variants (`default`, `secondary`, `outline`, `destructive`, `ghost`).
- **`Input`** — Styled input field supporting standard HTML input attributes.
- **`Card`** — Versatile container with header, title, description, content, and footer.
- **`Dialog`** — Accessible modal dialog window with trigger, backdrop overlay, header, and footer.

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
│   │   └── ui/             # shadcn/ui components (Button, Badge, Input, Card, Dialog)
│   ├── layouts/
│   │   ├── PublicLayout.jsx# Landing page shell (Navbar with "Open App" button)
│   │   └── AppLayout.jsx   # Dashboard shell (Top navigation: Dashboard & Components)
│   ├── pages/
│   │   ├── LandingPage.jsx   # Public landing page with Hello World card
│   │   ├── DashboardPage.jsx # App overview with stats & getting-started guides
│   │   └── ComponentsPage.jsx# Interactive UI kit showcase (2-column grid)
│   ├── lib/
│   │   └── utils.js        # cn utility for className merging
│   ├── App.jsx             # Client router & layout routing
│   ├── index.css           # Tailwind v4 imports, theme variables & design tokens
│   └── main.jsx            # Application entry point
├── components.json         # shadcn configuration
├── eslint.config.js        # ESLint flat configuration
├── index.html              # HTML template
├── jsconfig.json           # Path alias (@/*) configuration for JS
├── package.json            # Project manifest & scripts
└── vite.config.js          # Vite config with React, Tailwind, and @ alias
```
