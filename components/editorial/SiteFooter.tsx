import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer page-shell">
      <p>© {site.year} {site.name}</p>
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      <Link href="#top">Back to top ↑</Link>
    </footer>
  );
}
