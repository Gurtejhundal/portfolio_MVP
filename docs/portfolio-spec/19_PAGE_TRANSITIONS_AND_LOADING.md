# Page Transitions, Loading and Navigation Feedback

## Principle

Transitions must preserve perceived speed. A portfolio that looks refined but delays every click is poorly designed.

## Page transition

Use a short transition only when App Router navigation remains fast.

Recommended:

- Outgoing content opacity: `1 → 0`
- Optional Y: `0 → -8px`
- Incoming content opacity: `0 → 1`
- Optional Y: `12px → 0`
- Total: `400–650ms`

Do not place a branded curtain over every route unless navigation is fully tested and the curtain never traps the page.

## Route progress

When a project route needs noticeable data/media work:

- Show a thin route-progress indicator
- Do not show a spinner in the centre of the viewport
- Do not fake progress percentages

## Loading states

### Homepage

No loading screen. Render typography and background immediately.

### Work archive

Use stable image placeholders with the correct aspect ratio.

### Case study

- Title and metadata may render before gallery media
- Use image skeletons that match final dimensions
- Avoid pulsing animation under reduced motion

### Video

- Poster visible first
- Explicit play control
- Show loading state inside media boundary
- Preserve layout dimensions

## Navigation behaviour

- Links must remain native links
- Support opening in new tab
- Do not block modifier-key clicks
- Do not run transition animation when target is external
- Do not animate when navigating to the current route

## Scroll restoration

- New route begins at top
- Back navigation should restore prior archive position where possible
- Hash links should land correctly after transitions

## Failure states

If a project route does not exist:

- Show the custom not-found page
- Offer Work and Home links
- Do not silently redirect to Home

If a live project URL is unavailable:

- Keep the case study accessible
- Label the live status honestly
