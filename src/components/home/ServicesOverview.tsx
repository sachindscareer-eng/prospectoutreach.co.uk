"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      "Target your highest-value accounts with surgical precision. We combine audience intelligence with personalized outreach.",
    longDescription:
      "Target your highest-value accounts with surgical precision. We combine deep audience intelligence with personalized outreach to engage key decision-makers within your target organizations.",
    points: [
      "Precision Targeting: Identify and reach specific stakeholders.",
      "Multi-Channel Engagement: Unified messaging across email, social, and display.",
      "Scalable Personalization: Tailored content for every stage of the buyer’s journey.",
    ],
    accent: "from-violet-500 to-fuchsia-600",
    soft: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
    ring: "hover:ring-violet-500/20",
    hoverBg: "hover:bg-violet-500/[0.09]",
  },
  {
    icon: Share2,
    title: "Global Content Syndication",
    description:
      "Amplify your thought leadership across a network of 75M+ professionals in 170+ countries to drive high-quality leads.",
    longDescription:
      "Put your whitepapers, case studies, and reports in front of the right eyes. We leverage our network of 150M+ professionals across 170+ countries to ensure your thought leadership drives high-quality lead generation.",
    points: [
      "CPL-Based Models: Pay only for leads that meet your criteria.",
      "Targeted Distribution: Filter by industry, job title, and company size.",
      "Lead Nurturing: Strategy-driven follow-ups to keep your brand top-of-mind.",
    ],
    accent: "from-sky-500 to-primary",
    soft: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
    ring: "hover:ring-sky-500/20",
    hoverBg: "hover:bg-sky-500/[0.09]",
  },
  {
    icon: Search,
    title: "Intent-Based Demand Gen",
    description:
      "Identify and capture 'in-market' buyers using proprietary technology that tracks real-time purchase signals.",
    longDescription:
      "Stop chasing cold leads. We use proprietary data technology to identify 'in-market' buyers who are actively searching for solutions like yours.",
    points: [
      "Real-Time Analytics: Capture intent signals as they happen.",
      "Predictive Modeling: Focus your sales team on accounts most likely to convert.",
      "Behavioral Insights: Understand what your prospects are reading and researching.",
    ],
    accent: "from-emerald-500 to-teal-600",
    soft: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    ring: "hover:ring-emerald-500/20",
    hoverBg: "hover:bg-emerald-500/[0.09]",
  },
  {
    icon: Filter,
    title: "Full-Funnel Lead Qualification",
    description:
      "Bridge the gap between marketing and sales with rigorous, data-validated lead qualifying that fuels your engine.",
    longDescription:
      "We don’t just deliver names; we deliver opportunities. Our rigorous qualification process ensures that every lead passed to your sales team is primed for a conversation.",
    points: [
      "MQL to SQL Optimization: Bridging the gap between marketing and sales.",
      "Data Validation: Ensuring 100% accuracy and compliance (GDPR/CCPA).",
      "BANT/Custom Frameworks: Qualifying leads based on Budget, Authority, Need, and Timeline.",
    ],
    accent: "from-amber-500 to-orange-600",
    soft: "bg-amber-500/10 text-amber-800 dark:text-amber-200",
    ring: "hover:ring-amber-500/20",
    hoverBg: "hover:bg-amber-500/[0.09]",
  },
];

export function ServicesOverview() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Maximize your{" "}
            <span className="bg-gradient-to-r from-primary via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
              pipeline growth
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Maximize your pipeline with data-driven strategies designed to
            connect your brand with high-intent decision-makers. From initial
            engagement to final conversion, we provide the precision needed to
            scale your growth.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
            >
              <Card
                className={cn(
                  "group flex h-full flex-col overflow-hidden border-border/80 bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-soft-lg hover:ring-2",
                  service.hoverBg,
                  service.ring
                )}
              >
                <CardHeader className="space-y-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-105",
                      service.accent
                    )}
                  >
                    <service.icon className="h-7 w-7" />
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
                      className="group/btn gap-1.5 p-0 font-semibold text-primary hover:bg-transparent"
                      onClick={() => setSelectedService(service)}
                    >
                      Learn More
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl"
            >
              <div
                className={cn(
                  "absolute inset-x-0 top-0 h-2 bg-gradient-to-r",
                  selectedService.accent
                )}
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-6 top-6 rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="px-8 pb-10 pt-12 sm:px-12 sm:pb-12 sm:pt-14">
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg",
                      selectedService.accent
                    )}
                  >
                    <selectedService.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {selectedService.title}
                  </h3>
                </div>

                <div className="mt-8 space-y-6">
                  <p className="text-lg leading-relaxed text-slate-600">
                    {selectedService.longDescription}
                  </p>

                  <ul className="space-y-4 pt-2">
                    {selectedService.points.map((point) => (
                      <li key={point} className="flex items-start gap-4">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <span className="text-slate-600 leading-relaxed font-medium">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto"
                      onClick={() => setSelectedService(null)}
                    >
                      Close Details
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


