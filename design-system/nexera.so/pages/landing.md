# Landing Page (Index) — Design Overrides

> Overrides `MASTER.md` for the main landing page at `/` (`src/pages/Index.tsx`).

---

## Page Pattern: Feature-Rich Showcase + Social Proof

**Conversion Strategy:** Multi-section storytelling flow — hero captures attention, logos build trust, features demonstrate value, case studies prove results, testimonials validate, CTA converts.

**CTA Placement:**
1. Hero section (primary + secondary CTA)
2. Bottom CTA section (final conversion with background image)

---

## Section-Specific Rules

### Hero Section

- Full viewport height (`min-h-screen`)
- Background: HLS video (desaturated) + color overlay (#D9D9D9, multiply blend, 0.7 opacity)
- Content layered at `z-[3]` above video (`z-[1]`) and overlay (`z-[2]`)
- Top padding: `pt-[120px]` to clear fixed navbar
- Feature badges in a flex-wrap row above the headline
- Headline: largest type scale (`text-4xl` → `text-[92px]`)
- Description: `opacity-70` for softer reading on dark backgrounds
- Two CTAs: primary (solid) + secondary (translucent)

### Logo Marquee

- Continuous scrolling animation (exception to "no infinite animation" rule)
- Acts as social proof separator between hero and features

### Feature Sections (x3)

- Alternating layouts: text-left/image-right on desktop
- Mobile: image between header and feature list (reordered via `order-*`)
- Each section has its own badge, heading, description, and feature bullets
- Image containers: `rounded-[30px]` with glass overlay cards

### Journey Section

- Process/step visualization
- Sequential flow for user understanding

### Case Studies Section

- Proof of results with real examples
- Builds credibility before final conversion

### Testimonial Section

- Customer quotes for social validation
- Positioned just before CTA for maximum trust impact

### CTA Section

- Background image container (`rounded-3xl`, `min-h-[500px]`)
- Centered text + single CTA button
- `mt-20 mb-20` for generous breathing room
- Max width `max-w-2xl` for readable line length

### Footer

- Uses shadcn footer-section component
- Standard links and legal information
