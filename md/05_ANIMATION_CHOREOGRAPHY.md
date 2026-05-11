# 05 — Animation Choreography

## Core rule

Award-winning animation is not “everything moves.”

Award-winning animation is controlled timing, hierarchy, and rhythm.

Each section gets one animation idea. No more.

## Motion personality

The motion should feel:

- slow
- cinematic
- confident
- precise
- physical
- premium

It should not feel:

- bouncy
- childish
- random
- overactive
- template-like

## Animation stack

Recommended:

- GSAP for scroll choreography
- ScrollTrigger for pinned sections
- Lenis for smooth scrolling
- Framer Motion for small state transitions
- CSS transitions for simple hovers
- React Three Fiber only if a specific 3D moment is needed

Do not use heavy WebGL just to look advanced.

## Global motion settings

Use consistent easing:

```js
ease: "power3.out"
easeInOut: "power4.inOut"
```

Suggested durations:

- small UI hover: `0.25s`
- text reveal: `0.7s`
- section transition: `1.0s`
- hero entrance: `1.8s`
- pinned scroll timeline: controlled by scroll

## Reduced motion

Respect `prefers-reduced-motion`.

If reduced motion is enabled:

- remove parallax
- remove pinned scrub sequences
- keep simple fades
- disable cursor effects
- disable large scale animations

## Loader animation

Sequence:

1. black screen
2. small typography appears
3. line draws horizontally
4. text fades out
5. hero image appears

Copy:

```text
GURTEJ
DIGITAL EXPERIENCES
```

Do not make loader too long.

## Hero timeline

### On load

- image opacity 0 → 1
- image scale 1.08 → 1.00
- name clip reveal y: 100% → 0
- copy opacity 0 → 1, y 20 → 0
- CTA line width 0 → 100%
- nav opacity 0 → 1

### On scroll

- hero image scale 1.00 → 1.12
- hero text y 0 → -80
- overlay opacity increases
- scroll cue opacity 1 → 0
- next section title rises from bottom

## Section 1: Manifesto

Motion idea:

> statements reveal one by one like editorial cuts.

Behavior:

- each statement pins briefly
- text reveals using mask
- red accent line moves vertically
- background remains dark
- image fragments may appear subtly

Avoid:

- bouncing text
- emojis
- colorful cards

## Section 2: Selected Work

Motion idea:

> project panels feel like cinematic chapters.

Behavior:

- each project is near fullscreen
- project title enters large
- preview image reveals with clip-path
- metadata slides slightly
- cursor hover shows “View”
- background color/image shifts per project

Preferred layout:

- pinned horizontal or vertical scroll
- one project per viewport
- project count indicator: `01 / 04`

## Section 3: Project hover

Desktop hover:

- image scale 1 → 1.05
- title letter spacing slightly tightens
- CTA arrow moves 8px
- background line expands
- cursor label appears

Mobile:

- no hover dependency
- project card must show CTA by default

## Section 4: Process / Principles

Motion idea:

> structured thinking appears as a system.

Behavior:

- grid lines draw in
- cards fade/slide subtly
- numbers count/reveal
- section title remains sticky

## Section 5: Visual Experiments

Motion idea:

> controlled gallery.

Behavior:

- image grid moves at different speeds
- no chaotic masonry
- hover shows title/category
- click can open large preview

## Section 6: Contact

Motion idea:

> final statement arrives with scale and silence.

Behavior:

- huge line `LET'S BUILD WITH PRESENCE`
- text reveal on scroll
- email underline draw
- background returns to near-black
- minimal footer fade

## Signature interactions

Use only 2–3 signature interactions:

### 1. Hero depth

Subtle parallax on image and typography.

### 2. Project chapter transition

Pinned project panels with strong title/image reveal.

### 3. Contact final reveal

Large typography and clean CTA.

Do not add more unless execution is excellent.

## Animation budget

| Section | Animation intensity |
|---|---|
| Loader | Medium |
| Hero | High |
| Manifesto | Medium |
| Work | High |
| About | Low |
| Visual Experiments | Medium |
| Contact | Medium |

## What not to animate

- long body paragraphs
- every individual icon
- all nav items on every scroll
- every card with different effects
- footer links aggressively

## Performance rules

- animate transform and opacity
- avoid animating width/height/layout where possible
- avoid excessive blur filters
- avoid multiple fixed giant layers on mobile
- use `will-change` carefully
- destroy ScrollTriggers on route cleanup
- lazy-load lower images

## Testing checklist

- no scroll jank on mid-range phone
- no layout shifts after image load
- no text unreadable during animations
- no face covered by animated typography
- reduced motion mode works
- mobile animations are simpler
- first screen loads fast
