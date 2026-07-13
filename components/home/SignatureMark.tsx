"use client";

import { useId } from "react";

type SignatureMarkProps = {
  animated?: boolean;
  className?: string;
  title?: string;
};

export function SignatureMark({ animated = false, className = "", title }: SignatureMarkProps) {
  const clipId = useId().replace(/:/g, "");

  return (
    <svg
      className={`signature-mark ${animated ? "signature-mark--animated" : ""} ${className}`.trim()}
      viewBox="0 0 900 637"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id={clipId}>
          <rect className="signature-mark__sweep" x="0" y="0" width="900" height="637" />
        </clipPath>
      </defs>
      <image
        href="/images/gurtejbir-signature.png"
        width="900"
        height="637"
        clipPath={`url(#${clipId})`}
      />
    </svg>
  );
}
