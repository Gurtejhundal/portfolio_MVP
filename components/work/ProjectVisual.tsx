import Image from "next/image";
import { ProjectArtwork } from "@/components/editorial/ProjectArtwork";
import type { Project, ProjectMedia } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
  media?: ProjectMedia;
  mode: "card" | "gallery";
};

export function ProjectVisual({ project, media, mode }: ProjectVisualProps) {
  if (media?.kind === "image" && media.src && media.width && media.height) {
    if (mode === "card") {
      return (
        <Image
          src={media.src}
          alt=""
          fill
          sizes="(max-width: 760px) 92vw, (max-width: 1200px) 58vw, 46vw"
        />
      );
    }

    const variant = media.variant ?? "cover";

    return (
      <figure className={`work-project-visual work-project-visual--image work-project-visual--image-${variant}`}>
        <a
          className="work-project-visual__image-card"
          href={media.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open full ${media.label} screenshot`}
          style={{
            "--visual-surface": project.theme.background,
            "--visual-accent": project.theme.accent
          } as React.CSSProperties}
        >
          <Image
            src={media.src}
            alt={media.alt ?? media.label}
            fill
            sizes="(max-width: 760px) 92vw, 52vw"
          />
          <span className="work-project-visual__open" aria-hidden="true">View full ↗</span>
        </a>
        <figcaption>{media.label}</figcaption>
      </figure>
    );
  }

  if (mode === "card") {
    return <ProjectArtwork project={project} />;
  }

  return (
    <figure className={`work-project-visual work-project-visual--artwork work-project-visual--${media?.variant ?? "cover"}`}>
      <div className="work-project-visual__canvas">
        <ProjectArtwork project={project} />
        {media?.variant === "system" ? (
          <div className="work-project-visual__system" aria-hidden="true">
            <span /><span /><span /><span /><span /><span />
          </div>
        ) : null}
        {media?.variant === "detail" ? (
          <div className="work-project-visual__detail" aria-hidden="true">
            <span /><span /><span />
          </div>
        ) : null}
      </div>
      <figcaption>{media?.label ?? `${project.title} visual direction`}</figcaption>
    </figure>
  );
}
