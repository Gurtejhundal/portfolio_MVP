# Component Architecture and Code Organization

## Goal

Keep the site maintainable after the initial visual build. The portfolio should not become one 2,000-line homepage component or a collection of animation code copied into every route.

## Recommended source structure

```text
src/
  app/
    layout.tsx
    page.tsx
    work/
      page.tsx
      [slug]/
        page.tsx
    about/
      page.tsx
    contact/
      page.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
  components/
    global/
      site-header.tsx
      desktop-navigation.tsx
      mobile-navigation.tsx
      quick-info-panel.tsx
      contact-panel.tsx
      site-footer.tsx
      route-announcer.tsx
    hero/
      hero-section.tsx
      hero-title.tsx
      portrait-layer.tsx
      availability-label.tsx
    work/
      selected-work-section.tsx
      project-showcase.tsx
      project-media.tsx
      project-meta.tsx
      project-cursor.tsx
      work-archive.tsx
      next-project.tsx
    case-study/
      case-study-hero.tsx
      case-study-intro.tsx
      case-study-section.tsx
      case-study-media.tsx
      project-credits.tsx
    about/
      about-hero.tsx
      capabilities.tsx
      process-list.tsx
      values-list.tsx
    motion/
      reveal.tsx
      masked-text.tsx
      image-reveal.tsx
      page-transition.tsx
      reduced-motion.tsx
  content/
    projects.ts
    site.ts
    navigation.ts
  lib/
    cn.ts
    metadata.ts
    motion.ts
    project-navigation.ts
  styles/
    globals.css
```

Adapt this to the existing repository rather than moving files without reason.

## Server/client boundaries

Use Server Components by default for:

- Page structure
- Project data
- Static copy
- Metadata
- Case-study content
- Footer

Use Client Components only for:

- Mobile menu
- Contact/quick-info overlays
- Motion components
- Custom project cursor
- Pointer movement
- ScrollTrigger sequences

Do not mark entire pages as `"use client"` merely because one child animates.

## Data ownership

Project content must come from one typed source.

Never duplicate project titles, years, cover paths and slugs across homepage, archive and case-study files.

## Component rules

A component should exist when it:

- Repeats
- Owns interaction state
- Owns an accessibility boundary
- Owns a distinct layout pattern
- Has a clear API

Do not componentize every wrapper div.

## Styling rules

- Use design tokens.
- Use variant maps for explicit project layouts.
- Avoid huge conditional class strings inside JSX.
- Do not create runtime-random layouts.
- Keep project-specific colours in data/theme objects.
- Keep motion constants in one module.

## Error boundaries

Add route-level error handling where data or media loading can fail.

The portfolio should degrade gracefully if:

- A project image is missing
- A video fails
- A live link is unavailable
- A project is still draft
