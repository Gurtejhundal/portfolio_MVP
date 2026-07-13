"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { useRouteTransition } from "./RouteTransitionProvider";

type AnimatedLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "onClick"> & {
  onClick?: ComponentPropsWithoutRef<typeof Link>["onClick"];
};

export function AnimatedLink({ href, onClick, target, ...props }: AnimatedLinkProps) {
  const { isTransitioning, navigate } = useRouteTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target === "_blank"
    ) return;

    const destination = typeof href === "string" ? href : href.pathname ?? "";
    if (destination.startsWith("#")) return;

    let destinationUrl: URL;
    try {
      destinationUrl = new URL(destination, window.location.href);
    } catch {
      return;
    }

    if (destinationUrl.origin === window.location.origin) {
      const sameDocument =
        destinationUrl.pathname === window.location.pathname &&
        destinationUrl.search === window.location.search;
      if (sameDocument && !destinationUrl.hash) {
        event.preventDefault();
        return;
      }
      if (!sameDocument && isTransitioning) {
        event.preventDefault();
        return;
      }
    }

    if (navigate(destination)) event.preventDefault();
  };

  return <Link href={href} target={target} onClick={handleClick} data-animated-link {...props} />;
}
