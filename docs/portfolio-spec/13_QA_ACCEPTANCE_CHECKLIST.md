# QA and Acceptance Checklist

The implementation is incomplete until every applicable item passes.

## Repository

- [ ] Existing architecture inspected before modification
- [ ] Unrelated logic preserved
- [ ] Project data typed
- [ ] Repeated project markup is data-driven

## Routes

- [ ] `/`
- [ ] `/work`
- [ ] `/work/house-of-details`
- [ ] `/work/sadda-punjab`
- [ ] `/work/renos`
- [ ] `/work/bibi-kaulan-ji-hospital`
- [ ] `/about`
- [ ] `/contact`
- [ ] Not-found route

## Hero

- [ ] Uses standalone transparent portrait asset
- [ ] No website UI baked into portrait
- [ ] Full turban visible at required widths
- [ ] Face unobstructed
- [ ] Portrait not stretched
- [ ] Headline overlap intentional
- [ ] Supporting copy readable
- [ ] No horizontal overflow
- [ ] Entrance does not block interaction
- [ ] Reduced-motion fallback exists

## Navigation

- [ ] Current route visible
- [ ] Focus visible
- [ ] Mobile menu works
- [ ] Escape closes overlays
- [ ] Focus trapped correctly
- [ ] Focus returns to trigger
- [ ] Contact accessible without overlay

## Work

- [ ] Four featured projects render
- [ ] Count derived from data
- [ ] Titles visible without hover
- [ ] Category and year visible
- [ ] Links work
- [ ] Mobile is single-column
- [ ] Custom cursor desktop-only
- [ ] Drafts hidden
- [ ] Cover crops intentional

## Case studies

- [ ] No fabricated metrics
- [ ] Role and services accurate
- [ ] Design decisions explained
- [ ] Technical implementation honest
- [ ] Media has dimensions and alt text
- [ ] Next-project navigation works

## About

- [ ] Biography accurate
- [ ] Capabilities not exaggerated
- [ ] Tools reflect real use
- [ ] Contact path clear

## Accessibility

- [ ] One logical `h1` per page
- [ ] Heading order valid
- [ ] Landmarks semantic
- [ ] All controls keyboard-operable
- [ ] Focus visible
- [ ] Contrast checked
- [ ] Touch targets at least 44px
- [ ] Reduced motion verified
- [ ] Overlays usable with screen readers
- [ ] No hover-only critical content

## Performance

- [ ] Responsive images configured
- [ ] Hero image prioritised
- [ ] Lower media lazy-loaded
- [ ] Fonts optimised
- [ ] No image CLS
- [ ] Heavy video deferred
- [ ] No duplicate animation ownership
- [ ] No console errors

## Viewports

- [ ] 1440 × 900
- [ ] 1280 × 800
- [ ] 1024 × 768
- [ ] 768 × 1024
- [ ] 430 × 932
- [ ] 390 × 844
- [ ] 360 × 800

## Build

- [ ] Type check passes
- [ ] Lint passes
- [ ] Production build passes
- [ ] Internal links checked
- [ ] Metadata checked
- [ ] Sitemap checked

## Originality

- [ ] No copied photography
- [ ] No copied written copy
- [ ] No copied project assets
- [ ] No exact lime accent
- [ ] No exact navigation geometry
- [ ] No exact project composition sequence
- [ ] Result reads as Gurtejbir Singh’s identity
