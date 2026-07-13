"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectArtwork } from "./ProjectArtwork";

export function ProjectShowcase({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const [cursor, setCursor] = useState({ active: false, x: 0, y: 0 });

  return (
    <article className={`project-showcase project-showcase--${project.layout}`}>
      <div className="project-showcase__number">{project.number}</div>
      <Link
        className="project-showcase__media"
        href={`/work/${project.slug}`}
        aria-label={`Read the ${project.title} case study`}
        onPointerEnter={(event) => {
          if (reduceMotion || event.pointerType === "touch") return;
          setCursor({ active: true, x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
        }}
        onPointerMove={(event) => {
          if (reduceMotion || event.pointerType === "touch") return;
          const rect = event.currentTarget.getBoundingClientRect();
          setCursor({ active: true, x: event.clientX - rect.left, y: event.clientY - rect.top });
        }}
        onPointerLeave={() => setCursor((value) => ({ ...value, active: false }))}
      >
        <ProjectArtwork project={project} />
        <span
          className={`project-cursor ${cursor.active ? "project-cursor--active" : ""}`}
          style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
          aria-hidden="true"
        >
          View<br />project
        </span>
      </Link>
      <div className="project-showcase__copy">
        <div>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <div className="project-showcase__services">{project.services.join(" · ")}</div>
        <Link className="editorial-link" href={`/work/${project.slug}`}>
          Read case study <span>↗</span>
        </Link>
      </div>
    </article>
  );
}
