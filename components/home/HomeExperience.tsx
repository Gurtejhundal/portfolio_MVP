"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { ProjectArtwork } from "@/components/editorial/ProjectArtwork";
import { featuredProjects } from "@/data/projects";
import { ComparisonSlider } from "./ComparisonSlider";
import { ContactDepthScene } from "./ContactDepthScene";
import { HomePreloader } from "./HomePreloader";

export function HomeExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const animateChromeRef = useRef(false);
  const [introReady, setIntroReady] = useState(false);
  const revealHome = useCallback(() => setIntroReady(true), []);

  useLayoutEffect(() => {
    if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animateChromeRef.current = window.sessionStorage.getItem("gurtejbir-home-intro-v1") !== "played";
    const chromeElements = [
      document.querySelector(".home-contact"),
      document.querySelector(".home-bottom-nav"),
      document.querySelector(".home-signature-link"),
      document.querySelector(".home-socials"),
      document.querySelector(".home-quick-tab")
    ].filter(Boolean);
    const context = gsap.context(() => {
      gsap.set([".home-hero__descriptor", ".home-hero__scroll"], { autoAlpha: 0, y: 24 });
      if (animateChromeRef.current) gsap.set(chromeElements, { autoAlpha: 0, y: 24 });
      gsap.set(".home-hero__line > span", { yPercent: 112 });
      gsap.set(".home-hero__portrait", {
        autoAlpha: 0,
        y: 60,
        scale: 1.035,
        filter: "blur(4px)"
      });
    }, rootRef);
    return () => {
      context.revert();
      gsap.set(chromeElements, { clearProps: "opacity,visibility,transform" });
    };
  }, []);

  useLayoutEffect(() => {
    if (!introReady || !rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chrome = {
      contact: document.querySelector(".home-contact"),
      nav: document.querySelector(".home-bottom-nav"),
      signature: document.querySelector(".home-signature-link"),
      socials: document.querySelector(".home-socials"),
      quickInfo: document.querySelector(".home-quick-tab")
    };
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
      if (animateChromeRef.current) {
        timeline
          .to(chrome.signature, { autoAlpha: 1, y: 0, duration: 0.72 }, 0)
          .to(chrome.contact, { autoAlpha: 1, y: 0, duration: 0.65 }, 0.06);
      }
      timeline
        .to(".home-hero__line--one > span", { yPercent: 0, duration: 0.92 }, 0.18)
        .to(".home-hero__line--two > span", { yPercent: 0, duration: 0.92 }, 0.27)
        .to(".home-hero__descriptor", { autoAlpha: 1, y: 0, duration: 0.68 }, 0.43)
        .to(".home-hero__portrait", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.05
        }, 0.52);
      if (animateChromeRef.current) {
        timeline
          .to(chrome.nav, { autoAlpha: 1, y: 0, duration: 0.64 }, 0.64)
          .to(chrome.quickInfo, { autoAlpha: 1, y: 0, duration: 0.56 }, 0.7)
          .to(".home-hero__scroll", { autoAlpha: 1, y: 0, duration: 0.56 }, 0.74)
          .to(chrome.socials, { autoAlpha: 1, y: 0, duration: 0.56 }, 0.78);
      } else {
        timeline.to(".home-hero__scroll", { autoAlpha: 1, y: 0, duration: 0.56 }, 0.64);
      }
    }, rootRef);
    return () => {
      context.revert();
      gsap.set(Object.values(chrome).filter(Boolean), { clearProps: "opacity,visibility,transform" });
    };
  }, [introReady]);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      gsap.to(".home-hero-inner", {
        scale: 0.95,
        opacity: 0.74,
        yPercent: -2.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-hero-stage",
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(".home-hero__portrait", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-hero-stage",
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      /* ── Desktop: pinned horizontal carousel ── */
      media.add("(min-width: 900px)", () => {
        const track = document.querySelector<HTMLElement>(".recent-work__track");
        const cards = gsap.utils.toArray<HTMLElement>(".recent-card");
        if (!track || !cards.length) return;

        gsap.set(cards, { yPercent: 155, opacity: 1 });
        gsap.set(track, { x: 0 });
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".recent-work-scene",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true
          }
        });
        timeline
          .to(".recent-work__title", { scale: 0.72, yPercent: -28, opacity: 0.16, ease: "none", duration: 0.24 }, 0.08)
          .to(cards, { yPercent: 0, stagger: 0.045, ease: "power3.out", duration: 0.34 }, 0.16)
          .to(track, {
            x: () => -Math.max(0, track.scrollWidth - window.innerWidth + window.innerWidth * 0.08),
            ease: "none",
            duration: 0.58
          }, 0.38)
          .to(cards, { yPercent: -8, opacity: 0.84, stagger: 0.012, ease: "none", duration: 0.12 }, 0.88);
      });

      /* ── Mobile: pinned horizontal carousel ── */
      media.add("(max-width: 899px)", () => {
        const scene = document.querySelector<HTMLElement>(".recent-work-scene");
        const sticky = document.querySelector<HTMLElement>(".recent-work__sticky");
        const track = document.querySelector<HTMLElement>(".recent-work__track");
        const title = document.querySelector<HTMLElement>(".recent-work__title");
        const cards = gsap.utils.toArray<HTMLElement>(".recent-card");
        if (!scene || !sticky || !track || !title || !cards.length) return;

        const setupMobileTimeline = () => {
          /* Remove static mobile overrides so GSAP can control layout */
          scene.style.height = "";
          scene.style.padding = "0";
          sticky.style.position = "sticky";
          sticky.style.top = "0";
          sticky.style.height = "100svh";
          sticky.style.overflow = "hidden";
          track.style.position = "absolute";
          track.style.top = "22vh";
          track.style.left = "5vw";
          track.style.display = "flex";
          track.style.flexWrap = "nowrap";
          track.style.width = "max-content";
          track.style.height = "auto";
          track.style.gap = "clamp(14px, 4vw, 22px)";
          track.style.paddingRight = "10vw";
          track.style.transform = "";
          title.style.position = "absolute";
          title.style.top = "50%";
          title.style.left = "50%";
          title.style.transform = "translate(-50%, -50%)";
          title.style.margin = "0";

          cards.forEach(card => {
            card.style.flex = "0 0 auto";
            card.style.width = "";
            card.style.margin = "0";
            card.style.transform = "";
          });

          const horizontalTravel = Math.max(0, track.scrollWidth - window.innerWidth + window.innerWidth * 0.05);
          const introDistance = window.innerHeight * 0.5;
          const exitDistance = window.innerHeight * 0.35;
          const totalScroll = horizontalTravel + introDistance + exitDistance;

          scene.style.height = `${totalScroll + window.innerHeight}px`;

          gsap.set(cards, { yPercent: 100, opacity: 0 });
          gsap.set(track, { x: 0 });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: scene,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.5,
              pin: false,
              invalidateOnRefresh: true
            }
          });

          /* Phase 1 — Heading shrinks */
          timeline.to(title, {
            scale: 0.74,
            yPercent: -32,
            opacity: 0.12,
            ease: "none",
            duration: 0.12
          }, 0);

          /* Phase 2 — Cards rise in */
          timeline.to(cards, {
            yPercent: 0,
            opacity: 1,
            stagger: 0.02,
            ease: "power3.out",
            duration: 0.16
          }, 0.1);

          /* Phase 3 — Horizontal movement */
          timeline.to(track, {
            x: -horizontalTravel,
            ease: "none",
            duration: 0.62
          }, 0.26);

          /* Phase 4 — Gentle exit for final cards */
          timeline.to(cards, {
            yPercent: -6,
            opacity: 0.85,
            stagger: 0.008,
            ease: "none",
            duration: 0.1
          }, 0.88);
        };

        /* Wait for fonts and images before measuring */
        const waitAndSetup = () => {
          const images = track.querySelectorAll<HTMLImageElement>("img");
          const imagePromises = Array.from(images).map(img =>
            img.complete ? Promise.resolve() : new Promise<void>(resolve => {
              img.addEventListener("load", () => resolve(), { once: true });
              img.addEventListener("error", () => resolve(), { once: true });
            })
          );

          Promise.all([document.fonts.ready, ...imagePromises]).then(() => {
            setupMobileTimeline();
            ScrollTrigger.refresh();
          });
        };

        waitAndSetup();

        /* Handle orientation changes */
        const handleResize = () => {
          ScrollTrigger.getAll().forEach(st => {
            if (st.trigger === scene) st.kill();
          });
          /* Clear inline transforms */
          gsap.set([track, title, ...cards], { clearProps: "all" });
          waitAndSetup();
        };

        let resizeTimer: ReturnType<typeof setTimeout>;
        const debouncedResize = () => {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(handleResize, 250);
        };
        window.addEventListener("orientationchange", debouncedResize);

        return () => {
          window.removeEventListener("orientationchange", debouncedResize);
          clearTimeout(resizeTimer);
          /* Clear inline styles on cleanup */
          [scene, sticky, track, title, ...cards].forEach(el => {
            if (el) el.removeAttribute("style");
          });
        };
      });
    }, rootRef);

    ScrollTrigger.refresh();
    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <div className="home-experience" ref={rootRef}>
      <HomePreloader onReveal={revealHome} />

      <div className="home-page__foreground">
        <section className="home-hero-stage" id="home" data-chrome-tone="light" aria-labelledby="home-title">
          <div className="home-hero-sticky">
            <div className="home-hero-inner">
              <h1 className="home-hero__title home-hero__title--rear" id="home-title">
                <span className="home-hero__line home-hero__line--one"><span>Creative</span></span>
                <span className="home-hero__line home-hero__line--two"><span>developer</span></span>
              </h1>
              <div className="home-hero__portrait">
                <Image
                  src="/images/gurtejbir-hero.png"
                  alt="Portrait of Gurtejbir Singh"
                  fill
                  priority
                  sizes="(max-width: 760px) 92vw, 46vw"
                />
              </div>
              <p className="home-hero__descriptor" style={{
                fontFamily: "'BhuTuka Expanded One', serif",
                fontWeight: 400,
                fontSize: "clamp(2.6rem, 3.8vw, 4.8rem)",
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                color: "#78172f"
              }}>ਗੁਰਤਜੇਬੀਰ ਸਿੰਘ</p>
              <a className="home-hero__scroll" href="#design-code" aria-label="Explore the portfolio">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v13M7.5 13.5 12 18l4.5-4.5" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="design-code-scene" id="design-code" data-chrome-tone="dark" aria-labelledby="design-code-title">
          <div className="home-scene-shell design-code-scene__grid">
            <p className="home-kicker">Design / Development</p>
            <h2 id="design-code-title">The idea does not<br />stop at the mockup.</h2>
            <ComparisonSlider />
            <p className="design-code-scene__copy">I design the system, build the interface<br />and refine how it responds.</p>
          </div>
        </section>

        <section className="recent-work-scene" id="recent-work" data-chrome-tone="light" aria-labelledby="recent-work-title">
          <div className="recent-work__sticky">
            <h2 className="recent-work__title" id="recent-work-title">Recent work</h2>
            <div className="recent-work__track">
              {featuredProjects.map((project, index) => {
                const config = project.mediaConfig || {
                  mediaMode: "cover" as const,
                  objectPosition: "center center",
                  scale: 1.0,
                  cardRatio: "landscape" as const,
                  stageBackground: "var(--paper-secondary)"
                };

                const cardStyle = {
                  "--card-ratio": config.cardRatio === "portrait" ? "0.72 / 1" : config.cardRatio === "square" ? "1 / 1" : "16 / 10",
                  "--media-scale": config.scale ?? 1.0,
                  "--media-x": config.objectPosition ? config.objectPosition.split(" ")[0] : "50%",
                  "--media-y": config.objectPosition ? config.objectPosition.split(" ")[1] : "50%",
                  "--stage-background": config.stageBackground ?? "var(--paper-secondary)"
                } as React.CSSProperties;

                return (
                  <Link
                    className={`recent-card recent-card--${index + 1}`}
                    href={`/work/${project.slug}`}
                    key={project.slug}
                    style={cardStyle}
                  >
                    <div className="recent-card__media" data-fit={config.mediaMode}>
                      <ProjectArtwork project={project} />
                    </div>
                    <div className="recent-card__meta">
                      <strong>{project.title}</strong>
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                      <i aria-hidden="true">↗</i>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <div className="home-contact-sentinel" data-chrome-tone="dark" aria-hidden="true" />
      <ContactDepthScene className="home-contact-depth" headingId="home-contact-title" revealTrigger=".home-contact-sentinel" />
    </div>
  );
}
