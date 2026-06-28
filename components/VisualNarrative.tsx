import { CircularPortraitGallery } from "./CircularPortraitGallery";
import { Reveal } from "./Reveal";

export function VisualNarrative() {
  return (
    <section className="narrative-section section-shell" aria-label="Visual narrative">
      <Reveal className="narrative-heading">
        <h2>Visual studies</h2>
        <p>
          Seven personal frames that shape the visual direction of the portfolio:
          close-up, full body, motion, work, detail, back profile, and hero portrait.
        </p>
      </Reveal>
      <CircularPortraitGallery />
    </section>
  );
}
