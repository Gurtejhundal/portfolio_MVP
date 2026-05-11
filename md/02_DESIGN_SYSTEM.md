# 02 — Design System

## Design direction

The website must feel like:

> cinematic editorial + luxury digital studio + personal developer identity

It must not feel like:

> college portfolio + random GSAP effects + template sections

## Visual keywords

- cinematic
- dark
- controlled
- premium
- editorial
- atmospheric
- sharp
- restrained
- tactile
- slow confidence

## Core palette

The palette should be extracted from the hero image.

### Base

| Token | Use | Hex |
|---|---|---|
| `--black-core` | page background | `#050505` |
| `--black-soft` | section background | `#0B0B0A` |
| `--graphite` | cards / muted panels | `#151513` |
| `--ivory` | primary text | `#F3EFE6` |
| `--muted-ivory` | secondary text | `#BEB5A7` |

### Accent

| Token | Use | Hex |
|---|---|---|
| `--turban-red` | identity accent | `#B5082A` |
| `--bench-orange` | secondary accent | `#D86E1F` |
| `--leaf-green` | deep environmental accent | `#263D18` |
| `--warm-gold` | subtle highlight | `#C79A55` |

## Color usage rules

Use black and ivory as the dominant system.

Use red sparingly.

Red is not a button color everywhere. It is an identity mark.

Orange should appear mostly through imagery and tiny UI details.

Green should stay dark and atmospheric.

## Typography

Avoid generic startup fonts.

### Recommended premium pairings

#### Pairing A — Best practical choice

- Display: `Neue Montreal`, `General Sans`, or `Clash Display`
- Body: `Satoshi`, `Inter`, or `Switzer`

#### Pairing B — Editorial/luxury

- Display: `Canela`, `Cormorant Garamond`, or `DM Serif Display`
- Body: `Satoshi` or `Inter`

#### Pairing C — Technical premium

- Display: `Neue Haas Grotesk`, `General Sans`
- Body: `IBM Plex Sans` or `Inter`

## Type scale

Desktop:

- Hero name: `clamp(5rem, 13vw, 14rem)`
- Section title: `clamp(3rem, 8vw, 9rem)`
- Project title: `clamp(2.8rem, 7vw, 8rem)`
- Body large: `1.25rem`
- Body normal: `1rem`
- Metadata: `0.75rem`

Mobile:

- Hero name: `clamp(3.4rem, 18vw, 6rem)`
- Section title: `clamp(2.5rem, 14vw, 5rem)`
- Body large: `1.05rem`
- Body normal: `0.95rem`

## Typography rules

- Use huge type with restraint.
- Prefer fewer words.
- Use tight leading on display type.
- Use generous letter spacing only for metadata.
- Do not use uppercase everywhere.
- Do not center every section.
- Never use paragraph text inside giant blocks.

## Layout grid

Desktop:

- 12-column grid
- max width: `1440px`
- side padding: `clamp(24px, 4vw, 72px)`
- section height: often `100vh` for cinematic panels
- vertical rhythm: large, sparse

Mobile:

- single-column grid
- padding: `20px`
- hero min-height: `100svh`
- avoid horizontal scroll
- no tiny text over image

## Spacing scale

Use a strict spacing scale:

- 4
- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 96
- 128
- 160

## Image treatment

All images should share:

- cinematic contrast
- slight grain
- controlled highlights
- deep shadows
- warm skin tone
- dark green/orange mood
- no over-saturation
- no plastic AI look

## Hero image treatment

Apply:

- dark overlay gradient from left/bottom
- subtle vignette
- grain texture
- slight sharpening
- background blur only if needed
- no face distortion
- no fake unrealistic bokeh if it breaks authenticity

## UI surface style

Cards should be minimal.

Avoid heavy borders and colorful boxes.

Use:

- thin 1px lines
- transparent black layers
- subtle blur
- large image panels
- metadata strips
- hover reveals

## Buttons

Buttons should feel premium.

Primary:

- dark or ivory outline
- uppercase small label
- subtle red/orange hover line
- no bright filled neon buttons

Secondary:

- text link with underline reveal
- arrow movement on hover

## Cursor interaction

Optional desktop-only custom cursor.

Rules:

- must be subtle
- no huge blob cursor
- no annoying lag
- use only on project cards or image zones
- disable on mobile

## Texture

Use film grain overlay.

Rules:

- opacity between 3–7%
- fixed overlay
- pointer-events none
- should not reduce readability

## Iconography

Use almost no icons.

Use text, arrows, index numbers, lines, and typographic markers.

## Visual motif

Use three recurring elements:

1. Thin editorial lines
2. Red identity accent
3. Slow image reveals

These create consistency across the site.
