"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

/** true only on mouse/trackpad devices where the user hasn't asked for reduced motion */
export function useFinePointer() {
  const reduce = useReducedMotion();
  const [fine, setFine] = useState(false);
  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);
  return fine && !reduce;
}

/** Wraps a button/link so it is gently pulled toward the cursor while hovered. */
export function Magnetic({
  children,
  strength = 0.2,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const enabled = useFinePointer();
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.3 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className ?? "inline-flex"}
      style={enabled ? { x, y } : undefined}
      onPointerMove={(e) => {
        if (!enabled || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Counts up to a formatted number like "12,480" when scrolled into view. */
export function CountUp({ value, duration = 1.6 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const target = Number(value.replace(/[^0-9.]/g, "")) || 0;
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setShown(Math.round(v).toLocaleString("en-US")),
    });
    return () => controls.stop();
  }, [inView, reduce, target, duration]);

  return <span ref={ref}>{shown}</span>;
}

/**
 * Site-wide cursor spotlight for any element with `data-spotlight`.
 * One pointermove listener sets --mx/--my on the hovered card; CSS draws the glow.
 */
export function SpotlightTracker() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-spotlight]");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
