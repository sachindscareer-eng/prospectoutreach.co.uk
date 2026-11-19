"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
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
  Sparkles,
  MapPin,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp, Magnetic } from "@/components/interactive";

/* ------------------------------------------------------------------ */
/* Content (existing About copy kept; new sections are supporting)     */
/* ------------------------------------------------------------------ */

const stats = [
  { label: "North America", value: "8", suffix: "M+", gradient: "from-[#4f7bff] to-[#7c5cff]" },
  { label: "EMEA", value: "7", suffix: "M+", gradient: "from-[#7c5cff] to-[#a855f7]" },
  { label: "APAC", value: "6", suffix: "M+", gradient: "from-[#a855f7] to-[#e552ff]" },
  { label: "Clients & Counting", value: "45", suffix: "+", gradient: "from-[#e552ff] to-[#ff7ab8]" },
  { label: "Leads Delivered", value: "1", suffix: "M+", gradient: "from-[#4f7bff] to-[#a855f7]" },
  { label: "Global Database", value: "75", suffix: "M+", gradient: "from-[#7c5cff] to-[#e552ff]" },
];

const pillars = [
  {
    icon: Compass,
    label: "Our mission",
    title: "Put you in front of the right buyers",
    text: "Help B2B marketing and sales teams reach the decision-makers who are ready to buy, with data you can trust and outreach that feels human.",
    gradient: "from-[#4f7bff] to-[#7c5cff]",
  },
  {
    icon: Flag,
    label: "Our vision",
    title: "Outreach that builds partnerships",
    text: "A world where B2B outreach is measured by the relationships it creates, not by how many emails it sends.",
    gradient: "from-[#7c5cff] to-[#a855f7]",
  },
  {
    icon: Sparkles,
    label: "Our promise",
    title: "Pipeline, not activity metrics",
    text: "We report on qualified conversations and revenue impact, so you always know what your investment is delivering.",
    gradient: "from-[#a855f7] to-[#e552ff]",
  },
];

const approach = [
  {
    icon: Database,
    title: "Data Driven",
    description:
      "We use verified B2B data and intent signals to target the right accounts and contacts, so your outreach hits decision-makers who are ready to buy.",
    gradient: "from-[#4f7bff] to-[#7c5cff]",
  },
  {
    icon: Zap,
    title: "Automation First",
    description:
      "Manual follow-ups don't scale. We automate sequences, lead routing, and CRM sync so your team spends time closing, not data entry.",
    gradient: "from-[#7c5cff] to-[#a855f7]",
  },
  {
    icon: Target,
    title: "Results Focused",
    description:
      "Every feature is built to move the needle: more qualified leads, higher reply rates, and more closed deals. We measure what matters.",
    gradient: "from-[#a855f7] to-[#e552ff]",
  },
];

const services = [
  { icon: Crosshair, title: "Account-Based Marketing (ABM)", text: "Coordinated programmes aimed at the named accounts that matter most to your pipeline." },
  { icon: Radar, title: "Intent-Based Demand Gen", text: "Reach buyers while they are actively researching solutions like yours." },
  { icon: FileText, title: "Content Syndication", text: "Put your content in front of verified professionals who match your ICP." },
  { icon: CalendarCheck, title: "Appointment Setting", text: "Qualified meetings booked straight into your sales team's calendar." },
];

const values = [
  { icon: ShieldCheck, title: "Compliance first", text: "B2B data is verified, enriched and handled in line with GDPR and CCPA." },
  { icon: Gauge, title: "Quality over volume", text: "Every contact is matched to your ideal customer profile before outreach starts." },
  { icon: Eye, title: "Full transparency", text: "Clear reporting on what was sent, who engaged and which conversations progressed." },
  { icon: Handshake, title: "True partnership", text: "We work as an extension of your marketing and sales team, not a black box." },
];

const offices = [
  { name: "USA Office", lines: "21 N Main St #1022, Milltown, NJ 08850, United States" },
  { name: "Pune Office", lines: "EON Free Zone, Kharadi, Pune, Maharashtra 411014, India" },
];

/* orbit nodes around the globe visual */
const regions = [
  { label: "North America", value: "8M+", angle: 210 },
  { label: "EMEA", value: "7M+", angle: 330 },
  { label: "APAC", value: "6M+", angle: 90 },
];

