"use client";

import { motion } from "framer-motion";
import { Target, MessageSquare, Filter, RefreshCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Target,
    title: "Target the right people",
    description: "No guesswork. No wasted outreach. We use AI-powered ICP matching and verified B2B data to build prospect lists filled with decision-makers who actually fit what you sell.",
    color: "from-violet-500 to-purple-600",
    blob: "bg-violet-200/70",
  },
  {
    icon: MessageSquare,
    title: "Reach them with precision",
    description: "Personalised cold email and LinkedIn sequences go out at scale with the right message, to the right person, at the right time. Your team stops writing follow-ups manually.",
    color: "from-cyan-500 to-primary",
    blob: "bg-cyan-200/70",
  },
  {
    icon: Filter,
    title: "Qualify before it hits your calendar",
    description: "Not every reply is a deal. We filter for intent, confirm fit, and only pass through meetings worth your reps’ time. No tyre-kickers. No dead-end demos.",
    color: "from-fuchsia-500 to-pink-600",
    blob: "bg-fuchsia-200/70",
  },
  {
    icon: RefreshCcw,
    title: "Close with full visibility",
    description: "Every lead, reply, and meeting syncs directly to your CRM. Your team picks up with full context no dropped threads, no manual data entry.",
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
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-4xl">
            From first contact to closed deal <br />   one connected process.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four clear steps to a fuller pipeline and more closed deals.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(100%-1rem)] top-1/2 hidden h-0.5 w-[calc(2.5rem)] -translate-y-12 bg-gradient-to-r from-primary/40 via-fuchsia-400/35 to-cyan-400/25 lg:block z-10" />
                )}
                <Card className="h-full border-border/60 bg-white/70 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:shadow-soft-xl hover:border-primary/20">
                  <div
                    className={cn(
                      "relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                      step.color
                    )}
                  >
                    <span
                      className={cn(
                        "absolute -inset-1 -z-10 rounded-[1.1rem] opacity-60 blur-md",
                        step.blob
                      )}
                      aria-hidden
                    />
                    <step.icon className="h-9 w-9 text-white drop-shadow-md" />
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-primary/80">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
