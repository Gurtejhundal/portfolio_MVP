# 04 — Hero Section

## Objective

The hero section must create immediate identity and visual impact.

This is the most important part of the site.

If the hero fails, the site will feel ordinary no matter how good the later sections are.

## Hero asset

Use the 16:9 cinematic image of Gurtej sitting on the orange bench at night.

Visual characteristics:

- red turban as focal identity color
- orange bench as secondary accent
- dark green plants as environment
- night lighting as cinematic mood
- negative space available for typography
- full-body seated composition

## Layout concept

The hero should be fullscreen.

The image should occupy the full viewport as the background or as a dominant absolute layer.

Typography should be integrated into the image, not placed in a normal card.

## Desktop composition

Recommended layout:

- Full image covers viewport.
- Add dark overlay from left and bottom.
- Name appears large on the left/bottom-left.
- Small copy sits near the name.
- CTAs sit beneath copy.
- Tiny metadata appears top-left or bottom-right.
- Navigation floats at top.

Suggested composition:

```text
[nav]

                                image subject slightly right/center

GURTEJ
Creative developer crafting premium digital
experiences through motion, visual systems,
and sharp execution.

[Selected Work] [Contact]

[scroll indicator]
```

## Typography placement

Do not cover the face.

Do not place text randomly in the center.

Use negative space.

The name can overlap background foliage/empty wall, but not the face.

## Hero copy

Primary:

```text
GURTEJ

Creative developer crafting premium digital experiences through motion, visual systems, and sharp execution.
```

Alternate:

```text
GURTEJ

I build digital experiences that carry presence — cinematic, responsive, and commercially clear.
```

## Metadata elements

Optional tiny details:

```text
AMRITSAR, PUNJAB
AVAILABLE FOR SELECTED BUILDS
2026 PORTFOLIO
```

Do not overdo fake luxury labels.

## Hero animation

### Initial load sequence

1. Black screen.
2. Tiny text appears: `GURTEJ / DIGITAL EXPERIENCES`.
3. Hero image fades in from black.
4. Image subtly scales from 1.06 to 1.00.
5. Name reveals using vertical clip mask.
6. Body copy fades up.
7. CTAs draw their borders/lines.
8. Film grain becomes visible.

Target duration:

- 1.8s to 2.8s total
- no long blocking loader

### Scroll sequence

On first scroll:

- hero image slowly scales up to 1.12
- name moves slightly upward or splits into layers
- overlay deepens
- next section title emerges
- scroll cue fades out

Do not rotate the image.
Do not make text fly randomly.
Do not add heavy particles.

## Mobile hero

Mobile must be designed independently.

Problems to solve:

- original image is 16:9 but phone is vertical
- face must remain visible
- text must not cover important subject area
- CTAs must be accessible

Mobile layout:

- use image as background with object-position center/right
- add stronger bottom overlay
- name near bottom
- copy under name
- CTAs stacked or inline
- nav minimal

Suggested mobile structure:

```text
[small nav]





GURTEJ
Creative developer crafting premium digital experiences.

[Work] [Contact]
```

## Hero image CSS behavior

Desktop:

```css
object-fit: cover;
object-position: center center;
```

Mobile:

```css
object-fit: cover;
object-position: center center;
```

If subject gets cropped badly, create mobile-specific cropped asset.

## Visual overlays

Use:

- `linear-gradient(to right, rgba(0,0,0,.78), rgba(0,0,0,.25), rgba(0,0,0,.1))`
- `linear-gradient(to top, rgba(0,0,0,.86), rgba(0,0,0,0))`
- radial vignette around edges
- fixed noise texture

## Interaction details

Desktop:

- cursor movement can create subtle parallax on image
- typography moves 2–8px only
- bench/orange accent can influence hover color

Mobile:

- no cursor effects
- simpler reveal
- reduced parallax

## Do not do

- Do not put the image inside a rounded card.
- Do not use a normal hero split layout.
- Do not write “Hi, I’m Gurtej.”
- Do not add social icons over the face.
- Do not add too many buttons.
- Do not use bright gradients.
- Do not animate every word separately unless polished.

## Hero success checklist

- Does it look premium in the first screenshot?
- Is the face clear?
- Is the name memorable?
- Is the copy short?
- Is the image cinematic?
- Is the mobile version strong?
- Does it avoid template energy?
