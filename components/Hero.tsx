"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "@/data/assets";
import { site } from "@/data/content";
import { MagneticButton } from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const heroName = ["GURTEJBIR", "SINGH"];

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (imageRef.current) {
        imageRef.current.style.opacity = "1";
      }
      return;
    }

    let context: gsap.Context | null = null;

    const startIntro = () => {
      if (context || !rootRef.current) {
        return;
      }

      context = gsap.context(() => {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.08, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.6, ease: "power3.out" }
        );

        gsap.from(".hero-title-letter", {
          yPercent: 110,
          duration: 1.1,
          delay: 0.18,
          stagger: 0.08,
          ease: "power4.out"
        });

        gsap.from(".hero-fade", {
          y: 22,
          opacity: 0,
          duration: 0.85,
          delay: 0.34,
          stagger: 0.12,
          ease: "power3.out"
        });

        gsap.to(copyRef.current, {
          y: -82,
          opacity: 0.82,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }, rootRef);
    };

    if (document.documentElement.dataset.introReady === "true") {
      startIntro();
    } else {
      window.addEventListener("portfolio:intro-ready", startIntro, { once: true });
    }

    return () => {
      window.removeEventListener("portfolio:intro-ready", startIntro);
      context?.revert();
    };
  }, []);

  return (
    <section id="top" className="hero-section" ref={rootRef}>
      <div className="hero-image" ref={imageRef}>
        <Image
          src={assets.heroPortrait.src}
          alt={assets.heroPortrait.alt}
          fill
          priority
          sizes="100vw"
          className="hero-img"
        />
      </div>
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-content" ref={copyRef}>
        <div className="hero-meta hero-fade">
          <span>Amritsar, Punjab</span>
          <span>2026 Portfolio</span>
        </div>
        <h1 className="hero-title" aria-label="Gurtejbir Singh">
          {heroName.map((word) => (
            <span className="hero-title-line" key={word}>
              {word.split("").map((letter, index) => (
                <span className="hero-title-letter" key={`${word}-${letter}-${index}`}>
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="hero-copy hero-fade">{site.description}</p>
        <div className="hero-actions hero-fade">
          <MagneticButton href="#work">Selected Work</MagneticButton>
          <MagneticButton href="#contact" variant="solid">
            Contact
          </MagneticButton>
        </div>
      </div>
      <a href="#philosophy" className="scroll-cue hero-fade">
        <span>Scroll</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
