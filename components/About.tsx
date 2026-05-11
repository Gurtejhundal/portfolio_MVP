import { assets } from "@/data/assets";
import { credentials, site } from "@/data/content";
import { ImageReveal } from "./ImageReveal";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="about-section section-shell">
      <div className="section-kicker">
        <span>06</span>
        <span>About</span>
      </div>
      <div className="about-layout">
        <ImageReveal
          src={assets.closeupPortrait.src}
          alt={assets.closeupPortrait.alt}
          width={assets.closeupPortrait.width}
          height={assets.closeupPortrait.height}
          sizes="(max-width: 900px) 100vw, 44vw"
          frameClassName="about-image"
        />
        <Reveal className="about-copy">
          <p className="about-lead">
            I am Gurtej, a B.Tech student focused on web development, software
            engineering, and premium digital interfaces.
          </p>
          <p>
            My work sits between design and implementation: cinematic landing
            pages, responsive systems, conversion-focused structures, and
            motion-led storytelling.
          </p>
          <p>
            I build pages that create a first impression, guide decisions, and
            make the product feel sharper.
          </p>
          <div className="about-facts">
            <div>
              <span>Location</span>
              <strong>{site.location}</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Premium websites and motion-led interfaces</strong>
            </div>
          </div>
          <div className="credentials-grid">
            <div>
              <h3>Education</h3>
              {credentials.education.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div>
              <h3>Certificates</h3>
              {credentials.certificates.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
