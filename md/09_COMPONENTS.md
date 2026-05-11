# 09 — Components

## Component philosophy

Components should feel editorial and cinematic, not SaaS-template.

Use fewer, stronger components.

## Core components

### 1. `<SiteLoader />`

Purpose:

- first entry transition

Props:

- `onComplete`
- `duration`

Behavior:

- black background
- brand text
- line reveal
- fade out into hero

### 2. `<Navigation />`

Purpose:

- minimal site navigation

Elements:

- brand text
- nav links
- contact link/menu

States:

- transparent over hero
- blurred background after scroll
- mobile drawer

### 3. `<Hero />`

Purpose:

- main identity section

Elements:

- hero image
- title
- subtitle
- CTAs
- metadata
- scroll cue
- grain overlay

Props:

- `imageDesktop`
- `imageMobile`
- `headline`
- `subheadline`

### 4. `<GrainOverlay />`

Purpose:

- consistent cinematic texture

Rules:

- fixed
- pointer-events none
- low opacity
- used globally

### 5. `<SectionHeader />`

Purpose:

- reusable section title block

Elements:

- eyebrow
- large title
- optional description

Style:

- huge typography
- thin line
- index number

### 6. `<ManifestoSection />`

Purpose:

- principles section

Data:

```ts
[
  "Motion is not decoration.",
  "Luxury is restraint.",
  "Interfaces should communicate before users think.",
  "A website should not just load. It should arrive."
]
```

Behavior:

- reveal each statement on scroll
- optional sticky layout

### 7. `<ProjectShowcase />`

Purpose:

- selected work section

Props:

- `projects`

Behavior:

- project panels
- large preview
- metadata
- live link
- hover interactions
- optional pinned scroll

### 8. `<ProjectPanel />`

Fields:

- index
- title
- category
- summary
- description
- role
- liveUrl
- previewImage
- theme

Desktop:

- image and text overlap slightly
- large title
- hover label

Mobile:

- stacked image/text
- CTA always visible

### 9. `<ProcessSection />`

Purpose:

- demonstrate thinking

Items:

1. Position
2. System
3. Structure
4. Motion
5. Optimize

Style:

- grid
- thin lines
- numbered steps
- no generic icons

### 10. `<VisualExperiments />`

Purpose:

- creative gallery

Items:

- title
- category
- image/video
- description

Behavior:

- parallax gallery
- click to expand optional

### 11. `<AboutSection />`

Purpose:

- credible personal section

Elements:

- portrait/close-up image
- concise about copy
- facts list

Facts:

- B.Tech student
- Amritsar, Punjab
- Focused on premium web experiences
- Production projects live on Vercel

### 12. `<ContactSection />`

Purpose:

- final CTA

Elements:

- huge heading
- email
- location
- phone optional
- social links optional

Behavior:

- big text reveal
- email underline animation

### 13. `<MagneticButton />`

Purpose:

- premium CTAs

Behavior:

- subtle magnetic motion desktop only
- disabled on mobile
- arrow slide on hover

### 14. `<RevealText />`

Purpose:

- masked typography reveal

Props:

- `text`
- `delay`
- `stagger`
- `as`

Use for:

- hero title
- section titles
- manifesto lines

### 15. `<ImageReveal />`

Purpose:

- image reveal wrapper

Behavior:

- clip-path reveal
- scale down image during reveal
- lazy load support

## Data structure

Create `data/projects.ts`:

```ts
export const projects = [
  {
    slug: "sws-luxury",
    title: "SWS Luxury",
    category: "Luxury Commerce Experience",
    year: "2026",
    role: "Design direction, frontend build, responsive commerce flow",
    summary: "A premium commerce flagship for attars, perfumes, jewelry, and concierge gifting.",
    description: "Built around restraint, curated collections, WhatsApp ordering, and high-end product storytelling.",
    liveUrl: "https://luxury-taste.vercel.app/",
    featured: true
  }
]
```

Create `data/site.ts`:

```ts
export const site = {
  name: "Gurtej",
  email: "gurtejbjr.29107@gmail.com",
  phone: "7626929107",
  location: "Amritsar, Punjab",
  title: "Creative Developer",
  description: "Creative developer crafting premium digital experiences through motion, visual systems, and sharp execution."
}
```

## Styling conventions

Use:

- CSS variables for color tokens
- Tailwind utility classes for layout
- component-level animation hooks
- consistent spacing tokens

Avoid:

- random inline styles
- inconsistent margins
- nested magic numbers
- hardcoded repeated content

## State management

No heavy state management needed.

Use local state only for:

- menu open
- loader complete
- cursor state
- active project index
- reduced motion detection

## Error/empty states

If images are missing:

- use gradient dark placeholder
- show project title and category
- avoid broken image icon

If project link is unavailable:

- hide live CTA
- show “Case study coming soon”
