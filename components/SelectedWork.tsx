import { CinematicProjectBento } from "./CinematicProjectBento";
import { Reveal } from "./Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="work-section section-shell">
      <div className="section-kicker">
        <span>02</span>
        <span>Selected Work</span>
      </div>
      <Reveal className="work-intro">
        <h2>Selected work</h2>
        <p>
          A focused set of production websites built around premium positioning,
          clear structure, and visual presence.
        </p>
      </Reveal>
      <CinematicProjectBento />
    </section>
  );
}
