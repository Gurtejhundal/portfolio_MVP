# Motion and Interaction Specification

## Character

- Quiet
- Controlled
- Spatial
- Editorial
- Fast enough to preserve usability
- Never ornamental for its own sake

## Easing

Primary:

```ts
[0.22, 1, 0.36, 1]
```

Secondary:

```ts
[0.16, 1, 0.3, 1]
```

## Durations

- Micro interaction: 160–260ms
- Link/button: 220–360ms
- Text reveal: 650–900ms
- Image reveal: 900–1250ms
- Panel: 600–900ms
- Optional page transition: 400–700ms

Do not stack long delays.

## Hero entrance

1. Header fades/slides slightly
2. Rear title reveals through mask
3. Portrait moves upward 30–50px while fading in
4. Foreground title reveals
5. Supporting copy appears
6. Scroll cue appears

Total perceived duration: about 1.2–1.6 seconds.

The page stays interactive during the entrance.

## Text reveal

Use line wrappers with overflow hidden.

Preferred granularity:

- Whole line
- Two or three line groups
- 60–120ms stagger

Do not animate every character.

## Project reveal

Media wrapper:

- `clip-path: inset(100% 0 0 0)` to `inset(0% 0 0 0)`
- Scale 1.06–1.09 to 1
- Animate once

Title:

- Opacity 0 to 1
- Y 32–48px to 0

Metadata:

- Opacity 0 to 1
- Y 12–20px to 0
- Delay 100–180ms

## Project hover

- Image scale maximum 1.03
- Arrow shift maximum 6–10px
- Optional image translation maximum 8px
- Avoid tilt unless almost imperceptible
- Never hide information without hover

## Custom project cursor

Only for accurate fine pointers.

Requirements:

- Visible only over project media
- `pointer-events: none`
- Smooth interpolation
- Small “View project” label
- Reliable contrast
- Hidden on touch
- Hidden for reduced motion
- Never replaces the global cursor

## Navigation/contact panel

- Use opacity and transform
- Focus moves into panel after opening
- Closing restores focus
- Escape closes
- No 3D page rotation

## Scroll

- Native scrolling
- No scroll hijacking
- No forced horizontal scroll
- Avoid long pinned sections
- Use scrub only when it clarifies a sequence

## Reduced motion

When `prefers-reduced-motion: reduce`:

- Disable parallax
- Disable pointer-follow cursor
- Remove scale settling
- Replace masked movement with immediate content or short opacity
- Remove transition delays
- Preserve all content and state changes
