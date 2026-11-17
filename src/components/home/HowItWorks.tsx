"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, MessageSquare, Filter, RefreshCcw } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Target the right people",
    description:
      "No guesswork. We use ICP matching and verified B2B data to build prospect lists filled with decision-makers who actually fit what you sell.",
  },
  {
    icon: MessageSquare,
    title: "Reach them with precision",
    description:
      "Personalised cold email and LinkedIn sequences go out at scale — the right message, to the right person, at the right time.",
  },
  {
    icon: Filter,
    title: "Qualify before your calendar",
    description:
      "Not every reply is a deal. We filter for intent, confirm fit, and only pass through meetings worth your reps’ time.",
  },
  {
    icon: RefreshCcw,
    title: "Close with full visibility",
    description:
      "Every lead, reply and meeting syncs to your CRM. Your team picks up with full context — no dropped threads, no manual data entry.",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-muted py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-[#7c5cff]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-[#4f7bff]/10 blur-[100px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            The process
          </span>
          <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From first contact to closed deal — one{" "}
            <span className="text-gradient">connected</span> process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four clear steps to a fuller pipeline and more closed deals.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-7xl">
          {/* animated connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden lg:block">
            <div className="relative mx-auto h-px w-[76%] bg-white/[0.08]">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reduce ? 0 : 1.4, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
                className="absolute inset-0 bg-accent-gradient"
              />
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: reduce ? 0 : i * 0.12, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-background shadow-soft">
                  <span className="absolute -inset-1 -z-10 rounded-[1.1rem] bg-accent-gradient opacity-30 blur-md" />
                  <step.icon className="h-8 w-8 text-foreground" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-primary">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
