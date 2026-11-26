"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  Cloud,
  Code2,
  FileText,
  Gauge,
  Globe,
  Handshake,
  LifeBuoy,
  Lightbulb,
  Minus,
  Palette,
  Plus,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  TestTube2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic, useFinePointer } from "@/components/interactive";
import { webFaqs, webServices } from "./data";

/* ================================================================== */
/* Constants                                                           */
/* ================================================================== */

const EASE = [0.22, 1, 0.36, 1] as const;
const GRAD = "bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent";

const serviceIcons: Record<string, LucideIcon> = {
  "web-apps": Globe,
  "ui-ux": Palette,
  visualization: BarChart3,
  auth: Shield,
  cloud: Cloud,
  documents: FileText,
  automation: Building2,
};

const gradients = [
  "from-[#4f7bff] to-[#7c5cff]",
  "from-[#7c5cff] to-[#a855f7]",
  "from-[#8b5cf6] to-[#c084fc]",
  "from-[#a855f7] to-[#e552ff]",
  "from-[#c026d3] to-[#e552ff]",
  "from-[#e552ff] to-[#ff7ab8]",
  "from-[#4f7bff] via-[#a855f7] to-[#e552ff]",
];

const processSteps: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Lightbulb, title: "Discovery", text: "We map your goals, users and workflows, and agree what success looks like." },
  { icon: Palette, title: "UX & design", text: "Wireframes and polished UI so you can see and refine the product early." },
  { icon: Code2, title: "Build", text: "Clean, scalable frontend and backend development in short, visible iterations." },
  { icon: TestTube2, title: "Test & launch", text: "QA across devices, performance checks and a smooth cloud deployment." },
  { icon: LifeBuoy, title: "Support & scale", text: "We stay on after launch to monitor, improve and add new features." },
];

const techRowA = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "REST APIs", "GraphQL"];
const techRowB = ["AWS", "Amazon S3", "PostgreSQL", "MongoDB", "Docker", "Figma", "CI/CD", "PDF automation"];

const whyPoints: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Sparkles, title: "Deep technical expertise", text: "Strong capabilities in complex, scalable systems across the full stack." },
  { icon: Gauge, title: "Performance & usability first", text: "Every decision is guided by speed, long-term growth and user experience." },
  { icon: Handshake, title: "Reliable support & iteration", text: "We stay with you beyond launch — continuously improving as you grow." },
  { icon: Rocket, title: "Solutions, not just code", text: "We build software that solves real business problems, not just code that runs." },
];

const highlights: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Code2, value: "100%", label: "Custom built" },
  { icon: Workflow, value: "7", label: "Service areas" },
  { icon: Cloud, value: "AWS", label: "Cloud ready" },
  { icon: Smartphone, value: "SEO", label: "Mobile & search ready" },
];

/* ================================================================== */
/* Building blocks                                                     */
/* ================================================================== */

function SectionHead({ eyebrow, children, sub, center = true }: { eyebrow: string; children: ReactNode; sub?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "120px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}
    >
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{children}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
    </motion.div>
  );
}

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
/* Hero visual — browser window cycling Design → Code → Deploy         */
/* ================================================================== */

const STAGES = ["Design", "Code", "Deploy"] as const;
const STAGE_MS = 4200;

const codeLines: { indent: number; parts: [string, string][] }[] = [
  { indent: 0, parts: [["#c084fc", "export default"], ["#e8e6f0", " function "], ["#7dd3fc", "Dashboard"], ["#e8e6f0", "() {"]] },
  { indent: 1, parts: [["#c084fc", "const"], ["#e8e6f0", " leads = "], ["#7dd3fc", "useLeads"], ["#e8e6f0", "();"]] },
  { indent: 1, parts: [["#c084fc", "return"], ["#e8e6f0", " ("]] },
  { indent: 2, parts: [["#f9a8d4", "<Layout"], ["#a5b4fc", " theme"], ["#e8e6f0", "="], ["#86efac", '"dark"'], ["#f9a8d4", ">"]] },
  { indent: 3, parts: [["#f9a8d4", "<KpiGrid"], ["#a5b4fc", " data"], ["#e8e6f0", "={leads} "], ["#f9a8d4", "/>"]] },
  { indent: 3, parts: [["#f9a8d4", "<PipelineChart"], ["#a5b4fc", " live "], ["#f9a8d4", "/>"]] },
  { indent: 2, parts: [["#f9a8d4", "</Layout>"]] },
  { indent: 1, parts: [["#e8e6f0", ");"]] },
  { indent: 0, parts: [["#e8e6f0", "}"]] },
];

