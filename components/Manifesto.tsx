import { manifesto } from "@/data/content";
import { Reveal } from "./Reveal";
import { TextWipe } from "./TextWipe";

export function Manifesto() {
  return (
    <section id="philosophy" className="manifesto-section section-shell">
      <div className="section-kicker">
        <span>01</span>
        <span>Principles</span>
      </div>
      <div className="manifesto-grid">
        {manifesto.map((item, index) => (
          <Reveal key={item.lead} className="manifesto-statement" delay={index * 0.08}>
            <span className="statement-index">0{index + 1}</span>
            <h2>
              <TextWipe>{item.lead}</TextWipe>
            </h2>
            <p>
              <TextWipe delay={0.08}>{item.support}</TextWipe>
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
