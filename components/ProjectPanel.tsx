import { Project } from "@/data/projects";
import { ImageReveal } from "./ImageReveal";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

type ProjectPanelProps = {
  project: Project;
  index: number;
  total: number;
};

export function ProjectPanel({ project, index, total }: ProjectPanelProps) {
  return (
    <article className={`project-panel project-panel--${project.accent}`}>
      <div className="project-panel__copy">
        <Reveal>
          <div className="project-count">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(total).padStart(2, "0")}</span>
          </div>
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <p className="project-description">{project.description}</p>
          <dl className="project-meta-list">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
          </dl>
          <MagneticButton href={project.liveUrl} target="_blank" rel="noreferrer">
            {project.featured ? "View live experience" : "View archive project"}
          </MagneticButton>
        </Reveal>
      </div>
      <a
        aria-label={`Open ${project.title} project`}
        className="project-panel__media-link"
        href={project.liveUrl}
        rel="noreferrer"
        target="_blank"
      >
        <ImageReveal
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 900px) 100vw, 58vw"
          frameClassName="project-panel__image"
        />
      </a>
    </article>
  );
}
