"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

type TextWipeProps = MotionProps & {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function TextWipe({ children, className = "", delay = 0, ...props }: TextWipeProps) {
  return (
    <motion.span
      className={`text-wipe ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.62, margin: "-8% 0px" }}
      {...props}
    >
      <motion.span
        className="text-wipe__content"
        variants={{
          hidden: { opacity: 0, x: -18 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.58, delay: delay + 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
      <motion.span
        className="text-wipe__mask"
        aria-hidden="true"
        variants={{
          hidden: { x: "0%" },
          visible: { x: "112%" }
        }}
        transition={{ duration: 0.72, delay, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.span>
  );
}
