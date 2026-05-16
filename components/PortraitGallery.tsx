"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const portraitImages = [
  "20240531_205013.jpg",
  "20251112_190535.jpg",
  "20251119_095427.jpg",
  "20251209_130333.jpg",
  "20260312_155842.jpg",
  "20260312_155920(1).jpg",
  "20260312_160054.jpg",
  "20260312_163611.jpg",
  "20260313_144158.jpg",
  "20260425_204113.jpg",
  "20260425_204738.jpg",
  "20260425_204746.jpg",
  "20260505_201240(1).jpg",
  "FB_IMG_1648693219011.jpg",
  "FB_IMG_1649211017290.jpg",
  "IMG-20250113-WA0012_enhanced.png",
  "Screenshot_20260426_000648_Instagram.jpg"
];

export function PortraitGallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <motion.div
        className="portrait-gallery"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-12% 0px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <Swiper
          centeredSlides
          className="portrait-swiper"
          coverflowEffect={{
            rotate: 28,
            stretch: 18,
            depth: 120,
            modifier: 1,
            slideShadows: false
          }}
          effect="coverflow"
          grabCursor
          loop
          modules={[EffectCoverflow, Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          slidesPerView="auto"
          spaceBetween={34}
        >
          {portraitImages.map((image, index) => (
            <SwiperSlide key={image}>
              <button
                aria-label={`Open portrait ${index + 1}`}
                className="portrait-swiper__button"
                onClick={() => setActiveImage(image)}
                type="button"
              >
                <Image
                  alt={`Portrait of Gurtejbir Singh ${index + 1}`}
                  className="portrait-swiper__image"
                  fill
                  sizes="(max-width: 760px) 68vw, 30vw"
                  src={`/myself/${image}`}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {activeImage ? (
        <motion.div
          aria-modal="true"
          className="portrait-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveImage(null)}
          role="dialog"
        >
          <button
            aria-label="Close portrait"
            className="portrait-lightbox__close"
            onClick={() => setActiveImage(null)}
            type="button"
          >
            Close
          </button>
          <div className="portrait-lightbox__image" onClick={(event) => event.stopPropagation()}>
            <Image
              alt="Expanded portrait of Gurtejbir Singh"
              fill
              sizes="100vw"
              src={`/myself/${activeImage}`}
            />
          </div>
        </motion.div>
      ) : null}
    </>
  );
}
