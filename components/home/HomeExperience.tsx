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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mmContext: ReturnType<typeof gsap.matchMedia> | null = null;

    const setupGSAP = () => {
      const mm = gsap.matchMedia();
      mmContext = mm;

      // Project snap calculator based on real track measurements
      const calculateSnapPoints = (track: HTMLElement, cards: HTMLElement[]) => {
        const viewportWidth = window.innerWidth;
        const snapPoints: number[] = [];
        const endX = -Math.max(0, track.scrollWidth - viewportWidth + viewportWidth * 0.08);

        snapPoints.push(0);
        snapPoints.push(0.16);

        cards.forEach((card) => {
          const cardCenter = card.offsetLeft + card.clientWidth / 2;
          const targetX = viewportWidth / 2 - cardCenter;
          const clampedX = Math.max(endX, Math.min(0, targetX));
          const phaseProgress = clampedX / endX;
          const timelineProgress = 0.38 + phaseProgress * 0.58;
          snapPoints.push(timelineProgress);
        });

        snapPoints.push(0.88);
        snapPoints.push(1.00);

        return Array.from(new Set(snapPoints))
          .map((p) => Math.min(1, Math.max(0, p)))
          .sort((a, b) => a - b);
      };

      // Hero scale/fade parallax on scroll with snap points (Runs on all viewports)
      gsap.to(".home-hero-inner", {
        scale: 0.95,
        opacity: 0.74,
        yPercent: -2.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-hero-stage",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          snap: {
            snapTo: [0, 0.5, 1.0],
            delay: 0.08,
            duration: { min: 0.16, max: 0.42 },
            ease: "power2.inOut",
            inertia: false
          }
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

      // 1. DESKTOP: (min-width: 900px)
      mm.add("(min-width: 900px)", () => {
        const track = document.querySelector<HTMLElement>(".recent-work__track");
        const cards = gsap.utils.toArray<HTMLElement>(".recent-card");
        const title = document.querySelector<HTMLElement>(".recent-work__title");
        const sticky = document.querySelector<HTMLElement>(".recent-work__sticky");
        const scene = document.querySelector<HTMLElement>(".recent-work-scene");

        if (track) gsap.set(track, { clearProps: "all" });
        if (title) gsap.set(title, { clearProps: "all" });
        if (cards.length) gsap.set(cards, { clearProps: "all" });
        if (sticky) gsap.set(sticky, { clearProps: "all" });
        if (scene) gsap.set(scene, { clearProps: "height" });

        if (!track || !cards.length) return;

        gsap.set(cards, { yPercent: 155, opacity: 1 });
        gsap.set(track, { x: 0 });

        const snapPoints = calculateSnapPoints(track, cards);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".recent-work-scene",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.38,
            invalidateOnRefresh: true,
            snap: {
              snapTo: snapPoints,
              delay: 0.08,
              duration: { min: 0.16, max: 0.42 },
              ease: "power2.inOut",
              inertia: false
            }
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

      // 2. MOBILE AND TABLET: (max-width: 899px)
      mm.add("(max-width: 899px)", () => {
        const track = document.querySelector<HTMLElement>(".recent-work__track");
        const cards = gsap.utils.toArray<HTMLElement>(".recent-card");
        const title = document.querySelector<HTMLElement>(".recent-work__title");
        const sticky = document.querySelector<HTMLElement>(".recent-work__sticky");
        const scene = document.querySelector<HTMLElement>(".recent-work-scene");

        if (track) gsap.set(track, { clearProps: "all" });
        if (title) gsap.set(title, { clearProps: "all" });
        if (cards.length) gsap.set(cards, { clearProps: "all" });
        if (sticky) gsap.set(sticky, { clearProps: "all" });
        if (scene) gsap.set(scene, { clearProps: "height" });

        if (!track || !cards.length || !title || !sticky || !scene) return;

        const sidePadding = () => window.innerWidth * 0.08;
        const trackWidth = () => {
          const lastCard = cards.at(-1);
          return lastCard ? lastCard.offsetLeft + lastCard.offsetWidth : track.scrollWidth;
        };
        const endX = () => window.innerWidth - trackWidth() - sidePadding();

        gsap.set(track, {
          x: () => window.innerWidth + sidePadding(),
          yPercent: -50,
          opacity: 1
        });
        gsap.set(cards, { opacity: 1 });
        gsap.set(title, { scale: 1, y: 0, opacity: 1 });

        const getScrollDistance = () => {
          const viewportHeight = window.innerHeight;
          const viewportWidth = window.innerWidth;
          const introDistance = viewportHeight * 0.7;
          const horizontalDistance = Math.max(trackWidth() - viewportWidth + sidePadding() * 2, viewportWidth * 1.4);
          const finalHoldDistance = viewportHeight * 0.55;
          return introDistance + horizontalDistance + finalHoldDistance;
        };

        const updateSceneHeight = () => {
          scene.style.height = `${getScrollDistance() + window.innerHeight}px`;
        };
        updateSceneHeight();

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".recent-work-scene",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.34,
            invalidateOnRefresh: true,
            onRefresh: updateSceneHeight
          }
        });

        timeline
          .to({}, { duration: 0.12 })
          .to(title, {
            scale: 0.76,
            yPercent: -36,
            opacity: 0.18,
            ease: "none",
            duration: 0.16
          }, 0.12)
          .to(track, {
            x: sidePadding,
            ease: "power3.out",
            duration: 0.18
          }, 0.18)
          .to(track, {
            x: endX,
            ease: "none",
            duration: 0.54
          }, 0.34)
          .to({}, { duration: 0.12 }, 0.88);

        return () => {
          scene.style.removeProperty("height");
        };
      });

      ScrollTrigger.refresh();
    };

    // Load readiness helper
    let active = true;
    const loadAndSetup = async () => {
      try {
        if (typeof document !== "undefined") {
          await document.fonts.ready;
        }
        const track = document.querySelector<HTMLElement>(".recent-work__track");
        if (track) {
          const images = Array.from(track.querySelectorAll("img"));
          await Promise.all(
            images.map((img) => {
              if (img.complete) return Promise.resolve();
              if (img.decode) {
                return img.decode().catch(() => {});
              }
              return new Promise<void>((resolve) => {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              });
            })
          );
        }
      } catch (err) {
        console.error("Layout preloading failed:", err);
      }
      if (active) {
        requestAnimationFrame(() => {
          setupGSAP();
        });
      }
    };

    loadAndSetup();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (mmContext) {
          ScrollTrigger.refresh();
        }
      }, 250);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      active = false;
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      if (mmContext) {
        mmContext.revert();
      }
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
                <span className="home-hero__line home-hero__line--two"><span>Developer</span></span>
                <p className="home-hero__descriptor"><span className="descriptor-punjabi">ਗੁਰਤਜੇਬੀਰ ਸਿੰਘ</span> <span className="descriptor-separator">&bull;</span> <span className="descriptor-english">Gurtejbir Singh</span></p>
              </h1>
              <div className="home-hero__portrait">
                <Image
                  src="/images/gurtejbir-hero.png"
                  alt="Portrait of Gurtejbir Singh"
                  fill
                  priority
                  sizes="(max-width: 760px) 92vw, 46vw"
                />
                <div className="grain-overlay" />
              </div>

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
            <h2 className="recent-work__title" id="recent-work-title">Recent works</h2>
            <div className="recent-work__track">
              {featuredProjects.map((project, index) => (
                <Link className={`recent-card recent-card--${index + 1}`} href={`/work/${project.slug}`} key={project.slug}>
                  <div className="recent-card__media"><ProjectArtwork project={project} /></div>
                  <div className="recent-card__meta">
                    <strong>{project.title}</strong><span>{project.category}</span><span>{project.year}</span><i aria-hidden="true">↗</i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="home-contact-sentinel" data-chrome-tone="dark" aria-hidden="true" />
      <ContactDepthScene className="home-contact-depth" headingId="home-contact-title" revealTrigger=".home-contact-sentinel" />
    </div>
  );
}
