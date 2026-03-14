"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, Workflow, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "AI powered targeting",
    description: "Reach the right decision-makers with intent and fit scoring.",
  },
  {
    icon: ShieldCheck,
    title: "Verified B2B data",
    description: "Accurate contacts and company data you can trust.",
  },
  {
    icon: Workflow,
    title: "Automated workflows",
    description: "Set sequences once and let the system do the follow-up.",
  },
  {
    icon: TrendingUp,
    title: "High conversion outreach",
    description: "Templates and best practices built for B2B reply rates.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose ProspectOutreach
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built for B2B teams that want more pipeline with less manual work.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-soft-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground capitalize">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
