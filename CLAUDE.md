# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

nexera.so is a marketing website built as a client-side SPA (not Next.js). It was scaffolded via [Lovable](https://lovable.dev/projects/07a7f516-6c6d-4194-9a62-99315e7dc547) — changes made in Lovable auto-commit to this repo and vice versa.

## Commands

```bash
npm run dev        # Start dev server (port 8080)
npm run build      # Production build
npm run build:dev  # Development-mode build
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Tech Stack

- **Build:** Vite 5.4 with SWC (React plugin)
- **Framework:** React 18 + TypeScript 5.5
- **Routing:** React Router v6 (client-side SPA, not SSR)
- **UI:** shadcn/ui (Radix primitives) with Tailwind CSS v3.4
- **Data:** TanStack Query v5, React Hook Form v7, Zod v3
- **Animations:** motion v12 (respects `prefers-reduced-motion`)
- **Video:** HLS.js for streaming

## Architecture

**Routing** is defined in `src/App.tsx`. Add new routes above the `*` catch-all. The app is wrapped in QueryClientProvider, TooltipProvider, and BrowserRouter.

**Path alias:** `@` maps to `./src` (configured in both `vite.config.ts` and `tsconfig.json`).

**Pages** live in `src/pages/`. The landing page (`Index.tsx`) composes section components: HeroSection, LogoMarquee, FeatureSection (3 variants), JourneySection, CaseStudiesSection, TestimonialSection, CTASection, Footer.

**Components:**
- `src/components/ui/` — shadcn/ui primitives (53 components). Add new ones via `npx shadcn-ui@latest add <component>`. Config in `components.json` (RSC disabled, CSS variables enabled).
- `src/components/animations/` — AnimatedContainer, AnimatedItem, StaggeredList wrapping motion/react with accessibility fallbacks.
- `src/components/` — Page-level section components (Navbar, HeroSection, etc.)

**Design tokens** are HSL-based CSS variables in `src/index.css`, with light/dark mode support via the `class` strategy. Hero section has its own token namespace (`--hero-*`). Sidebar has dedicated tokens as well.

**Hooks** in `src/hooks/`: `use-mobile` (responsive breakpoint), `use-toast` (notification state).

**Utilities** in `src/lib/utils.ts`: `cn()` for Tailwind class merging (clsx + tailwind-merge).

## Lovable Integration

`lovable-tagger` runs as a Vite plugin in dev mode only (`componentTagger()` in `vite.config.ts`). This enables design sync between the Lovable editor and this codebase.
