import type { Project } from "@/data/projects";

export function ProjectArtwork({ project }: { project: Project }) {
  return (
    <div
      className={`project-artwork project-artwork--${project.slug}`}
      style={{
        "--project-bg": project.theme.background,
        "--project-fg": project.theme.foreground,
        "--project-accent": project.theme.accent
      } as React.CSSProperties}
      aria-hidden="true"
    >
      {project.slug === "house-of-details" ? (
        <>
          <span className="artwork-index">H / 01</span>
          <div className="hod-mark">House of<br />Details</div>
          <div className="hod-line" />
          <p>Surface / Light / Precision</p>
        </>
      ) : null}

      {project.slug === "mediaforge" ? (
        <>
          <span className="artwork-index">MF / LOCAL / 02</span>
          <div className="mediaforge-title">Media<span>Forge</span></div>
          <div className="mediaforge-rack"><i /><i /><i /><i /><i /></div>
          <p>Keep the file. Use the console.</p>
        </>
      ) : null}

      {project.slug === "traqo" ? (
        <>
          <span className="artwork-index">TRQ / MAP / 03</span>
          <div className="traqo-title">Traqo</div>
          <div className="traqo-system">
            <i /><i /><i /><i />
            <strong>Import</strong><strong>Structure</strong><strong>Track</strong><strong>Finish</strong>
          </div>
          <p>Roadmaps made usable</p>
        </>
      ) : null}

      {project.slug === "bibi-kaulan-ji-hospital" ? (
        <>
          <span className="artwork-index">BKJH / 04</span>
          <div className="hospital-symbol"><i /><i /></div>
          <div className="hospital-title">Bibi Kaulan Ji<br />Hospital</div>
          <div className="hospital-services"><span>OPD</span><span>Doctors</span><span>Appointments</span></div>
        </>
      ) : null}

      {project.slug === "ghost-engineer" ? (
        <>
          <span className="artwork-index">GE / IMPACT / 05</span>
          <div className="ghost-symbol"><i /><i /><i /></div>
          <div className="ghost-title">Ghost<br />Engineer</div>
          <p>Fork code. Build impact.</p>
        </>
      ) : null}

      {project.slug === "sws-luxury" ? (
        <>
          <span className="artwork-index">SWS / FLAGSHIP / 06</span>
          <div className="sws-symbol">SWS</div>
          <div className="sws-title">Luxury</div>
          <div className="sws-services"><span>Attars</span><span>Perfumes</span><span>Jewelry</span></div>
        </>
      ) : null}
    </div>
  );
}
