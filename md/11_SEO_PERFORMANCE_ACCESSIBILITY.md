# 11 — SEO, Performance, Accessibility

## SEO goal

The website should be findable, shareable, and clear.

It does not need blog-level SEO initially, but it must have proper metadata.

## Recommended title

```text
Gurtej — Creative Developer & Digital Experience Builder
```

## Meta description

```text
Portfolio of Gurtej, a creative developer building premium digital experiences, cinematic landing pages, and motion-led interfaces for brands and products.
```

## Open Graph

Use hero image or a custom 1200x630 preview.

Required:

- title
- description
- image
- site name
- type: website

## Structured content

Use semantic HTML:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

Each project should be an `article`.

## Image optimization

Use:

- WebP/AVIF
- responsive sizes
- lazy loading below fold
- priority loading for hero only
- explicit width/height
- alt text

Hero alt text:

```text
Portrait of Gurtej seated on an orange bench at night in a cinematic park setting.
```

Project screenshot alt examples:

```text
SWS Luxury homepage showing premium fragrance and jewelry commerce layout.
Ghost Engineer homepage showing open-source impact blueprint interface.
Obsidian Finish Studio website showing premium car detailing service layout.
Iron Forge Athletics homepage showing premium gym membership and coaching layout.
```

## Performance targets

Aim for:

- Lighthouse Performance: 85+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
- CLS: below 0.1
- LCP: below 2.5s after optimization

## Animation performance

Rules:

- animate `transform` and `opacity`
- avoid animating layout properties repeatedly
- avoid heavy blur on large layers
- use `will-change` carefully
- kill scroll triggers on unmount
- reduce animation on mobile
- respect reduced motion

## JavaScript budget

Avoid unnecessary packages.

Use only what the experience needs.

Recommended packages:

- GSAP
- Lenis
- Framer Motion only if needed
- lucide-react only if icons are required

Avoid:

- massive 3D libraries unless actually used
- multiple animation libraries doing same job
- large UI kit if custom design is simple

## Accessibility requirements

### Keyboard

- nav links accessible
- menu accessible
- CTAs focusable
- focus states visible

### Contrast

Text must remain readable over hero image.

Use overlays.

### Reduced motion

Use:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto;
  }
}
```

Also handle in JS.

### Screen reader

Do not make all text decorative.

Real content must be text, not image.

### Alt text

Alt text should describe useful image content, not keyword-stuff.

## Contact accessibility

Email must use `mailto:`.

Phone must use `tel:` if displayed.

## SEO content balance

Do not hide all text behind animation.

Search engines and screen readers need accessible content.

## Deployment checklist

Before deploy:

- all links tested
- no console errors
- no broken images
- favicon added
- Open Graph image added
- metadata added
- mobile viewport tested
- reduced motion tested
- Lighthouse checked
- project links open correctly
- contact email works
