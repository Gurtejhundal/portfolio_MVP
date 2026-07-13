"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { site } from "@/data/site";

const easeEditorial = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const portraitRef = useRef<HTMLDivElement>(null);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !portraitRef.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    portraitRef.current.style.setProperty("--portrait-x", `${x * 8}px`);
    portraitRef.current.style.setProperty("--portrait-y", `${y * 8}px`);
  };

  const resetPointer = () => {
    portraitRef.current?.style.setProperty("--portrait-x", "0px");
    portraitRef.current?.style.setProperty("--portrait-y", "0px");
  };

  const reveal = { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 } };

  return (
    <MotionConfig reducedMotion="user">
    <section className="editorial-hero" id="top" aria-labelledby="home-title">
      <motion.div
        className="editorial-hero__availability"
        {...reveal}
        transition={{ duration: 0.65, ease: easeEditorial }}
      >
        <span aria-hidden="true" /> {site.availability} · {site.year}
      </motion.div>

      <div className="editorial-hero__title" id="home-title">
        <div className="title-mask">
          <motion.h1
            {...reveal}
            transition={{ duration: 0.9, delay: 0.08, ease: easeEditorial }}
          >
            Creative Web
          </motion.h1>
        </div>
        <div className="title-mask title-mask--second">
          <motion.p
            aria-hidden="true"
            {...reveal}
            transition={{ duration: 0.9, delay: 0.18, ease: easeEditorial }}
          >
            Designer
          </motion.p>
        </div>
      </div>

      <motion.div
        className="editorial-hero__portrait-stage"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05, delay: 0.24, ease: easeEditorial }}
        onPointerMove={onPointerMove}
        onPointerLeave={resetPointer}
      >
        <div className="editorial-hero__portrait" ref={portraitRef}>
          <Image
            src="/images/gurtejbir-hero.png"
            alt="Black-and-white portrait of Gurtejbir Singh wearing a turban and black turtleneck"
            fill
            fetchPriority="high"
            sizes="(max-width: 760px) 96vw, 62vw"
          />
        </div>
      </motion.div>

      <motion.p
        className="editorial-hero__foreground"
        {...reveal}
        transition={{ duration: 0.82, delay: 0.46, ease: easeEditorial }}
      >
        &amp; Developer
      </motion.p>

      <motion.div
        className="editorial-hero__statement"
        {...reveal}
        transition={{ duration: 0.72, delay: 0.58, ease: easeEditorial }}
      >
        <p>{site.statement}</p>
        <Link href="/work" className="editorial-link">View selected work <span>↘</span></Link>
      </motion.div>

      <motion.div
        className="editorial-hero__scroll"
        {...reveal}
        transition={{ duration: 0.55, delay: 0.72, ease: easeEditorial }}
      >
        Scroll to explore <span aria-hidden="true">↓</span>
      </motion.div>
    </section>
    </MotionConfig>
  );
}
