"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Target, Layers, FileText, Users2, ArrowRight, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Target,
    title: "Account-Based Marketing (ABM)",
    description:
      "Target high-value accounts with personalized, multi-touch outreach that drives meetings with key buyers.",
    longDescription:
      "Target your highest-value accounts with surgical precision. We combine deep audience intelligence with personalised, multi-touch outreach to engage key decision-makers within your target organisations.",
    points: [
      "Precision targeting of specific stakeholders.",
      "Multi-channel engagement across email, social and display.",
      "Scalable personalisation for every stage of the journey.",
    ],
    gradient: "from-[#4f7bff] to-[#7c5cff]",
    glow: "bg-[#4f7bff]",
  },
  {
    icon: Layers,
    title: "Intent-Based Demand Gen",
    description:
      "Reach in-market buyers showing real intent, so you engage the right prospects at the right time.",
    longDescription:
      "Stop chasing cold leads. We use intent data to identify in-market buyers who are actively searching for solutions like yours, then reach them while the need is live.",
    points: [
      "Real-time intent signals as they happen.",
      "Predictive modelling to focus reps on live accounts.",
      "Behavioural insight into what prospects research.",
    ],
    gradient: "from-[#7c5cff] to-[#a855f7]",
    glow: "bg-[#7c5cff]",
  },
  {
    icon: FileText,
    title: "Content Syndication",
    description:
      "Get your content in front of relevant B2B buyers and generate high-intent leads at scale.",
    longDescription:
      "Put your whitepapers, case studies and reports in front of the right eyes. We distribute your thought leadership to the right segments to drive high-quality lead generation.",
    points: [
      "CPL-based models — pay for leads that fit.",
      "Targeted distribution by industry, title and size.",
      "Strategy-driven nurturing that keeps you top of mind.",
    ],
    gradient: "from-[#a855f7] to-[#e552ff]",
    glow: "bg-[#a855f7]",
  },
  {
    icon: Users2,
    title: "Appointment Setting",
    description:
      "Turn engaged prospects into qualified sales meetings with professional, multi-step outreach and follow-up.",
    longDescription:
      "We don’t just deliver names; we deliver opportunities. Our rigorous qualification process ensures every meeting passed to your sales team is primed for a real conversation.",
    points: [
      "MQL to SQL optimisation across marketing and sales.",
      "Data validation with GDPR / CCPA compliance.",
      "BANT / custom frameworks for every booking.",
    ],
    gradient: "from-[#e552ff] to-[#ff7ab8]",
    glow: "bg-[#e552ff]",
  },
];

type Service = (typeof services)[number];

export function ServicesOverview() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/8 blur-[120px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our B2B{" "}
            <span className="bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">
              demand generation
            </span>{" "}
            services
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Target the right accounts, create real engagement, and book qualified
            meetings at scale.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.button
              key={s.title}
              type="button"
              data-spotlight
              onClick={() => setSelected(s)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.5 }}
              whileHover={reduce ? undefined : { y: -8 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f1016] p-6 text-left transition-colors duration-300 hover:border-[#7c5cff]/50"
            >
              {/* gradient top accent bar */}
              <span
                className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${s.gradient} transition-transform duration-500 group-hover:scale-x-100`}
                aria-hidden
              />
              {/* hover glow blob */}
              <span
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25 ${s.glow}`}
                aria-hidden
              />
              {/* ghost number */}
              <span className="pointer-events-none absolute right-4 top-3 font-syne text-4xl font-bold text-white/[0.05] transition-colors duration-300 group-hover:text-white/[0.09]">
                0{i + 1}
              </span>

              {/* gradient icon with animated glow */}
              <div className="relative h-14 w-14">
                <motion.span
                  aria-hidden
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.gradient} opacity-25 blur-md`}
                  animate={reduce ? undefined : { scale: [1, 1.18, 1], opacity: [0.25, 0.45, 0.25] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
                <span
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  <s.icon className="h-6 w-6" strokeWidth={1.9} />
                </span>
              </div>

              <h3 className="mt-5 text-base font-bold leading-snug text-foreground">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
                {s.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className="text-xs font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:text-white group-hover:shadow-lg group-hover:[--tw-gradient-from:#7c5cff] group-hover:[--tw-gradient-to:#e552ff]">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

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
              <div className="absolute inset-x-0 top-0 h-1 bg-accent-gradient" />
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.04] p-2 text-muted-foreground transition-colors hover:bg-white/[0.08] hover:text-foreground"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="px-7 pb-8 pt-10 sm:px-9">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-white">
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
                      <span className="text-sm leading-relaxed text-muted-foreground">{p}</span>
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
