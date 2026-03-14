"use client";

import { motion } from "framer-motion";
import {
  Users,
  Mail,
  Database,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Find and qualify high-intent B2B prospects with AI-powered targeting and verified contact data.",
  },
  {
    icon: Mail,
    title: "Sales Outreach Automation",
    description:
      "Automate cold email and multi-channel sequences so your team focuses on closing, not manual follow-ups.",
  },
  {
    icon: Database,
    title: "CRM Integration",
    description:
      "Sync leads and activities with your CRM. Works with Salesforce, HubSpot, Pipedrive, and more.",
  },
  {
    icon: BarChart3,
    title: "Data Enrichment",
    description:
      "Enrich company and contact profiles with firmographics, technographics, and intent signals.",
  },
];

export function ServicesOverview() {
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
            Services Overview
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to fill your pipeline and close more deals.
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
              <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
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
