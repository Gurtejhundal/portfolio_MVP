# Error, Empty and 404 States

## 404 page

Design it as part of the portfolio, not a framework default.

Suggested copy:

```text
This page is not part of the final build.
```

Actions:

- Return home
- View selected work

Use restrained motion only.

## Project not found

When slug is invalid:

- Return the proper 404 response
- Do not render an empty case-study shell
- Do not redirect silently

## Missing image

- Preserve aspect ratio
- Show project-colour placeholder
- Display title
- Log the issue in development
- Do not expose broken image icons

## Empty work archive

This should not occur in production.

Development fallback:

```text
No published projects are available.
```

Do not show draft data to fill the page.

## Contact submission error

Explain what happened and offer direct email.

Example:

```text
The form could not be sent. Your message is still here—try again or email me directly.
```

## Offline/slow network

- Keep text and navigation functional
- Avoid pages that are blank until animation JavaScript loads
- Case-study text should remain usable when video fails

## JavaScript disabled

The core portfolio should still expose:

- Navigation
- Hero copy
- Project links
- About content
- Email

Advanced motion may disappear; content must not.
