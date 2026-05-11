import { capabilities } from "@/data/content";
import { Reveal } from "./Reveal";

export function Capabilities() {
  return (
    <section className="capabilities-section section-shell" aria-label="Capabilities">
      <div className="section-kicker">
        <span>05</span>
        <span>Capabilities</span>
      </div>
      <Reveal className="capabilities-heading">
        <h2>Built for premium web experiences.</h2>
      </Reveal>
      <div className="capability-list">
        {capabilities.map((item) => (
          <Reveal key={item} className="capability-item">
            {item}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
