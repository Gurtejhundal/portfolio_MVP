"use client";

import Image from "next/image";
import { MouseEvent } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";

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

  return (
    <motion.a
      aria-label={`Open ${project.title} live project`}
      className={`cinematic-project-card ${isFeatured ? "cinematic-project-card--featured" : ""}`}
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
          sizes={isFeatured ? "(max-width: 900px) 100vw, 64vw" : "(max-width: 900px) 100vw, 34vw"}
          src={project.image.src}
          width={project.image.width}
        />
      </div>

      <div className="cinematic-project-card__body">
        <div className="cinematic-project-card__meta">
          <span>
            {String(index + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
          </span>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="cinematic-project-card__summary">{project.summary}</p>
        <p className="cinematic-project-card__insight">{project.description}</p>

        <div className="cinematic-project-card__details">
          <div>
            <span>Role</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span>Focus</span>
            <ul>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <span className="cinematic-project-card__cta">
          View live experience <i aria-hidden="true">-&gt;</i>
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
