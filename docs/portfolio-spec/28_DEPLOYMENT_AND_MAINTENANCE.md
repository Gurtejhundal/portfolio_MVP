# Deployment and Maintenance

## Environments

Use:

- Local development
- Preview deployment
- Production

Never test major layout changes only in production.

## Environment variables

Document:

- Contact email service keys
- Analytics IDs
- Site URL
- CMS credentials
- Preview secrets

Keep `.env.example` without real secrets.

## Deployment checks

Before production:

- Type check
- Lint
- Build
- Route smoke test
- Metadata test
- Sitemap check
- Contact test
- External link test
- Mobile screenshot review

## Domain

Configure:

- Canonical domain
- HTTPS
- `www` redirect policy
- Open Graph absolute URLs
- Email domain when available

## Monitoring

Monitor:

- Runtime errors
- Contact form failures
- Broken external links
- Image 404s
- Performance regressions

## Content maintenance

Monthly or after major changes:

- Confirm availability statement
- Confirm current year
- Confirm live project links
- Remove dead repository links
- Review resume
- Verify contact email
- Recompress oversized media

## Dependency maintenance

- Update deliberately
- Read framework migration notes
- Test animation packages after updates
- Do not upgrade every dependency immediately before launch

## Backup

Keep:

- Source repository
- Original project media
- Web-optimized assets
- Copy/content source
- CMS export if used
