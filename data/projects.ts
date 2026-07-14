export type ProjectLayout =
  | "wide-left"
  | "portrait-right"
  | "full"
  | "split-left"
  | "medium-right";

export type ProjectStatus = "published" | "draft" | "archived";

export type ProjectSection = {
  label: string;
  title: string;
  body: string[];
};

export type ProjectMedia = {
  label: string;
  kind: "image" | "artwork";
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  variant?: "cover" | "system" | "detail";
};

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: number;
  services: string[];
  summary: string;
  role: string;
  duration: string;
  stack: string[];
  layout: ProjectLayout;
  status: ProjectStatus;
  featured: boolean;
  projectStatus: string;
  coverPath: string;
  coverAvailable: boolean;
  gallery: ProjectMedia[];
  theme: {
    background: string;
    foreground: string;
    accent: string;
  };
  sections: ProjectSection[];
  credits: string[];
  liveUrl?: string;
  repositoryUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "house-of-details",
    number: "01",
    title: "House of Details",
    category: "Automotive Experience",
    year: 2026,
    services: ["Creative Direction", "Web Design", "Development"],
    summary: "A premium digital experience for an automotive detailing studio.",
    role: "Design and development",
    duration: "Ongoing",
    stack: ["Next.js", "React", "TypeScript"],
    layout: "wide-left",
    status: "published",
    featured: true,
    projectStatus: "In development",
    coverPath: "/images/projects/house-of-details/cover.webp",
    coverAvailable: false,
    gallery: [
      { label: "Studio landing hero", kind: "image", src: "/images/projects/house-of-details/hero.jpg", alt: "House of Details studio landing page configuration interface", width: 1200, height: 1600, variant: "cover" },
      { label: "Service chapters: Protection", kind: "image", src: "/images/projects/house-of-details/services.jpg", alt: "Ceramic coating and paint protection film services", width: 1200, height: 1600, variant: "detail" },
      { label: "Close-up detailing care", kind: "image", src: "/images/projects/house-of-details/aftercare.jpg", alt: "Precision interior vacuuming and gloss treatment", width: 1200, height: 1600, variant: "detail" },
      { label: "Proof before promises", kind: "image", src: "/images/projects/house-of-details/promises.jpg", alt: "Swirl removal and cabin refresh visual comparison", width: 1200, height: 1600, variant: "detail" },
      { label: "Studio location and process", kind: "image", src: "/images/projects/house-of-details/process.jpg", alt: "Google Maps integration and step-by-step workflow", width: 1200, height: 1600, variant: "detail" },
      { label: "FAQ and inspect booking", kind: "image", src: "/images/projects/house-of-details/faq.jpg", alt: "Frequently asked questions and inspection slot scheduling", width: 1200, height: 1600, variant: "detail" },
      { label: "Identity direction", kind: "artwork", variant: "cover" },
      { label: "Service architecture", kind: "artwork", variant: "system" },
      { label: "Responsive detail", kind: "artwork", variant: "detail" }
    ],
    theme: { background: "#151615", foreground: "#f1efe9", accent: "#9ca7ad" },
    sections: [
      {
        label: "Context",
        title: "A premium service needs a digital experience with the same discipline.",
        body: [
          "The project direction centres on an automotive detailing studio where finish quality, process and trust matter more than generic promotional claims.",
          "The current case study documents the design and build direction. Public performance results are not yet available."
        ]
      },
      {
        label: "Problem",
        title: "Show precision without falling into automotive clichés.",
        body: [
          "The interface needs to separate detailing services clearly, communicate care and make the enquiry path obvious without relying on smoke effects, gold treatments or unreadable technical language."
        ]
      },
      {
        label: "Strategy",
        title: "Lead with evidence, then make the service path simple.",
        body: [
          "The planned hierarchy moves from a strong visual introduction into service explanation, process, proof and contact. Dark surfaces support the subject; restrained typography keeps the system credible."
        ]
      },
      {
        label: "Development",
        title: "A responsive component system designed for real content.",
        body: [
          "The implementation direction uses server-rendered content, responsive media, typed service data and small interaction boundaries. Motion is limited to reveals and navigation feedback."
        ]
      },
      {
        label: "Outcome",
        title: "Current status: in development.",
        body: [
          "The visual and technical direction is established, but no measured commercial outcome is claimed until the project is deployed and evaluated."
        ]
      }
    ],
    credits: ["Design and development — Gurtejbir Singh", "Project imagery — pending final approved assets"]
  },
  {
    slug: "mediaforge",
    number: "02",
    title: "MediaForge",
    category: "Local-first Media Toolkit",
    year: 2026,
    services: ["Product Design", "Frontend Engineering", "Local Processing"],
    summary: "A local-first browser workspace for image, video, audio and document operations.",
    role: "Product design and full-stack development",
    duration: "Ongoing",
    stack: ["Next.js", "TypeScript", "Canvas APIs"],
    layout: "portrait-right",
    status: "published",
    featured: true,
    projectStatus: "Working public build",
    coverPath: "/images/projects/mediaforge/overview.webp",
    coverAvailable: true,
    gallery: [
      { label: "MediaForge operations overview", kind: "image", src: "/images/projects/mediaforge/overview.webp", alt: "MediaForge local-first media operations overview", width: 1600, height: 3732, variant: "cover" },
      { label: "Local video detail upscaler", kind: "image", src: "/images/projects/mediaforge/video-upscaler.webp", alt: "MediaForge video detail upscaler interface", width: 1600, height: 2251, variant: "detail" },
      { label: "Document Studio operations", kind: "image", src: "/images/projects/mediaforge/document-studio.webp", alt: "MediaForge Document Studio interface", width: 1600, height: 2251, variant: "system" },
      { label: "Local image modifier", kind: "image", src: "/images/projects/mediaforge/image-modifier.webp", alt: "MediaForge image modifier interface", width: 1600, height: 2251, variant: "detail" }
    ],
    liveUrl: "https://converter-ashen-five.vercel.app/",
    repositoryUrl: "https://github.com/Gurtejhundal/MediaForge",
    theme: { background: "#171a16", foreground: "#f1eadc", accent: "#d64a2c" },
    sections: [
      {
        label: "Context",
        title: "Everyday media tasks should not require a different upload service.",
        body: [
          "MediaForge brings image, video, audio and document operations into one browser workspace with a consistent operating model.",
          "Normal file operations keep selected media in browser memory and export local Blob downloads instead of silently uploading source files."
        ]
      },
      {
        label: "Problem",
        title: "Utility suites often hide where a file goes and how it is processed.",
        body: [
          "Separate tools, inconsistent controls and unclear processing boundaries create friction and reduce trust. Video operations also inherit real browser limitations that the interface must state honestly."
        ]
      },
      {
        label: "Strategy",
        title: "Use one rack system and make processing boundaries visible.",
        body: [
          "Operations are grouped into image, video, audio, documents and network routes. Repeated input, processing and export patterns make the suite learnable without flattening the differences between tools."
        ]
      },
      {
        label: "Development",
        title: "Browser APIs do the work where the platform can support it.",
        body: [
          "Canvas, MediaRecorder, pdf-lib and browser-side models handle local operations. Network-dependent tools are explicitly separated and the product documents known output and performance limits."
        ]
      },
      {
        label: "Outcome",
        title: "Current status: working public build.",
        body: [
          "The public build exposes the working tool suite and its local-processing model. Broader codec support and faster long-form video processing remain future engineering work."
        ]
      }
    ],
    credits: ["Product design and development — Gurtejbir Singh", "Product screenshots — MediaForge working build"]
  },
  {
    slug: "traqo",
    number: "03",
    title: "Traqo",
    category: "Learning Roadmap Product",
    year: 2026,
    services: ["Product Strategy", "Interface Design", "Full-Stack Development"],
    summary: "A personal roadmap workspace for importing complex learning plans and tracking task progress.",
    role: "Product design and full-stack development",
    duration: "Ongoing",
    stack: ["React", "FastAPI", "SQLite"],
    layout: "full",
    status: "published",
    featured: true,
    projectStatus: "Working prototype",
    coverPath: "/images/projects/traqo/library.webp",
    coverAvailable: true,
    gallery: [
      { label: "Roadmap library", kind: "image", src: "/images/projects/traqo/library.webp", alt: "Traqo roadmap library with progress cards", width: 1600, height: 942, variant: "cover" },
      { label: "Roadmap import", kind: "image", src: "/images/projects/traqo/import.webp", alt: "Traqo roadmap text and file import interface", width: 1600, height: 1356, variant: "system" },
      { label: "Roadmap workspace", kind: "image", src: "/images/projects/traqo/roadmap.webp", alt: "Traqo roadmap detail workspace", width: 1600, height: 726, variant: "detail" },
      { label: "Task tracking detail", kind: "image", src: "/images/projects/traqo/task-detail.webp", alt: "Traqo detailed task tracking view", width: 1600, height: 753, variant: "detail" }
    ],
    liveUrl: "https://roadmap-tracer.vercel.app",
    repositoryUrl: "https://github.com/Gurtejhundal/Roadmap-Tracer",
    theme: { background: "#e7edf4", foreground: "#18273a", accent: "#d34b25" },
    sections: [
      {
        label: "Context",
        title: "Large learning plans become unusable when they stay as one long document.",
        body: [
          "Traqo turns pasted text and uploaded roadmap files into structured sections, tasks and progress states that can be used day by day."
        ]
      },
      {
        label: "Problem",
        title: "A roadmap can contain hundreds of tasks without showing what matters now.",
        body: [
          "Plain documents offer weak navigation, no durable completion state and no useful way to move between an overview and the current learning task."
        ]
      },
      {
        label: "Strategy",
        title: "Preserve the original plan while adding structure and position.",
        body: [
          "The workspace combines a contents rail, progress summaries, search and current-location context. Import accepts common text and document formats without forcing the user to rebuild the plan manually."
        ]
      },
      {
        label: "Development",
        title: "A React workspace sits on a focused FastAPI data model.",
        body: [
          "The frontend handles roadmap editing and progress interaction while FastAPI, SQLAlchemy and a local owner key keep roadmap data structured. PDF and Word exports are available from the detail view."
        ]
      },
      {
        label: "Outcome",
        title: "Current status: working single-user prototype.",
        body: [
          "The core import, navigation, editing, progress and export workflows are implemented. Multi-user authentication and OCR for scanned PDFs are intentionally outside the current scope."
        ]
      }
    ],
    credits: ["Product strategy, interface and development — Gurtejbir Singh", "Product screenshots — Traqo working build"]
  },
  {
    slug: "bibi-kaulan-ji-hospital",
    number: "04",
    title: "Bibi Kaulan Ji Hospital",
    category: "Healthcare Platform",
    year: 2026,
    services: ["UX Design", "Development", "Administration System"],
    summary: "A healthcare platform for appointments, doctors, departments and OPD information.",
    role: "UX design and development",
    duration: "Ongoing",
    stack: ["Next.js", "TypeScript", "Supabase"],
    layout: "split-left",
    status: "published",
    featured: true,
    projectStatus: "In development",
    coverPath: "/images/projects/bibi-kaulan-ji-hospital/cover.webp",
    coverAvailable: false,
    gallery: [
      { label: "Hospital platform — home", kind: "image", src: "/images/projects/bibi-kaulan-ji-hospital/live-home.png", alt: "Bibi Kaulan Ji Hospital public website home page", width: 1440, height: 7177 },
      { label: "Appointment journey", kind: "image", src: "/images/projects/bibi-kaulan-ji-hospital/live-appointment.png", alt: "Bibi Kaulan Ji Hospital appointment page", width: 1440, height: 2295 },
      { label: "Departments directory", kind: "image", src: "/images/projects/bibi-kaulan-ji-hospital/live-departments.png", alt: "Bibi Kaulan Ji Hospital departments page", width: 1440, height: 2491 }
    ],
    liveUrl: "https://bibi-kaulan-ji-hospital.vercel.app",
    repositoryUrl: "https://github.com/Gurtejhundal/BKJH",
    theme: { background: "#eef1ed", foreground: "#15372f", accent: "#5b8978" },
    sections: [
      {
        label: "Context",
        title: "Essential hospital information should not require a phone call.",
        body: [
          "The platform scope covers appointments, doctors, departments and OPD information, with an administration system intended to keep public details current."
        ]
      },
      {
        label: "Problem",
        title: "Patients need direct answers; staff need maintainable content.",
        body: [
          "Public information must be easy to find on mobile while operational updates need a controlled workflow. The design cannot trade legibility for a fashionable healthcare aesthetic."
        ]
      },
      {
        label: "Strategy",
        title: "Prioritise common patient questions and calm navigation.",
        body: [
          "The proposed structure leads with departments, doctor availability, OPD information and appointment paths. Administrative controls are separated from the public experience."
        ]
      },
      {
        label: "Development",
        title: "Accessibility and content integrity are architectural concerns.",
        body: [
          "The implementation direction uses semantic content, typed records, server-side validation and role-aware administration. No real patient data is used in the portfolio presentation."
        ]
      },
      {
        label: "Outcome",
        title: "Current status: in development.",
        body: [
          "The project is not presented as a deployed clinical system, and no patient or operational metrics are claimed."
        ]
      }
    ],
    credits: ["UX design and development — Gurtejbir Singh", "Hospital identity and content — pending publication approval"]
  },
  {
    slug: "ghost-engineer",
    number: "05",
    title: "Ghost Engineer",
    category: "Open-Source Impact Lab",
    year: 2026,
    services: ["Platform Architecture", "Frontend Development", "Interactive 3D"],
    summary: "An open-source impact lab turning societal problems into buildable project blueprints.",
    role: "Product design and full-stack development",
    duration: "Ongoing",
    stack: ["Next.js", "TypeScript", "Spline"],
    layout: "wide-left",
    status: "published",
    featured: true,
    projectStatus: "Working public build",
    coverPath: "/images/projects/ghost-engineer/cover.webp",
    coverAvailable: false,
    gallery: [
      { label: "OpenIrrigate Alert blueprint", kind: "image", src: "/images/projects/ghost-engineer/alert_blueprint.jpg", alt: "Ghost Engineer OpenIrrigate Alert impact blueprint roadmap", width: 1200, height: 1600, variant: "cover" },
      { label: "Ghost Engineer workspace", kind: "artwork", variant: "cover" },
      { label: "Interactive 3D model", kind: "artwork", variant: "detail" }
    ],
    liveUrl: "https://ghost-engineer-psi.vercel.app/",
    repositoryUrl: "https://github.com/Gurtejhundal/Ghost-Engineer",
    theme: { background: "#000000", foreground: "#ffffff", accent: "#00d1b2" },
    sections: [
      {
        label: "Context",
        title: "Turning societal problems into actionable software engineering blueprints.",
        body: [
          "Ghost Engineer is an open-source impact lab designed to help developers solve real-world problems by breaking down messy context into modular issues, file packs, and pilot launch checklists.",
          "The workspace provides a problem-first contributor hub that skips standard landing friction."
        ]
      },
      {
        label: "Problem",
        title: "Standard open-source contributions struggle to connect with localized needs.",
        body: [
          "Many developers want to write code for social good, but lack structured tasks, clear deployment parameters, and domain context. Traditional issue trackers rarely bridge this gap."
        ]
      },
      {
        label: "Strategy",
        title: "Provide a complete launch blueprint with structured agent reviews.",
        body: [
          "Every problem undergoes a multi-agent review (Architect, Feasibility, PM, and Safety) resulting in a contributor board, a 7-day build path, and target impact scores. This ensures the project is ready for immediate deployment."
        ]
      }
    ],
    credits: ["Design and development — Gurtejbir Singh", "3D Spline scene — Ghost Engineer open assets"]
  },
  {
    slug: "sws-luxury",
    number: "06",
    title: "SWS Luxury",
    category: "Luxury Digital Flagship",
    year: 2026,
    services: ["Brand Strategy", "E-Commerce Design", "Concierge System"],
    summary: "A luxury digital flagship for curated attars, imported perfumes, jewelry, and WhatsApp concierge ordering.",
    role: "Brand design and full-stack development",
    duration: "Ongoing",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    layout: "portrait-right",
    status: "published",
    featured: true,
    projectStatus: "Working public build",
    coverPath: "/images/projects/sws-luxury/cover.webp",
    coverAvailable: false,
    gallery: [
      { label: "Digital flagship landing", kind: "image", src: "/images/projects/sws-luxury/home_hero.jpg", alt: "SWS Luxury curated collection flagship home page", width: 1200, height: 1600, variant: "cover" },
      { label: "Signature attars and perfumes", kind: "image", src: "/images/projects/sws-luxury/home_collection.jpg", alt: "Bespoke perfume and attar catalog collections", width: 1200, height: 1600, variant: "detail" },
      { label: "WhatsApp ordering interface", kind: "image", src: "/images/projects/sws-luxury/home_ordering.jpg", alt: "WhatsApp concierge order scheduling features", width: 1200, height: 1600, variant: "detail" },
      { label: "Amber Dusk Extrait details", kind: "image", src: "/images/projects/sws-luxury/detail_product.jpg", alt: "Premium product description page with ingredients and assistance", width: 1200, height: 1600, variant: "detail" },
      { label: "Related fragrances pairing", kind: "image", src: "/images/projects/sws-luxury/detail_related.jpg", alt: "Suggested attar and jewelry matching pairings", width: 1200, height: 1600, variant: "detail" },
      { label: "Concierge cart handoff", kind: "image", src: "/images/projects/sws-luxury/cart_review.jpg", alt: "Confirm items edit list before WhatsApp order submit", width: 1200, height: 1600, variant: "detail" },
      { label: "Luxury flagship room", kind: "artwork", variant: "cover" },
      { label: "Perfumes boutique", kind: "artwork", variant: "detail" }
    ],
    liveUrl: "https://luxury-taste.vercel.app/",
    repositoryUrl: "https://github.com/Gurtejhundal/luxury_taste",
    theme: { background: "#faf6f0", foreground: "#3d2f20", accent: "#a77b2f" },
    sections: [
      {
        label: "Context",
        title: "An elegant web experience designed for curated products and concierge ordering.",
        body: [
          "SWS Luxury is a digital boutique for royal attars, selected jewelry, and curated gift-ready editions. It features a concierge model that integrates with a WhatsApp ordering system for premium, high-trust client service."
        ]
      },
      {
        label: "Problem",
        title: "Standard e-commerce checkouts feel cold and mechanical for high-end boutique goods.",
        body: [
          "Curated attars and fine jewelry are bought with care. A generic shopping cart does not provide the guidance, personal touch, or custom gifting options that premium shoppers expect."
        ]
      },
      {
        label: "Strategy",
        title: "Lead with editorial layouts, high-fidelity details, and a conversational bridge.",
        body: [
          "The site uses a sparse, gold-and-ivory palette with large serif typography. Concierge buttons are placed prominently, allowing the user to initiate a WhatsApp dialog with pre-filled product selections and concierge inquiries."
        ]
      }
    ],
    credits: ["Brand direction and development — Gurtejbir Singh", "Product photography — SWS Luxury assets"]
  },
  ...Array.from({ length: 2 }, (_, index): Project => ({
    slug: `future-project-${index + 7}`,
    number: `0${index + 7}`,
    title: `Future Project ${index + 7}`,
    category: "Reserved",
    year: 2026,
    services: [],
    summary: "Reserved for future published work.",
    role: "",
    duration: "",
    stack: [],
    layout: "medium-right",
    status: "draft",
    featured: false,
    projectStatus: "Draft",
    coverPath: "",
    coverAvailable: false,
    gallery: [],
    theme: { background: "#e5e1d8", foreground: "#171714", accent: "#6f1d2b" },
    sections: [],
    credits: []
  }))
];

export const publishedProjects = projects.filter((project) => project.status === "published");
export const featuredProjects = publishedProjects.filter((project) => project.featured);

export function getProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = publishedProjects.findIndex((project) => project.slug === slug);
  return publishedProjects[(index + 1) % publishedProjects.length];
}
