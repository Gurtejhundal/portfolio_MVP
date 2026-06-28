import { Reveal } from "./Reveal";

const identityItems = [
  "B.Tech Student",
  "Frontend Development",
  "Motion-led Interfaces",
  "Project-backed Proof"
];

export function IdentityStrip() {
  return (
    <section className="identity-strip" aria-label="Positioning">
      <Reveal className="identity-track">
        {identityItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </Reveal>
    </section>
  );
}
