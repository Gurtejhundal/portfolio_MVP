import { assets } from "./assets";

export const projects = [
  {
    slug: "sws-luxury",
    title: "SWS Luxury",
    category: "Luxury Commerce Experience",
    year: "2026",
    role: "Design direction, frontend build, responsive commerce flow",
    summary:
      "A premium commerce flagship for attars, perfumes, jewelry, and concierge gifting.",
    description:
      "Built around restraint, curated collections, WhatsApp ordering, and high-end product storytelling.",
    liveUrl: "https://luxury-taste.vercel.app/",
    image: assets.swsLuxuryProject,
    featured: true,
    accent: "gold"
  },
  {
    slug: "ghost-engineer",
    title: "Ghost Engineer",
    category: "AI Product / Open-Source System",
    year: "2026",
    role: "Product structure, interface design, frontend build, AI workflow presentation",
    summary:
      "An open-source impact lab that turns real-world problems into buildable public-good blueprints.",
    description:
      "Structured around problem-first workflows, agent review, contributor tasks, GitHub-ready files, and pilot planning.",
    liveUrl: "https://ghost-engineer-psi.vercel.app/",
    image: assets.ghostEngineerProject,
    featured: true,
    accent: "green"
  },
  {
    slug: "obsidian-finish",
    title: "Obsidian Finish Studio",
    category: "Premium Service Website",
    year: "2026",
    role: "Brand positioning, landing architecture, frontend build, service conversion flow",
    summary:
      "A conversion-focused website for a premium car detailing and protection studio.",
    description:
      "Designed around trust, finish quality, service clarity, booking intent, and premium automotive presentation.",
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
    role: "Landing strategy, responsive build, service explanation, CTA structure",
    summary:
      "A premium gym website built around coaching credibility, clear membership paths, and conversion.",
    description:
      "Structured for serious beginners, professionals, and athletes who need visible progress and clear next steps.",
    liveUrl: "https://gym-two-sigma.vercel.app/",
    image: assets.ironForgeProject,
    featured: false,
    accent: "red"
  }
];

export type Project = (typeof projects)[number];
