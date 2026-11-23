"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  Zap,
  Target,
  Crosshair,
  Radar,
  FileText,
  CalendarCheck,
  ShieldCheck,
  Handshake,
  Eye,
  Gauge,
  Compass,
  Flag,
  MapPin,
  Building2,
  Quote,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp, Magnetic, useFinePointer } from "@/components/interactive";
import { offices } from "@/lib/offices";

/* ================================================================== */
/* Content — existing About copy kept; new blocks only support it      */
/* ================================================================== */

const stats = [
  { value: "45", suffix: "+", label: "Clients" },
  { value: "1", suffix: "M+", label: "Leads delivered" },
  { value: "9", suffix: " yrs", label: "Expertise" },
];

const regions = [
  { key: "na", name: "North America", value: "18", zone: [0.04, 0.34] as const, blurb: "Decision-makers across the US and Canada." },
  { key: "emea", name: "EMEA", value: "15", zone: [0.4, 0.62] as const, blurb: "Buyers across the UK, Europe, the Middle East and Africa." },
  { key: "apac", name: "APAC", value: "8", zone: [0.64, 0.96] as const, blurb: "Professionals across Asia and the Pacific." },
];

const approach = [
  {
    icon: Database,
    title: "Data Driven",
    description:
      "We use verified B2B data and intent signals to target the right accounts and contacts, so your outreach hits decision-makers who are ready to buy.",
    points: ["Verified B2B contact data", "Intent signals", "ICP-matched accounts"],
  },
  {
    icon: Zap,
    title: "Automation First",
    description:
      "Manual follow-ups don't scale. We automate sequences, lead routing, and CRM sync so your team spends time closing, not data entry.",
    points: ["Automated sequences", "Lead routing", "CRM sync"],
  },
  {
    icon: Target,
    title: "Results Focused",
    description:
      "Every feature is built to move the needle: more qualified leads, higher reply rates, and more closed deals. We measure what matters.",
    points: ["Qualified leads", "Higher reply rates", "More closed deals"],
  },
];

const services = [
  { icon: Crosshair, title: "Account-Based Marketing (ABM)" },
  { icon: Radar, title: "Intent-Based Demand Generation" },
  { icon: FileText, title: "Content Syndication" },
  { icon: CalendarCheck, title: "B2B Appointment Setting" },
];

const values = [
  { icon: ShieldCheck, title: "Compliance first", text: "Verified, enriched B2B data handled in line with GDPR and CCPA." },
  { icon: Gauge, title: "Quality over volume", text: "Every contact is matched to your ideal customer profile before outreach starts." },
  { icon: Eye, title: "Full transparency", text: "Clear reporting on who engaged and which conversations progressed." },
  { icon: Handshake, title: "True partnership", text: "We work as an extension of your marketing and sales team." },
];


const GRAD = "bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent";
const CARD =
  "rounded-[1.4rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01]";
const EASE = [0.22, 1, 0.36, 1] as const;

/* ================================================================== */
/* Small building blocks                                               */
/* ================================================================== */

function SectionHead({
  eyebrow,
  children,
  sub,
  center = true,
}: {
  eyebrow: string;
  children: ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "120px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}
    >
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {children}
      </h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
    </motion.div>
  );
}

