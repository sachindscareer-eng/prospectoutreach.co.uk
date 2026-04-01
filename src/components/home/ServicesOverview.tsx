"use client";

import { motion } from "framer-motion";
import { Users, Mail, Database, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Find and qualify high-intent B2B prospects with AI-powered targeting and verified contact data.",
    accent: "from-violet-500 to-fuchsia-600",
    soft: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
    ring: "hover:ring-violet-500/20",
    hoverBg: "hover:bg-violet-500/[0.09]",
  },
  {
    icon: Mail,
    title: "Sales Outreach Automation",
    description:
      "Automate cold email and multi-channel sequences so your team focuses on closing, not manual follow-ups.",
    accent: "from-sky-500 to-primary",
    soft: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
    ring: "hover:ring-sky-500/20",
    hoverBg: "hover:bg-sky-500/[0.09]",
  },
  {
    icon: Database,
    title: "CRM Integration",
    description:
      "Sync leads and activities with your CRM. Works with Salesforce, HubSpot, Pipedrive, and more.",
    accent: "from-emerald-500 to-teal-600",
    soft: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    ring: "hover:ring-emerald-500/20",
    hoverBg: "hover:bg-emerald-500/[0.09]",
  },
  {
    icon: BarChart3,
    title: "Data Enrichment",
    description:
      "Enrich company and contact profiles with firmographics, technographics, and intent signals.",
    accent: "from-amber-500 to-orange-600",
    soft: "bg-amber-500/10 text-amber-800 dark:text-amber-200",
    ring: "hover:ring-amber-500/20",
    hoverBg: "hover:bg-amber-500/[0.09]",
  },
];

export function ServicesOverview() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
              fill your pipeline
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Modern outreach tools and data—presented in one simple stack.
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
                  "group h-full overflow-hidden border-border/80 bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-soft-lg hover:ring-2",
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
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <p
                    className={cn(
                      "mt-4 inline-flex rounded-full px-3 py-1 text-xs font-medium",
                      service.soft
                    )}
                  >
                    Popular with sales teams
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
