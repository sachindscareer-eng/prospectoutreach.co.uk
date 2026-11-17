"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, ShieldCheck, Workflow, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Target,
    title: "ICP-matched targeting",
    description:
      "Forget spray-and-pray. Every prospect we surface matches your ideal customer profile — by industry, size, role and buying signals.",
  },
  {
    icon: ShieldCheck,
    title: "Verified data you can trust",
    description:
      "Bounced emails and wrong numbers kill momentum. Our B2B data is verified and enriched, so your sequences land every time.",
  },
  {
    icon: Workflow,
    title: "Outreach that runs itself",
    description:
      "Personalised email and LinkedIn sequences go out automatically. Follow-ups happen on schedule. Your team wakes up to replies.",
  },
  {
    icon: TrendingUp,
    title: "Meetings that actually convert",
    description:
      "We don’t just book calls. We qualify intent, confirm fit and pass through conversations with a real reason to move forward.",
  },
];

export function WhyChoose() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why ProspectOutreach
          </span>
          <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for <span className="text-gradient">revenue</span>, not
            activity metrics
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don&apos;t believe in volume-driven outreach. We focus on
            precision — connecting you with the right decision-makers when it
            matters most.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.5 }}
              className="h-full"
            >
              <Card className="gradient-border h-full bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
