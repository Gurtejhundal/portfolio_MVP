"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createPortal } from "react-dom";
import {
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
  type FormEvent,
  type PointerEvent as ReactPointerEvent,
  type RefObject
} from "react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/home/SocialIcons";
import { site } from "@/data/site";

const panelEase = [0.76, 0, 0.24, 1] as const;
const emptySubscribe = () => () => undefined;

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

export function ContactDialog({ open, onClose, triggerRef }: ContactDialogProps) {
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const followerRef = useRef<HTMLSpanElement>(null);
  const previousOverflowRef = useRef("");
  const lockedRef = useRef(false);
  const inertNodesRef = useRef<HTMLElement[]>([]);
  const reduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const releaseLock = useCallback(() => {
    if (!lockedRef.current) return;
    document.body.style.overflow = previousOverflowRef.current;
    inertNodesRef.current.forEach((node) => { node.inert = false; });
    inertNodesRef.current = [];
    lockedRef.current = false;
  }, []);

  const hideFollower = () => followerRef.current?.classList.remove("is-visible");

  useEffect(() => releaseLock, [releaseLock]);

  useEffect(() => {
    if (!open) return;

    if (!lockedRef.current) {
      previousOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      inertNodesRef.current = Array.from(document.querySelectorAll<HTMLElement>("[data-page-content], [data-site-chrome]"));
      inertNodesRef.current.forEach((node) => { node.inert = true; });
      lockedRef.current = true;
    }

    const focusFrame = window.requestAnimationFrame(() => closeRef.current?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
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

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  const moveFollower = (event: ReactPointerEvent<HTMLDivElement>) => {
    const follower = followerRef.current;
    if (!follower || panelRef.current?.contains(event.target as Node) || event.pointerType !== "mouse") {
      hideFollower();
      return;
    }
    follower.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    follower.classList.add("is-visible");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const sender = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = "Portfolio project enquiry";
    const body = [`From: ${sender}`, "", message].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence
      onExitComplete={() => {
        hideFollower();
        releaseLock();
        triggerRef.current?.focus();
      }}
    >
      {open ? (
        <motion.div
          className="contact-dialog-shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.72, ease: panelEase }}
          onPointerMove={moveFollower}
          onPointerLeave={hideFollower}
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <span className="contact-dialog-cursor" ref={followerRef} aria-hidden="true">Close</span>
          <motion.section
            className="contact-dialog"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            initial={{ opacity: 0, y: reduceMotion ? 10 : 34, scale: reduceMotion ? 1 : 0.975 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduceMotion ? 10 : 34, scale: reduceMotion ? 1 : 0.975 }}
            transition={{ duration: reduceMotion ? 0.14 : 0.82, ease: panelEase }}
            onPointerMove={(event) => event.stopPropagation()}
            onPointerEnter={hideFollower}
          >
            <header className="contact-dialog__header">
              <h2 id="contact-dialog-title">Let&apos;s start a project <em>together.</em></h2>
              <button ref={closeRef} type="button" onClick={onClose} aria-label="Close contact dialog">×</button>
            </header>

            <div className="contact-dialog__layout">
              <form className="contact-dialog__form" onSubmit={handleSubmit}>
                <label htmlFor="contact-sender">Your email</label>
                <input id="contact-sender" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" placeholder="Tell me about the project" required rows={5} />
                <button type="submit">Open email <span aria-hidden="true">↗</span></button>
              </form>

              <aside className="contact-dialog__details" aria-label="Contact details">
                <div>
                  <p>Contact</p>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
                <div>
                  <p>Socials</p>
                  <div className="contact-dialog__socials">
                    <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram profile"><InstagramIcon /></a>
                    <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /></a>
                    <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinIcon /></a>
                  </div>
                </div>
              </aside>
            </div>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
