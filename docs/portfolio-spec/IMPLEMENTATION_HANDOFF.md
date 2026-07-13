# Implementation Handoff

## Summary

The previous portfolio presentation was removed and replaced with the complete V2 editorial system. The new site uses the supplied transparent black-and-white portrait, Instrument Serif and Geist, a warm off-white/black/burgundy palette, and a typed project model that feeds the homepage, work archive and reusable case-study routes. Four published case studies use truthful status language and avoid fabricated metrics; three draft records remain excluded from public output. Project covers were not included in the upload, so the current build uses original code-native typographic artwork instead of broken images or invented screenshots. Navigation panels are keyboard-accessible, focus-trapped, Escape-dismissible and reduced-motion safe. SEO metadata, structured data, sitemap, robots and a custom 404 are included.

## Files created

- `app/work/page.tsx`
- `app/work/[slug]/page.tsx`
- `app/work/[slug]/loading.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/not-found.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `components/editorial/SiteHeader.tsx`
- `components/editorial/SiteFooter.tsx`
- `components/editorial/HeroSection.tsx`
- `components/editorial/SelectedWorkSection.tsx`
- `components/editorial/ProjectShowcase.tsx`
- `components/editorial/ProjectArtwork.tsx`
- `components/editorial/ContactCta.tsx`
- `components/editorial/CopyEmailButton.tsx`
- `data/site.ts`
- `public/images/gurtejbir-hero.png`
- `.env.example`

## Files modified

- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `data/projects.ts`
- `design.md`

Legacy homepage components and the superseded `md/` specification folder were removed. The full V2 pack now lives under `docs/portfolio-spec/`.

## Routes completed

- [x] Home
- [x] Work
- [x] House of Details
- [x] Sadda Punjab
- [x] RenOS
- [x] Bibi Kaulan Ji Hospital
- [x] About
- [x] Contact
- [x] Not found

## Component architecture

- Global shell: `SiteHeader` owns route state, mobile navigation, quick information, focus trapping and scroll lock. `SiteFooter` remains a server component.
- Hero layers: `HeroSection` separates rear title, portrait, foreground title and supporting copy. Motion is isolated to this client boundary and respects user motion preferences.
- Project data: `data/projects.ts` is the only source for project title, status, order, layout, case-study content and theme.
- Work layouts: `ProjectShowcase` maps finite layout variants and uses `ProjectArtwork` as the current cover fallback.
- Case studies: The dynamic route resolves only published slugs, renders honest structured sections and derives next-project navigation.
- Motion boundaries: Motion for React is used for the hero entrance; CSS handles hover micro-interactions. No GSAP, scroll hijacking or global custom cursor is used.

## Assets still required

Replace the current code-native fallback artwork when approved project covers are available:

```text
/public/images/projects/house-of-details/cover.webp
/public/images/projects/sadda-punjab/cover.webp
/public/images/projects/renos/cover.webp
/public/images/projects/bibi-kaulan-ji-hospital/cover.webp
```

Optional secondary About imagery:

```text
/public/images/about/gurtejbir-about.webp
/public/images/about/process-detail-01.webp
```

## Verification

```text
Type check: PASS — npx tsc --noEmit
Lint: PASS — npm run lint
Production build: PASS — npm run build
Production console: PASS — zero app errors or warnings in normal and reduced-motion modes
```

The native Windows SWC binary reports `not a valid Win32 application`; Next.js falls back to WASM and completes the production build successfully.

## Responsive checks

- 1440×900: complete homepage and route sweep
- 1280×800: homepage overflow and portrait verification
- 1024×768: homepage overflow and portrait verification
- 768×1024: tablet hero visually reviewed; supporting copy received an opaque canvas layer to prevent portrait overlap
- 430×932: homepage overflow and portrait verification
- 390×844: homepage, mobile menu and all main route types verified
- 360×800: complete homepage visual review and overflow verification

No checked viewport produced horizontal overflow.

## Accessibility checks

- One logical `h1` per route
- Semantic landmarks and sequential heading hierarchy
- Visible focus treatment
- Mobile menu and quick-info dialog focus trap
- Escape close and trigger focus restoration
- Body scroll lock released on close
- Minimum 44px interactive targets
- Reduced-motion mode keeps all content visible, removes cursor follower and portrait transform, and produces no hydration error
- No critical hover-only content

## Known limitations

- The four project cover images were not supplied. Original typographic cover treatments are used until real art-directed project media is available.
- Case-study outcomes are intentionally labeled as in development or prototype because no verified metrics or production evidence were provided.
- LinkedIn and a current resume were not added because no confirmed URLs/files were supplied.
- `NEXT_PUBLIC_SITE_URL` must be set to the final production domain before deployment so canonical URLs and the sitemap are correct.

## Originality check

The build uses Gurtejbir's Sikh portrait, burgundy accent, custom project artwork, design/development positioning, a different header geometry, different project layout sequence, original case-study copy and original motion timings. No reference photography, Framer markup, proprietary assets, lime accent or copied written content is used.
