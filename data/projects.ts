import { assets } from "./assets";

export const projects = [
  {
    slug: "sws-luxury",
    title: "SWS Luxury",
    category: "Commerce UI Study",
    year: "2026",
    role: "Student frontend build, visual direction, responsive commerce flow",
    summary:
      "A commerce interface study for attars, jewelry, gifting, and curated product storytelling.",
    description:
      "Built around restraint, curated collections, WhatsApp ordering, and high-end product storytelling.",
    tags: ["Luxury Commerce", "WhatsApp Ordering", "Product Storytelling"],
    liveUrl: "https://luxury-taste.vercel.app/",
    image: assets.swsLuxuryProject,
    featured: true,
    accent: "gold"
  },
  {
    slug: "ghost-engineer",
    title: "Ghost Engineer",
    category: "AI Product Interface",
    year: "2026",
    role: "Product structure, interface design, frontend build, workflow presentation",
    summary:
      "An open-source impact lab that turns real-world problems into buildable public-good blueprints.",
    description:
      "Structured around problem-first workflows, agent review, contributor tasks, GitHub-ready files, and pilot planning.",
    tags: ["AI Product", "Open Source", "Public-Good Systems"],
    liveUrl: "https://ghost-engineer-psi.vercel.app/",
    image: assets.ghostEngineerProject,
    featured: true,
    accent: "green"
  },
  {
    slug: "obsidian-finish",
    title: "Obsidian Finish Studio",
    category: "Service Website Study",
    year: "2026",
    role: "Landing architecture, responsive frontend build, service information design",
    summary:
      "A structured website study for a car detailing and protection studio.",
    description:
      "Designed around trust, finish quality, service clarity, booking intent, and premium automotive presentation.",
    tags: ["Automotive", "Premium Service", "Booking Flow"],
    liveUrl: "https://car-detailing-studio-seven.vercel.app/",
    image: assets.obsidianProject,
    featured: true,
    accent: "orange"
  },
  {
    slug: "iron-forge",
    title: "Iron Forge Athletics",
    category: "Fitness / Commercial Website",
    year: "2026",
    role: "Responsive frontend build, section hierarchy, CTA structure",
    summary:
      "A gym website study built around coaching credibility and clear membership paths.",
    description:
      "Structured for serious beginners, professionals, and athletes who need visible progress and clear next steps.",
    tags: ["Fitness", "Commercial Website", "Conversion"],
    liveUrl: "https://gym-two-sigma.vercel.app/",
    image: assets.ironForgeProject,
    featured: false,
    accent: "red"
  }
];

export type Project = (typeof projects)[number];
