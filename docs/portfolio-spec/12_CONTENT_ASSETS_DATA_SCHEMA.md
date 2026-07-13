# Content, Assets and Data Schema

## Recommended folders

```text
public/
  images/
    gurtejbir-hero.png
    about/
      gurtejbir-about.webp
      process-detail-01.webp
    projects/
      house-of-details/
        cover.webp
        overview.webp
        mobile.webp
        detail-01.webp
        detail-02.webp
      sadda-punjab/
        cover.webp
        overview.webp
        chapter.webp
        mobile.webp
      renos/
        cover.webp
        dashboard.webp
        mobile.webp
        system.webp
      bibi-kaulan-ji-hospital/
        cover.webp
        overview.webp
        appointment.webp
        admin.webp
```

## TypeScript model

```ts
export type ProjectLayout =
  | "wide-left"
  | "portrait-right"
  | "full"
  | "split-left"
  | "medium-right";

export type ProjectStatus = "published" | "draft" | "archived";

export interface ProjectMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
  kind?: "image" | "video";
  poster?: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: number;
  services: string[];
  summary: string;
  role?: string;
  duration?: string;
  team?: string[];
  stack?: string[];
  cover: ProjectMedia;
  gallery: ProjectMedia[];
  layout: ProjectLayout;
  status: ProjectStatus;
  featured: boolean;
  liveUrl?: string;
  repositoryUrl?: string;
  theme?: {
    background: string;
    foreground: string;
    accent: string;
  };
}
```

## Initial data

```ts
export const projects: Project[] = [
  {
    slug: "house-of-details",
    number: "01",
    title: "House of Details",
    category: "Automotive Experience",
    year: 2026,
    services: ["Creative Direction", "Web Design", "Development"],
    summary: "A premium digital experience for an automotive detailing studio.",
    cover: {
      src: "/images/projects/house-of-details/cover.webp",
      alt: "House of Details automotive website presentation",
      width: 1800,
      height: 1125,
    },
    gallery: [],
    layout: "wide-left",
    status: "published",
    featured: true,
  },
  {
    slug: "sadda-punjab",
    number: "02",
    title: "Sadda Punjab",
    category: "Interactive Storytelling",
    year: 2026,
    services: ["Creative Direction", "Experience Design", "Development"],
    summary: "A cinematic digital story exploring the memory, spirit and identity of Punjab.",
    cover: {
      src: "/images/projects/sadda-punjab/cover.webp",
      alt: "Sadda Punjab cinematic storytelling website presentation",
      width: 1400,
      height: 1750,
    },
    gallery: [],
    layout: "portrait-right",
    status: "published",
    featured: true,
  },
  {
    slug: "renos",
    number: "03",
    title: "RenOS",
    category: "Rental Management Product",
    year: 2026,
    services: ["Product Strategy", "UI/UX", "Full-Stack Development"],
    summary: "A unified rental operating system for property owners and tenants.",
    cover: {
      src: "/images/projects/renos/cover.webp",
      alt: "RenOS rental management dashboard presentation",
      width: 1800,
      height: 1125,
    },
    gallery: [],
    layout: "full",
    status: "published",
    featured: true,
  },
  {
    slug: "bibi-kaulan-ji-hospital",
    number: "04",
    title: "Bibi Kaulan Ji Hospital",
    category: "Healthcare Platform",
    year: 2026,
    services: ["UX Design", "Development", "Administration System"],
    summary: "A healthcare platform for appointments, doctors, departments and OPD information.",
    cover: {
      src: "/images/projects/bibi-kaulan-ji-hospital/cover.webp",
      alt: "Bibi Kaulan Ji Hospital responsive website presentation",
      width: 1800,
      height: 1200,
    },
    gallery: [],
    layout: "split-left",
    status: "published",
    featured: true,
  },
];
```

## Project-cover requirements

Every cover must:

- Be art-directed, not a raw screenshot
- Remain readable under responsive cropping
- Have one clear focal point
- Avoid tiny unreadable UI
- Match the project identity
- Have mobile-specific art direction when needed

## Copy rules

- Short titles
- One-sentence summaries
- No fake metrics
- No unexplained jargon
- No “award-winning” claims
- No generic “seamless experience” filler
- No fabricated clients
