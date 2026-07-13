"use client";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from "react";

type RouteTheme = {
  curtain: string;
  reveal: "up" | "down";
};

type PendingRoute = {
  href: string;
  pathname: string;
  theme: RouteTheme;
};

type RouteTransitionContextValue = {
  activePathname: string;
  isTransitioning: boolean;
  navigate: (href: string) => boolean;
  quickInfoOpen: boolean;
  setQuickInfoOpen: (open: boolean) => void;
  waitingForQuickInfo: boolean;
  notifyQuickInfoClosed: () => void;
};

const ROUTE_THEMES: Record<string, RouteTheme> = {
  "/": { curtain: "#f1efe9", reveal: "down" },
  "/work": { curtain: "#78172f", reveal: "up" },
  "/about": { curtain: "#11110f", reveal: "up" }
};

const RouteTransitionContext = createContext<RouteTransitionContextValue | null>(null);

function normalizePathname(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "") || "/";
}

function routeTheme(pathname: string): RouteTheme {
  const normalized = normalizePathname(pathname);
  if (ROUTE_THEMES[normalized]) return ROUTE_THEMES[normalized];
  if (normalized.startsWith("/work/")) return ROUTE_THEMES["/work"];
  if (normalized.startsWith("/about/")) return ROUTE_THEMES["/about"];
  return { curtain: "#11110f", reveal: "up" };
}

function routeLabel(pathname: string) {
  const normalized = normalizePathname(pathname);
  if (normalized === "/") return "Home";
  if (normalized === "/work") return "Selected work";
  if (normalized === "/about") return "About";
  if (normalized === "/contact") return "Contact";
  if (normalized.startsWith("/work/")) return "Project";
  return "Page";
}

export function useRouteTransition() {
  const value = useContext(RouteTransitionContext);
  if (!value) throw new Error("useRouteTransition must be used inside RouteTransitionProvider");
  return value;
}

