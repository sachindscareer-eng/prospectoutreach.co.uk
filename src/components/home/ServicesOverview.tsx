"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Target,
  Share2,
  Search,
  Filter,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Target,
    title: "Account-Based Marketing (ABM)",
    description:
      "Target your highest-value accounts with surgical precision — audience intelligence paired with personalised B2B outreach.",
    longDescription:
      "Target your highest-value accounts with surgical precision. We combine deep audience intelligence with personalised outreach to engage key decision-makers within your target organisations.",
    points: [
      "Precision targeting: identify and reach specific stakeholders.",
      "Multi-channel engagement: unified messaging across email, social and display.",
      "Scalable personalisation: tailored content for every stage of the buyer’s journey.",
    ],
    span: "lg:col-span-2",
  },
  {
    icon: Search,
    title: "Intent-Based Demand Generation",
    description:
      "Capture in-market buyers using real-time purchase-intent signals, so your team talks to people already looking.",
    longDescription:
      "Stop chasing cold leads. We use intent data to identify in-market buyers who are actively searching for solutions like yours, then reach them while the need is live.",
    points: [
      "Real-time analytics: capture intent signals as they happen.",
      "Predictive modelling: focus reps on accounts most likely to convert.",
      "Behavioural insight: understand what prospects are researching.",
    ],
    span: "",
  },
  {
    icon: Share2,
    title: "Content Syndication",
    description:
      "Put your thought leadership in front of the right B2B professionals and turn attention into qualified pipeline.",
    longDescription:
      "Put your whitepapers, case studies and reports in front of the right eyes. We distribute your thought leadership to the right segments to drive high-quality lead generation.",
    points: [
      "CPL-based models: pay for leads that meet your criteria.",
      "Targeted distribution: filter by industry, job title and company size.",
      "Lead nurturing: strategy-driven follow-ups that keep your brand top of mind.",
    ],
    span: "",
  },
  {
    icon: Filter,
    title: "Appointment Setting & Qualification",
    description:
      "We qualify for intent and fit, then book qualified meetings — not tyre-kickers — straight onto your calendar.",
    longDescription:
      "We don’t just deliver names; we deliver opportunities. Our rigorous qualification process ensures every meeting passed to your sales team is primed for a real conversation.",
    points: [
      "MQL to SQL optimisation: bridge the gap between marketing and sales.",
      "Data validation: accuracy and compliance (GDPR / CCPA).",
      "BANT / custom frameworks: qualify on Budget, Authority, Need and Timeline.",
    ],
    span: "lg:col-span-2",
  },
];

export function ServicesOverview() {
  const reduce = useReducedMotion();
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  return (
    <section className="relative bg-background py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            What we do
          </span>
          <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Full-funnel B2B lead generation{" "}
            <span className="text-gradient">services</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From first touch to booked meeting — data-driven demand generation
            that connects your brand with high-intent decision-makers.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.5 }}
              className={cn("h-full", service.span)}
            >
              <Card className="gradient-border group flex h-full flex-col bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary transition-transform duration-300 group-hover:scale-105">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-foreground">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn gap-1.5 p-0 font-semibold text-primary hover:bg-transparent hover:text-primary"
                      onClick={() => setSelectedService(service)}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedService.title}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#121318] shadow-2xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-accent-gradient" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.04] p-2 text-muted-foreground transition-colors hover:bg-white/[0.08] hover:text-foreground"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="px-8 pb-10 pt-12 sm:px-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary">
                    <selectedService.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-syne text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {selectedService.title}
                  </h3>
                </div>

                <div className="mt-8 space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {selectedService.longDescription}
                  </p>
                  <ul className="space-y-4">
                    {selectedService.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="leading-relaxed text-muted-foreground">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button className="w-full sm:w-auto" asChild>
                      <a href="/contact">Talk to our team</a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
