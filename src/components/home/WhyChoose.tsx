"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Target, ShieldCheck, Workflow, TrendingUp, Phone, Check, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Benefit = { icon: LucideIcon; title: string; description: string; gradient: string };

const left: Benefit[] = [
  {
    icon: Target,
    title: "ICP-matched targeting",
    description:
      "Forget spray-and-pray. Every prospect we surface matches your ideal customer profile — by industry, size, role and buying signals.",
    gradient: "from-[#4f7bff] to-[#7c5cff]",
  },
  {
    icon: ShieldCheck,
    title: "Verified, compliant data",
    description:
      "Bounced emails and wrong contacts kill momentum. Our B2B data is verified and enriched, and handled in line with GDPR and CCPA.",
    gradient: "from-[#7c5cff] to-[#a855f7]",
  },
];

const right: Benefit[] = [
  {
    icon: Workflow,
    title: "Multi-channel outreach",
    description:
      "Personalised cold email and LinkedIn sequences run on schedule, with every follow-up handled — so your team wakes up to replies.",
    gradient: "from-[#a855f7] to-[#e552ff]",
  },
  {
    icon: TrendingUp,
    title: "Meetings that convert",
    description:
      "We don’t just book calls. We qualify intent, confirm fit and pass through conversations with a real reason to move forward.",
    gradient: "from-[#e552ff] to-[#ff7ab8]",
  },
];

const checks = ["Prospect details confirmed", "Business relevance checked", "Qualification criteria aligned"];

/** Phone with a verification tick — lucide has no single icon for this. */
function PhoneVerified({ className }: { className?: string }) {
  return (
    <span className="relative inline-flex">
      <Phone className={className} strokeWidth={1.9} />
      <span className="absolute -bottom-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow ring-2 ring-[#7c5cff]">
        <Check className="h-2.5 w-2.5 text-[#7c5cff]" strokeWidth={3.5} />
      </span>
    </span>
  );
}

function BenefitCard({ b, i, n }: { b: Benefit; i: number; n: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      data-spotlight
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "120px" }}
      transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.5 }}
      whileHover={reduce ? undefined : { y: -6 }}
      className="group relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 transition-colors duration-300 hover:border-[#7c5cff]/50"
    >
      <span
        className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${b.gradient} transition-transform duration-500 group-hover:scale-x-100`}
        aria-hidden
      />
      <div className="flex items-center gap-4">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${b.gradient} text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
        >
          <b.icon className="h-6 w-6" strokeWidth={1.9} />
        </span>
        <h3 className="text-[17px] font-bold leading-snug text-foreground">{b.title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
      <div className="mt-auto flex items-center gap-3 pt-6" aria-hidden>
        <span className="font-syne text-sm font-bold text-white/25 transition-colors group-hover:text-[#c084fc]">0{n}</span>
        <span className={`h-px flex-1 bg-gradient-to-r ${b.gradient} opacity-30 transition-opacity duration-300 group-hover:opacity-80`} />
      </div>
    </motion.div>
  );
}

/** Looping "verification call" demo inside the featured card. */
function VerificationDemo() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  // 0 = calling, 1..3 = checks ticked, 4 = verified
  const [step, setStep] = useState(reduce ? 4 : 0);

  useEffect(() => {
    if (reduce || !inView) return;
    const id = setTimeout(() => setStep((s) => (s >= 4 ? 0 : s + 1)), step === 4 ? 2600 : step === 0 ? 1600 : 1000);
    return () => clearTimeout(id);
  }, [step, inView, reduce]);

  return (
    <div ref={ref} className="relative mt-7 rounded-2xl border border-white/10 bg-[#0b0915]/80 p-4 sm:p-5" aria-hidden>
      {/* call header */}
      <div className="flex items-center gap-3">
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7c5cff] to-[#a855f7]">
          {step === 0 && !reduce && <span className="absolute inset-0 animate-ping rounded-full bg-[#7c5cff]/50" />}
          <Phone className="relative h-4 w-4 text-white" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-semibold text-foreground">Tele-verification call</p>
          <p className="text-[11px] text-muted-foreground">{step === 0 ? "Connecting with prospect…" : "In conversation"}</p>
        </div>
        {/* waveform */}
        <div className="flex h-6 items-end gap-[3px]">
          {[0.5, 0.9, 0.6, 1, 0.7, 0.4, 0.8].map((h, k) => (
            <motion.span
              key={k}
              className="w-[3px] rounded-full bg-[#a78bfa]"
              style={{ height: `${h * 100}%` }}
              animate={reduce || step === 0 ? { scaleY: 0.3 } : { scaleY: [0.3, 1, 0.5, 0.9, 0.3] }}
              transition={{ duration: 1.1, repeat: Infinity, delay: k * 0.1, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>

      {/* checklist */}
      <ul className="mt-4 space-y-2">
        {checks.map((c, k) => {
          const done = step > k;
          return (
            <li
              key={c}
              className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-[13px] transition-all duration-500 ${
                done ? "border-[#7c5cff]/40 bg-[#7c5cff]/10 text-foreground" : "border-white/[0.06] bg-white/[0.02] text-white/45"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                  done ? "bg-gradient-to-br from-[#7c5cff] to-[#c084fc]" : "border border-white/15"
                }`}
              >
                {done && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
              </span>
              {c}
            </li>
          );
        })}
      </ul>

      {/* result */}
      <div
        className={`mt-4 flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-500 ${
          step === 4 ? "bg-gradient-to-r from-[#7c5cff] to-[#a855f7] text-white shadow-[0_10px_30px_-10px_rgba(124,92,255,0.8)]" : "bg-white/[0.03] text-white/40"
        }`}
      >
        <span className="flex items-center gap-2 text-[13px] font-semibold">
          <BadgeCheck className="h-4 w-4" />
          {step === 4 ? "Human-verified lead delivered" : "Awaiting verification"}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider">{step === 4 ? "Verified" : `${Math.min(step, 3)}/3`}</span>
      </div>
    </div>
  );
}

