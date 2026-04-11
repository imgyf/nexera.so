# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** nexera.so
**Generated:** 2026-04-11
**Category:** AI-Powered SaaS / Innovation Platform
**Style:** Dark Mode Premium — clean, minimal, high-contrast dark aesthetic with subtle glass effects

---

## Visual Identity

### Style Direction

**Dark Mode OLED** meets **Swiss Modernism 2.0** — a dark-first, content-driven design with generous whitespace, strict typographic hierarchy, and subtle glassmorphism accents. The design conveys innovation and premium quality without the visual noise of neon/cyberpunk aesthetics.

**Keywords:** Dark mode, premium, minimal, clean, innovation, AI, glass blur, high contrast, content-first, modern tech

**Best For:** SaaS landing pages, AI/tech platforms, innovation-focused products, Web3 interfaces

**Key Effects:**
- Backdrop blur (`backdrop-blur-md`) on badges, nav, and overlays for glass-morphism
- Desaturated video backgrounds with `mix-blend-mode: multiply` overlay
- Subtle `whileInView` reveal animations (motion/react) with directional entrance
- Staggered child animations at 0.1s intervals

**Avoid:**
- Neon glow / text-shadow effects
- Glitch animations or scanlines
- Overly saturated accent colors
- Light mode default (site is dark-first)

---

## Color Palette

All colors use HSL format via CSS variables in `src/index.css`.

### Core Tokens (`:root`)

| Role | HSL Value | Hex Equivalent | CSS Variable |
|------|-----------|----------------|--------------|
| Background | `0 0% 2.4%` | `#060606` | `--background` |
| Foreground | `222.2 84% 4.9%` | `#020817` | `--foreground` |
| Primary | `0 0% 100%` | `#FFFFFF` | `--primary` |
| Primary Foreground | `0 0% 4%` | `#0A0A0A` | `--primary-foreground` |
| Secondary | `210 40% 96.1%` | `#F1F5F9` | `--secondary` |
| Muted Foreground | `215.4 16.3% 46.9%` | `#64748B` | `--muted-foreground` |
| Destructive | `0 84.2% 60.2%` | `#EF4444` | `--destructive` |
| Border | `214.3 31.8% 91.4%` | `#E2E8F0` | `--border` |
| Radius | — | `0.5rem` | `--radius` |

### Hero Section Tokens

The hero and dark sections use a dedicated token namespace:

| Role | HSL Value | Usage |
|------|-----------|-------|
| `--hero-background` | `0 0% 4%` | Section backgrounds (`#050505`) |
| `--hero-foreground` | `0 0% 100%` | Headings, primary text (white) |
| `--hero-muted` | `0 0% 67%` | Body text, secondary content |
| `--hero-badge-bg` | `0 0% 0% / 0.1` | Badge backgrounds (translucent black) |
| `--hero-badge-border` | `0 0% 100% / 0.1` | Badge borders (translucent white) |
| `--hero-badge-text` | `0 0% 67%` | Badge label text |
| `--hero-secondary-bg` | `0 0% 100% / 0.1` | Secondary button/overlay backgrounds |
| `--hero-secondary-border` | `0 0% 100% / 0.2` | Secondary borders, card overlays |

### Dark Mode (`.dark` class)

Full dark mode tokens are defined for shadcn/ui components. Uses class-based toggling via `next-themes`.

### Color Principles

1. **Monochromatic dark palette** — grayscale base with no saturated primary color
2. **White as primary** — CTAs and key actions use white on dark, not a brand color
3. **Translucent layers** — badges, overlays, and nav use `rgba` with blur for depth
4. **67% gray for body text** — muted content at `hsl(0 0% 67%)` for comfortable reading on dark backgrounds

---

## Typography

### Font System

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Headings | System sans-serif (default) | 400 (normal) | Hero titles, section headings |
| Body | System sans-serif (default) | 400 (normal) | Descriptions, paragraphs |
| Labels | System sans-serif (default) | 400 (normal) | Badges, nav items, buttons |

**Recommended upgrade:** Consider **Inter** (already in search results as ideal match) or **Outfit** (geometric, modern) for branded typography. Both are Google Fonts with variable weight support.

### Type Scale

| Level | Mobile | Desktop | Tailwind Classes |
|-------|--------|---------|------------------|
| Hero H1 | `text-4xl` (36px) | `text-7xl` → `text-[92px]` | `text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[92px]` |
| Section H2 | `text-4xl` (36px) | `text-5xl` → `text-6xl` | `text-4xl lg:text-5xl xl:text-6xl` |
| Body Large | `text-base` (16px) | `text-lg` → `text-xl` | `text-lg md:text-xl` |
| Body | `text-base` (16px) | `text-base` → `text-lg` | `text-base lg:text-lg` |
| Label/Badge | `text-sm` (14px) | `text-sm` (14px) | `text-sm` |

### Type Styling

- **Headings:** `font-normal` weight (400) — the site uses size and contrast for hierarchy, not boldness
- **Line height:** `leading-tight` for headings, `leading-relaxed` for body
- **Tracking:** `tracking-tight` on hero headlines for visual density
- **Max width:** `max-w-3xl` on hero text blocks, `max-w-md` on feature descriptions, `max-w-lg` on CTA descriptions

---

## Spacing System

Based on Tailwind defaults with 8px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `gap-3` | 12px | Badge group gaps, small element spacing |
| `gap-4` | 16px | Button groups, inline items |
| `gap-6` | 24px | Content blocks within sections |
| `gap-8` | 32px | Major content groups |
| `gap-12` | 48px | CTA internal spacing |
| `gap-20` | 80px | Section-level vertical rhythm |
| `px-4` | 16px | Mobile horizontal padding |
| `px-8` | 32px | Default horizontal padding |
| `px-16` | 64px | Desktop horizontal padding (`md:px-16`) |
| `py-12` / `py-16` | 48-64px | Section vertical padding |

