"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { ContactDepthScene } from "@/components/home/ContactDepthScene";

const capabilities = [
  {
    number: "01",
    title: "Interface design",
    body: "Clear hierarchy, responsive systems and visual decisions that support the content."
  },
  {
    number: "02",
    title: "Frontend engineering",
    body: "Accessible React and Next.js interfaces with purposeful motion and maintainable structure."
  },
  {
    number: "03",
    title: "Product systems",
    body: "Flows, components and technical boundaries shaped together instead of handed off in pieces."
  }
];

const principles = [
  "Content earns the attention.",
  "Design and code are one system.",
  "Motion must explain something.",
  "Honest work lasts longer."
];

export function AboutExperience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-about-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true
          }
        });
      });

      gsap.to(".about-v2__profile-image img", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-v2__profile",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      media.add("(min-width: 901px)", () => {
        gsap.to(".about-v2__fragments-track", {
          xPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-v2__intro",
            start: "32% top",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    }, rootRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <div className="about-v2" ref={rootRef}>
      <div className="about-v2__foreground">
      <section className="about-v2__intro" data-chrome-tone="light" aria-labelledby="about-title">
        <div className="about-v2__intro-copy page-shell">
          <p className="section-label" data-route-reveal="label">About / Gurtejbir Singh</p>
          <h1 id="about-title">
            <span className="heading-mask"><span data-route-heading-line>Ideas, shaped</span></span>
            <span className="heading-mask"><span data-route-heading-line>all the way <em>through.</em></span></span>
          </h1>
          <p className="about-v2__intro-note" data-route-reveal="content">Design · Development · Motion</p>
        </div>

        <div className="about-v2__fragments" data-route-reveal="content" aria-label="Selected fragments from the work">
          <div className="about-v2__fragments-track">
            <article className="about-v2__fragment about-v2__fragment--index" aria-label="Gurtejbir identity card">
              <span>GS / 26</span>
              <strong>DESIGN<br />BECOMES<br />SYSTEM</strong>
              <small>Punjab · India</small>
            </article>

            <Link className="about-v2__fragment about-v2__fragment--image" href="/work/mediaforge" aria-label="View MediaForge project">
              <Image
                src="/images/projects/mediaforge/overview.webp"
                alt="MediaForge local-first media operations interface"
                fill
                sizes="(max-width: 760px) 78vw, 28vw"
              />
              <span>MediaForge / 02</span>
            </Link>

            <article className="about-v2__fragment about-v2__fragment--system" aria-label="Interface system study">
              <span>COMPONENT / 12</span>
              <div><i /><i /><i /><i /><i /><i /></div>
              <strong>Structure<br />before surface.</strong>
            </article>

            <Link className="about-v2__fragment about-v2__fragment--hospital" href="/work/bibi-kaulan-ji-hospital" aria-label="View Bibi Kaulan Ji Hospital project">
              <Image
                src="/images/projects/bibi-kaulan-ji-hospital/live-home.png"
                alt="Bibi Kaulan Ji Hospital website"
                fill
                sizes="(max-width: 760px) 78vw, 28vw"
              />
              <span>BKJH / 04</span>
            </Link>

            <article className="about-v2__fragment about-v2__fragment--statement" aria-label="Working principle">
              <span>METHOD / 03</span>
              <strong>Think.<br />Shape.<br />Ship.</strong>
              <small>No handoff gap.</small>
            </article>
          </div>
        </div>
      </section>

      <section className="about-v2__profile page-shell" data-chrome-tone="light" aria-labelledby="about-profile-title">
        <div className="about-v2__profile-image" data-about-reveal>
          <Image
            src="/images/gurtejbir-contact.png"
            alt="Gurtejbir Singh seated in a plaid overshirt"
            fill
            sizes="(max-width: 760px) 92vw, 42vw"
          />
        </div>

        <div className="about-v2__profile-copy" data-about-reveal>
          <p className="section-label">The person behind the interface</p>
          <h2 id="about-profile-title">Visual judgement and implementation discipline belong in the same room.</h2>
          <p>I&apos;m Gurtejbir Singh, a designer and developer based in Amritsar. I work from the first structural decision through to the responsive interface, so the original idea does not disappear during implementation.</p>
          <p>I&apos;m currently studying B.Tech CSE while building a public body of work across editorial experiences, product interfaces and frontend systems. The work is experimental where it can be, and precise where it must be.</p>

          <dl className="about-v2__facts">
            <div><dt>Location</dt><dd>Amritsar, Punjab</dd></div>
            <div><dt>Focus</dt><dd>Interface · Motion · Frontend</dd></div>
            <div><dt>Status</dt><dd>Open to selected collaborations</dd></div>
          </dl>
        </div>
      </section>

      <section className="about-v2__capabilities" data-chrome-tone="dark" aria-labelledby="about-capabilities-title">
        <div className="page-shell">
          <header data-about-reveal>
            <p className="section-label">What I bring</p>
            <h2 id="about-capabilities-title">One practice.<br /><em>Three modes.</em></h2>
          </header>

          <div className="about-v2__capability-grid">
            {capabilities.map((capability) => (
              <article key={capability.number} data-about-reveal>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-v2__principles" data-chrome-tone="light" aria-labelledby="about-approach-title">
        <div className="page-shell">
          <div className="about-v2__approach" data-about-reveal>
            <p className="section-label">Approach</p>
            <h2 id="about-approach-title">Curious enough to question the obvious. Disciplined enough to finish the details.</h2>
          </div>

          <div className="about-v2__values" data-about-reveal>
            <p className="section-label">Principles</p>
            <ol>
              {principles.map((principle, index) => (
                <li key={principle}><span>0{index + 1}</span><strong>{principle}</strong></li>
              ))}
            </ol>
          </div>

          <div className="about-v2__record" data-about-reveal>
            <p className="section-label">Background / record</p>
            <div className="about-v2__record-grid">
              <section>
                <h3>Education</h3>
                <p><span>B.Tech Computer Science</span><small>Current</small></p>
                <p><span>Divine Light Public School · 12th</span><small>94%</small></p>
                <p><span>Divine Light Public School · 10th</span><small>94%</small></p>
              </section>
              <section>
                <h3>Selected certificates</h3>
                <a href="https://drive.google.com/file/d/1TZKULAFWpNlw9rzkQDKEe5mfPYJZXbVD/view?usp=drive_link" target="_blank" rel="noreferrer"><span>Leadership Fundamentals</span><small>2025 ↗</small></a>
                <a href="https://drive.google.com/file/d/1dzElGHdWmK0dQN0Ypqnb33j_l6sjs_ZH/view?usp=drive_link" target="_blank" rel="noreferrer"><span>Leadership and Management</span><small>2025 ↗</small></a>
                <a href="https://drive.google.com/file/d/1iFbEl34JtgzbXnGjxpl5--tZIMkQ3Puf/view?usp=drive_link" target="_blank" rel="noreferrer"><span>Gemini</span><small>2025 ↗</small></a>
              </section>
            </div>
          </div>
        </div>
      </section>
      </div>

      <div className="about-v2__contact-sentinel" data-chrome-tone="dark" aria-hidden="true" />
      <ContactDepthScene
        className="about-v2__contact-depth"
        headingId="about-contact-title"
        revealTrigger=".about-v2__contact-sentinel"
      />
    </div>
  );
}
