# Responsive, Accessibility and Performance Requirements

## Responsive philosophy

Mobile is a recomposition, not a scaled desktop.

## Required viewport checks

- 1440 × 900
- 1280 × 800
- 1024 × 768
- 768 × 1024
- 430 × 932
- 390 × 844
- 360 × 800

## Hero checks

- Entire turban visible
- Face not covered
- No title through eyes or mouth
- Portrait does not create overflow
- Headline remains legible
- Navigation stays reachable
- Supporting copy is not pushed below an accidental empty viewport

## Project checks

- Project identity visible
- Crops intentional
- Metadata remains attached to correct media
- Links obvious
- No hover dependency
- No horizontal carousel
- Deliberate spacing

## Accessibility

### Semantics

Use:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- One logical `h1` per route
- Sequential heading hierarchy

### Keyboard

- All links and controls reachable
- Visible focus
- Overlay focus trap
- Escape closes
- Trigger focus restored
- No keyboard traps
- Custom cursor irrelevant to keyboard users

### Images

- Portrait alt is concise
- Project alt describes meaningful content
- Decorative fragments use empty alt
- Avoid repeating nearby headings word-for-word in every alt

### Colour

- Body contrast passes
- Muted text remains readable
- Accent is not the only state indicator

### Motion

- Honour reduced motion
- Avoid flashing
- Avoid excessive pointer-linked movement
- No autoplay video with sound

### Touch

- Minimum 44 × 44px target
- Adequate spacing
- No tiny edge controls

## Performance

### Images

- AVIF/WebP where appropriate
- Responsive `sizes`
- No desktop-resolution media forced onto mobile
- Preload only critical above-fold media
- Lazy-load lower media
- Preserve aspect ratios
- Prevent CLS

### Fonts

- Use `next/font`
- Limit weights
- Avoid unused italics
- Use proper fallbacks

### JavaScript

- Server Components by default
- Keep animation client boundaries small
- Dynamically import heavy optional experiences
- Do not initialize complex ScrollTrigger logic for static mobile layouts
- One library owns each animated property

### Video

- Poster image
- Lazy source
- Mobile fallback
- Controls
- No forced autoplay

## Technical checks

- TypeScript passes
- ESLint passes
- Production build passes
- No hydration warnings
- No console errors
- No broken links
- No missing alt text
- No horizontal overflow
