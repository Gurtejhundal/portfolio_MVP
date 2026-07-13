# Testing and Visual Regression

## Static checks

- TypeScript
- ESLint
- Production build
- Broken internal links
- Missing assets
- Invalid metadata

## Component tests

Prioritize behaviour:

- Mobile menu opens and closes
- Escape closes overlays
- Focus returns to trigger
- Project filtering/status logic excludes drafts
- Next-project navigation wraps correctly
- Contact validation preserves data
- Reduced-motion utilities return correct variants

## End-to-end journeys

### Client journey

1. Open home
2. Navigate to House of Details
3. Read case study
4. Open About
5. Open Contact
6. Submit or access email

### Recruiter journey

1. Open home
2. Open Work
3. Open RenOS
4. Open About
5. Access resume/contact

### Keyboard journey

1. Tab through header
2. Open mobile/overlay equivalent
3. Close with Escape
4. Open project
5. Reach next-project link
6. Reach footer

## Visual regression

Capture stable screenshots at:

- 1440×900
- 1024×768
- 768×1024
- 390×844
- 360×800

Pages:

- Home
- Work
- One dark case study
- One light case study
- About
- Contact
- 404
- Mobile menu open
- Contact panel open

## Motion QA

Record short clips for:

- Hero entrance
- First project reveal
- Project hover
- Overlay open/close
- Reduced-motion equivalent

## Defects to reject

- Portrait identity looks stretched
- Turban cropped
- Text intersects face
- Header becomes unreadable over project colour
- Custom cursor lags badly
- Project title belongs visually to wrong image
- Mobile has dead blank space
- Page transition flashes old content
- Case-study images jump during loading