const deployChecks = ["Build optimised", "Tests passed", "Deployed to AWS", "SSL & CDN active"];

function DesignStage() {
  const reduce = useReducedMotion();
  const bars = [62, 88, 48, 96, 72, 84, 58];
  return (
    <div className="grid h-full grid-cols-[64px_1fr] gap-3">
      <div className="space-y-2 rounded-xl bg-white/[0.03] p-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: reduce ? 0 : -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className={`h-2.5 rounded-full ${i === 1 ? "bg-gradient-to-r from-[#7c5cff] to-[#c084fc]" : "bg-white/10"}`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {["Visitors", "Leads", "Meetings"].map((k, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-2"
            >
              <p className="text-[9px] uppercase tracking-wider text-white/40">{k}</p>
              <div className="mt-1.5 h-2 w-3/4 rounded-full bg-gradient-to-r from-[#8b6fff] to-[#e552ff] opacity-80" />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-[#7c5cff] to-[#c084fc]"
              initial={{ height: reduce ? `${h}%` : "6%" }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease: EASE }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CodeStage() {
  const reduce = useReducedMotion();
  return (
    <div className="h-full rounded-xl bg-[#07060d] p-4 font-mono text-[11.5px] leading-[1.75] sm:text-[12.5px]">
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: reduce ? 0 : -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: reduce ? 0 : i * 0.18, duration: 0.25 }}
          className="flex whitespace-pre"
        >
          <span className="mr-4 w-4 select-none text-right text-white/20">{i + 1}</span>
          <span style={{ paddingLeft: `${line.indent * 14}px` }}>
            {line.parts.map(([color, txt], j) => (
              <span key={j} style={{ color }}>
                {txt}
              </span>
            ))}
          </span>
        </motion.div>
      ))}
      {!reduce && (
        <motion.span
          className="ml-8 inline-block h-3.5 w-[7px] bg-[#c084fc]"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </div>
  );
}

function DeployStage() {
  const reduce = useReducedMotion();
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
        <div className="flex items-center justify-between text-[11px] text-white/60">
          <span>Deploying to production</span>
          <span className="font-semibold text-[#c4b5fd]">100%</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#7c5cff] to-[#e552ff]"
            initial={{ width: reduce ? "100%" : "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </div>
      {deployChecks.map((c, i) => (
        <motion.div
          key={c}
          initial={{ opacity: 0, y: reduce ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.4 + i * 0.3 }}
          className="flex items-center gap-3 rounded-xl border border-[#7c5cff]/25 bg-[#7c5cff]/[0.08] px-3 py-2.5 text-[13px] text-foreground"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#7c5cff] to-[#c084fc]">
            <Check className="h-3 w-3 text-white" strokeWidth={3} />
          </span>
          {c}
        </motion.div>
      ))}
    </div>
  );
}

function HeroVisual() {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });

  useEffect(() => {
    if (reduce || paused) return;
    const id = setTimeout(() => setStage((s) => (s + 1) % STAGES.length), STAGE_MS);
    return () => clearTimeout(id);
  }, [stage, paused, reduce]);

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
      className="relative mx-auto w-full max-w-md [perspective:1400px] lg:max-w-none"
      onPointerEnter={() => setPaused(true)}
      onPointerMove={(e) => {
        if (!fine) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        setPaused(false);
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#4f7bff]/40 via-[#8b3dff]/40 to-[#e552ff]/30 opacity-70 blur-3xl" />

      <motion.div
        style={fine ? { rotateX: rotX, rotateY: rotY } : undefined}
        className="relative overflow-hidden rounded-[1.75rem] border border-[#8b5cf6]/40 bg-[#0d0b18]/95 shadow-[0_0_0_1px_rgba(139,92,246,0.25),0_30px_90px_-20px_rgba(124,92,255,0.75)]"
      >
        {/* browser chrome */}
        <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex flex-1 items-center gap-2 truncate rounded-lg bg-white/[0.05] px-3 py-1.5 text-[11px] text-white/50">
            <Search className="h-3 w-3 shrink-0" /> yourcompany.com/dashboard
          </div>
        </div>

        {/* stage tabs */}
        <div role="tablist" aria-label="Project stages" className="flex gap-1 px-4 pt-4">
          {STAGES.map((s, i) => {
            const on = i === stage;
            return (
              <button
                key={s}
                role="tab"
                type="button"
                aria-selected={on}
                onClick={() => setStage(i)}
                className={`relative flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                  on ? "text-white" : "text-white/45 hover:text-white/80"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="ws-stage-pill"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#7c5cff] to-[#a855f7]"
                    transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  0{i + 1} · {s}
                </span>
              </button>
            );
          })}
        </div>

        <div className="h-[260px] p-4 sm:h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {stage === 0 ? <DesignStage /> : stage === 1 ? <CodeStage /> : <DeployStage />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* progress */}
        <div className="h-[2px] bg-white/[0.06]">
          {!reduce && !paused && (
            <motion.div
              key={stage}
              className="h-full bg-gradient-to-r from-[#7c5cff] to-[#e552ff]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: STAGE_MS / 1000, ease: "linear" }}
            />
          )}
        </div>
      </motion.div>

      {/* floating badge */}
      <motion.div
        className="absolute -bottom-5 -left-3 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-[#12101f]/95 px-3.5 py-2.5 shadow-xl backdrop-blur sm:flex"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#34d399] to-[#4f7bff]">
          <Gauge className="h-4 w-4 text-white" />
        </span>
        <div className="leading-tight">
          <p className="text-[12px] font-bold text-foreground">Fast & responsive</p>
          <p className="text-[10px] text-muted-foreground">Built for every screen</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================== */
/* Process timeline                                                    */
/* ================================================================== */

function ProcessTimeline() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <ol ref={ref} className="relative mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-5 md:gap-4">
      {/* connecting line (desktop) */}
      <div className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-px bg-white/10 md:block" aria-hidden>
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-[#4f7bff] via-[#a855f7] to-[#e552ff]"
          initial={{ scaleX: reduce ? 1 : 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </div>

      {processSteps.map((s, i) => (
        <motion.li
          key={s.title}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: reduce ? 0 : 0.2 + i * 0.25, duration: 0.5, ease: EASE }}
          className="group relative flex gap-4 md:flex-col md:items-center md:text-center"
        >
          <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0d0b18] text-[#c4b5fd] shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#7c5cff]/60 group-hover:bg-gradient-to-br group-hover:from-[#7c5cff] group-hover:to-[#e552ff] group-hover:text-white">
            <s.icon className="h-6 w-6" />
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-[11px] font-bold text-white ring-4 ring-background">
              {i + 1}
            </span>
          </span>
          <div className="md:mt-4">
            <h3 className="text-base font-bold text-foreground">{s.title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

/* ================================================================== */
/* FAQ                                                                 */
/* ================================================================== */

function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-3">
      {webFaqs.map((f, i) => {
        const on = open === i;
        return (
          <div
            key={f.q}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              on ? "border-[#7c5cff]/45 bg-white/[0.04]" : "border-white/[0.08] bg-white/[0.015] hover:border-white/15"
            }`}
          >
            <h3>
              <button
                type="button"
                id={`ws-faq-btn-${i}`}
                aria-expanded={on}
                aria-controls={`ws-faq-panel-${i}`}
                onClick={() => setOpen(on ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-foreground sm:px-6"
              >
                {f.q}
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                    on ? "bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white" : "bg-white/[0.06] text-white/60"
                  }`}
                >
                  {on ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  id={`ws-faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`ws-faq-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ================================================================== */
/* Page                                                                */
/* ================================================================== */

export function WebSolutionsContent() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

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
        className="group/hero relative overflow-hidden bg-[#06040d] pb-24 pt-[8.5rem] sm:pb-28 sm:pt-44 lg:pb-32"
      >
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
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-3.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-[#7c5cff]/50 hover:text-white sm:text-[13px]"
                >
                  <span className="rounded-full bg-gradient-to-r from-[#7c5cff] to-[#e552ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    Web solutions
                  </span>
                  Web design & development
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>

              <h1 className="mt-7 font-syne text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[3.7rem]">
                <WordReveal text="We build" delay={0.1} />
                <span className="relative inline-block bg-gradient-to-r from-[#8b6fff] via-[#b57bff] to-[#e552ff] bg-clip-text pr-[0.18em] italic text-transparent">
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
                  >
                    solutions,
                  </motion.span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none" aria-hidden>
                    <motion.path
                      d="M2 7 C 80 2, 220 2, 298 7"
                      stroke="url(#wsug)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: reduce ? 1 : 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 0.9, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="wsug" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b6fff" />
                        <stop offset="100%" stopColor="#e552ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br className="hidden sm:block" />
                <WordReveal text="not just software" delay={0.45} />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
                className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
              >
                Custom web applications, UI/UX and interactive dashboards, CRM and automation, and cloud infrastructure —
                designed, built and deployed to scale with your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6, ease: EASE }}
                className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <Magnetic>
                  <Button size="lg" className="group h-14 gap-2 px-7 text-base shadow-[0_18px_40px_-12px_rgba(168,85,247,0.7)]" asChild>
                    <Link href="/contact">
                      Start a project
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button size="lg" variant="outline" className="h-14 px-7 text-base" asChild>
                    <a href="#services">Explore services</a>
                  </Button>
                </Magnetic>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
              >
                {["Responsive", "SEO-ready", "Secure", "Cloud-deployed"].map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium text-foreground/80"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#a78bfa]" /> {t}
                  </li>
                ))}
              </motion.ul>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ================= 2. SERVICES ================= */}
      <section id="services" className="relative scroll-mt-24 bg-background py-20 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/10 blur-[120px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="What we offer"
            sub="From concept to deployment — we handle every layer, so you can focus on growing your business."
          >
            Full-stack expertise <span className={GRAD}>across every layer</span>
          </SectionHead>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {webServices.map((s, i) => {
              const Icon = serviceIcons[s.slug] ?? Globe;
              const wide = i === webServices.length - 1;
              return (
                <motion.article
                  key={s.slug}
                  id={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "120px" }}
                  transition={{ delay: reduce ? 0 : (i % 3) * 0.08, duration: 0.5, ease: EASE }}
                  whileHover={reduce ? undefined : { y: -6 }}
                  className={`group relative scroll-mt-28 rounded-2xl p-px ${wide ? "md:col-span-2 lg:col-span-3" : ""}`}
                >
                  <span
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${gradients[i]} opacity-0 transition-opacity duration-500 group-hover:opacity-60`}
                    aria-hidden
                  />
                  <span className="absolute inset-0 rounded-2xl border border-white/[0.08]" aria-hidden />
                  <div
                    data-spotlight
                    className={`relative h-full overflow-hidden rounded-[calc(1rem-1px)] bg-[#0e0d14] p-6 sm:p-7 ${
                      wide ? "lg:grid lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-10" : "flex flex-col"
                    }`}
                  >
                    <span
                      className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${gradients[i]} opacity-[0.16] blur-3xl transition-opacity duration-500 group-hover:opacity-35`}
                      aria-hidden
                    />
                    <span className="pointer-events-none absolute inset-0 bg-grid opacity-[0.05]" aria-hidden />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-3">
                        <span className="relative">
                          <span
                            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradients[i]} opacity-50 blur-md transition-opacity duration-300 group-hover:opacity-90`}
                            aria-hidden
                          />
                          <span
                            className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[i]} text-white ring-1 ring-white/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                          >
                            <Icon className="h-6 w-6" strokeWidth={1.9} />
                          </span>
                        </span>
                        <span className="font-syne text-2xl font-bold text-white/[0.08] transition-colors duration-300 group-hover:text-white/20">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-bold leading-snug text-foreground">{s.title}</h3>
                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>

                    <ul className={`relative mt-5 grid gap-2 ${wide ? "sm:grid-cols-2 lg:mt-0" : "mt-auto pt-5"}`}>
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5 text-[13px] text-white/80 transition-colors group-hover:border-white/10"
                        >
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7c5cff] to-[#c084fc]">
                            <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
                          </span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3. PROCESS ================= */}
      <section className="relative overflow-hidden bg-[#08060f] py-20 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/10 blur-[120px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="How we work" sub="A clear, collaborative process that keeps you in control from the first call to launch and beyond.">
            From idea to <span className={GRAD}>launch</span>
          </SectionHead>
          <ProcessTimeline />
        </div>
      </section>

      {/* ================= 4. TECH STACK ================= */}
      <section className="relative bg-background py-20 sm:py-24" aria-labelledby="ws-tech">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Technology</span>
            <h2 id="ws-tech" className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Modern tools, <span className={GRAD}>proven stack</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              We pick the right technology for each project — fast, secure and easy to scale.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-12 space-y-4 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          {[techRowA, techRowB].map((row, r) => (
            <div key={r} className="group flex overflow-hidden">
              <div
                className="flex shrink-0 animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused]"
                style={{ ["--marquee-duration" as string]: r === 0 ? "38s" : "46s", animationDirection: r === 0 ? "normal" : "reverse" }}
              >
                {[...row, ...row].map((t, i) => (
                  <span
                    key={`${t}-${i}`}
                    aria-hidden={i >= row.length}
                    className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-semibold text-foreground/85 transition-colors hover:border-[#7c5cff]/50 hover:text-white"
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#7c5cff] to-[#e552ff]" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 5. WHY US ================= */}
      <section className="relative overflow-hidden bg-[#08060f] py-20 sm:py-28">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHead eyebrow="Why choose us" center={false}>
                Built to solve <span className={GRAD}>real business problems</span>
              </SectionHead>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {whyPoints.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "120px" }}
                    transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.5, ease: EASE }}
                    className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors hover:border-[#7c5cff]/40 hover:bg-white/[0.04]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-[15px] font-bold text-foreground">{p.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{p.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative"
            >
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.2rem] bg-gradient-to-br from-[#4f7bff]/25 via-[#7c5cff]/25 to-[#e552ff]/20 opacity-70 blur-3xl" />
              <div className="rounded-[1.75rem] bg-gradient-to-br from-[#7c5cff]/50 via-white/10 to-[#e552ff]/40 p-px">
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[calc(1.75rem-1px)] bg-white/[0.06]">
                  {highlights.map((h) => (
                    <div key={h.label} className="group bg-[#0d0b18] p-7 text-center transition-colors hover:bg-[#12101f] sm:p-9">
                      <h.icon className="mx-auto h-5 w-5 text-[#a78bfa] transition-transform duration-300 group-hover:scale-125" />
                      <p className="mt-3 font-syne text-3xl font-extrabold sm:text-4xl">
                        <span className={GRAD}>{h.value}</span>
                      </p>
                      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{h.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 6. FAQ ================= */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="FAQ" sub="Answers to the questions we hear most about our web design and development work.">
            Web development <span className={GRAD}>questions</span>
          </SectionHead>
          <FaqList />
        </div>
      </section>

      {/* ================= 7. CTA ================= */}
      <section className="relative overflow-hidden bg-[#06040d] py-24 sm:py-32">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[56rem] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-r from-[#4f7bff]/25 via-[#a855f7]/30 to-[#e552ff]/25 blur-[130px]"
          animate={reduce ? undefined : { opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="mx-auto max-w-3xl font-syne text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
              Ready to build <span className={GRAD}>something great?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Whether you have an idea, an existing system to improve, or a complex problem to solve — we&apos;re ready to help.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic>
                <Button size="lg" className="group h-14 gap-2 px-8 text-base shadow-[0_18px_40px_-12px_rgba(168,85,247,0.7)]" asChild>
                  <Link href="/contact">
                    Start a project
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild>
                  <Link href="/services">Explore all services</Link>
                </Button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
