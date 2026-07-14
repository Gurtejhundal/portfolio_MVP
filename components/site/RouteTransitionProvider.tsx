"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  labelColor: string;
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
  "/": { curtain: "#f1efe9", labelColor: "#11110f", reveal: "down" },
  "/work": { curtain: "#f1efe9", labelColor: "#11110f", reveal: "up" },
  "/about": { curtain: "#f1efe9", labelColor: "#11110f", reveal: "up" }
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
  return { curtain: "#f1efe9", labelColor: "#11110f", reveal: "up" };
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

function transitionLabel(pathname: string) {
  const normalized = normalizePathname(pathname);
  if (normalized === "/") return "HOME";
  if (normalized === "/work" || normalized.startsWith("/work/")) return "WORKS";
  if (normalized === "/about" || normalized.startsWith("/about/")) return "ABOUT";
  return "PAGE";
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
  const curtainLabelRef = useRef<HTMLSpanElement>(null);
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
    gsap.registerPlugin(ScrollTrigger);

    const curtain = curtainRef.current;
    if (!curtain) return;

    curtain.style.removeProperty("transform");
    gsap.set(curtain, { display: "none", force3D: true });
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
    const label = curtainLabelRef.current;

    if (curtain) {
      gsap.set(curtain, {
        display: "none",
        maskImage: "none",
        webkitMaskImage: "none",
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        borderRadius: "0px",
        scale: 1,
        pointerEvents: "none"
      });
    }
    if (label) {
      gsap.set(label, { x: 0, y: 0, scale: 1, opacity: 0 });
    }
    if (main) {
      gsap.set(main, { clearProps: "transform,opacity,will-change,clip-path" });
    }

    transitionLockedRef.current = false;
    pendingRouteRef.current = null;
    setTargetPathname(null);
    setIsTransitioning(false);
    unlockDocument();
    setAnnouncement(`${routeLabel(window.location.pathname)} page loaded`);

    focusPageHeading();
    ScrollTrigger.refresh();
  }, [focusPageHeading, unlockDocument]);

  const revealRoute = useCallback((pending: PendingRoute) => {
    const curtain = curtainRef.current;
    const label = curtainLabelRef.current;
    const main = document.querySelector<HTMLElement>("[data-page-content]");
    if (!main || !curtain || !label) {
      finishTransition();
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const isHome = pending.pathname === "/";

    const targetHeading = !isHome
      ? document.getElementById(pending.pathname === "/work" ? "works-title" : "about-title")
      : null;

    gsap.killTweensOf([curtain, label, main]);

    gsap.set(main, {
      scale: 1,
      y: 24,
      opacity: 0,
      force3D: true
    });

    if (reduceMotion) {
      gsap.set(curtain, { display: "none" });
      gsap.set(main, { y: 0, opacity: 0 });
      gsap.to(main, {
        opacity: 1,
        duration: 0.25,
        onComplete: finishTransition
      });
      return;
    }

    let deltaX = 0;
    let deltaY = 0;

    if (targetHeading) {
      gsap.set(targetHeading, { opacity: 0 });
      const labelRect = label.getBoundingClientRect();
      const targetRect = targetHeading.getBoundingClientRect();
      deltaX = targetRect.left - labelRect.left;
      deltaY = targetRect.top - labelRect.top;
    } else if (isHome) {
      deltaY = mobile ? -60 : -100;
    }

    const maskObj = { radius: 0 };
    curtain.style.maskImage = `radial-gradient(circle, transparent 0%, black 0%)`;
    curtain.style.webkitMaskImage = `radial-gradient(circle, transparent 0%, black 0%)`;

    const durationMultiplier = mobile ? 0.8 : 1.0;
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline.to(maskObj, {
      radius: 120,
      duration: 0.65 * durationMultiplier,
      ease: "power4.inOut",
      onUpdate: () => {
        curtain.style.maskImage = `radial-gradient(circle, transparent ${maskObj.radius}%, black ${maskObj.radius}%)`;
        curtain.style.webkitMaskImage = `radial-gradient(circle, transparent ${maskObj.radius}%, black ${maskObj.radius}%)`;
      }
    }, 0);

    timeline.to(label, {
      x: deltaX,
      y: deltaY,
      opacity: 0,
      duration: 0.5 * durationMultiplier,
      ease: "power3.inOut"
    }, 0.05);

    timeline.to(main, {
      y: 0,
      opacity: 1,
      duration: 0.55 * durationMultiplier,
      force3D: true
    }, 0.1);

    if (targetHeading) {
      timeline.to(targetHeading, {
        opacity: 1,
        duration: 0.35 * durationMultiplier,
        ease: "power3.out"
      }, 0.4 * durationMultiplier);
    }

    const labelElem = main.querySelector<HTMLElement>("[data-route-reveal='label'], .page-intro .section-label, .about-page__hero .section-label");
    const headingLines = Array.from(main.querySelectorAll<HTMLElement>("[data-route-heading-line]"));
    const supportingContent = Array.from(main.querySelectorAll<HTMLElement>("[data-route-reveal='content']"));

    if (labelElem) {
      gsap.set(labelElem, { y: 18, opacity: 0 });
      timeline.to(labelElem, { y: 0, opacity: 1, duration: 0.45 }, 0.3 * durationMultiplier);
    }
    if (headingLines.length) {
      const headingLinesToAnimate = targetHeading
        ? headingLines.filter(line => line !== targetHeading)
        : headingLines;
      gsap.set(headingLinesToAnimate, { yPercent: 110 });
      timeline.to(headingLinesToAnimate, { yPercent: 0, duration: 0.58, stagger: 0.055 }, 0.35 * durationMultiplier);
    }
    if (supportingContent.length) {
      gsap.set(supportingContent, { y: 24, opacity: 0 });
      timeline.to(supportingContent, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 }, 0.4 * durationMultiplier);
    }

    timeline.call(finishTransition, [], 0.65 * durationMultiplier);
  }, [finishTransition]);

  const coverAndNavigate = useCallback((pending: PendingRoute) => {
    const curtain = curtainRef.current;
    const label = curtainLabelRef.current;
    const main = document.querySelector<HTMLElement>("[data-page-content]");
    if (!main || !curtain || !label) {
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

    gsap.killTweensOf([curtain, label, main]);

    if (reduceMotion) {
      gsap.set(curtain, {
        display: "block",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        backgroundColor: pending.theme.curtain,
        opacity: 0
      });
      gsap.timeline({ onComplete: changeRoute })
        .to(curtain, { opacity: 1, duration: 0.25 })
        .to(main, { opacity: 0, duration: 0.25 }, 0);
      return;
    }

    const activeLink = document.querySelector(`.home-bottom-nav a[aria-current="page"]`)
      || document.querySelector(`.home-bottom-nav a[href="${pending.pathname}"]`)
      || document.querySelector(`.home-bottom-nav a[href*="${pending.pathname}"]`);

    let rect = { left: window.innerWidth / 2 - 40, top: window.innerHeight - 60, width: 80, height: 42 };
    if (activeLink) {
      const activeRect = activeLink.getBoundingClientRect();
      rect = {
        left: activeRect.left,
        top: activeRect.top,
        width: activeRect.width,
        height: activeRect.height
      };
    }

    const labelText = transitionLabel(pending.pathname);
    const durationMultiplier = mobile ? 0.8 : 1.0;

    gsap.set(curtain, {
      display: "grid",
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      borderRadius: `${rect.height / 2}px`,
      backgroundColor: pending.theme.curtain,
      opacity: 1,
      pointerEvents: "auto",
      maskImage: "none",
      webkitMaskImage: "none"
    });

    gsap.set(label, {
      innerText: labelText,
      fontSize: "0.78rem",
      fontWeight: "500",
      letterSpacing: "-0.015em",
      color: pending.theme.labelColor,
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1
    });

    gsap.timeline({ defaults: { ease: "power3.inOut" } })
      .to(main, {
        scale: 0.975,
        y: -16,
        opacity: 0.58,
        clipPath: "inset(5% 4% round 26px)",
        duration: 0.45 * durationMultiplier,
        force3D: true
      }, 0);

    const timeline = gsap.timeline({
      delay: 0.1 * durationMultiplier,
      defaults: { ease: "power3.inOut" },
      onComplete: changeRoute
    });

    const targetWidth = mobile ? "65vw" : "55vw";
    const targetHeight = mobile ? "90px" : "120px";

    timeline.to(curtain, {
      scale: 1.04,
      duration: 0.1 * durationMultiplier
    }, 0);

    timeline.to(curtain, {
      left: `calc(50vw - (${targetWidth} / 2))`,
      top: `calc(50vh - (${targetHeight} / 2))`,
      width: targetWidth,
      height: targetHeight,
      borderRadius: "32px",
      scale: 1,
      duration: 0.28 * durationMultiplier
    }, 0.1 * durationMultiplier);

    const destFontSize = mobile ? "3.2rem" : "6.5rem";
    timeline.to(label, {
      fontSize: destFontSize,
      letterSpacing: "-0.055em",
      fontWeight: "400",
      duration: 0.42 * durationMultiplier
    }, 0.1 * durationMultiplier);

    timeline.to(curtain, {
      left: "-10vw",
      top: "-10vh",
      width: "120vw",
      height: "120vh",
      borderRadius: "0px",
      duration: 0.32 * durationMultiplier
    }, 0.38 * durationMultiplier);

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
      window.scrollTo(0, 0);
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
            onComplete: () => {
              focusPageHeading();
              ScrollTrigger.refresh();
            }
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
          display: "none",
          placeItems: "center",
          zIndex: 900,
          pointerEvents: "none",
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          borderRadius: "0px",
          background: curtainTheme.curtain,
          willChange: "transform, width, height, top, left, border-radius",
          overflow: "hidden"
        }}
      >
        <span
          ref={curtainLabelRef}
          className="route-curtain-label"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-home), Arial, sans-serif",
            textTransform: "uppercase",
            willChange: "transform, font-size, letter-spacing, font-weight, color",
            whiteSpace: "nowrap",
            textAlign: "center"
          }}
        />
      </div>
      <div className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</div>
    </RouteTransitionContext.Provider>
  );
}
