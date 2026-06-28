"use client";

import CircularGallery from "./CircularGallery.jsx";
import GlassSurface from "./GlassSurface.jsx";

const galleryItems = [
  { image: "/Close-Up Face Portrait.png", text: "Close-up study" },
  { image: "/Full Body Editorial Shot.png", text: "Editorial frame" },
  { image: "/motion.png", text: "Motion study" },
  { image: "/work shot.png", text: "Work mode" },
  { image: "/detail shot.png", text: "Detail frame" },
  { image: "/back shot.png", text: "Back profile" },
  { image: "/Primary Hero Portrait.png", text: "Hero portrait" }
];

export function CircularPortraitGallery() {
  return (
    <GlassSurface
      width="100%"
      height={620}
      borderRadius={30}
      backgroundOpacity={0.06}
      saturation={1.2}
      className="student-glass-shell circular-portrait-shell"
    >
      <CircularGallery
        items={galleryItems}
        bend={2.2}
        borderRadius={0.045}
        font="bold 30px Geist, Arial, sans-serif"
        scrollSpeed={1.9}
        scrollEase={0.06}
        textColor="#f3efe6"
      />
    </GlassSurface>
  );
}
