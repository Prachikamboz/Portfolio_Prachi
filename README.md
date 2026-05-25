# 🎨 My Portfolio — Next.js + Tailwind

> Migrated from **Vite + React** → **Next.js 14 App Router + Tailwind CSS v3**
> Includes full **Dark / Light mode toggle** with `localStorage` persistence.

---

## 🚀 Get Started

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## 📋 Design Audit (Original → Upgraded)

### 🔤 Fonts
| Role        | Font              | Where Used                            |
|-------------|-------------------|---------------------------------------|
| **Body**    | Inter             | Global (`body` in globals.css)        |
| **Display** | Playfair Display  | Italic taglines in `Section.jsx`      |

### 🎨 Color Palette

| Token         | Light Mode       | Dark Mode        | Tailwind Class            |
|---------------|------------------|------------------|---------------------------|
| Background    | `#ffffff`        | `#000000`        | `bg-white dark:bg-black`  |
| Surface       | `#f4f4f5`        | `#18181b`        | `bg-zinc-100 dark:bg-zinc-900` |
| Border        | `#e4e4e7`        | `#27272a`        | `border-zinc-200 dark:border-zinc-800` |
| Text Primary  | `#09090b`        | `#ffffff`        | `text-zinc-900 dark:text-white` |
| Text Muted    | `#71717a`        | `#71717a`        | `text-zinc-500`           |
| Accent        | `#ccff00` / lime-400 → emerald-500 | same | `from-lime-400 to-emerald-500` |

### 📐 Layout
- **Max width**: `max-w-7xl` (1280px) with `px-6` / `px-8` gutters
- **Hero section**: `min-h-[80vh]` full-bleed, centered text
- **Projects grid**: 12-col (`5 | 2 timeline | 5`), sticky left panel
- **Cards grid**: 3-col responsive (`1 → 3`)
- **Skills grid**: 2-col → 3-col responsive

---

## 🌙 Dark Mode Implementation

| File                            | Role                                                    |
|---------------------------------|---------------------------------------------------------|
| `tailwind.config.js`            | `darkMode: "class"` — Tailwind class-based dark mode   |
| `context/ThemeContext.jsx`      | React context, `localStorage`, system preference check  |
| `app/layout.jsx`                | Inline script to prevent FOUC (flash of wrong theme)   |
| `components/ThemeToggle.jsx`    | Sun/Moon animated toggle button                         |
| `components/Header.jsx`         | Toggle placed in desktop nav + mobile row               |

### Theme Token Usage
All components use the pattern:
```
bg-white dark:bg-black
text-zinc-900 dark:text-white
border-zinc-200 dark:border-zinc-800
```

---

## 🛠️ Key Migrations (Vite → Next.js)

| Before (Vite)           | After (Next.js)                        |
|-------------------------|----------------------------------------|
| `BrowserRouter`         | Next.js App Router (file-based)        |
| `NavLink`               | `Link` + `usePathname()` hook          |
| `useNavigate`           | `useRouter()` from `next/navigation`   |
| `useLocation`           | `usePathname()` from `next/navigation` |
| `src/pages/`            | `app/` directory (App Router)          |
| `vite.config.js`        | `next.config.js`                       |

---

## 🐛 Bugs Fixed
1. **Debug text removed** — `Details.jsx` had `Scroll Progress: X%` visible on page
2. **Hardcoded hex** — `#ccff00` kept intentional (not a Tailwind class), documented
3. **App.css boilerplate** — Vite logo/spin styles removed (were never used)
4. **Skillspage** — Was rendering `<Section />` with no props; now has meaningful content

---

## 📁 Structure

```
my-portfolio/
├── app/
│   ├── globals.css          ← fonts, CSS vars, base styles
│   ├── layout.jsx           ← root layout + ThemeProvider
│   ├── page.jsx             ← Home
│   ├── about/page.jsx
│   └── skillspage/page.jsx
├── components/
│   ├── Header.jsx           ← nav + ThemeToggle
│   ├── ThemeToggle.jsx      ← Sun/Moon button
│   ├── Section.jsx          ← hero typewriter
│   ├── HeroSection.jsx
│   ├── Cards.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Details.jsx
│   └── Explore.jsx
├── context/
│   └── ThemeContext.jsx     ← dark/light state + localStorage
├── public/                  ← copy your images here
├── tailwind.config.js
├── next.config.js
└── package.json
```
