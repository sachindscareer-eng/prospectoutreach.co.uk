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
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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

export function ServicesContent() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          End-to-end B2B lead generation, outreach, and pipeline tools.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Card
              id={service.id}
              className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Account-Based Programmes */}
      <section className="mt-20 sm:mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Account-Based Programmes
        </motion.h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Structured programmes to scale pipeline and revenue from your key accounts.
        </p>

        <div className="mt-10 space-y-8 sm:mt-14 md:space-y-12">
          {accountProgrammes.map((programme, i) => (
            <motion.section
              key={programme.id}
              id={programme.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className={i % 2 === 1 ? "bg-muted/40 rounded-2xl" : ""}
            >
              <div className="flex flex-col gap-6 rounded-2xl p-6 sm:gap-8 sm:p-8 md:flex-row md:items-start md:gap-10 lg:p-10">
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
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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
    </div>
  );
}
