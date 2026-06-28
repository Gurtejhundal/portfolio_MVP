export const site = {
  name: "Gurtejbir Singh",
  label: "Student Creative Developer",
  email: "gurtejbir.29107@gmail.com",
  phone: "7626929107",
  location: "Amritsar, Punjab",
  description:
    "B.Tech student building polished web interfaces, motion-led screens, and project-backed frontend work.",
  footer:
    "Designed and built by Gurtejbir Singh. Student portfolio focused on skill, proof, and steady execution."
};

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const manifesto = [
  {
    lead: "Skill needs proof.",
    support: "Projects show more than claims."
  },
  {
    lead: "Taste is learned by building.",
    support: "Every screen is a sharper attempt."
  },
  {
    lead: "Interfaces should communicate",
    support: "before the user has to decode them."
  },
  {
    lead: "Good work compounds.",
    support: "One project improves the next."
  }
];

export const process = [
  {
    title: "Study",
    text: "Break down strong interfaces, spacing, motion, typography, and how attention moves through a page."
  },
  {
    title: "Structure",
    text: "Plan sections, responsive behavior, and content hierarchy before styling the surface."
  },
  {
    title: "Interface",
    text: "Build the screen with clear layout, accessible markup, and consistent component behavior."
  },
  {
    title: "Motion",
    text: "Use animation to reveal, pace, and clarify instead of distracting from the content."
  },
  {
    title: "Ship",
    text: "Deploy the work, test real screens, find weak points, and improve the next version."
  }
];

export const capabilities = [
  "UI Design",
  "Frontend Development",
  "Motion Design",
  "Next.js",
  "React",
  "Responsive Systems",
  "Interaction Design",
  "Deployment",
  "TypeScript",
  "Communication",
  "Leadership",
  "Critical Thinking"
];

export const credentials = {
  education: [
    "Divine Light Public School - 10th - 94%",
    "Divine Light Public School - 12th - 94%",
    "B.Tech student"
  ],
  certificates: [
    {
      title: "Leadership Fundamentals",
      issuer: "2025",
      href: "https://drive.google.com/file/d/1TZKULAFWpNlw9rzkQDKEe5mfPYJZXbVD/view?usp=drive_link"
    },
    {
      title: "Leadership and Management",
      issuer: "2025",
      href: "https://drive.google.com/file/d/1dzElGHdWmK0dQN0Ypqnb33j_l6sjs_ZH/view?usp=drive_link"
    },
    {
      title: "Gemini",
      issuer: "2025",
      href: "https://drive.google.com/file/d/1iFbEl34JtgzbXnGjxpl5--tZIMkQ3Puf/view?usp=drive_link"
    }
  ]
};

export const narrativeImages = [
  {
    title: "Build with atmosphere.",
    caption: "A screen should carry mood before it asks for action.",
    asset: "workingShot"
  },
  {
    title: "Think in systems.",
    caption: "Every detail has to belong to the same visual language.",
    asset: "silhouetteShot"
  },
  {
    title: "Move with intent.",
    caption: "Motion should guide attention, not compete for it.",
    asset: "motionShot"
  },
  {
    title: "Detail creates memory.",
    caption: "Small visual decisions are where premium work becomes recognizable.",
    asset: "detailShot"
  },
  {
    title: "Presence over noise.",
    caption: "The strongest interfaces feel deliberate from the first pixel.",
    asset: "fullBodyEditorial"
  }
] as const;
