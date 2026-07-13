# Design System — Gurtejbir Singh Editorial Portfolio V2

## 1. Product Context

- Product: A multi-route personal portfolio for Gurtejbir Singh.
- Primary users: Hiring teams, founders, potential collaborators, and peers.
- Primary tasks: Understand Gurtejbir's role, inspect published work, read credible case studies, assess capabilities, and make contact.
- Business goal: Convert project evidence into relevant employment, collaboration, and selected freelance conversations.
- Device priority: Mobile and laptop first, with a composed large-desktop experience.
- Trust level: High. Claims, status, credits, and outcomes must remain factual.
- Typical session length: 2–8 minutes.

## 2. Design Objective

The interface must communicate a design-and-development hybrid within the first viewport, then let project evidence carry the experience. It should feel editorial and human without imitating a magazine template, and technically capable without looking like a dashboard.

## 3. Chosen Direction

- Primary UI style: Minimalist UI.
- Secondary influence: Editorial print composition.
- Style ratio: 82% minimalist, 18% editorial asymmetry.
- Reason: The portfolio needs clarity, memorable typography, strong portrait integration, and long-term credibility.
- Main risks: Empty-feeling layouts, fragile absolute positioning, and excessive serif typography.
- Strongest areas: Home hero, project covers, page titles, and contact invitation.
- Restrained areas: Navigation, case-study prose, metadata, and mobile controls.

## 4. Design Principles

1. Evidence before biography.
2. Typography creates structure, not decoration.
3. The portrait establishes identity without obscuring the face or turban.
4. Asymmetry follows a finite grid and never becomes random.
5. Motion explains sequence and never gates content.

## 5. Color System

- Background: `#f0efef`, a neutral light grey without beige or bone undertones.
- Strong background: `#e5e4e4`.
- Primary text: `#171714`.
- Secondary text: `#67655f`.
- Border: `rgba(23, 23, 20, 0.16)`.
- Brand accent: `#6f1d2b` burgundy.
- Accent contrast: `#fffaf3`.
- Selection: `#cbbfc0`.
- Semantic success: `#315c45`; warning: `#8a6226`; error: `#9b302f`; information: `#3c6070`.
- Maximum accents per screen: One global accent plus one project-specific accent.
- Contrast target: WCAG 2.2 AA.
- Gradient rule: No decorative gradients. Project artwork may use hard tonal transitions only.
- Transparency rule: Used only for the sticky header surface and modal scrim.

## 6. Typography

- Display and interface: Instrument Sans through `next/font` at weights 400, 500, and 600 only.
- Fallback: Arial, then the system sans-serif stack.
- Signature artwork is the only handwritten/display mark.
- Monospace: System monospace only for small indices.
- Hero: `clamp(5.5rem, 8.8vw, 9.5rem)` at 0.85 line-height on desktop, with a controlled stacked mobile cap.
- Page title: `clamp(3.7rem, 7.4vw, 8rem)`.
- Project title: `clamp(3rem, 6vw, 6.4rem)`.
- H2: `clamp(2.35rem, 4.5vw, 4.6rem)`.
- Body large: `clamp(1.15rem, 1.8vw, 1.65rem)`.
- Body: 1rem at 1.55 line-height.
- Meta: 0.72rem with 0.11em tracking.
- Maximum paragraph width: 68 characters.

## 7. Spacing

- Base unit: 4px.
- Scale: 8, 12, 16, 24, 32, 48, 72, 104, 144, 208.
- Section spacing: `clamp(7rem, 14vw, 15rem)`.
- Project gap: `clamp(6rem, 13vw, 13rem)`.
- Card padding: Not applicable to editorial media; metadata uses 16–24px.
- Form spacing: 20px between fields.
- Mobile adjustment: Reduce blank space before reducing content hierarchy.

## 8. Grid and Breakpoints

