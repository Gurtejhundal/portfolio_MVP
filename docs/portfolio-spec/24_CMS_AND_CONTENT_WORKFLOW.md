# CMS and Content Workflow

## Initial recommendation

Start with typed local content unless non-technical editing is immediately required.

A CMS is not automatically an improvement. It adds:

- Schema work
- Preview complexity
- Authentication
- Deployment considerations
- Failure modes

## Local-content phase

Use:

- TypeScript project records
- MDX or structured section arrays for case studies
- Static metadata
- Version control

Best for:

- Fewer than 10 projects
- One maintainer
- Developer-controlled publishing

## CMS phase

Consider a CMS when:

- Projects are added frequently
- Someone else must edit content
- Draft preview is required
- Case-study sections vary significantly

## Required content model

Project:

- Slug
- Status
- Featured
- Order
- Title
- Category
- Year
- Summary
- Services
- Role
- Cover
- Gallery
- Case-study sections
- Live URL
- Repository URL
- Theme
- SEO title
- SEO description
- Social image

## Publishing workflow

1. Draft project
2. Add all required content
3. Validate media dimensions
4. Preview desktop/mobile
5. Run link check
6. Mark published
7. Rebuild/deploy
8. Verify production metadata

## Preview

Draft content must not leak into:

- Work count
- Sitemap
- Next-project navigation
- Homepage
- Search metadata

## Media management

Store:

- Original source
- Web export
- Mobile crop
- Alt text
- Attribution/license when needed

Do not upload unoptimized originals directly to production.
