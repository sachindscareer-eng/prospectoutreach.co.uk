"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Linkedin, Mail, X, Check } from "lucide-react";

const NEWSLETTER_URL = "https://www.linkedin.com/newsletters/7449502823119056896/?displayConfirmation=true";
const SHOW_DELAY_MS = 2500;

const perks = ["B2B demand generation insights", "Outreach playbooks that book meetings", "Pipeline growth tips, no spam"];

export function NewsletterPopup() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const pathname = usePathname();

  // show on every visit / reload of the home page
  useEffect(() => {
    if (pathname !== "/") {
      setOpen(false);
      return;
    }
    const id = setTimeout(() => {
      lastFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    }, SHOW_DELAY_MS);
    return () => clearTimeout(id);
  }, [pathname]);

  const close = useCallback(() => {
    setOpen(false);
    lastFocus.current?.focus?.();
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-title"
            aria-describedby="newsletter-desc"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.94, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0b18] shadow-[0_40px_120px_-30px_rgba(124,92,255,0.6)]"
          >
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#7c5cff]/25 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#c084fc]/15 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" aria-hidden />

            <button
              ref={closeRef}
              type="button"
              onClick={() => close()}
              aria-label="Close newsletter popup"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c5cff]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative grid items-center gap-8 p-7 sm:p-10 md:grid-cols-[1.25fr_0.75fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#7c5cff]/30 bg-[#7c5cff]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#c4b5fd]">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn Newsletter
                </span>
                <h2 id="newsletter-title" className="mt-4 font-syne text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-[2.1rem]">
                  Subscribe to our{" "}
                  <span className="bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">newsletter</span>
                </h2>
                <p id="newsletter-desc" className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  Get the latest news, updates and practical B2B growth ideas from ProspectOutreach, delivered straight to your LinkedIn feed and inbox.
                </p>

                <ul className="mt-5 space-y-2">
                  {perks.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-white/80">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7c5cff] to-[#c084fc]">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={NEWSLETTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => close()}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#a855f7] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(124,92,255,0.8)] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <Linkedin className="h-4 w-4" /> Subscribe on LinkedIn
                  </a>
                </div>
              </div>

              {/* illustration */}
              <div className="relative mx-auto hidden h-56 w-56 md:block" aria-hidden>
                <motion.div
                  className="absolute inset-0 rounded-full border border-dashed border-[#7c5cff]/30"
                  animate={reduce ? undefined : { rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-5 rounded-full bg-gradient-to-br from-[#7c5cff]/30 to-[#c084fc]/10 ring-1 ring-white/10" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={reduce ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative flex h-24 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c5cff] to-[#a855f7] shadow-[0_20px_50px_-15px_rgba(124,92,255,0.9)] ring-1 ring-white/25">
                    <Mail className="h-12 w-12 text-white" strokeWidth={1.6} />
                    <motion.span
                      className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#ef4444] text-sm font-bold text-white ring-4 ring-[#0d0b18]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 400, damping: 15 }}
                    >
                      1
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
