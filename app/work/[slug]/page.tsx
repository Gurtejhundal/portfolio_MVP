import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/editorial/ContactCta";
import { ProjectArtwork } from "@/components/editorial/ProjectArtwork";
import { getNextProject, getProject, publishedProjects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${project.category}`,
      description: project.summary,
      url: `/work/${project.slug}`,
      type: "article"
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject = getNextProject(project.slug);

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    dateCreated: String(project.year),
    creator: { "@type": "Person", name: "Gurtejbir Singh" }
  };

  return (
    <article
      id="top"
      className="case-study"
      style={{
        "--case-bg": project.theme.background,
        "--case-fg": project.theme.foreground,
        "--case-accent": project.theme.accent
      } as React.CSSProperties}
    >
      <header className="case-study__hero page-shell">
        <div className="case-study__kicker">
          <span>{project.number}</span><span>{project.category}</span><span>{project.year}</span>
        </div>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="case-study__art"><ProjectArtwork project={project} /></div>
      </header>

      <div className="case-study__metadata page-shell">
        <dl>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Services</dt><dd>{project.services.join(", ")}</dd></div>
          <div><dt>Duration</dt><dd>{project.duration}</dd></div>
          <div><dt>Status</dt><dd>{project.projectStatus}</dd></div>
          <div><dt>Stack</dt><dd>{project.stack.join(", ")}</dd></div>
        </dl>
      </div>

      <div className="case-study__sections page-shell">
        {project.sections.map((section, index) => (
          <section key={section.label} aria-labelledby={`${project.slug}-section-${index}`}>
            <p className="section-label">{String(index + 1).padStart(2, "0")} / {section.label}</p>
            <h2 id={`${project.slug}-section-${index}`}>{section.title}</h2>
            <div>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </section>
        ))}

        <section aria-labelledby={`${project.slug}-reflection`}>
          <p className="section-label">{String(project.sections.length + 1).padStart(2, "0")} / Reflection</p>
          <h2 id={`${project.slug}-reflection`}>What the next version needs.</h2>
          <div>
            <p>The next step is to replace the current typographic cover with approved project imagery, complete the production content and validate the experience with real users.</p>
          </div>
        </section>

        <section className="case-study__credits" aria-labelledby={`${project.slug}-credits`}>
          <p className="section-label">Credits</p>
          <h2 id={`${project.slug}-credits`}>Built with clear ownership.</h2>
          <div>{project.credits.map((credit) => <p key={credit}>{credit}</p>)}</div>
        </section>
      </div>

      <Link className="next-project" href={`/work/${nextProject.slug}`}>
        <span>Next project / {nextProject.number}</span>
        <strong>{nextProject.title}</strong>
        <span aria-hidden="true">↗</span>
      </Link>

      <ContactCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork) }} />
    </article>
  );
}
