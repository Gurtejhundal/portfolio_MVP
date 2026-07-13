# Final Full-Website Build Prompt V2

Use this prompt after placing the entire specification folder inside the repository.

---

You are implementing a complete production portfolio for **Gurtejbir Singh**.

This is not a homepage-only task. Build and verify the full site:

- Home
- Work archive
- Reusable project case studies
- About
- Contact
- Quick-info/contact overlays
- Custom 404
- SEO and social metadata
- Accessibility
- Performance
- Responsive behaviour
- Error/loading states
- Production deployment readiness

Read every Markdown file in this specification directory before coding. Treat them as one system. When two files overlap, use the more specific requirement.

## Visual direction

Use a minimalist editorial design language informed by:

- Oversized typography
- Black-and-white portrait layering
- Image-led project presentation
- Controlled asymmetry
- Large negative space
- Restrained motion
- Compact navigation

Do not clone another portfolio. Do not scrape production Framer code or reuse proprietary images, copy, fonts, layout dimensions or exact animation choreography.

## Identity

Name:

```text
Gurtejbir Singh
```

Positioning:

```text
Designer & Developer
```

Core statement:

```text
I design and develop distinctive digital products and web experiences.
```

Hero portrait:

```text
/public/images/gurtejbir-hero.png
```

The portrait is a standalone transparent PNG. Layer it with real HTML text. Never bake website text or UI into the portrait image.

## Required implementation

### Global

- Responsive header
- Desktop navigation
- Mobile menu
- Quick-info panel
- Contact panel
- Footer
- Route transitions
- Reduced-motion support
- Keyboard and screen-reader accessibility

### Home

- Full editorial hero
- Positioning statement
- Visual fragments/showreel fallback
- Selected work
- About teaser
- Contact invitation
- Footer

### Work

- Dynamic published count
- Editorial project stream
- Explicit layout variants
- No generic card grid
- Draft exclusion

### Case studies

Implement dynamic project routes and populate four truthful case studies:

- House of Details
- Sadda Punjab
- RenOS
- Bibi Kaulan Ji Hospital

Each requires:

- Hero
- Metadata
- Context/problem
- Strategy
- Visual system
- Key experience
- Development
- Outcome/status
- Reflection
- Credits
- Next project

Never fabricate outcomes.

### About

- Hero statement
- Biography
- Capabilities
- Process
- Values
- Tools
- Resume link when current
- Contact invitation

### Contact

- Direct email
- Copy-email action
- Social links
- Optional secure form
- Validation and submission states
- Privacy note
- Route remains usable without overlay

### Production essentials

- Metadata
- Sitemap
- Robots
- Structured data
- Social images
- 404
- Loading/failure states
- Performance budgets
- Responsive image handling
- Analytics only when justified
- Privacy/legal content when required

## Animation

Follow:

- `18_ADVANCED_ANIMATION_SYSTEM.md`
- `19_PAGE_TRANSITIONS_AND_LOADING.md`
- `32_FULL_SITE_ANIMATION_STORYBOARD.md`

Do not animate before static layout is correct.

Motion must:

- Preserve speed
- Respect reduced motion
- Avoid scroll hijacking
- Avoid global cursor replacement
- Avoid endless floating
- Avoid identical animations on every element

## Build process

1. Audit existing repository.
2. Report architecture and risks.
3. Establish tokens and typed content.
4. Build static layouts.
5. Verify responsive composition.
6. Add accessible navigation and overlays.
7. Add animation.
8. Populate truthful content.
9. Optimize media.
10. Add SEO/error/loading states.
11. Test user journeys.
12. Run type check, lint and production build.
13. Capture required visual states.
14. Fix failures.
15. Return a complete handoff using `16_AGENT_HANDOFF_TEMPLATE.md`.

Do not claim completion from code inspection alone. Render and verify the site.
