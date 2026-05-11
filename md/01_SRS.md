# 01 — Software Requirements Specification

## 1. Purpose

This document defines the functional and non-functional requirements for Gurtej's personal portfolio website.

The website must present Gurtej as a creative developer who builds cinematic, premium, commercially useful digital experiences.

## 2. Product scope

The website will be a high-end personal portfolio containing:

- cinematic hero section
- personal positioning
- selected production projects
- project case-study previews
- design/development philosophy
- image-led about section
- contact flow

## 3. User types

### 3.1 Recruiter / evaluator

Wants quick proof of ability, work quality, technical awareness, and communication.

### 3.2 Client / business owner

Wants to know whether Gurtej can build premium landing pages, websites, or product experiences.

### 3.3 Designer / developer peer

Judges motion, composition, interaction, execution detail, and originality.

### 3.4 Award/jury-style visitor

Judges concept, craft, originality, performance, consistency, and polish.

## 4. Primary user goals

Visitors must be able to:

- understand who Gurtej is within 5 seconds
- view selected projects
- open live project links
- understand Gurtej's design/development direction
- contact Gurtej easily
- experience the website smoothly on mobile

## 5. Functional requirements

### 5.1 Loader

The site shall display a short cinematic loader on first load.

Requirements:

- black or near-black background
- small brand mark or text
- progress/entry animation
- duration should feel premium, not slow
- skip if returning visitor or if performance is weak
- no loud gimmicks

Suggested loader text:

> GURTEJ  
> DIGITAL EXPERIENCES

### 5.2 Hero section

The hero shall use Gurtej's 16:9 cinematic portrait as a fullscreen visual anchor.

Requirements:

- image fills viewport or dominates viewport
- name typography overlaps or sits inside negative space
- short positioning statement
- two CTAs:
  - View Work
  - Contact
- subtle film grain
- vignette
- scroll cue
- image and text reveal on load
- mobile-safe composition

### 5.3 Navigation

Navigation shall be minimal.

Desktop:

- Work
- Philosophy
- About
- Contact

Mobile:

- compact menu
- no clutter over hero face
- contact link visible or accessible

### 5.4 Selected Work

The site shall show three featured projects and one archive item.

Featured:

1. SWS Luxury / Luxury Taste
2. Ghost Engineer
3. Obsidian Finish Studio

Archive/supporting:

4. Iron Forge Athletics

Each project card/panel shall include:

- project name
- type/category
- role
- year
- one-line concept
- live link
- short result/intent
- visual preview
- stack or implementation notes only if useful

### 5.5 Project detail behavior

The project detail experience can be:

Option A: separate route  
Option B: modal/overlay  
Option C: horizontal fullscreen case-study scroll

Preferred:

- project preview section on homepage
- live link CTA
- optional detail route `/work/[slug]`

Each detail page shall include:

- hero image/preview
- problem
- approach
- design system
- key features
- build notes
- result/learning
- live link

### 5.6 Philosophy section

The site shall include a short manifesto.

Requirements:

- short statements, not paragraphs
- typography-led
- animated reveal
- no cliché motivational text

Example statements:

- Motion is hierarchy in time.
- Luxury is restraint.
- Interfaces should communicate before users think.
- Systems matter more than decoration.

### 5.7 About section

The about section shall present Gurtej's background without killing the premium mood.

Include:

- B.Tech student
- interest in web development and software engineering
- focus on responsive, user-focused websites
- quick learner
- practical problem-solving mindset

Do not paste CV text directly. Rewrite it.

### 5.8 Contact section

The contact section shall be bold and minimal.

Include:

- email: gurtejbjr.29107@gmail.com
- location: Amritsar, Punjab
- phone: 7626929107
- optional social links if provided later
- CTA copy

Example:

> Let’s build something with presence.

### 5.9 Visual experiments section

Optional but recommended.

Purpose:

- show creative edge
- include motion/3D/typography experiments
- can be filled later

If no assets are available, build as a coming-soon/editorial section.

## 6. Non-functional requirements

### 6.1 Performance

- Largest Contentful Paint should be optimized
- hero image must be responsive and compressed
- animations must not block page interaction
- lazy-load below-fold images
- no heavy WebGL unless justified
- target Lighthouse performance above 85 after optimization

### 6.2 Accessibility

- readable contrast
- keyboard navigation
- visible focus states
- reduced-motion support
- semantic HTML
- alt text for images
- no text trapped inside images

### 6.3 Responsive behavior

The mobile site must not be a squeezed desktop site.

Mobile requirements:

- hero face must remain visible
- typography must not cover face badly
- CTAs reachable within first scroll
- project panels stack cleanly
- heavy animations reduced
- no horizontal overflow

### 6.4 Browser support

Support latest versions of:

- Chrome
- Edge
- Safari
- Firefox

### 6.5 Maintainability

Code should be component-based.

Content should be stored in a structured file/object:

- `projects.ts`
- `siteContent.ts`
- `navigation.ts`

Avoid hardcoding repeated project copy across components.

## 7. Success metrics

The website succeeds if:

- first screen feels premium
- projects look stronger than CV
- mobile version feels intentional
- user can send the link as personal brand proof
- animation feels expensive, not chaotic
- content is clear enough for recruiters and clients

## 8. Constraints

- Personal image assets may be limited initially
- Site must still work if only one hero image is available
- Project previews may need screenshots generated later
- Avoid fake statistics or claims
- Avoid awards/achievement claims unless real

## 9. Risks

### Risk 1: Over-animation

Mitigation: define animation budget. Every section gets one motion purpose only.

### Risk 2: Weak content

Mitigation: use short premium copy, not long CV-style descriptions.

### Risk 3: Image inconsistency

Mitigation: color-grade all personal images in same cinematic palette.

### Risk 4: Mobile breakdown

Mitigation: design mobile hero first, then scale desktop.

### Risk 5: Generic developer look

Mitigation: avoid skill bars, generic cards, icon grids, and overused gradients.
