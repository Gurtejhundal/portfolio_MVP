"use client";

import { useState } from "react";

export function ComparisonSlider() {
  const [position, setPosition] = useState(48);

  return (
    <div className="comparison" style={{ "--comparison": `${position}%` } as React.CSSProperties}>
      <div className="comparison__surface comparison__shipped" aria-hidden="true">
        <div className="shipped-ui__rail"><i /><i /><i /><span /></div>
        <div className="shipped-ui__canvas">
          <div className="shipped-ui__top"><span>Studio / 26</span><i /></div>
          <div className="shipped-ui__hero">
            <span>Responsive interface</span>
            <strong>Built to<br />respond.</strong>
          </div>
          <div className="shipped-ui__cards"><i><span>01</span></i><i><span>02</span></i><i><span>03</span></i></div>
        </div>
      </div>

      <div className="comparison__surface comparison__structure" aria-hidden="true">
        <div className="structure-ui__grid" />
        <span className="structure-ui__label structure-ui__label--one">12 COL / GRID</span>
        <span className="structure-ui__label structure-ui__label--two">COMP / 04</span>
        <div className="structure-ui__nav"><i /><i /><i /></div>
        <div className="structure-ui__heading"><i /><i /></div>
        <div className="structure-ui__blocks"><i /><i /><i /></div>
      </div>

      <span className="comparison__label comparison__label--left">Structure</span>
      <span className="comparison__label comparison__label--right">Shipped</span>
      <span className="comparison__divider" aria-hidden="true"><i>↔</i></span>
      <span className="comparison__hint" aria-hidden="true">Drag to compare</span>
      <input
        type="range"
        min="8"
        max="92"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Compare interface structure with shipped design"
        suppressHydrationWarning
      />
    </div>
  );
}