export function RouteTransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const curtainRef = useRef<HTMLDivElement>(null);
  const pendingRouteRef = useRef<PendingRoute | null>(null);
  const transitionLockedRef = useRef(false);
  const waitingForQuickInfoRef = useRef(false);
  const previousBodyOverflowRef = useRef("");
  const previousScrollBehaviorRef = useRef("");
  const previousPathnameRef = useRef(pathname);
  const [targetPathname, setTargetPathname] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [curtainTheme, setCurtainTheme] = useState<RouteTheme>(ROUTE_THEMES["/"]);
  const [announcement, setAnnouncement] = useState(() => `${routeLabel(pathname)} page`);
  const [quickInfoOpen, setQuickInfoOpenState] = useState(false);
  const [waitingForQuickInfo, setWaitingForQuickInfo] = useState(false);

  useLayoutEffect(() => {
    const curtain = curtainRef.current;
    if (!curtain) return;

    // The server style keeps the curtain below the viewport before hydration.
    // Replace it with a single GSAP-owned translate so yPercent is not added to
    // the existing 100% transform (which previously started the curtain at 200%).
    curtain.style.removeProperty("transform");
    gsap.set(curtain, { yPercent: 100, force3D: true });
  }, []);

  const setWaitingState = useCallback((waiting: boolean) => {
    waitingForQuickInfoRef.current = waiting;
    setWaitingForQuickInfo(waiting);
  }, []);

  const lockDocument = useCallback(() => {
    previousBodyOverflowRef.current = document.body.style.overflow;
    previousScrollBehaviorRef.current = document.documentElement.style.scrollBehavior;
    document.body.style.overflow = "hidden";
    document.documentElement.style.scrollBehavior = "auto";
  }, []);

  const unlockDocument = useCallback(() => {
    document.body.style.overflow = previousBodyOverflowRef.current;
    document.documentElement.style.scrollBehavior = previousScrollBehaviorRef.current;
  }, []);

  const focusPageHeading = useCallback(() => {
    const heading = document.querySelector<HTMLElement>("[data-page-content] h1");
    if (!heading) return;
    if (!heading.hasAttribute("tabindex")) heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  }, []);

  const finishTransition = useCallback(() => {
    const main = document.querySelector<HTMLElement>("[data-page-content]");
    const curtain = curtainRef.current;

    if (curtain) {
      gsap.set(curtain, { yPercent: 100, borderRadius: "32px 32px 0 0" });
    }
    if (main) {
      gsap.set(main, { clearProps: "transform,opacity" });
    }

    transitionLockedRef.current = false;
    pendingRouteRef.current = null;
    setTargetPathname(null);
    setIsTransitioning(false);
    unlockDocument();
    setAnnouncement(`${routeLabel(window.location.pathname)} page loaded`);

    focusPageHeading();
  }, [focusPageHeading, unlockDocument]);

  const revealRoute = useCallback((pending: PendingRoute) => {
    const curtain = curtainRef.current;
    const main = document.querySelector<HTMLElement>("[data-page-content]");
    if (!main || !curtain) {
      finishTransition();
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const isHome = pending.pathname === "/";
    const label = isHome
      ? null
      : main.querySelector<HTMLElement>("[data-route-reveal='label'], .page-intro .section-label, .about-page__hero .section-label");
    const heading = isHome
      ? null
      : main.querySelector<HTMLElement>("[data-route-reveal='heading'], h1");
    const headingLines = isHome
      ? []
      : Array.from(main.querySelectorAll<HTMLElement>("[data-route-heading-line]"));
    const supportingContent = isHome
      ? []
      : Array.from(main.querySelectorAll<HTMLElement>("[data-route-reveal='content']"));

    gsap.killTweensOf([curtain, main, label, heading, ...headingLines, ...supportingContent].filter(Boolean));
    gsap.set(main, {
      scale: mobile ? 1.008 : 1.015,
      y: mobile ? 8 : 14,
      opacity: 0.86,
      force3D: true
    });

    if (reduceMotion) {
      gsap.set(curtain, { yPercent: 100 });
      finishTransition();
      return;
    }

    if (label) gsap.set(label, { y: 18, opacity: 0 });
    if (headingLines.length) gsap.set(headingLines, { yPercent: 110 });
    else if (heading) gsap.set(heading, { y: 44, opacity: 0 });
    if (supportingContent.length) gsap.set(supportingContent, { y: 28, opacity: 0 });

    const revealDuration = mobile ? 0.58 : 0.7;
    const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
    timeline
      .to(curtain, {
        yPercent: pending.theme.reveal === "down" ? 101 : -101,
        duration: revealDuration,
        force3D: true,
        ease: "power4.inOut"
      }, 0)
      .to(main, {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: mobile ? 0.58 : 0.78,
        force3D: true
      }, 0.06);

    if (label) timeline.to(label, { y: 0, opacity: 1, duration: 0.5 }, 0.08);
    if (headingLines.length) {
      timeline.to(headingLines, { yPercent: 0, duration: mobile ? 0.58 : 0.72, stagger: 0.065 }, 0.1);
    } else if (heading) {
      timeline.to(heading, { y: 0, opacity: 1, duration: mobile ? 0.58 : 0.72 }, 0.1);
    }
    if (supportingContent.length) {
      timeline.to(supportingContent, { y: 0, opacity: 1, duration: 0.56, stagger: 0.055 }, 0.2);
    }

    // Navigation is usable as soon as the curtain clears. Supporting content
    // may keep settling without holding the document scroll lock.
    timeline.call(finishTransition, [], revealDuration);
  }, [finishTransition]);

  const coverAndNavigate = useCallback((pending: PendingRoute) => {
    const curtain = curtainRef.current;
    const main = document.querySelector<HTMLElement>("[data-page-content]");
    if (!main || !curtain) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      router.push(pending.href, { scroll: false });
      return;
    }

    lockDocument();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const changeRoute = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      router.push(pending.href, { scroll: false });
    };

    gsap.killTweensOf([curtain, main]);
    if (reduceMotion) {
      gsap.to(main, { opacity: 0.82, duration: 0.16, ease: "power1.in", onComplete: changeRoute });
      return;
    }

    gsap.set(curtain, {
      yPercent: 100,
      borderRadius: "32px 32px 0 0",
      backgroundColor: pending.theme.curtain
    });
    gsap.timeline({ defaults: { ease: "power4.inOut" }, onComplete: changeRoute })
      .to(main, {
        scale: mobile ? 0.985 : 0.965,
        y: mobile ? -12 : -24,
        opacity: mobile ? 0.8 : 0.72,
        duration: mobile ? 0.48 : 0.62,
        force3D: true
      }, 0)
      .to(curtain, {
        yPercent: 0,
        borderRadius: 0,
        duration: mobile ? 0.56 : 0.72,
        force3D: true
      }, mobile ? 0.02 : 0.05);
  }, [lockDocument, router]);

  const notifyQuickInfoClosed = useCallback(() => {
    if (!waitingForQuickInfoRef.current) return;
    const pending = pendingRouteRef.current;
    setWaitingState(false);
    if (pending) coverAndNavigate(pending);
  }, [coverAndNavigate, setWaitingState]);

  const navigate = useCallback((href: string) => {
    if (transitionLockedRef.current || typeof window === "undefined") return false;

    let destination: URL;
    try {
      destination = new URL(href, window.location.href);
    } catch {
      return false;
    }

    if (destination.origin !== window.location.origin) return false;
    if (!/^https?:$/.test(destination.protocol)) return false;
    if (destination.hash && destination.pathname === window.location.pathname) return false;

    const destinationPathname = normalizePathname(destination.pathname);
    if (destinationPathname === normalizePathname(window.location.pathname)) return false;

    const pending: PendingRoute = {
      href: `${destination.pathname}${destination.search}${destination.hash}`,
      pathname: destinationPathname,
      theme: routeTheme(destinationPathname)
    };

    router.prefetch(pending.href);

    transitionLockedRef.current = true;
    pendingRouteRef.current = pending;
    setIsTransitioning(true);
    setTargetPathname(destinationPathname);
    setCurtainTheme(pending.theme);
    setAnnouncement(`Opening ${routeLabel(destinationPathname)} page`);

    if (quickInfoOpen) {
      setWaitingState(true);
      setQuickInfoOpenState(false);
    } else {
      coverAndNavigate(pending);
    }
    return true;
  }, [coverAndNavigate, quickInfoOpen, router, setWaitingState]);

  const setQuickInfoOpen = useCallback((open: boolean) => {
    if (transitionLockedRef.current && open) return;
    setQuickInfoOpenState(open);
  }, []);

  useEffect(() => {
    const pending = pendingRouteRef.current;
    const historyNavigation = previousPathnameRef.current !== pathname && !pending;
    previousPathnameRef.current = pathname;
    const frame = window.requestAnimationFrame(() => {
      setAnnouncement(`${routeLabel(pathname)} page`);
      if (pending && normalizePathname(pathname) === pending.pathname) {
        revealRoute(pending);
      } else if (historyNavigation) {
        const main = document.querySelector<HTMLElement>("[data-page-content]");
        if (!main) return;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        gsap.fromTo(
          main,
          { opacity: reduceMotion ? 0.9 : 0.84, y: reduceMotion ? 0 : 14 },
          {
            opacity: 1,
            y: 0,
            duration: reduceMotion ? 0.16 : 0.46,
            ease: "power3.out",
            clearProps: "transform,opacity",
            onComplete: focusPageHeading
          }
        );
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [focusPageHeading, pathname, revealRoute]);

  useEffect(() => {
    const handleInternalLink = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.hasAttribute("data-animated-link") || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      if (navigate(anchor.href)) event.preventDefault();
    };

    document.addEventListener("click", handleInternalLink, true);
    return () => document.removeEventListener("click", handleInternalLink, true);
  }, [navigate]);

  useEffect(() => () => {
    gsap.killTweensOf([curtainRef.current, document.querySelector("[data-page-content]")].filter(Boolean));
    document.body.style.overflow = previousBodyOverflowRef.current;
    document.documentElement.style.scrollBehavior = previousScrollBehaviorRef.current;
  }, []);

  const contextValue = useMemo<RouteTransitionContextValue>(() => ({
    activePathname: targetPathname ?? pathname,
    isTransitioning,
    navigate,
    quickInfoOpen,
    setQuickInfoOpen,
    waitingForQuickInfo,
    notifyQuickInfoClosed
  }), [
    targetPathname,
    pathname,
    isTransitioning,
    navigate,
    quickInfoOpen,
    setQuickInfoOpen,
    waitingForQuickInfo,
    notifyQuickInfoClosed
  ]);

  return (
    <RouteTransitionContext.Provider value={contextValue}>
      {children}
      <div
        ref={curtainRef}
        className="route-curtain"
        aria-hidden="true"
        data-route-transition-curtain
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 900,
          pointerEvents: "none",
          transform: "translate3d(0, 100%, 0)",
          background: curtainTheme.curtain,
          willChange: "transform, border-radius"
        }}
      />
      <div className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</div>
    </RouteTransitionContext.Provider>
  );
}
