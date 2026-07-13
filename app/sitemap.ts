import type { MetadataRoute } from "next";
import { publishedProjects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...publishedProjects.map((project) => ({ url: `${site.url}/work/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 }))
  ];
}
