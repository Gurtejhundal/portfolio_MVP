"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ContactDepthScene } from "@/components/home/ContactDepthScene";
import { featuredProjects, type Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";

const panelEase = [0.76, 0, 0.24, 1] as const;
const emptySubscribe = () => () => undefined;

function ProjectDialog({ project, onClose, onExited }: { project: Project | null; onClose: () => void; onExited: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousOverflowRef = useRef("");
  const scrollLockedRef = useRef(false);
  const inertNodesRef = useRef<HTMLElement[]>([]);
  const reduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    document.body.style.overflow = previousOverflowRef.current;
    inertNodesRef.current.forEach((node) => { node.inert = false; });
    inertNodesRef.current = [];
    scrollLockedRef.current = false;
  }, []);

  useEffect(() => unlockScroll, [unlockScroll]);

  useEffect(() => {
    if (!project) return;
    if (!scrollLockedRef.current) {
      previousOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      inertNodesRef.current = Array.from(document.querySelectorAll<HTMLElement>("[data-page-content], [data-site-chrome]"));
      inertNodesRef.current.forEach((node) => { node.inert = true; });
      scrollLockedRef.current = true;
    }
    const focusTimer = window.requestAnimationFrame(() => closeRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const panelFocusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const focusable = [closeRef.current, ...Array.from(panelFocusable ?? [])].filter(Boolean) as HTMLElement[];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence onExitComplete={() => { unlockScroll(); onExited(); }}>
      {project ? (
        <motion.div
          className="work-dialog-shell"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`work-dialog-${project.slug}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.56, ease: panelEase }}
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.button
            ref={closeRef}
            className="work-dialog__close"
            type="button"
            onClick={onClose}
            aria-label={`Close ${project.title} project details`}
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.42, delay: reduceMotion ? 0 : 0.22 }}
          >
            <span aria-hidden="true">×</span>
          </motion.button>

          <motion.div
            className="work-dialog"
            ref={panelRef}
            initial={{ y: reduceMotion ? 18 : "102%" }}
            animate={{ y: 0 }}
            exit={{ y: reduceMotion ? 18 : "102%" }}
            transition={{ duration: reduceMotion ? 0.16 : 0.78, ease: panelEase }}
          >
            <div className="work-dialog__layout">
              <aside className="work-dialog__info">
                <p className="work-dialog__index">Project / {project.number}</p>
                <h2 id={`work-dialog-${project.slug}`}>{project.title}</h2>
                <p className="work-dialog__summary">{project.summary}</p>

                <dl>
                  <div><dt>Discipline</dt><dd>{project.services.join(" · ")}</dd></div>
                  <div><dt>Role</dt><dd>{project.role}</dd></div>
                  <div><dt>Year / status</dt><dd>{project.year} · {project.projectStatus}</dd></div>
                  <div><dt>Built with</dt><dd>{project.stack.join(" · ")}</dd></div>
                </dl>

                {(project.liveUrl || project.repositoryUrl) ? (
                  <div className="work-dialog__links">
                    {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Visit live project ↗</a> : null}
                    {project.repositoryUrl ? <a href={project.repositoryUrl} target="_blank" rel="noreferrer">Open repository ↗</a> : null}
                  </div>
                ) : (
                  <p className="work-dialog__status">This project is presented as a working direction while its public build is prepared.</p>
                )}
              </aside>

              <div className="work-dialog__media">
                {project.gallery.map((media) => (
                  <ProjectVisual project={project} media={media} mode="gallery" key={`${project.slug}-${media.label}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

export function WorksExperience() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveProject(project);
  };

  const closeProject = useCallback(() => {
    setActiveProject(null);
  }, []);

  const restoreProjectTrigger = () => triggerRef.current?.focus();

  const moveViewCursor = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!cursorRef.current || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cursorRef.current.style.transform = `translate3d(${event.clientX + 14}px, ${event.clientY + 14}px, 0)`;
    cursorRef.current.classList.add("is-visible");
  };

  const hideViewCursor = () => cursorRef.current?.classList.remove("is-visible");

  return (
    <div className="works-page" id="top" data-chrome-tone="light">
      <div className="works-page__foreground">
        <header className="works-intro" aria-labelledby="works-title">
          <div className="works-intro__sticky">
            <p data-route-reveal="label">Selected archive</p>
            <div className="works-intro__title-row heading-mask">
              <h1 id="works-title" data-route-heading-line>Selected works</h1>
              <span>[{String(featuredProjects.length).padStart(2, "0")}]</span>
            </div>
          </div>
        </header>

        <section className="works-grid" aria-label="Selected projects">
          {featuredProjects.map((project, index) => {
            const cover = project.gallery[0];
            return (
              <article className={`works-card works-card--${index + 1}`} key={project.slug} data-route-reveal="content">
                <button
                  className="works-card__button"
                  type="button"
                  onClick={(event) => openProject(project, event.currentTarget)}
                  onPointerEnter={moveViewCursor}
                  onPointerMove={moveViewCursor}
                  onPointerLeave={hideViewCursor}
                  onBlur={hideViewCursor}
                  aria-haspopup="dialog"
                >
                  <span className="works-card__media"><ProjectVisual project={project} media={cover} mode="card" /></span>
                  <span className="works-card__meta"><strong>{project.title}</strong><span>{project.category}</span><span>{project.year}</span></span>
                </button>
              </article>
            );
          })}
        </section>
      </div>

      <div className="works-contact-sentinel" data-chrome-tone="dark" aria-hidden="true" />

      <ContactDepthScene className="works-contact-depth" headingId="works-contact-title" revealTrigger=".works-contact-sentinel" />

      <span className="works-view-cursor" ref={cursorRef} aria-hidden="true">View</span>
      <ProjectDialog project={activeProject} onClose={closeProject} onExited={restoreProjectTrigger} />
    </div>
  );
}
