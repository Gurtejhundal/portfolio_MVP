import { Reveal } from "./Reveal";

const identityItems = [
  "Creative Developer",
  "Motion-led Interfaces",
  "Premium Landing Pages",
  "Digital Product Experiences"
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
