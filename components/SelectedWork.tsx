import { ProjectCardSwap } from "./ProjectCardSwap";
import { Reveal } from "./Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="work-section section-shell">
      <div className="section-kicker">
        <span>02</span>
        <span>Selected Work</span>
      </div>
      <Reveal className="work-intro">
        <h2>Project proof</h2>
        <p>
          Live project builds that show how I think through layout, motion,
          hierarchy, and responsive execution as a student developer.
        </p>
      </Reveal>
      <ProjectCardSwap />
    </section>
  );
}
