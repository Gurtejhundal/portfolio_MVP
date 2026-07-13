"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { featuredProjects } from "@/data/projects";
import { site } from "@/data/site";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { SignatureMark } from "./SignatureMark";

const panelEase = [0.76, 0, 0.24, 1] as const;

export function HomeChrome() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkScene, setDarkScene] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const followerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-chrome-tone]"));
    if (!scenes.length) return;
    const intersecting = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) intersecting.add(entry.target);
        else intersecting.delete(entry.target);
      });
      const active = scenes.filter((scene) => intersecting.has(scene)).at(-1);
      setDarkScene(active?.dataset.chromeTone === "dark");
    }, { rootMargin: "-48% 0px -48% 0px", threshold: 0 });
    scenes.forEach((scene) => observer.observe(scene));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const drawer = drawerRef.current;
    const focusable = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
        window.setTimeout(() => triggerRef.current?.focus(), 0);
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
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
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [drawerOpen]);

  const closeDrawer = () => {
    setDrawerOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  const moveFollower = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!followerRef.current || window.matchMedia("(pointer: coarse)").matches) return;
    followerRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    setCursorVisible(true);
  };

  return (
    <div className={`home-chrome ${darkScene ? "home-chrome--dark" : ""}`}>
      <Link className="home-signature-link" href="#home" aria-label="Gurtejbir home">
        <SignatureMark title="Gurtejbir Singh" />
      </Link>

      <Link className="home-contact" href="/contact">
        <span>Contact</span><span className="home-contact__arrow" aria-hidden="true">↗</span>
      </Link>

      <nav className="home-bottom-nav" aria-label="Primary navigation">
        <Link href="/" aria-current="page"><motion.span layoutId="home-nav-active" className="home-bottom-nav__active" />Home</Link>
        <Link href="/work">Works</Link>
        <Link href="/about">About</Link>
      </nav>

      <div className="home-socials" aria-label="Social profiles">
        <span className="home-socials__unavailable" title="Instagram profile URL is not configured" aria-label="Instagram profile URL is not configured">
          <InstagramIcon />
        </span>
        <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /></a>
        <span className="home-socials__unavailable" title="LinkedIn profile URL is not configured" aria-label="LinkedIn profile URL is not configured">
          <LinkedinIcon />
        </span>
      </div>

      <button
        className="home-quick-tab"
        type="button"
        ref={triggerRef}
        aria-expanded={drawerOpen}
        aria-controls="home-quick-info"
        onClick={() => setDrawerOpen(true)}
        suppressHydrationWarning
      >
        Quick info
      </button>

      <AnimatePresence>
        {drawerOpen ? (
          <motion.div
            className="home-drawer-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.74, ease: panelEase }}
            onPointerMove={moveFollower}
            onPointerLeave={() => setCursorVisible(false)}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeDrawer();
            }}
          >
            <span
              className={`home-drawer-cursor ${cursorVisible ? "is-visible" : ""}`}
              ref={followerRef}
              aria-hidden="true"
            >
              Close
            </span>
            <motion.aside
              className="home-drawer"
              id="home-quick-info"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="home-quick-info-title"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.78, ease: panelEase }}
              onPointerEnter={() => setCursorVisible(false)}
            >
              <header className="home-drawer__header">
                <p id="home-quick-info-title">Quick info</p>
                <button type="button" onClick={closeDrawer} aria-label="Close Quick info">Close</button>
              </header>

              <div className="home-drawer__grid">
                <section><h2>Available</h2><p>Selected freelance and collaborative projects</p></section>
                <section><h2>Location</h2><p>Amritsar, Punjab · Working remotely</p></section>
                <section><h2>Focus</h2><p>Frontend<br />Interface design<br />Motion systems<br />Design systems</p></section>
                <section><h2>Tools</h2><p>React<br />Next.js<br />TypeScript<br />GSAP<br />Django<br />Figma</p></section>
                <section><h2>Capabilities</h2><p>Responsive UI engineering<br />Interaction prototyping<br />Frontend architecture<br />Case-study systems</p></section>
                <section className="home-drawer__explore">
                  <h2>Explore</h2>
                  <p><Link href="/about" onClick={closeDrawer}>About profile ↗</Link><Link href="/work" onClick={closeDrawer}>All projects ↗</Link><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a></p>
                </section>
                <section className="home-drawer__work">
                  <h2>Work index</h2>
                  <ol>
                    {featuredProjects.map((project) => (
                      <li key={project.slug}><Link href={`/work/${project.slug}`} onClick={closeDrawer}>{project.title}<span>{project.year}</span></Link></li>
                    ))}
                  </ol>
                </section>
                <section className="home-drawer__email"><h2>Email</h2><a href={`mailto:${site.email}`}>{site.email}</a></section>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