### Container

- Max width: `max-w-7xl` (1280px) with `mx-auto`
- Hero content: `max-w-[1280px]`

---

## Component Patterns

### Badges (Feature Pills)

```
Structure: Icon (24px) + Label text
Styling: bg-hero-badge-bg border border-hero-badge-border rounded-2xl backdrop-blur-md
Padding: px-4 py-4
Text: text-hero-badge-text text-sm font-normal leading-relaxed
Icon: text-hero-foreground (white)
```

### Buttons

| Variant | Background | Text | Border | Radius |
|---------|-----------|------|--------|--------|
| `hero` (primary CTA) | White | Dark | None | Default |
| `hero-secondary` | Translucent | Muted | `--hero-secondary-border` | Default |
| `ghost` | Transparent | `hero-muted` | None | Default |
| `default` | Primary | Primary foreground | None | Default |

### Navigation

- Fixed position with `backdrop-blur-md` and `rgba(6, 6, 6, 0.8)` background
- `z-50` stacking
- Desktop: horizontal links + CTA buttons
- Mobile: hamburger toggle with animated dropdown
- Links use `text-hero-muted hover:text-hero-foreground` transitions

### Cards / Overlays

- `rounded-[30px]` for large image containers
- `rounded-[21px]` for overlay cards within containers
- Glass effect: `backdrop-blur-sm` + translucent background (`rgba(11, 11, 12, 0.77)`)
- Border: `border-hero-secondary-border`

### Sections

- Dark background sections: `bg-[#050505]`
- Content width: `max-w-7xl mx-auto`
- Layout: `flex flex-col lg:flex-row` with `gap-20`
- Responsive images: mobile shows above content, desktop shows beside content

---

## Animation System

Uses `motion/react` (Framer Motion v12) with accessibility-first approach.

### AnimatedContainer

| Property | Value |
|----------|-------|
| Duration | 0.6s |
| Easing | `[0.25, 0.46, 0.45, 0.94]` (custom ease-out) |
| Trigger | `whileInView` with `once: true` |
| Viewport margin | `-100px` (triggers before element is fully in view) |
| Stagger | 0.1s between children |
| Reduced motion | Falls back to plain `<div>` (no animation) |

### Direction Variants

| Variant | Initial Transform |
|---------|------------------|
| `up` | `y: 30` → `y: 0` |
| `down` | `y: -30` → `y: 0` |
| `left` | `x: 30` → `x: 0` |
| `right` | `x: -30` → `x: 0` |

### Animation Rules

1. **Always respect `prefers-reduced-motion`** — render static content when motion is disabled
2. **Use `transform` and `opacity` only** — never animate layout properties (width, height, top, left)
3. **One-shot animations** — `once: true` on scroll-triggered animations
4. **Subtle distances** — 30px max translation for entrance animations
5. **No decorative infinite animations** — only the LogoMarquee uses continuous animation

---

## Layout Patterns

### Landing Page Section Order

1. **Navbar** — fixed, blurred glass
2. **HeroSection** — full-screen with video background, badges, headline, CTA
3. **LogoMarquee** — continuous scrolling social proof
4. **FeatureSection** (x3) — alternating text/image layouts with badges
5. **JourneySection** — process/journey visualization
6. **CaseStudiesSection** — proof of results
7. **TestimonialSection** — customer quotes
8. **CTASection** — final conversion with background image
9. **Footer** — links and legal

### Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 768px | Single column, stacked content, hamburger nav |
| Tablet | `md` (768px) | Two-column hero text, desktop nav appears |
| Desktop | `lg` (1024px) | Side-by-side feature layouts |
| Wide | `xl` (1280px) | Larger type scale, max-w-7xl container |
| Ultra-wide | `2xl` (1536px) | Hero text scales to 92px |

---

## Icon System

- **Library:** Lucide React (`lucide-react`)
- **Size:** `w-6 h-6` (24px) standard
- **Color:** Inherits from parent text color
- **Usage:** Feature indicators, navigation, UI controls
- **No emojis** — always use SVG icons

---

## Video / Media

- **HLS streaming** via `hls.js` for cross-browser video
- **Hero video:** desaturated (`filter: saturate(0)`), auto-playing, muted, looping
- **Color overlay:** `#D9D9D9` at `mix-blend-mode: multiply`, `opacity: 0.7`
- **Images:** served from `/lovable-uploads/` directory (Lovable platform CDN)
- **Image containers:** `object-cover` for fills, `object-contain` for overlays

---

## Accessibility Checklist

- [ ] Text contrast >=4.5:1 on all dark backgrounds
- [ ] `prefers-reduced-motion` disables all motion animations
- [ ] Focus states visible on all interactive elements
- [ ] Mobile nav has `aria-label="Toggle mobile menu"`
- [ ] All images have descriptive `alt` text
- [ ] Touch targets minimum 44x44px
- [ ] No horizontal scroll on any viewport width
- [ ] `scroll-behavior: smooth` for anchor navigation

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] Uses HSL CSS variables from `index.css`, not hardcoded hex
- [ ] Dark background sections use `--hero-*` token namespace
- [ ] Badges follow glass blur pattern (`backdrop-blur-md` + translucent bg)
- [ ] New routes added above the `*` catch-all in `App.tsx`
- [ ] Icons from Lucide React, no emojis
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover transitions 150-300ms
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbar (top padding accounted for)
- [ ] Animations use `motion/react` with `prefers-reduced-motion` fallback
