"use client";

import { motion } from "framer-motion";
import { Database, Zap, Target } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const approach = [
  {
    icon: Database,
    title: "Data Driven",
    description:
      "We use verified B2B data and intent signals to target the right accounts and contacts, so your outreach hits decision-makers who are ready to buy.",
  },
  {
    icon: Zap,
    title: "Automation First",
    description:
      "Manual follow-ups don't scale. We automate sequences, lead routing, and CRM sync so your team spends time closing, not data entry.",
  },
  {
    icon: Target,
    title: "Results Focused",
    description:
      "Every feature is built to move the needle: more qualified leads, higher reply rates, and more closed deals. We measure what matters.",
  },
];

export function AboutContent() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              About ProspectOutreach
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We help B2B companies grow faster by making lead generation and
              sales outreach predictable, scalable, and results-driven.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Company Story
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              ProspectOutreach was founded to solve a simple problem: B2B teams
              were spending too much time on manual prospecting and not enough
              time closing. We built a platform that combines AI-powered
              targeting, verified B2B data, and automated workflows so sales
              teams can fill their pipeline and close more deals. Our mission is
              to help every B2B company grow faster by making smart outreach
              accessible and scalable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center text-2xl font-bold text-foreground sm:text-3xl"
          >
            Our Approach
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full transition-shadow hover:shadow-soft-lg">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
