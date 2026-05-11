# 12 — Codex Build Prompt

Paste this into Codex when ready to build.

---

You are building an award-level personal portfolio website for Gurtej.

This is not a normal developer portfolio. It must feel like a cinematic personal brand website for a creative developer who builds premium digital experiences, motion-led interfaces, and commercial landing pages.

## Core identity

Name: Gurtej  
Location: Amritsar, Punjab  
Email: gurtejbjr.29107@gmail.com  
Phone: 7626929107  

Positioning:

Creative Developer crafting premium digital experiences through motion, visual systems, and sharp execution.

Do not present him as a generic B.Tech student in the hero. Mention B.Tech only in the About section.

## Site mood

Build the website as:

- dark
- cinematic
- editorial
- premium
- motion-led
- restrained
- visually sharp

Avoid:

- generic template portfolio
- skill bars
- bright gradients
- random 3D
- excessive icons
- childish animations
- “Hi, I’m…” copy
- long resume-style text

## Required stack

Use a modern React/Next.js stack.

Recommended:

- Next.js App Router
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger for major scroll animation
- Lenis for smooth scroll
- Framer Motion only for small entrance/state transitions if needed

Do not over-engineer.

## Required sections

Build these sections in order:

1. Loader
2. Hero
3. Identity Strip
4. Manifesto / Principles
5. Selected Work
6. Process
7. Visual Experiments
8. About
9. Contact
10. Footer

## Hero

Use the provided 16:9 cinematic portrait as fullscreen background/dominant hero image.

Hero copy:

```text
GURTEJ

Creative developer crafting premium digital experiences through motion, visual systems, and sharp execution.
```

CTAs:

- Selected Work
- Contact

Hero behavior:

- black loader first
- image fades in
- name reveals with masked vertical reveal
- subtle image scale from 1.08 to 1.00
- body copy fades upward
- CTAs reveal with line draw
- film grain overlay visible
- on scroll image slowly scales and text shifts upward

Do not cover the face with text.

## Design system

Use these color tokens:

```css
--black-core: #050505;
--black-soft: #0B0B0A;
--graphite: #151513;
--ivory: #F3EFE6;
--muted-ivory: #BEB5A7;
--turban-red: #B5082A;
--bench-orange: #D86E1F;
--leaf-green: #263D18;
--warm-gold: #C79A55;
```

Typography:

Use a premium sans/display combination. Prefer General Sans / Satoshi / Inter / Clash Display depending on availability.

Hero title should be huge:

```css
font-size: clamp(5rem, 13vw, 14rem);
line-height: 0.82;
letter-spacing: -0.07em;
```

Mobile hero title:

```css
font-size: clamp(3.4rem, 18vw, 6rem);
```

## Manifesto content

```text
Motion is not decoration.
It is hierarchy in time.

Luxury is not more.
It is fewer things executed better.

Interfaces should communicate
before users start thinking.

A website should not just load.
It should arrive.
```

Animate these as masked text reveals on scroll.

## Selected projects

Create a data file for these projects.

### Project 01

Title: SWS Luxury  
Category: Luxury Commerce Experience  
Live URL: https://luxury-taste.vercel.app/  
Summary: A premium commerce flagship for attars, perfumes, jewelry, and concierge gifting.  
Description: Built around restraint, curated collections, WhatsApp ordering, and high-end product storytelling.  
Role: Design direction, frontend build, responsive commerce flow

### Project 02

Title: Ghost Engineer  
Category: AI Product / Open-Source System  
Live URL: https://ghost-engineer-psi.vercel.app/  
Summary: An open-source impact lab that turns real-world problems into buildable public-good blueprints.  
Description: Structured around problem-first workflows, agent review, contributor tasks, GitHub-ready files, and pilot planning.  
Role: Product structure, interface design, frontend build, AI workflow presentation

### Project 03

Title: Obsidian Finish Studio  
Category: Premium Service Website  
Live URL: https://car-detailing-studio-seven.vercel.app/  
Summary: A conversion-focused website for a premium car detailing and protection studio.  
Description: Designed around trust, finish quality, service clarity, booking intent, and premium automotive presentation.  
Role: Brand positioning, landing architecture, frontend build, service conversion flow

### Project 04

Title: Iron Forge Athletics  
Category: Fitness / Commercial Website  
Live URL: https://gym-two-sigma.vercel.app/  
Summary: A premium gym website built around coaching credibility, clear membership paths, and conversion.  
Description: Structured for serious beginners, professionals, and athletes who need visible progress and clear next steps.  
Role: Landing strategy, responsive build, service explanation, CTA structure

Work section behavior:

- fullscreen or near-fullscreen project panels
- large typography
- project index numbers: 01 / 04 etc.
- image preview with reveal mask
- live link CTA
- mobile stacked layout
- hover only enhances; content must be visible without hover

## Process section

Use this copy:

```text
Process

I do not start with decoration. I start with positioning, structure, and the first impression the product needs to create.
```

Steps:

1. Position the brand
2. Build the visual system
3. Structure the conversion path
4. Add motion with purpose
5. Optimize for mobile

## About section

Copy:

```text
I’m Gurtej, a B.Tech student focused on web development, software engineering, and premium digital interfaces.

My work sits between design and implementation: cinematic landing pages, responsive systems, conversion-focused structures, and motion-led storytelling.

I’m not interested in building websites that only exist. I build pages that create a first impression, guide decisions, and make the product feel sharper.
```

Facts:

- B.Tech student
- Amritsar, Punjab
- 10th: 94%
- 12th: 94%
- Certificates: Introduction to AI & ML - Infosys, Leadership and Management, Gemini

Do not make education dominate the page.

## Contact section

Copy:

```text
Let’s build something with presence.

For websites, landing pages, portfolio systems, and premium digital experiences.
```

Contact:

- Email: gurtejbjr.29107@gmail.com
- Phone: 7626929107
- Location: Amritsar, Punjab

Use huge typography, minimal layout, and clean CTA.

## Animation requirements

Use:

- loader entrance
- hero masked text reveal
- scroll-driven hero scale
- manifesto masked reveals
- project panel transitions
- image reveal masks
- contact final reveal

Do not animate everything.

Every animation must support hierarchy or pacing.

Respect `prefers-reduced-motion`.

On mobile, simplify animations heavily.

## Visual effects

Use:

- film grain overlay
- subtle vignette
- dark gradients over hero image
- thin editorial lines
- restrained red accent
- slow image scale/reveal

Avoid:

- neon glow
- excessive particles
- random blobs
- overdone glassmorphism
- spinning 3D objects

## Responsive requirements

Mobile is critical.

- Hero must fit `100svh`
- Face must stay visible
- Text must not cover face badly
- Project CTAs visible by default
- No horizontal overflow
- No hover-only interactions
- Contact email tappable

## Performance/accessibility

- Optimize images
- Use WebP/AVIF
- Lazy-load below fold
- Preload only hero
- Semantic HTML
- Alt text
- Keyboard navigation
- Visible focus states
- Reduced motion support
- Lighthouse target: 85+ performance, 95+ accessibility/SEO/best practices

## Deliverable

Build the full portfolio website with production-level component structure, reusable data files, responsive layouts, and polished animations.

Do not produce a basic portfolio. Build a cinematic, premium personal brand experience.
