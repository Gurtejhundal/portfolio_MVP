"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "@/data/assets";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    delete document.documentElement.dataset.introReady;
    const timeout = window.setTimeout(() => setVisible(false), 1900);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.documentElement.dataset.introReady = "true";
        window.dispatchEvent(new Event("portfolio:intro-ready"));
      }}
    >
      {visible ? (
        <motion.div
          className="site-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.82, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <motion.div
            className="loader-mark"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 1.04 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={assets.signature.src}
              alt="Gurtejbir Singh"
              width={assets.signature.width}
              height={assets.signature.height}
              priority
            />
            <small>DIGITAL EXPERIENCES</small>
          </motion.div>
          <motion.div
            className="loader-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
