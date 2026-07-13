# Master Build Prompt — Gurtejbir Singh Editorial Portfolio

You are working inside my existing portfolio repository.

Inspect the repository first. Do not rebuild blindly, delete useful code, or replace existing conventions without justification.

Read these specification files before writing code:

- `02_REFERENCE_AUDIT.md`
- `03_INFORMATION_ARCHITECTURE.md`
- `04_DESIGN_SYSTEM.md`
- `05_GLOBAL_SHELL_NAV_CONTACT.md`
- `06_HOME_PAGE_SPEC.md`
- `07_WORKS_INDEX_SPEC.md`
- `08_CASE_STUDY_TEMPLATE.md`
- `09_ABOUT_PAGE_SPEC.md`
- `10_MOTION_INTERACTION_SPEC.md`
- `11_RESPONSIVE_ACCESSIBILITY_PERFORMANCE.md`
- `12_CONTENT_ASSETS_DATA_SCHEMA.md`
- `13_QA_ACCEPTANCE_CHECKLIST.md`
- `14_IMPLEMENTATION_SEQUENCE.md`
- `15_ORIGINALITY_GUARDRAILS.md`
- `16_AGENT_HANDOFF_TEMPLATE.md`

## Objective

Create a production-ready minimalist editorial portfolio for **Gurtejbir Singh** using these qualities:

- Oversized typography used as spatial architecture
- A black-and-white transparent portrait integrated into the hero
- Restrained navigation
- Image-led project presentation
- Large negative space
- Controlled asymmetry
- Minimal metadata
- Smooth masked reveals
- Strong pairing of an editorial serif with a neutral sans-serif

Do not produce a pixel-for-pixel clone. Do not copy source code, written copy, images, project data, colour accent, exact navigation placement, exact spacing, or exact motion choreography from any reference.

## Positioning

Primary statement:

> I design and develop distinctive digital products and web experiences.

Supporting idea:

> From strategy and interface design to development and deployment.

Do not position Gurtejbir as a no-code-only designer.

## Required routes

- `/` — Home
- `/work` — Work archive
- `/work/[slug]` — Reusable case study
- `/about` — About, capabilities, process and values
- `/contact` — Accessible contact destination
- Custom not-found page

## Featured project records

### House of Details

- Slug: `house-of-details`
- Category: Automotive Experience
- Year: 2026
- Services: Creative Direction, Web Design, Development
- Summary: A premium digital experience for an automotive detailing studio.
- Cover: `/images/projects/house-of-details/cover.webp`
- Theme: Dark, metallic, cinematic

### Sadda Punjab

- Slug: `sadda-punjab`
- Category: Interactive Storytelling
- Year: 2026
- Services: Creative Direction, Experience Design, Development
- Summary: A cinematic digital story exploring the memory, spirit and identity of Punjab.
- Cover: `/images/projects/sadda-punjab/cover.webp`
- Theme: Warm ivory, wine, earth, documentary

### RenOS

- Slug: `renos`
- Category: Rental Management Product
- Year: 2026
- Services: Product Strategy, UI/UX, Full-Stack Development
- Summary: A unified rental operating system for property owners and tenants.
- Cover: `/images/projects/renos/cover.webp`
- Theme: Restrained, systematic product interface

### Bibi Kaulan Ji Hospital

- Slug: `bibi-kaulan-ji-hospital`
- Category: Healthcare Platform
- Year: 2026
- Services: UX Design, Development, Administration System
- Summary: A healthcare platform for appointments, doctors, departments and OPD information.
- Cover: `/images/projects/bibi-kaulan-ji-hospital/cover.webp`
- Theme: Calm, practical and trustworthy

Add three draft records that do not render publicly.

## Preferred stack

Use the repository’s existing stack when sound. When starting from scratch:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Motion for React
- GSAP ScrollTrigger only for advanced masks or scrubbed transitions
- `next/font`
- `next/image`
- Server Components by default
- Client Components only where interaction requires them

Avoid unnecessary dependencies.

## Required component architecture

Create clear equivalents of:

- `SiteHeader`
- `DesktopNavigation`
- `MobileNavigation`
- `QuickInfoPanel`
- `ContactPanel`
- `HeroSection`
- `SplitHeroTitle`
- `PortraitLayer`
- `PositioningStatement`
- `ShowreelSection` or visual-interlude fallback
- `SelectedWorkSection`
- `ProjectShowcase`
- `ProjectCursor`
- `WorkArchive`
- `CaseStudyHero`
- `CaseStudyMedia`
- `CaseStudyCredits`
- `AboutHero`
- `ServiceList`
- `ValuesList`
- `SiteFooter`
- Reduced-motion utility/provider

Do not fragment trivial markup into dozens of components. Componentize repeated patterns and interaction boundaries.

## Global direction

### Palette

- Background: `#F1EFE9`
- Foreground: `#171714`
- Muted foreground: `#706E68`
- Hairline: `rgba(23,23,20,.16)`
- Accent: `#6F1D2B`

Do not use neon green, glassmorphism, decorative blobs, glowing gradients, fake 3D, or generic rounded-card systems.

### Typography

Use one display serif and one neutral sans-serif.

Recommended:

