# Firdaus Zulkifli - Portfolio

Modern personal portfolio website for a full-stack engineer, built with a fast Vite + React stack and designed for clean presentation, smooth interactions, and easy content updates.

## Overview

This project showcases:

- Professional hero, about, skills, projects, experience, education, and contact sections
- Real project cards with live links and GitHub links
- Responsive navigation with desktop and mobile layouts
- Theme switching (dark/light) with persistence
- Framer Motion micro-interactions and section animations
- Contact options via email, GitHub, Discord, and Telegram

## Tech Stack

- Vite 6
- React 19 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons + custom Discord/Telegram glyphs
- React Router
- next-themes (theme persistence)
- ESLint

## Quick Start

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

The dev server runs with host enabled (`vite --host`) and is typically available at:

- `http://localhost:5173`

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

### 5) Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    contact/
    icons/
    layout/
    projects/
    sections/
    ui/
  data/
    portfolio.ts
  lib/
    clipboard.ts
    mailto.ts
    utils.ts
  pages/
    HomePage.tsx
    NotFoundPage.tsx
  seo/
    DocumentHead.tsx
  shell/
    RouteShell.tsx
  App.tsx
  main.tsx
  globals.css
public/
  webgl.png
  construction.png
  benurse.png
  knowledge-run.png
```

## Personalization Guide

All key portfolio content lives in:

- `src/data/portfolio.ts`

Update these exports:

- `siteConfig` - name, title, email, site URL
- `messagingContacts` - Discord username and Telegram username/link
- `socialLinks` - currently GitHub only
- `about`, `skills`, `projects`, `experience`, `education`

### Environment Variable

Set your canonical site URL:

```bash
VITE_SITE_URL=https://your-domain.com
```

Use `.env.local` for local development.

## Contact Behavior

- The contact form opens the default mail client using a `mailto:` link.
- The email card in the contact section also uses `mailto:`.
- Discord button opens `discord.com/app` and copies your username to clipboard for quick DM search.
- Telegram button opens your direct Telegram profile URL.

## Deployment (Vercel)

This project is configured for static deployment:

- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrite to `index.html` in `vercel.json`

Deploy using Vercel dashboard or CLI.

## Accessibility & UX Notes

- Skip-to-content link included
- Keyboard-focus styles in global CSS
- Reduced-motion support respected in animations
- Strong visual hierarchy with responsive typography

## Scripts

- `npm run dev` - start development server
- `npm run build` - type-check + production build
- `npm run preview` - preview built app
- `npm run lint` - run ESLint

## License

Personal portfolio project. Reuse structure with attribution appreciated.

