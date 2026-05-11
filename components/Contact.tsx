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
            LET&apos;S BUILD
            <span>SOMETHING</span>
            UNFORGETTABLE
          </h2>
        </Reveal>
        <Reveal className="contact-copy" delay={0.1}>
          <p>
            For websites, landing pages, portfolio systems, and premium digital
            experiences.
          </p>
          <div className="contact-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:+91${site.phone}`}>{site.phone}</a>
            <span>{site.location}</span>
          </div>
          <MagneticButton href={`mailto:${site.email}`}>Start a project</MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
