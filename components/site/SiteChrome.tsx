"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { featuredProjects } from "@/data/projects";
import { site } from "@/data/site";
import { SignatureMark } from "@/components/home/SignatureMark";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/home/SocialIcons";
import { AnimatedLink } from "./AnimatedLink";
import { ContactDialog } from "./ContactDialog";
import { useRouteTransition } from "./RouteTransitionProvider";

const panelEase = [0.76, 0, 0.24, 1] as const;

export function SiteChrome() {
  const pathname = usePathname();
  const {
    activePathname,
    quickInfoOpen,
    setQuickInfoOpen,
    waitingForQuickInfo,
    notifyQuickInfoClosed
  } = useRouteTransition();
  const [darkScene, setDarkScene] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [heroChromeVisible, setHeroChromeVisible] = useState(pathname === "/");
  const reduceMotion = useReducedMotion();
  const drawerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contactTriggerRef = useRef<HTMLButtonElement>(null);
  const followerRef = useRef<HTMLSpanElement>(null);
  const restoreFocusRef = useRef(false);
  const previousPathnameRef = useRef(pathname);
  const previousOverflowRef = useRef("");
  const scrollLockedRef = useRef(false);
  const inertNodesRef = useRef<HTMLElement[]>([]);

  const releaseDrawerLock = useCallback(() => {
    if (!scrollLockedRef.current) return;
    document.body.style.overflow = previousOverflowRef.current;
    inertNodesRef.current.forEach((node) => { node.inert = false; });
    inertNodesRef.current = [];
    scrollLockedRef.current = false;
  }, []);

  useEffect(() => {
    const scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-chrome-tone]"));
    if (!scenes.length) {
      const frame = window.requestAnimationFrame(() => setDarkScene(false));
      return () => window.cancelAnimationFrame(frame);
    }

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
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const updateVisibility = () => setHeroChromeVisible(window.scrollY < window.innerHeight * 0.32);
    const frame = window.requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [pathname]);

  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      previousPathnameRef.current = pathname;
      restoreFocusRef.current = false;
      if (quickInfoOpen) setQuickInfoOpen(false);
    }
  }, [pathname, quickInfoOpen, setQuickInfoOpen]);

  useEffect(() => {
    if (!quickInfoOpen) return;

    if (!scrollLockedRef.current) {
      previousOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      inertNodesRef.current = Array.from(document.querySelectorAll<HTMLElement>(
        "[data-page-content], .home-signature-link, .home-contact, .home-bottom-nav, .home-socials, .home-quick-tab"
      ));
      inertNodesRef.current.forEach((node) => { node.inert = true; });
      scrollLockedRef.current = true;
    }
    const drawer = drawerRef.current;
    const focusable = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        restoreFocusRef.current = true;
        setQuickInfoOpen(false);
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
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [quickInfoOpen, setQuickInfoOpen]);

  useEffect(() => () => releaseDrawerLock(), [releaseDrawerLock]);

  const closeDrawer = () => {
    restoreFocusRef.current = true;
    setCursorVisible(false);
    setQuickInfoOpen(false);
  };

  const moveFollower = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (
      !followerRef.current ||
      drawerRef.current?.contains(event.target as Node) ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches
    ) {
      setCursorVisible(false);
      return;
    }

    followerRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    setCursorVisible(true);
  };

  const handleDrawerExitComplete = () => {
    setCursorVisible(false);
    releaseDrawerLock();
    if (restoreFocusRef.current && !waitingForQuickInfo) triggerRef.current?.focus();
    restoreFocusRef.current = false;
    notifyQuickInfoClosed();
  };

  const isActive = (href: string) => {
    const current = activePathname === "/" ? "/" : activePathname.replace(/\/+$/, "");
    return href === "/" ? current === "/" : current === href || current.startsWith(`${href}/`);
  };

  const useDarkScene = darkScene;

  return (
    <div className={`home-chrome ${useDarkScene ? "home-chrome--dark" : ""} ${pathname === "/" && heroChromeVisible ? "" : "home-chrome--hero-hidden"}`} data-site-chrome>
      <AnimatedLink className="home-signature-link" href="/" aria-label="Gurtejbir home">
        <SignatureMark title="Gurtejbir Singh" />
      </AnimatedLink>

      <button
        className="home-contact"
        type="button"
        ref={contactTriggerRef}
        aria-haspopup="dialog"
        aria-expanded={contactOpen}
        onClick={() => setContactOpen(true)}
        suppressHydrationWarning
      >
        <span>Contact</span><span className="home-contact__arrow" aria-hidden="true">↗</span>
      </button>

      <nav className="home-bottom-nav" aria-label="Primary navigation">
        {[
          { href: "/", label: "Home" },
          { href: "/work", label: "Works" },
          { href: "/about", label: "About" }
        ].map((item) => {
          const active = isActive(item.href);
          return (
            <AnimatedLink
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
            >
              {active ? (
                <motion.span
                  layoutId="site-nav-active"
                  className="home-bottom-nav__active"
                  transition={{ type: "spring", stiffness: 430, damping: 38 }}
                />
              ) : null}
              <span>{item.label}</span>
            </AnimatedLink>
          );
        })}
      </nav>

      <div className="home-socials" aria-label="Social profiles">
        <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram profile"><InstagramIcon /></a>
        <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /></a>
        <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinIcon /></a>
      </div>

      <button
        className="home-quick-tab"
        type="button"
        ref={triggerRef}
        aria-expanded={quickInfoOpen}
        aria-controls="global-quick-info"
        onClick={() => {
          restoreFocusRef.current = false;
          setQuickInfoOpen(true);
        }}
        suppressHydrationWarning
      >
        Quick info
      </button>

      <AnimatePresence onExitComplete={handleDrawerExitComplete}>
        {quickInfoOpen ? (
          <motion.div
            className="home-drawer-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.74, ease: panelEase }}
            onPointerMove={moveFollower}
            onPointerLeave={() => setCursorVisible(false)}
            onPointerDown={(event) => {
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
              id="global-quick-info"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="global-quick-info-title"
              initial={{ x: reduceMotion ? 12 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: reduceMotion ? 12 : "100%" }}
              transition={{ duration: reduceMotion ? 0.14 : 0.78, ease: panelEase }}
              onPointerEnter={() => setCursorVisible(false)}
              onPointerMove={(event) => event.stopPropagation()}
            >
              <header className="home-drawer__header">
                <p id="global-quick-info-title">Quick info</p>
                <button type="button" onClick={closeDrawer} aria-label="Close Quick info" suppressHydrationWarning>Close</button>
              </header>

              <div className="home-drawer__grid">
                <section><h2>Available</h2><p>Selected freelance and collaborative projects</p></section>
                <section><h2>Location</h2><p>Amritsar, Punjab · Working remotely</p></section>
                <section><h2>Focus</h2><p>Frontend<br />Interface design<br />Motion systems<br />Design systems</p></section>
                <section><h2>Tools</h2><p>React<br />Next.js<br />TypeScript<br />GSAP<br />Django<br />Figma</p></section>
                <section><h2>Capabilities</h2><p>Responsive UI engineering<br />Interaction prototyping<br />Frontend architecture<br />Case-study systems</p></section>
                <section className="home-drawer__explore">
                  <h2>Explore</h2>
                  <p>
                    <AnimatedLink href="/about">About profile ↗</AnimatedLink>
                    <AnimatedLink href="/work">All projects ↗</AnimatedLink>
                    <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                  </p>
                </section>
                <section className="home-drawer__work">
                  <h2>Work index</h2>
                  <ol>
                    {featuredProjects.map((project) => (
                      <li key={project.slug}>
                        <AnimatedLink href={`/work/${project.slug}`}>{project.title}<span>{project.year}</span></AnimatedLink>
                      </li>
                    ))}
                  </ol>
                </section>
                <section className="home-drawer__email"><h2>Email</h2><a href={`mailto:${site.email}`}>{site.email}</a></section>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} triggerRef={contactTriggerRef} />
    </div>
  );
}