- Mobile: 360px / four columns.
- Wide mobile: 430px / four columns.
- Tablet: 768px / eight columns.
- Laptop: 1024px / eight columns.
- Desktop: 1280px and 1440px / twelve columns.
- Maximum width: 1600px.
- Side padding: `clamp(1.25rem, 4vw, 4.5rem)`.
- Gutter: `clamp(0.75rem, 1.5vw, 1.75rem)`.

## 9. Shape, Border, and Radius

- Standard border: 1px solid global line token.
- Strong border: 1px solid `rgba(23, 23, 20, 0.32)`.
- Small radius: 2px.
- Medium radius: 6px, reserved for project media when justified.
- Large radius: 18-30px, reserved for takeover panels, project media, and modal surfaces.
- Pills: Navigation, action, availability, and pointer cues only.
- Forbidden: Repeated rounded cards, bubble controls, and generic bento containers.

## 10. Shadow, Depth, and Surface

- Level 0: Flat canvas.
- Level 1: Hairline separation.
- Level 2: `0 24px 70px rgba(23, 23, 20, 0.09)` for modal panels only.
- Level 3: Not used.
- Pressed state: 1px downward translation.
- Dark surfaces: Project-specific only.
- Performance: No large animated blur, glow, WebGL, or continuous shadow animation.

## 11. Iconography

- Family: Typographic arrows and minimal custom SVG.
- Social marks: Compact filled monochrome glyphs for legibility at 18px.
- Stroke-only mixed icon sets are forbidden.
- Sizes: 16, 20, 24px.
- Filled icons: Avoided.
- Icon-only controls: Minimum 44px target with accessible name.

## 12. Imagery and Illustration

- Portrait: Supplied transparent black-and-white PNG, bottom anchored and never stretched.
- Project imagery: Art-directed real covers when available.
- Current fallback: Original typographic project artwork, explicitly replaceable by documented asset paths.
- Crop: Record focal point and preserve meaningful content.
- Aspect ratios: 16:10, 4:5, 3:2 depending on explicit layout variant.
- 3D: None.
- Texture: Minimal project-specific grain only when assets justify it.
- Prohibited: Stock-photo dominance, fake metrics, fake browser frames, repeated device mockups.

## 13. Components

- Primary action: Text-led, burgundy fill or strong underline, 44px minimum height.
- Secondary action: Label plus arrow with line transition.
- Navigation: Bottom navigation, Quick Info, and desktop social links remain mounted in the root layout. The signature and Contact pill are intentionally visible only during the Home hero and ease upward when the hero is left.
- Project showcase: Sparse image-first records. Desktop receives a decorative pointer-follow View pill; the whole card remains a keyboard-operable dialog trigger.
- Project detail: An accessible modal panel with sticky desktop metadata and an independently scrolling media column. Mobile stacks metadata above media.
- Case-study sections: Labeled prose and project artwork with predictable reading order.
- Contact: The final scene has one direct `mailto:` action. The hero Contact pill opens an accessible modal whose submit action composes a `mailto:` message; it never pretends to send data to a backend.
- Feedback: Copy action announces success with `aria-live`.
- Disabled/loading: Preserve dimensions and use readable status text, never spinner-only feedback.

## 14. Motion

- Principle: Content is visible without animation; motion adds hierarchy and continuity.
- Micro: 220ms.
- Control: 340ms.
- Text: 780ms.
- Media: 1050ms.
- Panel: 720ms.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Home hero: The two title lines share one stage, the portrait sits slightly left of centre between their layers, and the subtitle stays attached to `developer`. Whole-line masked reveals precede the portrait's clipped rise and brief blur.
- Project hover: Image/artwork scale maximum 1.025 and arrow shift maximum 8px.
- Reduced motion: All transforms, follower cursors, stagger, and scale settling disabled.
- Homepage exception: GSAP ScrollTrigger may coordinate native-scroll sticky scenes, panel takeover, and the Recent Work horizontal sequence. No smooth-scroll engine or scroll hijacking.
- Route changes: One GSAP curtain system. Current content recedes, the destination-coloured curtain covers the viewport, the route swaps, and the new page reveals through line masks.
- Scene takeover: Section two rises over the shrinking sticky hero. Recent Work retains a 430svh pinned sequence: the heading appears alone, four deliberately varied cards rise, vertical scroll drives horizontal travel, and the rounded foreground then lifts away to reveal contact.
- Contact depth: The portrait sits immediately after `Let's make`, overlaps the end of that line and the wine line beneath it, and uses clipped foreground text for controlled depth. One requestAnimationFrame loop drives portrait, ring, shadow, and restrained headline depth.
- Forbidden: Bouncing, global cursor replacement, endless loops, magnetic navigation, and route-specific animation gimmicks. The View and backdrop Close followers are contextual cues only.

