"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Target, Send, CheckSquare, CalendarDays } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Target",
    description:
      "Define your ideal customer profile and build a precise list of best-fit accounts and buyers.",
    gradient: "from-[#4f7bff] to-[#7c5cff]",
  },
  {
    icon: Send,
    title: "Reach",
    description:
      "Run personalized cold email and LinkedIn outreach at scale to start real conversations.",
    gradient: "from-[#7c5cff] to-[#a855f7]",
  },
  {
    icon: CheckSquare,
    title: "Qualify",
    description:
      "Engage and filter responses to surface sales-ready opportunities.",
    gradient: "from-[#a855f7] to-[#e552ff]",
  },
  {
    icon: CalendarDays,
    title: "Close",
    description:
      "Book qualified meetings directly into your sales team’s calendar.",
    gradient: "from-[#e552ff] to-[#ff7ab8]",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();

  const card: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: reduce ? 0 : i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#08060f] py-20 sm:py-24"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 -z-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/10 blur-[120px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A simple, proven process for{" "}
            <span className="bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">
              pipeline growth
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            A focused 4-step approach to turn your ideal buyers into qualified
            meetings.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* animated connector line (desktop) */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[4.5rem] hidden lg:block">
            <div className="relative h-0.5 w-full rounded-full bg-white/[0.08]">
              {/* base gradient line draws in on scroll */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reduce ? 0 : 1.6, ease: "easeInOut", delay: 0.3 }}
                style={{ transformOrigin: "left" }}
                className="h-full w-full rounded-full bg-gradient-to-r from-[#4f7bff] via-[#a855f7] to-[#e552ff]"
              />
              {/* continuously travelling glowing dot */}
              {!reduce && (
                <motion.span
                  aria-hidden
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_4px_rgba(229,82,255,0.9)]"
                  animate={{ left: ["0%", "100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.6,
                    delay: 1.6,
                  }}
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "150px" }}
                whileHover={reduce ? undefined : { y: -8 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center transition-colors duration-300 hover:border-[#7c5cff]/40"
              >
                {/* number badge */}
                <span className="absolute right-4 top-4 font-syne text-3xl font-bold text-white/[0.06] transition-colors group-hover:text-white/[0.1]">
                  0{i + 1}
                </span>

                {/* animated icon */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
                  <motion.span
                    aria-hidden
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-30 blur-md`}
                    animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  />
                  <span
                    className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    <step.icon className="h-7 w-7" strokeWidth={1.9} />
                  </span>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Step {i + 1}
                </p>
                <h3 className="mt-1.5 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