/** Card that tilts slightly towards the cursor (mouse only, respects reduced motion). */
function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const fine = useFinePointer();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 180, damping: 18 });

  return (
    <motion.div
      ref={ref}
      data-spotlight
      style={fine ? { rotateX: rx, rotateY: ry, transformPerspective: 900 } : undefined}
      onPointerMove={(e) => {
        if (!fine || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Headline that reveals word by word. */
function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: reduce ? 0 : "105%" }}
            animate={{ y: 0 }}
            transition={{ delay: delay + i * 0.07, duration: 0.7, ease: EASE }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
}

/* ================================================================== */
/* Interactive: approach stepper (auto-plays, click to choose)         */
/* ================================================================== */

const STEP_MS = 5000;

function ApproachStepper() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || paused || !visible) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % approach.length), STEP_MS);
    return () => clearTimeout(t);
  }, [active, paused, visible, reduce]);

  const step = approach[active];

  return (
    <div
      ref={boxRef}
      className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      {/* step list */}
      <div role="tablist" aria-label="Our approach" className="flex flex-col gap-3">
        {approach.map((a, i) => {
          const on = i === active;
          return (
            <button
              key={a.title}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                on
                  ? "border-[#7c5cff]/50 bg-white/[0.05] shadow-[0_20px_50px_-25px_rgba(124,92,255,0.7)]"
                  : "border-white/[0.07] bg-white/[0.015] hover:border-white/[0.15] hover:bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                    on
                      ? "bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white"
                      : "border border-white/10 bg-white/[0.04] text-[#a78bfa]"
                  }`}
                >
                  <a.icon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <div className="flex-1">
                  <span className="font-syne text-[11px] font-bold tracking-[0.2em] text-[#a78bfa]">0{i + 1}</span>
                  <h3 className="font-syne text-lg font-bold text-foreground">{a.title}</h3>
                </div>
                <ArrowRight
                  className={`h-4 w-4 transition-all duration-300 ${
                    on ? "translate-x-0 text-[#c084fc] opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                />
              </div>
              {/* progress */}
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white/[0.04]" aria-hidden>
                {on && (
                  <motion.span
                    key={`${active}-${paused}`}
                    className="block h-full origin-left bg-gradient-to-r from-[#4f7bff] via-[#a855f7] to-[#e552ff]"
                    initial={{ scaleX: reduce ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: paused || reduce ? 0 : STEP_MS / 1000, ease: "linear" }}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* active panel */}
      <div className="relative min-h-[20rem] overflow-hidden rounded-[1.4rem] border border-[#7c5cff]/25 bg-[#0c0a16] p-8 sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#7c5cff]/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12]" />
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: reduce ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -14 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative"
          >
            <span className="font-syne text-6xl font-extrabold text-white/[0.06]">0{active + 1}</span>
            <h3 className="-mt-6 font-syne text-2xl font-bold text-foreground sm:text-3xl">{step.title}</h3>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{step.description}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-3">
              {step.points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.15 + i * 0.1, duration: 0.35 }}
                  className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3 text-sm font-medium text-foreground"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7c5cff] to-[#e552ff]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {p}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Interactive: global reach (dot map + region tabs)                   */
/* ================================================================== */

// deterministic dot field shaped roughly like the continents (rows of [startX, endX] runs, 0–1)
const MAP_ROWS: [number, number][][] = [
  [[0.12, 0.3], [0.44, 0.58], [0.66, 0.86]],
  [[0.06, 0.34], [0.42, 0.6], [0.62, 0.92]],
  [[0.08, 0.32], [0.42, 0.56], [0.6, 0.9]],
  [[0.12, 0.3], [0.44, 0.58], [0.64, 0.86]],
  [[0.16, 0.28], [0.44, 0.6], [0.68, 0.82]],
  [[0.2, 0.3], [0.46, 0.58], [0.7, 0.8]],
  [[0.24, 0.34], [0.48, 0.56], [0.76, 0.86]],
  [[0.26, 0.34], [0.48, 0.54], [0.78, 0.9]],
  [[0.28, 0.32], [0.5, 0.54], [0.8, 0.88]],
];
const DOTS: { x: number; y: number }[] = [];
MAP_ROWS.forEach((runs, r) =>
  runs.forEach(([a, b]) => {
    for (let x = a; x <= b + 0.0001; x += 0.022) DOTS.push({ x, y: 0.08 + r * 0.1 });
  })
);

function GlobalReach() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % regions.length), 4000);
    return () => clearTimeout(t);
  }, [active, paused, reduce]);

  const reg = regions[active];

  return (
    <div
      className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      {/* map */}
      <div className={`${CARD} relative overflow-hidden p-4 sm:p-6`}>
        <svg viewBox="0 0 100 92" className="h-auto w-full" role="img" aria-label={`${reg.name}: ${reg.value}M+ professionals`}>
          {DOTS.map((d, i) => {
            const on = d.x >= reg.zone[0] && d.x <= reg.zone[1];
            return (
              <motion.circle
                key={i}
                cx={d.x * 100}
                cy={d.y * 100}
                r={on ? 0.95 : 0.7}
                initial={false}
                animate={{ fill: on ? "#c084fc" : "rgba(255,255,255,0.14)", opacity: on ? 1 : 0.8 }}
                transition={{ duration: 0.5, delay: reduce ? 0 : (i % 17) * 0.01 }}
              />
            );
          })}
          {/* pulse at region centre */}
          {(() => {
            const cx = ((reg.zone[0] + reg.zone[1]) / 2) * 100;
            return (
              <g key={reg.key}>
                <motion.circle
                  cx={cx}
                  cy={30}
                  r={2}
                  fill="none"
                  stroke="#e552ff"
                  strokeWidth={0.4}
                  initial={{ scale: 1, opacity: 0.9 }}
                  animate={reduce ? undefined : { scale: [1, 4], opacity: [0.9, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                />
                <circle cx={cx} cy={30} r={1.4} fill="#ffffff" />
              </g>
            );
          })()}
        </svg>
      </div>

      {/* region selector */}
      <div>
        <div role="tablist" aria-label="Regions" className="flex gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5">
          {regions.map((r, i) => (
            <button
              key={r.key}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className="relative flex-1 rounded-full px-3 py-2 text-xs font-bold text-muted-foreground transition-colors hover:text-white sm:text-sm"
            >
              {i === active && (
                <motion.span
                  layoutId="region-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#c084fc]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className={`relative ${i === active ? "text-white" : ""}`}>{r.name}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={reg.key}
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -10 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="mt-8"
          >
            <p className="font-syne text-6xl font-extrabold tracking-tight text-white sm:text-7xl">
              <CountUp value={reg.value} duration={1} />
              <span className={GRAD}>M+</span>
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#a78bfa]">{reg.name} professionals</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{reg.blurb}</p>
          </motion.div>
        </AnimatePresence>
        <p className="mt-8 border-t border-white/[0.08] pt-5 text-sm text-muted-foreground">
          Part of a <span className="font-semibold text-foreground">150M+</span> global database of B2B professionals.
        </p>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Hero visual: "audience overview" panel with floating stat cards     */
/* ================================================================== */

function FloatCard({
  className,
  delay,
  icon: Icon,
  value,
  suffix,
  label,
}: {
  className: string;
  delay: number;
  icon: typeof Building2;
  value: string;
  suffix: string;
  label: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: EASE }}
      className={`absolute z-10 hidden sm:block ${className}`}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#110d1f]/90 px-4 py-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white">
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <div>
          <p className="font-syne text-xl font-extrabold leading-none text-white">
            <CountUp value={value} />
            <span className={GRAD}>{suffix}</span>
          </p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">{label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeroVisual() {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 20 });
  const max = Math.max(...regions.map((r) => Number(r.value)));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.9, ease: EASE }}
      className="relative mx-auto mb-6 w-full max-w-[30rem] sm:mb-12 lg:mb-0 lg:max-w-none"
      style={{ perspective: 1200 }}
    >
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-br from-[#4f7bff]/25 via-[#7c5cff]/20 to-[#e552ff]/20 blur-3xl" />

      <motion.div
        ref={ref}
        style={fine ? { rotateX: rx, rotateY: ry } : undefined}
        onPointerMove={(e) => {
          if (!fine || !ref.current) return;
          const r = ref.current.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width - 0.5);
          my.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onPointerLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        className="relative rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-white/[0.1] to-white/[0.02] p-1.5 shadow-[0_40px_120px_-30px_rgba(124,92,255,0.65)] backdrop-blur-xl"
      >
        <div className="relative overflow-hidden rounded-[1.25rem] border border-white/[0.06] bg-[#0b0916]/95 p-5 sm:p-7">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#7c5cff]/20 blur-3xl" />

          {/* window bar */}
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 text-xs font-semibold text-muted-foreground">Audience overview</span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-300">
              <span className="relative flex h-1.5 w-1.5">
                {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />}
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </span>
              Verified
            </span>
          </div>

          {/* headline number */}
          <div className="relative mt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a78bfa]">Global B2B database</p>
            <p className="mt-2 font-syne text-6xl font-extrabold leading-none tracking-tight text-white sm:text-7xl">
              <CountUp value="150" />
              <span className={GRAD}>M+</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">decision-makers and professionals worldwide</p>
          </div>

          {/* region bars */}
          <div className="relative mt-7 space-y-4">
            {regions.map((r, i) => (
              <div key={r.key}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium text-foreground/90">{r.name}</span>
                  <span className="font-syne font-bold text-white">
                    {r.value}
                    <span className="text-[#c084fc]">M+</span>
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#4f7bff] via-[#a855f7] to-[#e552ff]"
                    initial={{ width: reduce ? `${(Number(r.value) / max) * 100}%` : "0%" }}
                    animate={{ width: `${(Number(r.value) / max) * 100}%` }}
                    transition={{ delay: 0.9 + i * 0.15, duration: 1.1, ease: EASE }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* capability chips */}
          <div className="relative mt-7 grid grid-cols-3 gap-2 border-t border-white/[0.07] pt-5">
            {[
              { icon: Radar, label: "Intent signals" },
              { icon: Crosshair, label: "ICP matched" },
              { icon: ShieldCheck, label: "GDPR & CCPA" },
            ].map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-1.5 rounded-xl bg-white/[0.03] px-2 py-3 text-center">
                <c.icon className="h-4 w-4 text-[#c084fc]" />
                <span className="text-[11px] font-semibold leading-tight text-foreground/85">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <FloatCard className="-right-8 top-[21%] lg:-right-12" delay={1.1} icon={Building2} value="45" suffix="+" label="Clients & counting" />
      <FloatCard className="-bottom-11 right-2 lg:-right-4" delay={1.3} icon={Target} value="1" suffix="M+" label="Leads delivered" />
      <FloatCard className="-bottom-11 -left-4 lg:-left-10" delay={1.5} icon={Gauge} value="9" suffix=" yrs" label="B2B expertise" />

      {/* mobile: stats under the panel */}
      <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.07] sm:hidden">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0d0b17] px-2 py-4 text-center">
            <p className="font-syne text-2xl font-extrabold text-white">
              <CountUp value={s.value} />
              <span className={GRAD}>{s.suffix}</span>
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/* Page                                                                */
/* ================================================================== */

export function AboutContent() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const rise = (i = 0) => ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "120px" },
    transition: { delay: reduce ? 0 : i * 0.08, duration: 0.55, ease: EASE },
  });

  return (
    <div className="relative overflow-hidden">
      {/* ================= 1. HERO ================= */}
      <section
        ref={heroRef}
        onPointerMove={(e) => {
          const el = heroRef.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          el.style.setProperty("--hx", `${e.clientX - r.left}px`);
          el.style.setProperty("--hy", `${e.clientY - r.top}px`);
        }}
        className="group/hero relative overflow-hidden bg-[#06040d] pb-20 pt-[8.5rem] sm:pb-28 sm:pt-44 lg:pb-32"
      >
        {/* aurora + grid */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-56 left-1/2 h-[34rem] w-[70rem] -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-[#4f7bff]/30 via-[#a855f7]/30 to-[#e552ff]/25 blur-[130px]"
          animate={reduce ? undefined : { opacity: [0.55, 1, 0.55], scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100"
          style={{ background: "radial-gradient(520px circle at var(--hx,50%) var(--hy,30%), rgba(139,111,255,0.14), transparent 60%)" }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7c5cff]/60 to-transparent" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            {/* copy */}
            <div className="text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-3.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-[#7c5cff]/50 hover:text-white sm:text-[13px]"
                >
                  <span className="rounded-full bg-gradient-to-r from-[#7c5cff] to-[#e552ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    About us
                  </span>
                  9 years of B2B demand generation
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

              <h1 className="mt-7 font-syne text-[2.7rem] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[3.9rem]">
                <WordReveal text="Where data, design," delay={0.1} />
                <br className="hidden sm:block" />
                <WordReveal text="and" delay={0.31} />
                <span className="relative inline-block bg-gradient-to-r from-[#8b6fff] via-[#b57bff] to-[#e552ff] bg-clip-text pr-[0.18em] italic text-transparent">
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.7, ease: EASE }}
                  >
                    revenue converge
                  </motion.span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none" aria-hidden>
                    <motion.path
                      d="M2 7 C 80 2, 220 2, 298 7"
                      stroke="url(#aboutug)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: reduce ? 1 : 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="aboutug" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b6fff" />
                        <stop offset="100%" stopColor="#e552ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
                className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
              >
                We architect demand for B2B brands by combining intent
                intelligence with creative execution and strong data operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6, ease: EASE }}
                className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <Magnetic>
                  <Button size="lg" className="group h-14 gap-2 px-7 text-base shadow-[0_18px_40px_-12px_rgba(168,85,247,0.7)]" asChild>
                    <Link href="/contact">
                      Talk to an expert
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button size="lg" variant="outline" className="h-14 px-7 text-base" asChild>
                    <Link href="/services">Explore services</Link>
                  </Button>
                </Magnetic>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-start"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Offices in</span>
                {offices.map((o) => (
                  <span key={o.id} className="inline-flex items-center gap-1.5 font-medium text-foreground/85">
                    <span aria-hidden>{o.flag}</span>
                    {o.city.split(",")[0]}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* product-style visual */}
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ================= 2. WHO WE ARE ================= */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            <div>
              <SectionHead eyebrow="Who we are" center={false}>
                A growth engine for <span className={GRAD}>B2B revenue</span>
              </SectionHead>
              <motion.div {...rise(1)} className="mt-8 space-y-5">
                <p className="border-l-2 border-[#7c5cff] pl-5 text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
                  Backed by 9 years of deep B2B expertise, ProspectOutreach empowers Marketing and Sales teams to outpace the competition and maximize ROI.
                </p>
                <p className="leading-[1.8] text-muted-foreground">
                  ProspectOutreach is a global B2B demand generation partner dedicated to driving sustainable revenue for the world&apos;s leading tech companies and publishers.
                </p>
                <p className="leading-[1.8] text-muted-foreground">
                  We believe that successful outreach happens at the intersection of data and human connection. By utilizing our proprietary technology and a vast network of 150 million global professionals, we deliver omnichannel marketing solutions including ABM and intent-based syndication that put you in front of the right decision-makers at the right time.
                </p>
              </motion.div>
            </div>

            <motion.div {...rise(2)} className="lg:mt-10">
              <TiltCard className={`${CARD} relative overflow-hidden p-7`}>
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#7c5cff]/20 blur-3xl" />
                <p className="relative text-xs font-bold uppercase tracking-[0.16em] text-[#a78bfa]">At a glance</p>
                <ul className="relative mt-6 space-y-5">
                  {[
                    { icon: Building2, label: "Who we work with", value: "Leading tech companies & publishers" },
                    { icon: Radar, label: "Regions served", value: "North America · EMEA · APAC" },
                    { icon: MapPin, label: "Offices", value: "Pune (HQ) · Edinburgh · New Jersey" },
                    { icon: ShieldCheck, label: "Data compliance", value: "GDPR & CCPA aligned" },
                  ].map((g) => (
                    <li key={g.label} className="flex items-start gap-3.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7c5cff]/15 text-[#c084fc]">
                        <g.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{g.label}</div>
                        <div className="mt-0.5 text-sm font-semibold text-foreground">{g.value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          </div>

          <motion.figure
            {...rise(0)}
            className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[1.4rem] border border-[#7c5cff]/25 bg-[#0c0a16] px-7 py-10 text-center sm:px-14"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,92,255,0.25),transparent_65%)]"
              animate={reduce ? undefined : { opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <Quote className="relative mx-auto h-7 w-7 text-[#a78bfa]" />
            <blockquote className="relative mt-4 font-syne text-xl font-bold leading-snug text-foreground sm:text-2xl">
              At our core, we are more than a service provider &mdash; we are a{" "}
              <span className={GRAD}>growth engine</span> designed to turn your target audience into your most valuable long-term partners.
            </blockquote>
          </motion.figure>
        </div>
      </section>

      {/* ================= 3. GLOBAL REACH (interactive) ================= */}
      <section className="relative overflow-hidden bg-[#08060f] py-20 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/10 blur-[120px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Global reach" sub="Pick a region to see the size of our B2B audience there.">
            Decision-makers on <span className={GRAD}>every continent</span>
          </SectionHead>
          <GlobalReach />
        </div>
      </section>

      {/* ================= 4. MISSION & VISION ================= */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="What drives us">
            Our mission and <span className={GRAD}>vision</span>
          </SectionHead>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              {
                icon: Compass,
                label: "Mission",
                title: "Put you in front of the right buyers",
                text: "Help B2B marketing and sales teams reach the decision-makers who are ready to buy, with data you can trust and outreach that feels human.",
                gradient: "from-[#4f7bff] to-[#7c5cff]",
              },
              {
                icon: Flag,
                label: "Vision",
                title: "Outreach that builds partnerships",
                text: "A world where B2B outreach is measured by the relationships and revenue it creates, not by how many emails it sends.",
                gradient: "from-[#a855f7] to-[#e552ff]",
              },
            ].map((p, i) => (
              <motion.div key={p.label} {...rise(i)}>
                <TiltCard className={`${CARD} group relative h-full overflow-hidden p-8 transition-colors duration-300 hover:border-[#7c5cff]/50`}>
                  <span className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${p.gradient} transition-transform duration-500 group-hover:scale-x-100`} aria-hidden />
                  <span className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${p.gradient} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30`} aria-hidden />
                  <div className="relative flex items-center gap-3">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                      <p.icon className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#a78bfa]">Our {p.label}</span>
                  </div>
                  <h3 className="relative mt-6 font-syne text-2xl font-bold text-foreground">{p.title}</h3>
                  <p className="relative mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. APPROACH (interactive stepper) ================= */}
      <section className="relative overflow-hidden bg-[#08060f] py-20 sm:py-28">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="How we work" sub="Three principles shape every programme we run. Select one to explore it.">
            Our <span className={GRAD}>approach</span>
          </SectionHead>
          <ApproachStepper />
        </div>
      </section>

      {/* ================= 6. WHY US (bento) ================= */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Why ProspectOutreach"
            sub="Omnichannel demand generation, delivered on principles our clients can rely on."
          >
            What we deliver, and <span className={GRAD}>how we deliver it</span>
          </SectionHead>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...rise(0)} className="relative overflow-hidden rounded-[1.4rem] border border-[#7c5cff]/30 bg-[#0c0a16] p-8">
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#7c5cff]/25 blur-3xl" />
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#a78bfa]">Our services</span>
                <h3 className="mt-3 font-syne text-2xl font-bold text-foreground">Omnichannel demand generation</h3>
                <ul className="mt-7 space-y-2.5">
                  {services.map((s, i) => (
                    <motion.li key={s.title} {...rise(i + 1)}>
                      <Link
                        href="/services"
                        className="group flex items-center gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:translate-x-1 hover:border-[#7c5cff]/50 hover:bg-white/[0.05]"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white transition-transform duration-300 group-hover:scale-110">
                          <s.icon className="h-4 w-4" />
                        </span>
                        <span className="flex-1 text-[15px] font-semibold text-foreground">{s.title}</span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c084fc]" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((v, i) => (
                <motion.div key={v.title} {...rise(i + 1)}>
                  <TiltCard className={`${CARD} group h-full p-6 transition-colors duration-300 hover:border-[#7c5cff]/50`}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#a78bfa] transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#7c5cff] group-hover:to-[#e552ff] group-hover:text-white">
                      <v.icon className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-foreground">{v.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{v.text}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. CTA + OFFICES ================= */}
      <section className="bg-background pb-20 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...rise(0)}
            className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-[#7c5cff]/25 bg-[#0c0a16]"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_80%_30%,rgba(124,92,255,0.35),transparent_60%)]"
              animate={reduce ? undefined : { opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />

            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
              <div>
                <h2 className="font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Ready to <span className={GRAD}>partner?</span>
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Let&apos;s turn intent into outcomes with programs built for
                  performance, scale, and speed.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Magnetic>
                    <Button size="lg" className="group h-14 gap-2 px-7 text-base" asChild>
                      <Link href="/contact">
                        Talk to an expert
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </Magnetic>
                  <Magnetic>
                    <Button size="lg" variant="outline" className="h-14 px-7 text-base" asChild>
                      <Link href="/services">Explore services</Link>
                    </Button>
                  </Magnetic>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a78bfa]">Our global presence</p>
                {offices.map((o, i) => (
                  <motion.div
                    key={o.id}
                    {...rise(i + 1)}
                    whileHover={reduce ? undefined : { x: 4 }}
                    className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-[#7c5cff]/45"
                  >
                    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white">
                      {!reduce && (
                        <motion.span
                          aria-hidden
                          className="absolute inset-0 rounded-xl border-2 border-[#c084fc]"
                          animate={{ scale: [1, 1.45], opacity: [0.6, 0] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: i * 0.7 }}
                        />
                      )}
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold text-foreground">{o.label}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{o.lines.join(", ")}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
