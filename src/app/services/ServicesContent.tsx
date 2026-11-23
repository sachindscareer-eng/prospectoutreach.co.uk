"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  Filter,
  Map as MapIcon,
  Radio,
  Search,
  Share2,
  Target,
  TrendingUp,
  Zap,
  Code2,
  Goal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic, useFinePointer } from "@/components/interactive";
import { HowItWorks } from "@/components/home/HowItWorks";

/* ================================================================== */
/* Content — existing Services copy kept (typo/consistency fixes only)  */
/* ================================================================== */

const coreServices = [
  {
    id: "abm",
    icon: Target,
    title: "Account-Based Marketing (ABM)",
    description:
      "Target your highest-value accounts with surgical precision. We combine audience intelligence with personalized outreach to engage key decision-makers.",
    points: [
      "Precision Targeting: Reach specific stakeholders.",
      "Multi-Channel Engagement: Unified messaging across email and social.",
      "Scalable Personalization: Tailored content for every stage.",
    ],
    gradient: "from-[#4f7bff] to-[#7c5cff]",
  },
  {
    id: "syndication",
    icon: Share2,
    title: "Global Content Syndication",
    description:
      "Amplify your thought leadership across a network of 150M+ professionals in 170+ countries to ensure your content drives high-quality lead generation.",
    points: [
      "CPL-Based Models: Pay only for qualified leads.",
      "Targeted Distribution: Filter by industry, title, and size.",
      "Lead Nurturing: Strategy-driven follow-ups.",
    ],
    gradient: "from-[#7c5cff] to-[#a855f7]",
  },
  {
    id: "intent",
    icon: Search,
    title: "Intent-Based Demand Generation",
    description:
      "Stop chasing cold leads. We use proprietary technology to identify 'in-market' buyers who are actively searching for solutions like yours.",
    points: [
      "Real-Time Analytics: Capture intent signals as they happen.",
      "Predictive Modeling: Focus on accounts likely to convert.",
      "Behavioral Insights: Understand what prospects research.",
    ],
    gradient: "from-[#a855f7] to-[#e552ff]",
  },
  {
    id: "qualification",
    icon: Filter,
    title: "Full-Funnel Lead Qualification",
    description:
      "We don't just deliver names; we deliver opportunities. Our rigorous process ensures every lead is primed for a conversation.",
    points: [
      "MQL to SQL Optimization: Bridging the gap.",
      "Data Validation: 100% accuracy and compliance.",
      "BANT/Custom Frameworks: Qualifying by Budget and Need.",
    ],
    gradient: "from-[#e552ff] to-[#ff7ab8]",
  },
  {
    id: "web-solutions",
    icon: Code2,
    title: "Web & Software Solutions",
    description:
      "Custom-built, scalable web applications and software systems designed to solve complex business challenges and drive digital transformation.",
    points: [
      "Custom Web App Development: Built for performance.",
      "UI/UX & Interactive Dashboards: Data-driven design.",
      "Cloud & Infrastructure: Secure and scalable deployment.",
    ],
    gradient: "from-[#34d399] to-[#4f7bff]",
    link: "/web-solutions",
  },
];

const detailedGroups = [
  {
    title: "Strategic Lead Generation",
    description: "Secure opportunities that meet rigorous standards and accelerate your deal flow.",
    icon: TrendingUp,
    gradient: "from-[#4f7bff] to-[#7c5cff]",
    items: [
      { title: "BANT Qualified Leads", description: "Filter the noise so your team focuses only on prospects with the highest propensity to buy." },
      { title: "Sales Qualified Leads (SQLs)", description: "Pre-vetted prospects primed for direct sales conversations, ensuring time is spent closing." },
      { title: "Marketing Qualified Leads (MQLs)", description: "Identify prospects who have demonstrated genuine interest through active engagement." },
    ],
  },
  {
    title: "Engagement & Appointment Setting",
    description: "Bridge the gap between digital interest and human connection.",
    icon: Calendar,
    gradient: "from-[#a855f7] to-[#e552ff]",
    items: [
      { title: "Appointment Generation", description: "Securing high-value meetings with qualified stakeholders to help you build rapport." },
      { title: "Confirmed Callback Leads", description: "Verified outreach with confirmed windows, connecting you when prospects are most receptive." },
      { title: "Event Registrations", description: "Fill your seats with high-caliber audiences for webinars, seminars, and corporate events." },
    ],
  },
  {
    title: "Precision Marketing Solutions",
    description: "Focus your resources where they matter most with institutional growth strategies.",
    icon: Zap,
    gradient: "from-[#e552ff] to-[#ff7ab8]",
    items: [
      { title: "Account-Based Marketing (ABM)", description: "Hyper-targeted campaigns aimed at specific high-value organizations for institutional growth." },
      { title: "Content Syndication", description: "Establish authority by distributing insights across premium professional platforms." },
      { title: "Performance Email Marketing", description: "Tailored strategies engineered to foster meaningful engagement and conversion rates." },
    ],
  },
];

