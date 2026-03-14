"use client";

import { motion } from "framer-motion";
import { Search, Send, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Qualified Prospects",
    description:
      "Use AI and verified B2B data to build lists of decision-makers that match your ideal customer profile.",
  },
  {
    icon: Send,
    title: "Automate Outreach",
    description:
      "Run personalized cold email and LinkedIn sequences at scale. A/B test subject lines and copy.",
  },
  {
    icon: CheckCircle2,
    title: "Convert Leads into Customers",
    description:
      "Track replies and meetings, sync with your CRM, and close more deals with less manual work.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-muted/30 to-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three steps to a fuller pipeline and more closed deals.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
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
                  <div className="absolute left-[calc(50%+3rem)] top-12 hidden h-0.5 w-[calc(100%-6rem)] bg-gradient-to-r from-primary/40 to-primary/10 md:block" />
                )}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-soft">
                  <step.icon className="h-10 w-10" />
                </div>
                <p className="mt-4 text-sm font-medium text-primary">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
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
