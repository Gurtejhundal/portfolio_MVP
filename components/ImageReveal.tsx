"use client";

import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";

type ImageRevealProps = ImageProps & {
  frameClassName?: string;
};

export function ImageReveal({
  frameClassName = "",
  className = "",
  alt,
  ...props
}: ImageRevealProps) {
  return (
    <motion.div
      className={`image-reveal ${frameClassName}`}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: false, margin: "-15% 0px" }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image alt={alt} className={`image-fill ${className}`} {...props} />
      </motion.div>
    </motion.div>
  );
}
