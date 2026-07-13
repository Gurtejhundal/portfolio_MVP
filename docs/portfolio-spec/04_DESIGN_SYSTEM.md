# Design System

## Brand character

- Editorial
- Minimal
- Precise
- Quietly confident
- Human
- Technical without looking like a dashboard
- Premium without luxury clichés

## Colour tokens

```css
:root {
  --canvas: #f1efe9;
  --canvas-strong: #e5e1d8;
  --ink: #171714;
  --ink-soft: #706e68;
  --line: rgba(23, 23, 20, 0.16);
  --line-strong: rgba(23, 23, 20, 0.32);
  --accent: #6f1d2b;
  --accent-contrast: #fffaf3;
  --selection: #cbbfc0;
}
```

Dark case-study surfaces may use:

```css
--project-canvas: #11110f;
--project-ink: #f2efe8;
```

## Colour rules

- Use accent for current navigation, focus, small labels and one primary action.
- Do not paint whole sections burgundy without project-specific justification.
- Avoid gradients by default.
- Do not use lime; it makes the adaptation too dependent on the reference.
- Muted text must remain readable.

## Typography

Display preference:

- Instrument Serif

Alternatives:

- Cormorant Garamond
- Bodoni Moda

Sans-serif preference:

- Geist

Alternative:

- Manrope

### Fluid scale

```css
--display-hero: clamp(4.5rem, 11.5vw, 12.5rem);
--display-page: clamp(4rem, 9vw, 10rem);
--display-project: clamp(3rem, 7vw, 7.5rem);
--heading-lg: clamp(2.4rem, 5vw, 5rem);
--heading-md: clamp(1.8rem, 3vw, 3rem);
--body-lg: clamp(1.15rem, 1.8vw, 1.65rem);
--body: 1rem;
--meta: 0.75rem;
```

Rules:

- Hero line-height: `0.80–0.88`
- Page-title line-height: `0.86–0.94`
- Body line-height: `1.45–1.65`
- Display tracking: approximately `-0.035em` to `-0.07em`
- Paragraph measure: approximately 50–68 characters
- Avoid all-caps body copy
- Use no more than two font families

## Grid

Desktop:

- 12 columns
- Maximum width: about 1600px
- Side padding: `clamp(24px, 4vw, 72px)`
- Gap: `clamp(12px, 1.5vw, 28px)`

Tablet:

- 8 columns

Mobile:

- 4 columns
- Side padding: 18–24px

## Spacing

```css
--space-1: 0.5rem;
--space-2: 0.75rem;
--space-3: 1rem;
--space-4: 1.5rem;
--space-5: 2rem;
--space-6: 3rem;
--space-7: 4.5rem;
--space-8: 6.5rem;
--space-9: 9rem;
--space-10: 13rem;
```

Typical section spacing:

```css
padding-block: clamp(7rem, 14vw, 15rem);
```

## Borders and radius

- Use hairlines only when hierarchy needs them.
- Project media radius: 0–8px.
- Buttons should not all be pills.
- Avoid universal rounded cards.

## Links and actions

Primary action:

- Text-led
- Clear border or accent fill
- Minimum 44px target
- No heavy shadow

Editorial link:

- Label plus arrow
- Underline/line transition
- Visible focus state

## Focus

```css
outline: 2px solid var(--accent);
outline-offset: 4px;
```

Never remove focus without a real replacement.
