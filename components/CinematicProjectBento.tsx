"use client";

import Image from "next/image";
import { MouseEvent } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";

const cardLayouts = ["hero", "tall", "wide", "compact"] as const;

function updateFeaturedPointer(event: MouseEvent<HTMLAnchorElement>) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;
  const imageX = (xPercent - 50) * -0.12;
  const imageY = (yPercent - 50) * -0.1;

  card.style.setProperty("--project-x", `${xPercent}%`);
  card.style.setProperty("--project-y", `${yPercent}%`);
  card.style.setProperty("--project-image-x", `${imageX}px`);
  card.style.setProperty("--project-image-y", `${imageY}px`);
}

function resetFeaturedPointer(event: MouseEvent<HTMLAnchorElement>) {
  const card = event.currentTarget;
  card.style.setProperty("--project-x", "50%");
  card.style.setProperty("--project-y", "50%");
  card.style.setProperty("--project-image-x", "0px");
  card.style.setProperty("--project-image-y", "0px");
}

function ProjectCard({
  project,
  index
}: {
  project: Project;
  index: number;
}) {
  const isFeatured = index === 0;
  const layout = cardLayouts[index] ?? "compact";

  return (
    <motion.a
      aria-label={`Open ${project.title} live project`}
      className={`cinematic-project-card cinematic-project-card--${layout}`}
      href={project.liveUrl}
      initial={{ opacity: 0, y: 34 }}
      onMouseLeave={isFeatured ? resetFeaturedPointer : undefined}
      onMouseMove={isFeatured ? updateFeaturedPointer : undefined}
      rel="noopener noreferrer"
      target="_blank"
      transition={{ duration: 0.72, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: false, margin: "-12% 0px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="cinematic-project-card__media">
        <Image
          alt={project.image.alt}
          className="cinematic-project-card__image"
          height={project.image.height}
          priority={isFeatured}
          sizes={isFeatured ? "(max-width: 900px) 100vw, 64vw" : "(max-width: 900px) 100vw, 34vw"}
          src={project.image.src}
          width={project.image.width}
        />
      </div>

      <div className="cinematic-project-card__body">
        <div className="cinematic-project-card__meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="cinematic-project-card__summary">{project.summary}</p>
        <span className="cinematic-project-card__tagline">
          {project.tags.slice(0, 2).join(" / ")}
        </span>
      </div>
    </motion.a>
  );
}

export function CinematicProjectBento() {
  return (
    <div className="cinematic-project-bento">
      {projects.map((project, index) => (
        <ProjectCard index={index} key={project.slug} project={project} />
      ))}
    </div>
  );
}
