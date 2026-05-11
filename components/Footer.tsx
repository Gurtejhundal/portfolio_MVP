import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>{site.footer}</p>
      <a href="#top">Back to top</a>
    </footer>
  );
}
