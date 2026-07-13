import type { Metadata } from "next";
import { WorksExperience } from "@/components/work/WorksExperience";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Case studies and selected digital work by Gurtejbir Singh.",
  alternates: { canonical: "/work" }
};

export default function WorkPage() {
  return <WorksExperience />;
}
