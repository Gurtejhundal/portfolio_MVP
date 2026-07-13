# Works Index Specification

## Purpose

Present all publishable work as a deliberate archive rather than a dense gallery.

## Header

```text
Selected Work
```

Dynamic count:

```text
[04]
```

The count must come from published project data.

Optional introduction:

```text
Digital products, identities and web experiences selected for their craft, complexity and clarity.
```

## Listing

Each record contains:

- Index number
- Cover image
- Title
- Category
- Year
- Optional compact service line
- Project link

## Layout variants

Use a finite explicit set:

- `wide-left`
- `portrait-right`
- `full`
- `split-left`
- `medium-right`

Never generate random widths at runtime.

## Desktop rhythm

- Large separation between records
- Titles may align with media edges
- Metadata stays visually attached to its image
- Dividers are used sparingly
- Each entry still scans as one unit

## Mobile rhythm

- Single column
- Image first
- Title and metadata immediately below
- Approximately 90–130px between projects
- No horizontal project carousel
- No hover-only labels

## Filters

Do not add filters with fewer than eight published projects. Filters would be noise.

## Experiments

An optional subordinate section may be added:

```text
Experiments / studies
```

Use text-led rows or small thumbnails.

## Drafts

Draft records must never render publicly. Use `status: "draft"` or `published: false`.

## End of page

```text
Looking for the thinking behind the work?
```

Link to About or Contact.
