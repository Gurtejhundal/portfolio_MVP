"use client";

import { useEffect, useState } from "react";
import { SignatureMark } from "./SignatureMark";

const SESSION_KEY = "gurtejbir-home-intro-v1";

export function HomePreloader({ onReveal }: { onReveal: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasPlayed = window.sessionStorage.getItem(SESSION_KEY) === "played";

    if (reduceMotion || hasPlayed) {
      const skipTimer = window.setTimeout(() => {
        setVisible(false);
        onReveal();
      }, 0);
      return () => window.clearTimeout(skipTimer);
    }

    window.sessionStorage.setItem(SESSION_KEY, "played");
    const revealTimer = window.setTimeout(onReveal, 1450);
    const finishTimer = window.setTimeout(() => setVisible(false), 1840);
    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onReveal]);

  if (!visible) return null;

  return (
    <div className="home-preloader" role="status" aria-label="Opening Gurtejbir's portfolio">
      <div className="home-preloader__mark">
        <SignatureMark animated />
        <span className="home-preloader__dot" aria-hidden="true" />
      </div>
    </div>
  );
}
