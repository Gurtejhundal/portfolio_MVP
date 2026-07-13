import Link from "next/link";
import { site } from "@/data/site";

export function ContactCta() {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <div className="page-shell">
        <p className="section-label">Start a conversation</p>
        <h2 id="contact-cta-title">Have something worth<br /><em>building properly?</em></h2>
        <div className="contact-cta__actions">
          <Link href="/contact" className="contact-cta__primary">Let&apos;s talk <span>↗</span></Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </section>
  );
}
