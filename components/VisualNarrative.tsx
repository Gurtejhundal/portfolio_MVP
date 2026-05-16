import { PortraitGallery } from "./PortraitGallery";
import { Reveal } from "./Reveal";

export function VisualNarrative() {
  return (
    <section className="narrative-section section-shell" aria-label="Visual narrative">
      <Reveal className="narrative-heading">
        <h2>Photo gallery</h2>
        <p>
          A few frames from outside the editor: portraits, everyday light, and
          the visual mood behind the work.
        </p>
      </Reveal>
      <PortraitGallery />
    </section>
  );
}
