import { assets } from "@/data/assets";
import { narrativeImages } from "@/data/content";
import { ImageReveal } from "./ImageReveal";
import { Reveal } from "./Reveal";

export function VisualNarrative() {
  return (
    <section className="narrative-section section-shell" aria-label="Visual narrative">
      <div className="section-kicker">
        <span>04</span>
        <span>Image Story</span>
      </div>
      <Reveal className="narrative-heading">
        <h2>Personal brand, treated like a film.</h2>
      </Reveal>
      <div className="narrative-grid">
        {narrativeImages.map((item, index) => {
          const asset = assets[item.asset];
          return (
            <figure className={`narrative-card narrative-card--${index + 1}`} key={item.title}>
              <ImageReveal
                src={asset.src}
                alt={asset.alt}
                width={asset.width}
                height={asset.height}
                sizes="(max-width: 900px) 100vw, 45vw"
                frameClassName="narrative-image"
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
