# Tailwind Tokens and Implementation Guidance

## Principle

Tailwind should express the design system. It should not become a pile of unexplained arbitrary values.

## Recommended CSS variables

```css
@theme inline {
  --color-canvas: var(--canvas);
  --color-ink: var(--ink);
  --color-ink-soft: var(--ink-soft);
  --color-accent: var(--accent);
}
```

Keep global variables in `globals.css`.

## Container utility

Create one reliable page container:

```css
.page-shell {
  width: min(100%, 1600px);
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 4.5rem);
}
```

## Section utility

```css
.section-space {
  padding-block: clamp(7rem, 14vw, 15rem);
}
```

## Display utility

Create named classes or component variants for:

- Hero display
- Page title
- Project title
- Large statement
- Metadata

Do not repeat long `clamp()` expressions throughout JSX.

## Project layouts

Use a variant function or explicit map:

```ts
const projectLayout = {
  "wide-left": "w-full lg:w-[76%] mr-auto",
  "portrait-right": "w-full lg:w-[56%] ml-auto",
  full: "w-full",
  "split-left": "w-full lg:w-[82%] mr-auto",
  "medium-right": "w-full lg:w-[68%] ml-auto",
};
```

## Z-index scale

Define a small predictable scale:

- Base
- Media
- Foreground text
- Header
- Cursor
- Overlay
- Modal content

Avoid arbitrary `z-[99999]`.

## Responsive rules

- Use mobile-first base styles
- Add tablet/desktop composition intentionally
- Do not hide content merely because layout is difficult
- Use container queries only where they simplify reusable components

## Class management

Use `clsx`/`cn` when already present.

Do not introduce a new styling utility only for this project.
