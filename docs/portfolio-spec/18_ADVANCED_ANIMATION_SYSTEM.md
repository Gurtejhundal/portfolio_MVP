# Advanced Animation System

## Purpose

The motion system should make the portfolio feel editorial and crafted without becoming a demo reel that users must fight through.

## Motion hierarchy

### Level 1 — Global continuity

- Page change
- Navigation state
- Overlay opening/closing
- Background/theme transition

### Level 2 — Section entrance

- Hero title
- Portrait
- Project image
- About statement
- Contact invitation

### Level 3 — Micro interaction

- Arrow movement
- Underline
- Button feedback
- Cursor label
- Image hover scale

Do not give all three levels equal visual intensity.

## Shared constants

```ts
export const easeEditorial = [0.22, 1, 0.36, 1] as const;
export const easePanel = [0.16, 1, 0.3, 1] as const;

export const duration = {
  micro: 0.22,
  control: 0.34,
  text: 0.78,
  media: 1.05,
  panel: 0.72,
  page: 0.55,
};
```

## Home hero storyboard

### Frame 0

- Canvas visible immediately
- No blank loader
- Navigation remains usable

### Frame 1 — 0 to 350ms

- Name/navigation fade from opacity 0
- Y movement no more than 10px

### Frame 2 — 100 to 900ms

- Rear hero title reveals line by line
- Use overflow mask
- No character animation

### Frame 3 — 250 to 1,150ms

- Portrait rises 36px
- Opacity 0 to 1
- Optional scale 1.015 to 1
- No blur-heavy entrance

### Frame 4 — 500 to 1,300ms

- Foreground title/detail appears
- Supporting copy follows

### Frame 5

- Scroll cue becomes visible
- No repeating bounce

## Section transitions

Positioning statement:

- Reveal when 25–35% enters viewport
- One line group at a time
- Once only

Selected work:

- Each project owns one reveal timeline
- Image first
- Title 80–140ms later
- Metadata 100–180ms later
- Do not trigger every time the user scrolls up and down

About teaser:

- Text and media enter independently
- Avoid mirrored left/right fly-ins

Contact statement:

- Strong but simple masked reveal
- Keep CTA interactive immediately

## Work archive

Use a quieter reveal than the homepage.

- Project image clip
- Title opacity/Y
- No full-page pinning
- No forced scroll speed

## Case-study motion

Use motion to explain content sequencing:

- Hero image settles
- Metadata appears
- Full-width media reveals
- Comparison images can use a drag control only when meaningful
- Mobile screen sequences may use a horizontal strip only inside the media block, not for page navigation

Avoid applying identical entrance animation to every case-study paragraph.

## About page motion

- Large title reveal
- Portrait/media crop reveal
- Capability rows appear with a restrained stagger
- Process steps reveal on entry
- Values remain mostly static

## Contact overlay

Opening:

1. Overlay background opacity
2. Panel transform
3. Heading
4. Contact actions

Closing:

- Reverse quickly
- Restore focus only after animation completes
- Reduced-motion users receive immediate state change

## Pointer effects

Allowed:

- Hero portrait drift: maximum 8px
- Project cursor follower
- Subtle project media movement

Not allowed:

- Magnetic effect on every link
- Whole-page cursor replacement
- Large 3D tilt
- Constant spring movement

## ScrollTrigger rules

Use GSAP ScrollTrigger only when Motion's viewport APIs are insufficient.

Good use:

- Complex image mask with a controlled scrub
- One short pinned visual explanation inside a case study
- Coordinated multi-layer hero movement

Bad use:

- Every paragraph
- Basic fade-in
- Navigation hover
- Mobile layouts
- Long pinned homepage sections

## Reduced motion

Build reduced motion before final polish, not afterward.

Reduced mode:

- No scrub
- No pointer parallax
- No follower cursor
- No scale animation
- Panel changes use short opacity or immediate state
- Text appears without clipping delay
