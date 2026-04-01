"use client";

import { motion } from "framer-motion";
import { Search, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Search,
    title: "Find qualified prospects",
    description:
      "Use AI and verified B2B data to build lists of decision-makers that match your ideal customer profile.",
    color: "from-violet-500 to-purple-600",
    blob: "bg-violet-200/70",
  },
  {
    icon: Send,
    title: "Automate outreach",
    description:
      "Run personalized cold email and LinkedIn sequences at scale. A/B test subject lines and copy.",
    color: "from-cyan-500 to-primary",
    blob: "bg-cyan-200/70",
  },
  {
    icon: CheckCircle2,
    title: "Convert leads to customers",
    description:
      "Track replies and meetings, sync with your CRM, and close more deals with less manual work.",
    color: "from-emerald-500 to-teal-600",
    blob: "bg-emerald-200/70",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50/80 via-white to-cyan-50/60 py-16 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-fuchsia-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm ring-1 ring-primary/15">
            Simple process
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three clear steps to a fuller pipeline and more closed deals.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+3rem)] top-12 hidden h-0.5 w-[calc(100%-6rem)] bg-gradient-to-r from-primary/40 via-fuchsia-400/35 to-cyan-400/25 md:block" />
                )}
                <div
                  className={cn(
                    "relative mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br shadow-lg",
                    step.color
                  )}
                >
                  <span
                    className={cn(
                      "absolute -inset-1 -z-10 rounded-[1.35rem] opacity-60 blur-md",
                      step.blob
                    )}
                    aria-hidden
                  />
                  <step.icon className="h-11 w-11 text-white drop-shadow-md" />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-primary/90">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
