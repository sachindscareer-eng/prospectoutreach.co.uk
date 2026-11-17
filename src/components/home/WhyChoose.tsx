"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, Workflow, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Target,
    title: "ICP-matched targeting",
    description: "Forget spray-and-pray. Every prospect we surface matches your ideal customer profile - by industry, size, role, and buying signals.",
    border: "border-l-fuchsia-500",
    iconBg: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
  },
  {
    icon: ShieldCheck,
    title: "Verified data you can trust",
    description: "Bounced emails and wrong numbers kill momentum. Our B2B data is verified, enriched, and ready to use - so your sequences land every time.",
    border: "border-l-cyan-500",
    iconBg: "bg-gradient-to-br from-cyan-500 to-primary",
  },
  {
    icon: Workflow,
    title: "Outreach that runs itself",
    description: "Personalised email and LinkedIn sequences go out automatically. Follow-ups happen on schedule. Your team wakes up to replies.",
    border: "border-l-violet-500",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Meetings that actually convert",
    description: "We don’t just book calls. We qualify intent, confirm fit, and pass through conversations that have a real reason to move forward.",
    border: "border-l-emerald-500",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
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
            Built for revenue, not activity metrics.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don&apos;t believe in volume-driven outreach. We focus on precision - connecting you with the right decision-makers when it matters most.
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
              className="h-full"
            >
              <Card
                className={cn(
                  "group h-full border border-border/80 bg-gradient-to-b from-card to-muted/20 p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg",
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
