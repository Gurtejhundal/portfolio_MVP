import { process } from "@/data/content";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="process-section section-shell">
      <div className="section-kicker">
        <span>03</span>
        <span>Process</span>
      </div>
      <div className="process-layout">
        <Reveal className="process-heading">
          <h2>Structure before spectacle.</h2>
          <p>
            I do not start with decoration. I start with positioning, structure,
            and the first impression the product needs to create.
          </p>
        </Reveal>
        <div className="process-list">
          {process.map((item, index) => (
            <Reveal key={item.title} className="process-item" delay={index * 0.05}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
