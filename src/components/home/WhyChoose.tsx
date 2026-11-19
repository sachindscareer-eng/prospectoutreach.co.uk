"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, ShieldCheck, Workflow, TrendingUp } from "lucide-react";

const benefits = [
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

export function WhyChoose() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/8 blur-[120px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why ProspectOutreach
          </span>
          <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">
              revenue
            </span>
            , not activity metrics
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Most outreach agencies report on emails sent. We focus on
            what your sales team actually needs — qualified conversations with
            the right decision-makers.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              data-spotlight
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.5 }}
              whileHover={reduce ? undefined : { y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 transition-colors duration-300 hover:border-[#7c5cff]/50"
            >
              <span
                className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${b.gradient} transition-transform duration-500 group-hover:scale-x-100`}
                aria-hidden
              />
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${b.gradient} text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
              >
                <b.icon className="h-6 w-6" strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 text-base font-bold text-foreground">{b.title}</h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
