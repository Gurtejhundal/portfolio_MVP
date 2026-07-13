import type { Metadata } from "next";
import Link from "next/link";
import { CopyEmailButton } from "@/components/editorial/CopyEmailButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Gurtejbir Singh about product interfaces, websites and digital experiences.",
  alternates: { canonical: "/contact" }
};

const projectTypes = [
  "Product interface design",
  "Brand and marketing websites",
  "Interactive editorial experiences",
  "Full-stack web products"
];

export default function ContactPage() {
  return (
    <div id="top" className="contact-page page-shell">
      <header>
        <p className="section-label" data-route-reveal="label">Contact / {site.availability}</p>
        <h1 className="heading-mask"><span data-route-heading-line>Have a product, brand or idea that needs a stronger <em>digital experience?</em></span></h1>
      </header>

      <section className="contact-page__primary" aria-labelledby="contact-email-title">
        <h2 id="contact-email-title">Start a conversation</h2>
        <a href={`mailto:${site.email}`} className="contact-page__email">{site.email}<span>↗</span></a>
        <div className="contact-page__controls">
          <CopyEmailButton email={site.email} />
          <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <section className="contact-page__details" aria-label="Contact details">
        <div>
          <p className="section-label">Based in</p>
          <p>{site.location}</p>
        </div>
        <div role="group" aria-labelledby="project-types-title">
          <p className="section-label" id="project-types-title">Good reasons to write</p>
          <ul>{projectTypes.map((type) => <li key={type}>{type}</li>)}</ul>
        </div>
        <div>
          <p className="section-label">Prefer to browse first?</p>
          <Link className="editorial-link" href="/work">View selected work <span>↗</span></Link>
        </div>
      </section>

      <p className="contact-page__privacy">This site does not use a contact form, cookies or analytics. Email opens in your own mail client; no enquiry data is collected by the portfolio.</p>
    </div>
  );
}
