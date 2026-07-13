# Performance Budgets

## Objective

The site should feel premium because it responds quickly, not because it hides slow loading behind animation.

## Initial budgets

These are targets, not excuses to stop measuring.

### Home

- Initial JavaScript: keep as low as practical; target under 180KB compressed for route-specific client code
- Hero portrait: preferably under 350KB optimized, depending on dimensions and transparency
- Largest project cover loaded below fold
- No autoplay hero video

### Listing pages

- Do not preload every project cover
- Use responsive image sizes
- Load only published records

### Case studies

- Lazy-load deep gallery media
- Video only on interaction or near viewport
- Avoid loading desktop and mobile versions simultaneously when art direction can choose one

## Core Web Vitals

Prioritize:

- LCP
- CLS
- INP

## LCP strategy

- Server-render hero copy
- Prioritize portrait only when it is the LCP candidate
- Use explicit image dimensions
- Keep font loading controlled
- Avoid long entrance opacity that delays visual completion

## CLS strategy

- Fixed media aspect ratios
- Stable header height
- No client-only title replacement
- No late font-driven layout jumps
- Reserve video dimensions

## INP strategy

- Keep pointer tracking lightweight
- Use transforms and opacity
- Avoid scroll handlers doing layout reads on every frame
- Pause offscreen loops
- Do not animate large filter/blur values continuously

## Animation performance

- Prefer `transform` and `opacity`
- Use `will-change` temporarily, not globally
- Remove observers/listeners on unmount
- Avoid animating box-shadow over large surfaces
- Avoid full-screen backdrop blur on low-power mobile devices

## Testing

Run production builds, not only dev mode.

Measure:

- Desktop
- Mid-range mobile emulation
- Real mobile when possible
- Slow network
- Reduced-motion mode
