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
            I am Gurtej, a B.Tech student focused on frontend development,
            interface design, motion, and software engineering fundamentals.
          </p>
          <p>
            My work sits between design and implementation: project-backed
            websites, responsive systems, animation, and structured UI decisions.
          </p>
          <p>
            I am not trying to look like a studio. I am building a body of work
            that shows taste, discipline, and the ability to ship.
          </p>
          <div className="about-facts">
            <div>
              <span>Location</span>
              <strong>{site.location}</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Frontend, motion, design systems, and project execution</strong>
            </div>
          </div>
          <div className="credentials-grid">
            <div className="credential-panel">
              <h3>Education</h3>
              {credentials.education.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="credential-panel credential-panel--certificates">
              <h3>Certificates</h3>
              {credentials.certificates.map((item) => (
                <a
                  className="certificate-link"
                  href={item.href}
                  key={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>{item.title}</span>
                  <small>{item.issuer}</small>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
