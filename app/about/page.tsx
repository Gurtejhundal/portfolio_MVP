import type { Metadata } from "next";
import { AboutExperience } from "@/components/about/AboutExperience";

export const metadata: Metadata = {
  title: "About",
  description: "About Gurtejbir Singh's approach to interface design, frontend engineering and digital product systems.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return <AboutExperience />;
}