- Display: Instrument Serif or Cormorant Garamond
- Sans: Geist or Manrope

Use fluid type with `clamp()`, tight display line-height, negative tracking, and controlled manual line breaks.

### Layout

- Maximum content width near 1600px
- Fluid side padding
- 12-column desktop grid
- 8-column tablet grid
- 4-column mobile grid
- Negative space is structural, not leftover space
- Asymmetry must be deliberate and repeatable

## Home page

Build:

1. Full-height editorial hero
2. Positioning/manifesto section
3. Showreel or truthful visual-interlude fallback
4. Selected work stream
5. About teaser
6. Contact invitation
7. Minimal footer

Use `/public/images/gurtejbir-hero.png` as a standalone transparent image layered with live HTML text. Never bake the website interface into the portrait image.

## Hero requirements

- Minimum height: `100svh`
- Full turban visible
- Face unobstructed
- Portrait bottom-anchored
- Rear headline layer behind portrait
- Controlled foreground text layer
- Supporting copy in negative space
- Mobile is recomposed, not merely scaled
- Portrait movement limited to 6–10px on fine-pointer desktop only
- Reduced-motion users get a static or short-opacity version

Recommended title:

```text
Creative Web
Designer & Developer
```

Supporting copy:

```text
I design and develop distinctive digital products and web experiences.
```

## Work presentation

Do not use a normal three-column portfolio grid.

Use a vertical editorial stream with finite layout variants:

- `wide-left`
- `portrait-right`
- `full`
- `split-left`
- `medium-right`

Every project must show title, category and year without hover.

Desktop hover may use:

- Image scale to 1.02–1.03
- Small arrow translation
- Optional image-only circular “View project” follower

Touch and reduced-motion modes must not depend on hover or pointer-follow effects.

## Case studies

Every project case study must contain:

1. Project hero
2. One-sentence outcome
3. Role, services, year and status
4. Context/problem
5. Strategy
6. Design system or creative direction
7. Key interface or experience sequences
8. Development and technical implementation
9. Outcome or honest current status
10. Credits
11. Next-project navigation

Never fabricate metrics, clients, testimonials, user counts or commercial outcomes.

## About page

Communicate:

- Design/development hybrid
- Visual judgement plus implementation discipline
- Capabilities
- Process
- Values
- Selected tools without logo-cloud clutter
- Clear contact path

## Global navigation and contact

Desktop navigation must be compact and visually subordinate. It must differ from the reference’s exact geometry.

Include:

- Home
- Work
- About
- Contact
- Current route indication
- Keyboard focus
- Accessible mobile menu
- Escape-to-close
- Focus trapping in overlays
- Focus restoration
- Route-backed `/contact` content even when an overlay exists

## Motion

Use motion to clarify hierarchy and spatial continuity.

Allowed:

- Masked line reveals
- Controlled image clipping
- Small image scale settling
- Subtle stagger between title and metadata
- Smooth panel transitions
- Minor desktop pointer response

Avoid:

- Scroll hijacking
- Long intro loaders
- Elastic bounce
- Continuous floating
- Excessive parallax
- Global cursor replacement
- Animating every word or character
- Huge rotations

## Accessibility

Required:

- Semantic landmarks
- One logical `h1` per route
- Correct heading hierarchy
- Keyboard-operable controls
- Visible focus states
- No critical hover-only content
- Meaningful alt text
- Decorative images marked appropriately
- Reduced-motion support
- Overlay focus trap and escape handling
- Minimum 44px touch targets
- No horizontal overflow at 360px

## Performance

Required:

- Responsive image `sizes`
- AVIF/WebP where appropriate
- Prioritize only the hero image and true above-fold assets
- Lazy-load below-fold media
- Avoid rendering all case-study media on listing pages
- Avoid excessive Client Components
- Avoid two animation libraries controlling one property
- Explicit portrait dimensions
- Local/optimized fonts
- No heavy autoplay video on mobile

## SEO

Implement:

- Route-specific titles and descriptions
- Open Graph metadata
- Project-specific social metadata when assets exist
- Canonical URLs
- Sitemap
- Robots configuration
- Person structured data when accurate
- CreativeWork/Project structured data where appropriate

## Required viewport verification

- 1440 × 900
- 1280 × 800
- 1024 × 768
- 768 × 1024
- 430 × 932
- 390 × 844
- 360 × 800

## Implementation order

1. Audit existing repository
2. Report current architecture
3. Create typed project data
4. Establish tokens and fonts
5. Build global shell
6. Build and verify hero
7. Build selected work
8. Build work archive
9. Build case-study route
10. Build about
11. Build contact
12. Add motion after static layout works
13. Add responsive behaviour
14. Add accessibility
15. Optimize assets and metadata
16. Run type check, lint and production build
17. Visually inspect required widths
18. Fix issues before claiming completion

## Completion conditions

Do not claim completion unless:

- Every required route renders
- All four projects work
- Draft records stay hidden
- Navigation works with mouse, keyboard and touch
- Mobile has no horizontal overflow
- Reduced-motion mode is verified
- Type check passes
- Lint passes
- Production build passes
- The QA checklist is completed

Use `16_AGENT_HANDOFF_TEMPLATE.md` for the final report.
