# Imagine AI — UI

> **Imagine** is a marketing and landing UI for the most complete AI builder ever made. Turn your ideas into functional products by chatting with Imagine—no setup, no ceiling.

---

## Description

**Imagine AI UI** is the public-facing website for [Imagine](https://imagine-ai.omsharma.xyz/)—an AI-powered builder that turns ideas into real, functional products through natural conversation. This project provides a modern, responsive landing experience that showcases Imagine's capabilities, template gallery, cloud features (Auth, Databases, Storage, Messaging, Hosting), security guarantees, pricing, and more.

The UI connects users to the Imagine console (`imagine-ai.omsharma.xyz`), where they can build dashboards, tools, games, and landing pages with integrated Appwrite cloud services. **Build something real**—whether it's a portfolio, a startup MVP, or an internal tool—if you can imagine it, you can build it.

---

## Features

- **Landing page** — Hero section with animated input, suggestion chips, and cloud feature links  
- **Template gallery** — Filterable templates (Dashboards, Tools, Games, Landing Pages) linking to the Imagine console  
- **Features overview** — Auth, Databases, Storage, Notifications, Realtime, Hosting (Appwrite-oriented)  
- **Security section** — DDoS protection, encryption, abuse protection, GDPR, SOC-2, HIPAA  
- **Pricing** — Free, Pro ($25/mo), Enterprise tiers  
- **FAQ** — Frequently asked questions  
- **Product Hunt banner** — Launch announcement support  
- **Authentication flows** — Sign in, sign up, forgot password, reset password (stub implementation)  
- **Protected & public routes** — Route groups for authenticated and public pages  
- **Dark theme** — Default dark mode with system preference support  
- **Responsive design** — Mobile-friendly header and layout  

---

## Tech Stack

| Category      | Technology                          |
|---------------|-------------------------------------|
| Framework     | React 19, TanStack Start (SSR)      |
| Routing       | TanStack Router                     |
| Data fetching | TanStack Query                      |
| Build tool    | Vite (rolldown-vite)                |
| Styling       | Tailwind CSS 4                      |
| UI components | Radix UI, shadcn/ui-style components|
| Animation     | Motion                              |
| Icons         | Lucide React                        |
| Forms         | react-hook-form, zod, @hookform/resolvers |
| Charts        | Recharts                            |
| Other         | cmdk, vaul, sonner, date-fns, react-day-picker |

---

## Project Structure

```
Imagine-AI-UI/
├── public/
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── routes/           # TanStack Router
│   │   ├── __root.tsx    # Root layout, theme, auth loader
│   │   ├── _auth.tsx     # Auth layout (sign-in, sign-up, etc.)
│   │   ├── _protected.tsx
│   │   ├── _public.tsx
│   │   └── ...
│   ├── components/
│   │   ├── ui/           # Radix/shadcn components
│   │   ├── landing/      # Hero, Features, TemplateGallery, Pricing, FAQ
│   │   └── auth/         # Auth forms and cards
│   ├── lib/              # auth, utils, seo, react-query
│   ├── hooks/
│   ├── integrations/
│   └── styles.css
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the dev server. Open [http://localhost:3000](http://localhost:3000) (or the displayed URL).

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
# or
npm start
```

---

## Environment

- `VITE_INSTRUMENTATION_SCRIPT_SRC` — Optional instrumentation script URL  
- `FOR_SITES=true` — Enable Nitro deployment for static hosting  

---

## Links

- [Imagine Console](https://imagine-ai.omsharma.xyz/)
- [Appwrite Cloud](https://appwrite.io/) — Auth, Databases, Storage, Messaging, Hosting

---

## License

Private project.
