"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
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
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const wheelDeltaRef = useRef(0);
  const wheelLockedRef = useRef(false);
  const wheelUnlockTimeoutRef = useRef<number | null>(null);

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

  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery) {
      return;
    }

    const handleGalleryWheel = (event: WheelEvent) => {
      const swiper = swiperRef.current;

      if (!swiper) {
        return;
      }

      const primaryDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

      if (Math.abs(primaryDelta) < 4) {
        return;
      }

      event.preventDefault();
      wheelDeltaRef.current += primaryDelta;

      if (wheelLockedRef.current || Math.abs(wheelDeltaRef.current) < 44) {
        return;
      }

      const direction = wheelDeltaRef.current > 0 ? "next" : "prev";
      wheelDeltaRef.current = 0;
      wheelLockedRef.current = true;

      if (direction === "next") {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }

      if (wheelUnlockTimeoutRef.current) {
        window.clearTimeout(wheelUnlockTimeoutRef.current);
      }

      wheelUnlockTimeoutRef.current = window.setTimeout(() => {
        wheelLockedRef.current = false;
        wheelUnlockTimeoutRef.current = null;
      }, 680);
    };

    gallery.addEventListener("wheel", handleGalleryWheel, { passive: false });

    return () => {
      gallery.removeEventListener("wheel", handleGalleryWheel);

      if (wheelUnlockTimeoutRef.current) {
        window.clearTimeout(wheelUnlockTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        className="portrait-gallery"
        ref={galleryRef}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-12% 0px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <Swiper
          centeredSlides
          className="portrait-swiper"
          coverflowEffect={{
            rotate: 12,
            stretch: 0,
            depth: 82,
            modifier: 0.82,
            scale: 0.94,
            slideShadows: false
          }}
          effect="coverflow"
          grabCursor
          loop
          longSwipesRatio={0.18}
          modules={[EffectCoverflow, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          resistanceRatio={0.68}
          slidesPerView="auto"
          spaceBetween={34}
          speed={1150}
          touchRatio={0.9}
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