// what the strategy call covers — taken from the existing CTA copy
const planPoints = [
  { icon: MapIcon, text: "Map your ideal customer profile" },
  { icon: Radio, text: "Choose the right channels" },
  { icon: Goal, text: "Set your conversion goals" },
];

const GRAD = "bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent";
const CARD = "rounded-[1.4rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01]";
const EASE = [0.22, 1, 0.36, 1] as const;

/* ================================================================== */
/* Building blocks (same patterns as About / Careers)                  */
/* ================================================================== */

function SectionHead({ eyebrow, children, sub }: { eyebrow: string; children: ReactNode; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "120px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{children}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
    </motion.div>
  );
}

function TiltCard({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const fine = useFinePointer();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 18 });

  return (
    <motion.div
      ref={ref}
      id={id}
      data-spotlight
      style={fine ? { rotateX: rx, rotateY: ry, transformPerspective: 1000 } : undefined}
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
/* Hero visual — service navigator that cycles through the services    */
/* ================================================================== */

function HeroVisual() {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 18 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });

  // auto-advance through services; pause while the visitor is hovering
  useEffect(() => {
    if (reduce || hovering) return;
    const id = setInterval(() => setActive((a) => (a + 1) % coreServices.length), 2600);
    return () => clearInterval(id);
  }, [reduce, hovering]);

  const cur = coreServices[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
      className="relative mx-auto w-full max-w-md [perspective:1400px] lg:max-w-none"
      onPointerEnter={() => setHovering(true)}
      onPointerMove={(e) => {
        if (!fine) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        setHovering(false);
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#4f7bff]/40 via-[#8b3dff]/40 to-[#e552ff]/30 opacity-70 blur-3xl" />

      <motion.div
        style={fine ? { rotateX: rotX, rotateY: rotY } : undefined}
        className="relative overflow-hidden rounded-[1.75rem] border border-[#8b5cf6]/40 bg-[#0d0b18]/95 p-5 shadow-[0_0_0_1px_rgba(139,92,246,0.25),0_30px_90px_-20px_rgba(124,92,255,0.75)] sm:p-6"
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-foreground">Our core services</p>
          <span className="text-[11px] font-medium text-muted-foreground">
            {String(active + 1).padStart(2, "0")} / {String(coreServices.length).padStart(2, "0")}
          </span>
        </div>

        <ul className="mt-4 space-y-2">
          {coreServices.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`relative flex items-center gap-3 overflow-hidden rounded-xl border px-3 py-2.5 transition-colors duration-300 ${
                    on ? "border-[#7c5cff]/50 bg-white/[0.06]" : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                  }`}
                >
                  {/* progress bar for the auto-advance timer (hidden while hovering = paused) */}
                  {on && !reduce && !hovering && (
                    <motion.span
                      key={`bar-${active}`}
                      aria-hidden
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${s.gradient}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.6, ease: "linear" }}
                    />
                  )}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                      on ? `bg-gradient-to-br ${s.gradient} text-white` : "bg-white/[0.05] text-[#a78bfa]"
                    }`}
                  >
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className={`text-[13px] font-semibold ${on ? "text-foreground" : "text-muted-foreground"}`}>{s.title}</span>
                  <ArrowUpRight className={`ml-auto h-4 w-4 transition-all ${on ? "text-[#c084fc] opacity-100" : "opacity-0"}`} />
                </a>
              </li>
            );
          })}
        </ul>

        <motion.div
          key={cur.id}
          initial={{ opacity: 0, y: reduce ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
          aria-live="polite"
        >
          <ul className="space-y-1.5">
            {cur.points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-[12.5px] leading-snug text-muted-foreground">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                {p.split(":")[0]}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================== */
/* Page                                                                */
/* ================================================================== */

export function ServicesContent() {
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
        className="group/hero relative overflow-hidden bg-[#06040d] pb-20 pt-14 sm:pb-28 sm:pt-20 lg:pb-32"
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
                  href="#core-services"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-3.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-[#7c5cff]/50 hover:text-white sm:text-[13px]"
                >
                  <span className="rounded-full bg-gradient-to-r from-[#7c5cff] to-[#e552ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    Services
                  </span>
                  B2B demand generation, end to end
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>

              <h1 className="mt-7 font-syne text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-[3.7rem]">
                <WordReveal text="Precision strategies for" delay={0.1} />
                <br className="hidden sm:block" />
                <span className="relative inline-block bg-gradient-to-r from-[#8b6fff] via-[#b57bff] to-[#e552ff] bg-clip-text pr-[0.18em] italic text-transparent">
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
                  >
                    predictable revenue
                  </motion.span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none" aria-hidden>
                    <motion.path
                      d="M2 7 C 80 2, 220 2, 298 7"
                      stroke="url(#servicesug)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: reduce ? 1 : 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="servicesug" x1="0" y1="0" x2="1" y2="0">
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
                Maximize your pipeline with data-driven strategies designed to
                connect your brand with high-intent decision-makers.
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
                      Talk to an expert
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button size="lg" variant="outline" className="h-14 px-7 text-base" asChild>
                    <a href="#core-services">Explore services</a>
                  </Button>
                </Magnetic>
              </motion.div>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ================= 2. CORE SERVICES ================= */}
      <section id="core-services" className="relative scroll-mt-24 bg-background py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Our core services"
            sub="Five ways we help B2B teams reach, engage and convert the right buyers."
          >
            Everything you need to <span className={GRAD}>fill your pipeline</span>
          </SectionHead>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
            {coreServices.map((s, i) => (
              <motion.div
                key={s.id}
                {...rise(i % 3)}
                className={`h-full ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${i === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <TiltCard
                  id={s.id}
                  className={`group relative flex h-full scroll-mt-36 flex-col overflow-hidden ${CARD} p-7 transition-colors duration-300 hover:border-[#7c5cff]/50`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${s.gradient} transition-transform duration-500 group-hover:scale-x-100`}
                    aria-hidden
                  />
                  <span className="pointer-events-none absolute right-5 top-3 font-syne text-5xl font-bold text-white/[0.05] transition-colors duration-300 group-hover:text-white/[0.09]">
                    0{i + 1}
                  </span>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                  >
                    <s.icon className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((p) => {
                      const [head, ...rest] = p.split(":");
                      return (
                        <li key={p} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted-foreground">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#7c5cff]/20 text-[#c084fc]">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span>
                            <span className="font-semibold text-foreground/90">{head}</span>
                            {rest.length ? `:${rest.join(":")}` : ""}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  {s.link && (
                    <Link
                      href={s.link}
                      className="group/link mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-[#c084fc] transition-colors hover:text-white"
                    >
                      Explore Web Solutions
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  )}
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. DETAILED OVERVIEW ================= */}
      <section className="relative overflow-hidden bg-[#08060f] py-20 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/10 blur-[120px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Detailed service overview" sub="Comprehensive solutions across the entire marketing and sales funnel.">
            Across the <span className={GRAD}>entire funnel</span>
          </SectionHead>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-3">
            {detailedGroups.map((g, gi) => (
              <motion.div key={g.title} {...rise(gi)} className={`${CARD} flex h-full flex-col p-6`}>
                <div className="flex items-center gap-3">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${g.gradient} text-white shadow-lg`}>
                    <g.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold leading-snug text-foreground">{g.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.description}</p>

                <div className="mt-5 space-y-3">
                  {g.items.map((it, ii) => (
                    <motion.div
                      key={it.title}
                      {...rise(gi + ii)}
                      whileHover={reduce ? undefined : { x: 4 }}
                      data-spotlight
                      className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-[#7c5cff]/45 hover:bg-white/[0.04]"
                    >
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${g.gradient}`} />
                        {it.title}
                      </h4>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{it.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. PROCESS (shared with Home) ================= */}
      <HowItWorks />

      {/* ================= 5. CTA ================= */}
      <section className="bg-background pb-20 pt-4 sm:pb-28">
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
                  Want a custom growth plan for <span className={GRAD}>your market?</span>
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Talk with our team to map your ICP, channels, and conversion goals.
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
                      <Link href="/web-solutions">Web solutions</Link>
                    </Button>
                  </Magnetic>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a78bfa]">On your strategy call we</p>
                {planPoints.map((p, i) => (
                  <motion.div
                    key={p.text}
                    {...rise(i + 1)}
                    whileHover={reduce ? undefined : { x: 4 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-sm transition-colors hover:border-[#7c5cff]/45"
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
                      <p.icon className="h-4 w-4" />
                    </span>
                    <span className="text-[15px] font-semibold text-foreground">{p.text}</span>
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
