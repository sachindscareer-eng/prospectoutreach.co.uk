"use client";

import { motion } from "framer-motion";
import {
  Users,
  Mail,
  Linkedin,
  Database,
  BarChart3,
  GitBranch,
  TrendingUp,
  Target,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const accountProgrammes = [
  {
    id: "abm-growth",
    number: "01",
    title: "Account-Based Growth Programmes",
    description:
      "Structured programmes to grow revenue from your most valuable accounts. We align marketing and sales around target accounts, run multi-touch campaigns, and measure pipeline and revenue impact.",
    points: [
      "Target account selection and prioritisation",
      "Multi-channel engagement campaigns",
      "Pipeline and revenue attribution",
    ],
    icon: TrendingUp,
  },
  {
    id: "abm-lead",
    number: "02",
    title: "Account-Based Lead Programmes",
    description:
      "Dedicated lead programmes focused on filling the top of your funnel with qualified contacts from key accounts. Ideal for entering new markets or expanding within existing segments.",
    points: [
      "Account-level lead scoring and routing",
      "Intent-based and demographic targeting",
      "Handoff to sales with full context",
    ],
    icon: Target,
  },
  {
    id: "abm-services",
    number: "03",
    title: "Account-Based Services",
    description:
      "End-to-end services to design, run, and optimise your account-based motion. From strategy and playbooks to execution and CRM integration—we support the full lifecycle.",
    points: [
      "ABM strategy and playbook design",
      "Campaign execution and optimisation",
      "CRM integration and reporting",
    ],
    icon: Headphones,
  },
];

const services = [
  {
    id: "lead-gen",
    icon: Users,
    title: "B2B Lead Generation",
    description:
      "Build targeted lists of decision-makers and buying committees with AI-driven intent and fit scoring. Access verified contact and company data.",
  },
  {
    id: "cold-email",
    icon: Mail,
    title: "Cold Email Outreach",
    description:
      "Run personalized cold email campaigns at scale. A/B test subject lines and copy, track opens and replies, and automate follow-ups.",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    title: "LinkedIn Outreach",
    description:
      "Automate connection requests and InMail sequences. Stay compliant with platform limits while scaling your presence.",
  },
  {
    id: "crm",
    icon: Database,
    title: "CRM Setup & Integration",
    description:
      "Connect ProspectOutreach to Salesforce, HubSpot, Pipedrive, or your CRM. Sync leads, activities, and deal stages in real time.",
  },
  {
    id: "data",
    icon: BarChart3,
    title: "Data Enrichment",
    description:
      "Enrich leads with firmographics, technographics, and intent signals. Keep your database accurate and actionable.",
  },
  {
    id: "pipeline",
    icon: GitBranch,
    title: "Sales Pipeline Automation",
    description:
      "Automate lead routing, scoring, and follow-up sequences. Move prospects through your pipeline with less manual work.",
  },
];

const serviceStyles = [
  {
    glow: "from-violet-500 to-fuchsia-600",
    soft: "bg-violet-500/10 text-violet-700",
  },
  {
    glow: "from-cyan-500 to-primary",
    soft: "bg-cyan-500/10 text-cyan-700",
  },
  {
    glow: "from-fuchsia-500 to-pink-600",
    soft: "bg-fuchsia-500/10 text-fuchsia-700",
  },
  {
    glow: "from-emerald-500 to-teal-600",
    soft: "bg-emerald-500/10 text-emerald-700",
  },
  {
    glow: "from-amber-500 to-orange-600",
    soft: "bg-amber-500/10 text-amber-800",
  },
  {
    glow: "from-indigo-500 to-violet-600",
    soft: "bg-indigo-500/10 text-indigo-700",
  },
];

export function ServicesContent() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-96 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />

      <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-gradient-to-r from-primary/15 to-fuchsia-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            What we do
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            End-to-end services for{" "}
            <span className="bg-gradient-to-r from-primary via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
              pipeline growth
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            From first-party data to ABM execution, we help B2B teams generate
            consistent demand and better conversion outcomes.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const style = serviceStyles[i % serviceStyles.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06 }}
              >
                <Card
                  id={service.id}
                  className="group h-full border-border/80 bg-card/95 hover:-translate-y-1 hover:shadow-soft-lg"
                >
                  <CardHeader>
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md",
                        style.glow
                      )}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-semibold">{service.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                    <p
                      className={cn(
                        "mt-4 inline-flex rounded-full px-3 py-1 text-xs font-medium",
                        style.soft
                      )}
                    >
                      Performance focused
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Account-Based Programmes
        </motion.h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Structured programmes to scale pipeline and revenue across your key
          accounts.
        </p>

        <div className="mt-10 space-y-6 sm:mt-14 md:space-y-8">
          {accountProgrammes.map((programme, i) => (
            <motion.section
              key={programme.id}
              id={programme.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-border/80 bg-gradient-to-r from-white via-white to-primary/5"
            >
              <div className="flex flex-col gap-6 rounded-3xl p-6 sm:gap-8 sm:p-8 md:flex-row md:items-start md:gap-10 lg:p-10">
                <div className="flex shrink-0 flex-col sm:flex-row md:flex-col md:gap-4">
                  <span className="text-4xl font-bold tabular-nums text-primary/20 sm:text-5xl">
                    {programme.number}
                  </span>
                  <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mt-0 md:mt-2">
                    <programme.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                    {programme.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground sm:mt-4">
                    {programme.description}
                  </p>
                  <ul className="mt-4 space-y-2 sm:mt-6">
                    {programme.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 pt-6 sm:px-6 sm:pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-primary px-6 py-14 text-center shadow-2xl shadow-fuchsia-500/20 sm:px-12"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/15 blur-2xl" />
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Want a custom growth plan for your market?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Talk with our team to map your ICP, channels, and conversion goals.
          </p>
          <div className="mt-8">
            <Button size="lg" className="border-0 bg-white text-primary hover:bg-white/95" asChild>
              <Link href="/contact">
                Talk to an expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
