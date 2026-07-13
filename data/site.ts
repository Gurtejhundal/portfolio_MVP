export const site = {
  name: "Gurtejbir Singh",
  role: "Designer & Developer",
  email: "gurtejbir.29107@gmail.com",
  location: "Punjab, India",
  availability: "Available for selected projects",
  year: 2026,
  statement: "I design and develop distinctive digital products and web experiences.",
  focus: "Product interfaces, brand websites and interactive editorial experiences",
  github: "https://github.com/Gurtejhundal",
  instagram: "https://www.instagram.com/gurtejbirsinghh/",
  linkedin: "https://www.linkedin.com/in/gurtejbir-singh/",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;
