"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Target,
  Search,
  Share2,
  CalendarCheck,
  ArrowUpRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    no: "01",
    icon: Target,
    title: "Account-Based Marketing",
    tag: "ABM",
    description:
      "Target your highest-value accounts with surgical precision — audience intelligence paired with personalised B2B outreach.",
    longDescription:
      "Target your highest-value accounts with surgical precision. We combine deep audience intelligence with personalised outreach to engage key decision-makers within your target organisations.",
    points: [
      "Precision targeting of specific stakeholders.",
      "Multi-channel engagement across email, social and display.",
      "Scalable personalisation for every stage of the journey.",
    ],
    stat: "1:1 account targeting",
    gradient: "from-[#4f7bff] to-[#7c5cff]",
    glow: "bg-[#4f7bff]",
  },
  {
    no: "02",
    icon: Search,
    title: "Intent-Based Demand Gen",
    tag: "Intent data",
    description:
      "Capture in-market buyers using real-time purchase-intent signals, so your team talks to people already looking.",
    longDescription:
      "Stop chasing cold leads. We use intent data to identify in-market buyers who are actively searching for solutions like yours, then reach them while the need is live.",
    points: [
      "Real-time intent signals as they happen.",
      "Predictive modelling to focus reps on live accounts.",
      "Behavioural insight into what prospects research.",
    ],
    stat: "In-market buyers only",
    gradient: "from-[#7c5cff] to-[#e552ff]",
    glow: "bg-[#7c5cff]",
  },
  {
    no: "03",
    icon: Share2,
    title: "Content Syndication",
    tag: "Reach",
    description:
      "Put your thought leadership in front of the right B2B professionals and turn attention into qualified pipeline.",
    longDescription:
      "Put your whitepapers, case studies and reports in front of the right eyes. We distribute your thought leadership to the right segments to drive high-quality lead generation.",
    points: [
      "CPL-based models — pay for leads that fit.",
      "Targeted distribution by industry, title and size.",
      "Strategy-driven nurturing that keeps you top of mind.",
    ],
    stat: "CPL-based delivery",
    gradient: "from-[#e552ff] to-[#ff7ab8]",
    glow: "bg-[#e552ff]",
  },
  {
    no: "04",
    icon: CalendarCheck,
    title: "Appointment Setting",
    tag: "Qualified meetings",
    description:
      "We qualify for intent and fit, then book qualified meetings — not tyre-kickers — straight onto your calendar.",
    longDescription:
      "We don’t just deliver names; we deliver opportunities. Our rigorous qualification process ensures every meeting passed to your sales team is primed for a real conversation.",
    points: [
      "MQL to SQL optimisation across marketing and sales.",
      "Data validation with GDPR / CCPA compliance.",
      "BANT / custom frameworks for every booking.",
    ],
    stat: "Booked to your calendar",
    gradient: "from-[#34d399] to-[#4f7bff]",
    glow: "bg-[#34d399]",
  },
];

type Service = (typeof services)[number];

export function ServicesOverview() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/10 blur-[120px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            What we do
          </span>
          <h2 className="mt-4 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Full-funnel B2B lead generation{" "}
            <span className="bg-gradient-to-r from-[#7c5cff] to-[#e552ff] bg-clip-text text-transparent">
              services
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            From first touch to booked meeting — data-driven demand generation
            that connects your brand with high-intent decision-makers.
          </p>
        </motion.div>

        {/* cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.button
              key={s.title}
              type="button"
              onClick={() => setSelected(s)}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.5 }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0f1016] p-6 text-left transition-colors duration-300 hover:border-white/20 sm:p-7"
            >
              {/* hover glow blob */}
              <span
                className={cn(
                  "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20",
                  s.glow
                )}
                aria-hidden
              />
              {/* big ghost number */}
              <span className="pointer-events-none absolute right-5 top-4 font-syne text-5xl font-bold text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.07] sm:text-6xl">
                {s.no}
              </span>

              <div className="relative flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6",
                    s.gradient
                  )}
                >
                  <s.icon className="h-7 w-7" />
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-muted-foreground">
                  {s.tag}
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>

              <div className="relative mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <span className={cn("h-1.5 w-1.5 rounded-full", s.glow)} />
                  {s.stat}
                </span>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* detail modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#121318] shadow-2xl"
            >
              <div
                className={cn(
                  "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
                  selected.gradient
                )}
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.04] p-2 text-muted-foreground transition-colors hover:bg-white/[0.08] hover:text-foreground"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="px-7 pb-8 pt-10 sm:px-9">
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                      selected.gradient
                    )}
                  >
                    <selected.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-syne text-2xl font-bold tracking-tight text-foreground">
                    {selected.title}
                  </h3>
                </div>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {selected.longDescription}
                </p>
                <ul className="mt-6 space-y-3.5">
                  {selected.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button className="w-full sm:w-auto" asChild>
                    <a href="/contact">Talk to our team</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