const GRAD = "bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm font-semibold uppercase tracking-widest text-primary">{children}</span>
  );
}

/* ------------------------------------------------------------------ */
/* Hero visual: animated "global reach" orbit                          */
/* ------------------------------------------------------------------ */

function ReachOrbit() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
      {/* glows */}
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[#7c5cff]/25 blur-[80px]" />

      {/* rings */}
      {[0, 1, 2].map((r) => (
        <motion.div
          key={r}
          aria-hidden
          className="absolute rounded-full border border-white/[0.08]"
          style={{ inset: `${8 + r * 14}%` }}
          animate={reduce ? undefined : { rotate: r % 2 ? -360 : 360 }}
          transition={{ duration: 40 + r * 15, repeat: Infinity, ease: "linear" }}
        >
          <span
            className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c084fc] shadow-[0_0_12px_3px_rgba(192,132,252,0.8)]"
          />
        </motion.div>
      ))}

      {/* globe core */}
      <div className="absolute inset-[30%] overflow-hidden rounded-full border border-[#7c5cff]/40 bg-[radial-gradient(circle_at_35%_30%,rgba(139,111,255,0.55),rgba(13,11,24,0.95)_70%)] shadow-[0_0_60px_-10px_rgba(124,92,255,0.8)]">
        {/* meridians */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
          <ellipse cx="50" cy="50" rx="49" ry="20" fill="none" stroke="white" strokeWidth="0.4" />
          <ellipse cx="50" cy="50" rx="49" ry="38" fill="none" stroke="white" strokeWidth="0.4" />
          <line x1="1" y1="50" x2="99" y2="50" stroke="white" strokeWidth="0.4" />
        </svg>
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full opacity-40"
          aria-hidden
          animate={reduce ? undefined : { rotateY: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <ellipse cx="50" cy="50" rx="20" ry="49" fill="none" stroke="white" strokeWidth="0.4" />
          <ellipse cx="50" cy="50" rx="38" ry="49" fill="none" stroke="white" strokeWidth="0.4" />
          <line x1="50" y1="1" x2="50" y2="99" stroke="white" strokeWidth="0.4" />
        </motion.svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-syne text-3xl font-extrabold text-white sm:text-4xl">
            <CountUp value="75" />M+
          </span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
            global professionals
          </span>
        </div>
      </div>

      {/* region chips */}
      {regions.map((reg, i) => {
        const rad = (reg.angle * Math.PI) / 180;
        const left = 50 + Math.cos(rad) * 42;
        const top = 50 + Math.sin(rad) * 42;
        return (
          <motion.div
            key={reg.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${left}%`, top: `${top}%` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={reduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 0.4 + i * 0.15, duration: 0.5 },
              scale: { delay: 0.4 + i * 0.15, duration: 0.5 },
              y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="glass flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-soft">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white">
                <Globe2 className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="font-syne text-base font-bold text-white">{reg.value}</div>
                <div className="text-[11px] text-muted-foreground">{reg.label}</div>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* experience badge */}
      <motion.div
        className="glass absolute bottom-[4%] right-[2%] rounded-2xl px-4 py-3 shadow-soft"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="font-syne text-2xl font-extrabold text-white">
          9<span className={GRAD}> yrs</span>
        </div>
        <div className="text-[11px] text-muted-foreground">of B2B expertise</div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function AboutContent() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "200px" },
  } as const;

  return (
    <div className="relative overflow-hidden">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-[#070510] pb-16 pt-16 sm:pb-24 sm:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-0 bg-grid opacity-25" />
        <div className="pointer-events-none absolute right-[6%] top-[4%] h-[34rem] w-[40rem] rounded-full bg-[#7c3aed]/30 blur-[140px]" />
        <div className="pointer-events-none absolute left-[-8%] top-[40%] h-[24rem] w-[24rem] rounded-full bg-[#4f7bff]/14 blur-[140px]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.span
                variants={item}
                className="inline-flex items-center rounded-full border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground sm:text-xs"
              >
                About ProspectOutreach
              </motion.span>
              <motion.h1
                variants={item}
                className="mt-6 font-syne text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.6rem]"
              >
                Where data, design, and{" "}
                <span className="relative inline-block bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text pr-[0.18em] italic text-transparent">
                  revenue converge
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none" aria-hidden>
                    <motion.path
                      d="M2 7 C 80 2, 220 2, 298 7"
                      stroke="url(#aboutug)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: reduce ? 1 : 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 0.9, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="aboutug" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b6fff" />
                        <stop offset="100%" stopColor="#e552ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </motion.h1>
              <motion.p variants={item} className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                We architect demand for B2B brands by combining intent
                intelligence with creative execution and strong data operations.
              </motion.p>
              <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
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
              </motion.div>
            </motion.div>

            <ReachOrbit />
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="relative bg-background py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                data-spotlight
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ delay: reduce ? 0 : i * 0.06, duration: 0.45 }}
                whileHover={reduce ? undefined : { y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] px-3 py-5 text-center transition-colors duration-300 hover:border-[#7c5cff]/50"
              >
                <span className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${s.gradient} transition-transform duration-500 group-hover:scale-x-100`} aria-hidden />
                <p className={`font-syne text-3xl font-extrabold tabular-nums bg-gradient-to-br ${s.gradient} bg-clip-text text-transparent`}>
                  <CountUp value={s.value} />
                  {s.suffix}
                </p>
                <p className="mt-1.5 text-xs font-medium text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STORY ===================== */}
      <section className="relative overflow-hidden bg-[#08060f] py-16 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/8 blur-[120px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <motion.div {...reveal} className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A growth engine for <span className={GRAD}>B2B revenue</span>
              </h2>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                <span className="font-syne text-5xl font-extrabold leading-none text-white">
                  <CountUp value="9" />
                </span>
                <div>
                  <div className="text-sm font-bold text-foreground">Years of deep B2B expertise</div>
                  <div className="text-xs text-muted-foreground">Marketing and sales teams, worldwide</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6">
              <p className="border-l-2 border-[#7c5cff] pl-5 text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
                Backed by 9 years of deep B2B expertise, ProspectOutreach empowers Marketing and Sales teams to outpace the competition and maximize ROI.
              </p>
              <p className="leading-[1.8] text-muted-foreground">
                ProspectOutreach is a global B2B demand generation partner dedicated to driving sustainable revenue for the world&apos;s leading tech companies and publishers.
              </p>
              <p className="leading-[1.8] text-muted-foreground">
                We believe that successful outreach happens at the intersection of data and human connection. By utilizing our proprietary technology and a vast network of 75 million global professionals, we deliver omnichannel marketing solutions including ABM and intent-based syndication that put you in front of the right decision-makers at the right time.
              </p>
              <p className="leading-[1.8] text-muted-foreground">
                At our core, we are more than a service provider &mdash; we are a growth engine designed to turn your target audience into your most valuable long-term partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== MISSION / VISION / PROMISE ===================== */}
      <section className="relative bg-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
            <Eyebrow>What drives us</Eyebrow>
            <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mission, vision and <span className={GRAD}>promise</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                data-spotlight
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ delay: reduce ? 0 : i * 0.1, duration: 0.5 }}
                whileHover={reduce ? undefined : { y: -8 }}
                className="group relative overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 transition-all duration-300 hover:border-[#7c5cff]/50 hover:shadow-[0_20px_50px_-20px_rgba(124,92,255,0.6)]"
              >
                <span className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${p.gradient} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30`} aria-hidden />
                <div className="flex items-center gap-3">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
                    <p.icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#a78bfa]">{p.label}</span>
                </div>
                <h3 className="mt-5 font-syne text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== APPROACH ===================== */}
      <section className="relative overflow-hidden bg-[#08060f] py-16 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/10 blur-[120px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our <span className={GRAD}>approach</span>
            </h2>
          </motion.div>

          <div className="relative mt-14">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-[3.25rem] hidden md:block">
              <div className="relative h-0.5 w-full rounded-full bg-white/[0.08]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduce ? 0 : 1.4, ease: "easeInOut", delay: 0.3 }}
                  style={{ transformOrigin: "left" }}
                  className="h-full w-full rounded-full bg-gradient-to-r from-[#4f7bff] via-[#a855f7] to-[#e552ff]"
                />
                {!reduce && (
                  <motion.span
                    aria-hidden
                    className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_4px_rgba(229,82,255,0.9)]"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6, delay: 1.6 }}
                  />
                )}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {approach.map((a, i) => (
                <motion.div
                  key={a.title}
                  data-spotlight
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "150px" }}
                  transition={{ delay: reduce ? 0 : i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={reduce ? undefined : { y: -10 }}
                  className="group relative overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#7c5cff]/50 hover:shadow-[0_20px_50px_-20px_rgba(124,92,255,0.6)]"
                >
                  <span className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${a.gradient} transition-transform duration-500 group-hover:scale-x-100`} aria-hidden />
                  <span className="pointer-events-none absolute right-4 top-3 font-syne text-4xl font-bold text-white/[0.05] transition-colors duration-300 group-hover:text-white/[0.09]">
                    0{i + 1}
                  </span>
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
                    <motion.span
                      aria-hidden
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${a.gradient} opacity-40 blur-lg`}
                      animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    />
                    <span className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${a.gradient} text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
                      <a.icon className="h-7 w-7" strokeWidth={1.9} />
                    </span>
                  </div>
                  <h3 className="mt-6 font-syne text-xl font-bold text-foreground">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHAT WE DELIVER ===================== */}
      <section className="relative bg-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <motion.div {...reveal} className="max-w-xl">
              <Eyebrow>What we deliver</Eyebrow>
              <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Omnichannel <span className={GRAD}>demand generation</span>
              </h2>
            </motion.div>
            <motion.div {...reveal}>
              <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#c084fc] hover:text-white">
                View all services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ delay: reduce ? 0 : i * 0.07, duration: 0.45 }}
                whileHover={reduce ? undefined : { y: -5 }}
              >
                <Link
                  href="/services"
                  data-spotlight
                  className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#7c5cff]/45 hover:bg-white/[0.04]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#a78bfa] transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#7c5cff] group-hover:to-[#e552ff] group-hover:text-white">
                    <s.icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 text-[15px] font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">{s.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#a78bfa] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="relative overflow-hidden bg-[#08060f] py-16 sm:py-20">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...reveal}>
              <Eyebrow>Our values</Eyebrow>
              <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The principles behind <span className={GRAD}>every campaign</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Great outreach is built on trust: trust in the data, in the
                process and in the people running it. These principles guide
                how we work with every client.
              </p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  data-spotlight
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "150px" }}
                  transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.45 }}
                  whileHover={reduce ? undefined : { y: -5 }}
                  className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-5 transition-colors duration-300 hover:border-[#7c5cff]/50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7c5cff]/15 text-[#c084fc] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#7c5cff] group-hover:to-[#e552ff] group-hover:text-white">
                    <v.icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold text-foreground">{v.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GLOBAL PRESENCE ===================== */}
      <section className="relative bg-background py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
            <Eyebrow>Where we are</Eyebrow>
            <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Global reach, <span className={GRAD}>local teams</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Campaigns across North America, EMEA and APAC, run from our
              offices in the United States and India.
            </p>
          </motion.div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            {offices.map((o, i) => (
              <motion.div
                key={o.name}
                data-spotlight
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ delay: reduce ? 0 : i * 0.1, duration: 0.45 }}
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 transition-colors duration-300 hover:border-[#7c5cff]/50"
              >
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white">
                  {!reduce && (
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-xl border-2 border-[#c084fc]"
                      animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: i * 0.6 }}
                    />
                  )}
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-syne text-lg font-bold text-foreground">{o.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{o.lines}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="bg-background pb-20 pt-4 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...reveal}
            className="relative overflow-hidden rounded-[1.75rem] border border-[#7c5cff]/25 bg-[#0c0a16] px-7 py-14 text-center sm:px-12 sm:py-16"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-full w-2/3 -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,rgba(124,92,255,0.35),transparent_65%)]"
              animate={reduce ? undefined : { opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <h2 className="font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to <span className={GRAD}>partner?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Let&apos;s turn intent into outcomes with programs built for
                performance, scale, and speed.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
