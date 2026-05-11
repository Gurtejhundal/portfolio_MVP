"use client";

import { AnchorHTMLAttributes, MouseEvent, useRef } from "react";

type MagneticButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "line";
};

export function MagneticButton({
  children,
  className = "",
  variant = "line",
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element || window.matchMedia("(pointer: coarse)").matches) {
      onMouseMove?.(event);
      return;
    }

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate3d(${x * 0.12}px, ${y * 0.18}px, 0)`;
    onMouseMove?.(event);
  };

  const handleLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    if (ref.current) {
      ref.current.style.transform = "translate3d(0, 0, 0)";
    }
    onMouseLeave?.(event);
  };

  return (
    <a
      ref={ref}
      className={`magnetic-button magnetic-button--${variant} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="button-arrow">
        -&gt;
      </span>
    </a>
  );
}
