"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/data/site";

type Panel = "menu" | "info" | null;

export function SiteHeader() {
  const pathname = usePathname();
  const [panel, setPanel] = useState<Panel>(null);
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const infoTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!panel) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const closingPanel = panel;
        setPanel(null);
        window.setTimeout(() => {
          (closingPanel === "menu" ? menuTriggerRef : infoTriggerRef).current?.focus();
        }, 0);
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [panel]);

  const closePanel = () => {
    const closingPanel = panel;
    setPanel(null);
    window.setTimeout(() => {
      (closingPanel === "menu" ? menuTriggerRef : infoTriggerRef).current?.focus();
    }, 0);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  if (pathname === "/") return null;

  return (
    <>
      <header className={`site-header ${pathname !== "/" ? "site-header--route" : ""} ${scrolled ? "site-header--scrolled" : ""}`}>
        <Link className="site-header__name" href="/" aria-label="Gurtejbir Singh home">
          Gurtejbir Singh
        </Link>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="site-header__info"
          type="button"
          ref={infoTriggerRef}
          aria-expanded={panel === "info"}
          aria-controls="site-panel"
          onClick={() => setPanel("info")}
        >
          Quick info
        </button>

        <button
          className="site-header__menu"
          type="button"
          ref={menuTriggerRef}
          aria-expanded={panel === "menu"}
          aria-controls="site-panel"
          onClick={() => setPanel("menu")}
        >
          Menu
        </button>
      </header>

      {panel ? (
        <div className="site-panel-shell" role="presentation" onMouseDown={closePanel}>
          <div
            className={`site-panel site-panel--${panel}`}
            id="site-panel"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={panel === "menu" ? "Site navigation" : "Quick information"}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="site-panel__topline">
              <span>{panel === "menu" ? "Navigation" : "Quick info"}</span>
              <button type="button" onClick={closePanel} aria-label="Close panel">Close</button>
            </div>

            {panel === "menu" ? (
              <nav className="mobile-navigation" aria-label="Mobile navigation">
                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setPanel(null)}
                  >
                    <small>0{index + 1}</small>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            ) : (
              <div className="quick-info">
                <p>{site.statement}</p>
                <dl>
                  <div><dt>Based in</dt><dd>{site.location}</dd></div>
                  <div><dt>Working as</dt><dd>{site.role}</dd></div>
                  <div><dt>Availability</dt><dd>{site.availability}</dd></div>
                  <div><dt>Current focus</dt><dd>{site.focus}</dd></div>
                </dl>
                <div className="quick-info__links">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                  <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
