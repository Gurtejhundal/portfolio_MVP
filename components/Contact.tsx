import { assets } from "@/data/assets";
import { site } from "@/data/content";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Image
        src={assets.contactPortraitBackground.src}
        alt={assets.contactPortraitBackground.alt}
        fill
        sizes="100vw"
        className="contact-bg"
      />
      <div className="contact-overlay" aria-hidden="true" />
      <div className="contact-content">
        <Reveal className="contact-title">
          <h2>
            OPEN TO
            <span>LEARNING</span>
            AND BUILDING
          </h2>
        </Reveal>
        <Reveal className="contact-copy" delay={0.1}>
          <p>
            For internships, collaborations, serious student projects, and
            frontend opportunities where proof matters more than claims.
          </p>
          <div className="contact-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:+91${site.phone}`}>{site.phone}</a>
            <span>{site.location}</span>
          </div>
          <MagneticButton href={`mailto:${site.email}`}>Get in touch</MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
