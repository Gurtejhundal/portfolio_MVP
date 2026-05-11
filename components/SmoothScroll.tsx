"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const maxWheelDelta = 78;

    const lenis = new Lenis({
      duration: 1.28,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.075,
      wheelMultiplier: 0.72,
      touchMultiplier: 0.9,
      virtualScroll: (data) => {
        if (data.event instanceof WheelEvent) {
          data.deltaY =
            Math.sign(data.deltaY) * Math.min(Math.abs(data.deltaY), maxWheelDelta);
          data.deltaX =
            Math.sign(data.deltaX) * Math.min(Math.abs(data.deltaX), maxWheelDelta);
        }

        return true;
      }
    });

    const onAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[href^='#']");
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, {
        offset: hash === "#top" ? 0 : -72,
        duration: 1.05
      });
      window.history.pushState(null, "", hash);
    };

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}