## 15. Accessibility

- Contrast: WCAG 2.2 AA.
- Focus: 2px burgundy outline with 4px offset.
- Touch target: Minimum 44×44px.
- Keyboard: Logical source order, native links, trapped focus only inside open dialogs.
- Dialogs: Escape closes, trigger focus restores, background scroll locks.
- Form labeling: Visible labels; however no contact form is shipped without a secure server action.
- Reduced motion: CSS media query plus Motion preference hooks.
- High contrast: Borders and underlines remain visible without accent color.

## 16. Responsive Behavior

- Chrome: Bottom navigation, signature, Contact, and Quick Info remain touch-safe. Decorative pointer followers are disabled.
- Hero: Desktop layered composition becomes a controlled stacked composition; portrait remains fully contained.
- Projects: Finite asymmetric layouts become image-first single-column records.
- Case studies: Two-column metadata and prose collapse to one column.
- Contact: Oversized email wraps safely and copy control stays reachable.
- Typography: Fluid clamps plus mobile-specific caps prevent overflow.
- Sticky controls: Header only; no pinned content sections.

## 17. Page-Specific Rules

- Home: Four scenes only - identity hero, design/development comparison, Recent Work, and contact. The obsolete Think / Shape / Ship scene is removed. Recent Work reveals the contact scene as a physical page layer.
- Work: One-viewport Selected works introduction, four sparse cards, cursor View cue, accessible detail panel, and a foreground panel that reveals the fixed contact scene beneath it.
- Project detail: Hero, truthful status, context, problem, strategy, design direction, experience, development, outcome, reflection, credits, next project.
- About: Separate composition from home hero; capabilities and process remain specific.
- Contact: Direct email, project types, availability, and privacy statement.
- Not found: Branded text-first recovery with Home and Work links.

## 18. Forbidden Patterns

- No card grids, skill bars, logo clouds, glassmorphism, neon, decorative gradients, fake statistics, fabricated testimonials, random asymmetry, global cursor replacement, excessive parallax, or copied reference geometry.

## 19. Implementation Rules

- Styling: Tailwind foundation plus semantic global CSS classes and tokens.
- Tokens: `app/globals.css`.
- Components: `components/editorial/`.
- Data: `data/projects.ts` and `data/site.ts`.
- Animation: Motion for dialogs and layout indicators; GSAP handles homepage scene sequencing and the single shared route curtain. All timelines must clean up on unmount.
- Images: `next/image`; portrait priority, below-fold images lazy.
- Tests: `npm run lint`, `npm run build`, production browser QA.
- Browser support: Current Chrome, Edge, Firefox, and Safari.

## 20. QA Checklist

- [x] 360×800 tested
- [x] 390×844 tested
- [x] 430×932 tested
- [x] 768×1024 tested
- [x] 1024×768 tested
- [x] 1280×800 tested
- [x] 1440×900 tested
- [x] Keyboard navigation tested
- [x] Focus states visible
- [x] Mobile dialogs tested
- [x] Reduced motion tested
- [x] Build, type checking, and lint pass
- [x] Console clean in production
- [x] No missing images in the implemented fallback system
- [x] No horizontal overflow
- [x] Draft projects excluded
- [x] Metadata, sitemap, and robots verified
