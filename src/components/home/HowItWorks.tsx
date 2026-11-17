"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, Send, CheckSquare, CalendarDays, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Target",
    description:
      "Define your ideal customer profile and build a precise list of best-fit accounts and buyers.",
  },
  {
    icon: Send,
    title: "Reach",
    description:
      "Run personalized cold email and LinkedIn outreach at scale to start real conversations.",
  },
  {
    icon: CheckSquare,
    title: "Qualify",
    description:
      "Engage and filter responses to surface sales-ready opportunities.",
  },
  {
    icon: CalendarDays,
    title: "Close",
    description:
      "Book qualified meetings directly into your sales team’s calendar.",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-background py-16 sm:py-20">
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

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ delay: reduce ? 0 : i * 0.12, duration: 0.5 }}
              className="group relative"
            >
              {/* connector arrow */}
              {i < steps.length - 1 && (
                <ArrowRight className="absolute right-[-10px] top-5 hidden h-5 w-5 text-[#7c5cff]/60 lg:block" />
              )}

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#7c5cff]/40 bg-[#7c5cff]/12 text-sm font-bold text-[#c084fc]">
                  0{i + 1}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#a78bfa] transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
