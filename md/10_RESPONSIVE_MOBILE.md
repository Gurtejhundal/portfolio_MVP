# 10 — Responsive / Mobile Specification

## Core principle

Mobile is not secondary.

Most visitors will judge the portfolio from a phone first.

Do not build desktop first and squeeze it down.

## Breakpoints

Use:

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Mobile priorities

1. Hero image must remain powerful.
2. Face must not be hidden.
3. Name must be readable.
4. CTAs must be reachable.
5. Project cards must not require hover.
6. Animations must be lighter.
7. Contact must be instant.

## Mobile hero

Use:

- `100svh`
- stronger bottom overlay
- title at bottom
- copy below title
- two CTAs
- no tiny metadata over face

Mobile hero typography:

```css
font-size: clamp(3.4rem, 18vw, 6rem);
line-height: 0.86;
letter-spacing: -0.06em;
```

Hero copy:

```css
max-width: 92vw;
font-size: 0.95rem;
line-height: 1.5;
```

## Mobile image rules

Create mobile-specific crop if needed.

Do not rely only on desktop 16:9 crop.

Suggested mobile image:

- 9:16
- subject slightly above center
- text-safe dark bottom area

## Mobile navigation

Use:

- brand left
- menu/contact right
- dark blur after scroll
- no wide nav links

Menu:

- full-screen dark overlay or compact drawer
- large nav links
- contact visible

## Mobile manifesto

Use vertical reveal.

Do not pin too aggressively on mobile.

Each statement can occupy 70–90vh.

## Mobile work section

Do not use complex horizontal pinned scroll on mobile.

Use stacked project panels:

```text
[Project image]
01 / Luxury Commerce
SWS Luxury
Summary
[Live Experience]
```

Each project should feel full-width and cinematic.

## Mobile project cards

Requirements:

- CTA visible by default
- no hover-only details
- image aspect ratio 4:5 or 16:10 depending on screenshot
- strong title
- short copy

## Mobile process section

Use vertical numbered blocks.

Avoid dense grids.

Example:

```text
01 Position
02 System
03 Structure
04 Motion
05 Optimize
```

## Mobile visual experiments

Use horizontal scroll gallery or stacked images.

If horizontal scroll:

- add visible cue
- snap cards
- do not hide scrollbar completely unless cue exists

## Mobile about

Use:

- image first
- short paragraph
- facts list
- no long CV dump

## Mobile contact

Make email easy to tap.

Use:

```html
<a href="mailto:gurtejbjr.29107@gmail.com">
```

Phone optional:

```html
<a href="tel:+917626929107">
```

## Mobile animation reductions

Disable or simplify:

- custom cursor
- heavy parallax
- complex WebGL
- too many ScrollTriggers
- giant blur animations
- long pinned sections

Keep:

- image reveal
- text mask reveal
- simple section fade
- CTA hover/tap states

## Mobile performance rules

- serve WebP/AVIF
- load smaller hero image
- lazy-load below fold
- preload only hero image
- avoid huge video backgrounds
- compress project screenshots
- test on mid-range Android

## Touch target sizes

Minimum touch area:

- 44px height
- 44px width

Buttons should not be tiny luxury links on mobile.

## Mobile QA checklist

- no horizontal overflow
- face visible in hero
- title readable
- CTAs visible without confusion
- nav opens smoothly
- project links are tappable
- no scroll lock bugs
- no animation jitter
- email tap works
- page feels premium, not cramped
