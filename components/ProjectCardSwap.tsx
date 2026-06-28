"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import CardSwap, { Card } from "./CardSwap.jsx";
import GlassSurface from "./GlassSurface.jsx";

function useSwapSize() {
  const [size, setSize] = useState({ width: 620, height: 430, distance: 48, vertical: 56 });

  useEffect(() => {
    const update = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth < 520) {
        setSize({ width: 310, height: 390, distance: 24, vertical: 32 });
        return;
      }

      if (viewportWidth < 920) {
        setSize({ width: 470, height: 410, distance: 34, vertical: 42 });
        return;
      }

      setSize({ width: 620, height: 430, distance: 48, vertical: 56 });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

export function ProjectCardSwap() {
  const { width, height, distance, vertical } = useSwapSize();

  return (
    <div className="project-swap">
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={26}
        backgroundOpacity={0.07}
        saturation={1.18}
        className="student-glass-shell project-swap__brief"
      >
        <div>
          <span>Project proof</span>
          <h3>Interfaces I built to practice taste, structure, and execution.</h3>
          <p>
            These are not mockups. Each card points to a live build and shows the kind of
            frontend decisions I am learning to make sharper: hierarchy, responsive layout,
            motion, and visual systems.
          </p>
        </div>
      </GlassSurface>

      <div className="project-swap__stage" aria-label="Live project showcase">
        <CardSwap
          width={width}
          height={height}
          cardDistance={distance}
          verticalDistance={vertical}
          delay={4200}
          pauseOnHover
          skewAmount={4}
          easing="elastic"
        >
          {projects.map((project, index) => (
            <Card customClass="project-swap-card" key={project.slug}>
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <div className="project-swap-card__media">
                  <Image
                    alt={project.image.alt}
                    src={project.image.src}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(max-width: 760px) 82vw, 620px"
                    priority={index === 0}
                  />
                </div>
                <div className="project-swap-card__body">
                  <div className="project-swap-card__meta">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <strong>{project.tags.slice(0, 2).join(" / ")}</strong>
                </div>
              </a>
            </Card>
          ))}
        </CardSwap>
      </div>
    </div>
  );
}
