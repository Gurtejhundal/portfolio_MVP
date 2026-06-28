"use client";

import CurvedLoop from "./CurvedLoop.jsx";
import GlassSurface from "./GlassSurface.jsx";

const loopText =
  "student builder - frontend systems - motion interfaces - project proof - learning in public - shipping real work - ";

export function SkillLoop() {
  return (
    <section className="skill-loop-section" aria-label="Student skills loop">
      <GlassSurface
        width="min(100%, 1320px)"
        height={170}
        borderRadius={28}
        backgroundOpacity={0.08}
        saturation={1.25}
        className="student-glass-shell skill-loop-glass"
      >
        <CurvedLoop
          marqueeText={loopText}
          speed={1.45}
          curveAmount={-38}
          direction="left"
          className="student-skill-loop"
        />
      </GlassSurface>
    </section>
  );
}
