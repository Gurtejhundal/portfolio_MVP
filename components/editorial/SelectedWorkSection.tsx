import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { ProjectShowcase } from "./ProjectShowcase";

export function SelectedWorkSection({ archive = false }: { archive?: boolean }) {
  return (
    <section className={`selected-work ${archive ? "selected-work--archive" : ""}`} aria-labelledby="selected-work-title">
      <div className="selected-work__header page-shell">
        <p className="section-label">{archive ? "Work archive" : "Selected work"} [{String(featuredProjects.length).padStart(2, "0")}]</p>
        <h2 id="selected-work-title">Selected<br />Work</h2>
        <p>A selection of digital products and experiences developed from strategy to deployment.</p>
      </div>

      <div className="selected-work__stream page-shell">
        {featuredProjects.map((project) => <ProjectShowcase project={project} key={project.slug} />)}
      </div>

      {!archive ? (
        <div className="selected-work__ending page-shell">
          <p>More experiments and selected work will join the archive as they are ready to publish.</p>
          <Link href="/work" className="editorial-link editorial-link--large">View all projects <span>↗</span></Link>
        </div>
      ) : null}
    </section>
  );
}
