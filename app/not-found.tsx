import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found page-shell" id="top">
      <p className="section-label">404 / Not found</p>
      <h1>This page is not part of the <em>final build.</em></h1>
      <p>The address may be incorrect, or the project is not published.</p>
      <div>
        <Link href="/" className="editorial-link">Return home <span>↗</span></Link>
        <Link href="/work" className="editorial-link">View selected work <span>↗</span></Link>
      </div>
    </div>
  );
}
