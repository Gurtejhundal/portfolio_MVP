"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { site } from "@/data/site";

type ContactDepthSceneProps = {
  className?: string;
  headingId?: string;
  revealTrigger?: string;
};

type MotionPoint = { x: number; y: number };

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function ContactDepthScene({
  className = "",
  headingId = "contact-depth-title",
  revealTrigger
}: ContactDepthSceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const lightTextRef = useRef<HTMLSpanElement>(null);
  const wineRearRef = useRef<HTMLSpanElement>(null);
  const wineFrontRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let revealElement: HTMLElement | null = null;
    if (revealTrigger) {
      const pageWrapper = section.closest("[data-page-content], .home-experience, .works-page, .about-v2");
      if (pageWrapper) {
        revealElement = pageWrapper.querySelector<HTMLElement>(revealTrigger);
      }
      if (!revealElement) {
        revealElement = document.querySelector<HTMLElement>(revealTrigger);
      }
    } else {
      revealElement = section;
    }

    if (!revealElement) {
      section.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
        }
      });
    }, { threshold: 0 });

    observer.observe(revealElement);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      if (scrollY + winHeight >= docHeight - 50) {
        section.classList.add("is-visible");
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const timer = setTimeout(() => {
      section.classList.add("is-visible");
    }, 1000);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [revealTrigger]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduceMotion) return;

    const applyTransforms = (x: number, y: number) => {
      if (portraitRef.current) {
        portraitRef.current.style.transform = `translate3d(${x * 18}px, ${y * 14}px, 26px) rotateX(${-y * 2.5}deg) rotateY(${x * 3}deg)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x * 10}px, ${y * 8}px, 10px)`;
      }
      if (shadowRef.current) {
        shadowRef.current.style.transform = `translate3d(${-x * 15 + 10}px, ${-y * 11 + 16}px, -24px) scale(1.04)`;
      }
      if (lightTextRef.current) {
        lightTextRef.current.style.transform = `translate3d(${x * -1.2}px, ${y * -0.8}px, 0)`;
      }
      const wineTransform = `translate3d(${x * -2.4}px, ${y * -1.6}px, 0)`;
      if (wineRearRef.current) wineRearRef.current.style.transform = wineTransform;
      if (wineFrontRef.current) wineFrontRef.current.style.transform = wineTransform;
    };

    if (!finePointer) {
      let source: HTMLElement | null = null;
      if (revealTrigger) {
        const pageWrapper = section.closest("[data-page-content], .home-experience, .works-page, .about-v2");
        source = pageWrapper
          ? pageWrapper.querySelector<HTMLElement>(revealTrigger)
          : document.querySelector<HTMLElement>(revealTrigger);
      } else {
        source = section;
      }
      if (!source) source = section;
      let frame = 0;

      const updateScrollDepth = () => {
        frame = 0;
        if (!source) return;
        const rect = source.getBoundingClientRect();
        const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0, 1);
        const amount = 1 - progress * 2;
        if (portraitRef.current) portraitRef.current.style.transform = `translate3d(0, ${amount * 12}px, 26px)`;
        if (ringRef.current) ringRef.current.style.transform = `translate3d(0, ${amount * 7}px, 10px)`;
        if (shadowRef.current) shadowRef.current.style.transform = `translate3d(10px, ${16 - amount * 8}px, -24px) scale(1.04)`;
        if (lightTextRef.current) lightTextRef.current.style.transform = `translate3d(0, ${amount * -1.5}px, 0)`;
        const wineTransform = `translate3d(0, ${amount * -3}px, 0)`;
        if (wineRearRef.current) wineRearRef.current.style.transform = wineTransform;
        if (wineFrontRef.current) wineFrontRef.current.style.transform = wineTransform;
      };

      const requestUpdate = () => {
        if (!frame) frame = window.requestAnimationFrame(updateScrollDepth);
      };

      requestUpdate();
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);
      return () => {
        window.removeEventListener("scroll", requestUpdate);
        window.removeEventListener("resize", requestUpdate);
        window.cancelAnimationFrame(frame);
      };
    }

    const target: MotionPoint = { x: 0, y: 0 };
    const current: MotionPoint = { x: 0, y: 0 };
    let frame = 0;
    let active = false;
    let pointerInside = false;

    const render = () => {
      current.x += (target.x - current.x) * 0.34;
      current.y += (target.y - current.y) * 0.34;
      applyTransforms(current.x, current.y);

      const settled = Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001;
      if (!pointerInside && settled) {
        current.x = 0;
        current.y = 0;
        applyTransforms(0, 0);
        active = false;
        frame = 0;
        return;
      }

      frame = window.requestAnimationFrame(render);
    };

    const ensureLoop = () => {
      if (active) return;
      active = true;
      frame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      target.x = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
      target.y = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);
      pointerInside = true;
      ensureLoop();
    };

    const handlePointerLeave = () => {
      pointerInside = false;
      target.x = 0;
      target.y = 0;
      ensureLoop();
    };

    section.addEventListener("pointermove", handlePointerMove, { passive: true });
    section.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
      window.cancelAnimationFrame(frame);
    };
  }, [revealTrigger]);

  return (
    <section
      ref={sectionRef}
      className={`contact-depth-scene ${className}`.trim()}
      aria-labelledby={headingId}
    >
      <div className="contact-depth-scene__inner">
        <div className="contact-depth-scene__composition">
          <h2 id={headingId} className="contact-depth-scene__heading">
            <span className="contact-depth-scene__line-mask">
              <span className="contact-depth-scene__line-reveal">
                <span className="contact-depth-scene__light" ref={lightTextRef}>Let&apos;s work</span>
              </span>
            </span>
            <span className="contact-depth-scene__line-mask">
              <span className="contact-depth-scene__line-reveal">
                <span className="contact-depth-scene__wine-stage">
                  <span className="contact-depth-scene__wine contact-depth-scene__wine--rear" ref={wineRearRef}>together.</span>
                  <span
                    className="contact-depth-scene__wine contact-depth-scene__wine--front"
                    ref={wineFrontRef}
                    aria-hidden="true"
                  >
                    together.
                  </span>
                </span>
              </span>
            </span>
          </h2>

          <span className="contact-depth-scene__portrait-depth">
            <span className="contact-depth-scene__portrait-shadow" ref={shadowRef} />
            <span className="contact-depth-scene__portrait-ring" ref={ringRef} />
            <span className="contact-depth-scene__portrait-frame" ref={portraitRef}>
              <Image
                src="/images/gurtejbir-contact.png"
                alt="Portrait of Gurtejbir Singh"
                fill
                sizes="(max-width: 560px) 108px, 150px"
              />
              <span className="contact-depth-scene__portrait-highlight" />
              <span className="grain-overlay" />
            </span>
          </span>
        </div>

        <a className="contact-depth-scene__email" href={`mailto:${site.email}`}>
          <span>{site.email}</span><span aria-hidden="true">↗</span>
        </a>
        <span className="contact-depth-scene__year">© {site.year}</span>
      </div>
    </section>
  );
}