export function WhyChoose() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[28rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c5cff]/10 blur-[130px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why ProspectOutreach</span>
          <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">revenue</span>,
            not activity metrics
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Most outreach agencies report on emails sent. We focus on what your sales team actually needs — qualified
            conversations with the right decision-makers.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-[1fr_1.15fr_1fr]">
          {/* featured: human verification */}
          <motion.div
            data-spotlight
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[1.6rem] p-[1px] lg:order-2"
          >
            {/* gradient border */}
            <span className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-b from-[#8b6fff] via-[#a855f7]/40 to-white/[0.06]" aria-hidden />
            <div className="relative h-full rounded-[calc(1.6rem-1px)] bg-[#0f0c1c] p-6 sm:p-7">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#7c5cff]/25 blur-3xl" aria-hidden />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c5cff] to-[#a855f7] text-white shadow-[0_12px_30px_-8px_rgba(124,92,255,0.9)] ring-1 ring-white/25">
                    <PhoneVerified className="h-7 w-7" />
                  </span>
                  <span className="rounded-full border border-[#7c5cff]/40 bg-[#7c5cff]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#c4b5fd]">
                    Our difference
                  </span>
                </div>
                <h3 className="mt-5 font-syne text-2xl font-bold tracking-tight text-foreground">
                  Human-Verified{" "}
                  <span className="bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">Lead Quality</span>
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  Every lead is tele-verified by our team to ensure accurate prospect information, business relevance, and
                  qualification alignment before delivery.
                </p>
                <VerificationDemo />
              </div>
            </div>
          </motion.div>

          {/* side columns */}
          <div className="grid gap-5 sm:grid-cols-2 lg:order-1 lg:flex lg:flex-col">
            {left.map((b, i) => (
              <BenefitCard key={b.title} b={b} i={i} n={i + 1} />
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:order-3 lg:flex lg:flex-col">
            {right.map((b, i) => (
              <BenefitCard key={b.title} b={b} i={reduce ? 0 : i + 2} n={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
