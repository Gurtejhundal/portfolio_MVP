# Contact Form, Email and Security

## Contact options

The site should work even without a form.

Always provide:

- Clickable email
- Copy-email action
- LinkedIn
- GitHub

A form is optional, not the only contact path.

## Recommended form fields

- Name
- Email
- Company or project
- Project type
- Brief message
- Budget range, optional
- Timeline, optional

Do not ask for phone number by default.

## Validation

- Client-side for immediate feedback
- Server-side as the authority
- Clear field-level errors
- Preserve entered content after validation failure
- No vague “Something went wrong” without recovery guidance

## Submission states

- Idle
- Submitting
- Success
- Recoverable error
- Rate-limited

Success copy:

```text
Message received. I’ll reply using the email you provided.
```

Only state a response time if it is reliably maintained.

## Anti-spam

Use a combination of:

- Honeypot
- Server-side rate limiting
- Minimum submission time
- Bot protection when necessary

Do not expose private API keys in the browser.

## Email service

Use a transactional email provider or a secure server action.

Required:

- Validated sender fields
- Controlled recipient
- Plain-text fallback
- Error logging without storing unnecessary personal data

## Privacy

- State what the form data is used for
- Do not add marketing consent unless marketing email exists
- Do not store messages indefinitely without purpose
- Link Privacy page when analytics or form storage is used

## Security

- Escape/sanitize user input
- Do not render submitted HTML
- Apply length limits
- Validate URLs if accepted
- Rate-limit by a privacy-conscious mechanism
- Avoid logging full message bodies in public deployment logs
