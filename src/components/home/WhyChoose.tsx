"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, Workflow, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Target,
    title: "AI-powered targeting",
    description:
      "Reach the right decision-makers with intent and fit scoring.",
    border: "border-l-fuchsia-500",
    iconBg: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
  },
  {
    icon: ShieldCheck,
    title: "Verified B2B data",
    description: "Accurate contacts and company data you can trust.",
    border: "border-l-cyan-500",
    iconBg: "bg-gradient-to-br from-cyan-500 to-primary",
  },
  {
    icon: Workflow,
    title: "Automated workflows",
    description: "Set sequences once and let the system do the follow-up.",
    border: "border-l-violet-500",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "High-conversion outreach",
    description:
      "Templates and best practices built for B2B reply rates.",
    border: "border-l-amber-500",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
];

export function WhyChoose() {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why teams choose{" "}
            <span className="text-primary">ProspectOutreach</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built for B2B teams that want more pipeline with less manual grind.
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
              className={cn(
                "group rounded-2xl border border-border/80 bg-gradient-to-b from-card to-muted/30 p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg",
                "border-l-4",
                benefit.border
              )}
            >
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md transition-transform group-hover:scale-105",
                  benefit.iconBg
                )}
              >
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
