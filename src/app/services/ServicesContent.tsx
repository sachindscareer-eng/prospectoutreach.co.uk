"use client";

import { motion } from "framer-motion";
import {
  Search,
  Share2,
  Filter,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  Calendar,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSpotlight } from "@/hooks/use-spotlight";

const coreServices = [
  {
    id: "abm",
    icon: Target,
    title: "Account-Based Marketing (ABM)",
    description:
      "Target your highest-value accounts with surgical precision. We combine audience intelligence with personalized outreach to engage key decision-makers.",
    points: [
      "Precision Targeting: Reach specific stakeholders.",
      "Multi-Channel Engagement: Unified messaging across email and social.",
      "Scalable Personalization: Tailored content for every stage.",
    ],
    glow: "from-violet-500 to-fuchsia-600",
  },
  {
    id: "syndication",
    icon: Share2,
    title: "Global Content Syndication",
    description:
      "Amplify your thought leadership across a network of 75M+ professionals in 170+ countries to ensure your content drives high-quality lead generation.",
    points: [
      "CPL-Based Models: Pay only for qualified leads.",
      "Targeted Distribution: Filter by industry, title, and size.",
      "Lead Nurturing: Strategy-driven follow-ups.",
    ],
    glow: "from-sky-500 to-primary",
  },
  {
    id: "intent",
    icon: Search,
    title: "Intent-Based Demand Generation",
    description:
      "Stop chasing cold leads. We use proprietary technology to identify 'in-market' buyers who are actively searching for solutions like yours.",
    points: [
      "Real-Time Analytics: Capture intent signals as they happen.",
      "Predictive Modeling: Focus on accounts likely to convert.",
      "Behavioral Insights: Understand what prospects research.",
    ],
    glow: "from-emerald-500 to-teal-600",
  },
  {
    id: "qualification",
    icon: Filter,
    title: "Full-Funnel Lead Qualification",
    description:
      "We don't just deliver names; we deliver opportunities. Our rigorous process ensures every lead is primed for a conversation.",
    points: [
      "MQL to SQL Optimization: Bridging the gap.",
      "Data Validation: 100% accuracy and compliance.",
      "BANT/Custom Frameworks: Qualifying by Budget and Need.",
    ],
    glow: "from-amber-500 to-orange-600",
  },
  {
    id: "web-solutions",
    icon: Zap,
    title: "Web & Software Solutions",
    description:
      "Custom-built, scalable web applications and software systems designed to solve complex business challenges and drive digital transformation.",
    points: [
      "Custom Web App Development: Built for performance.",
      "UI/UX & Interactive Dashboards: Data-driven design.",
      "Cloud & Infrastructure: Secure and scalable deployment.",
    ],
    glow: "from-emerald-500 to-teal-600",
    link: "/web-solutions",
  },
];

const detailedGroups = [
  {
    title: "Strategic Lead Generation",
    description: "Secure opportunities that meet rigorous standards and accelerate your deal flow.",
    items: [
      {
        title: "BANT Qualified Leads",
        description: "Filter the noise so your team focuses only on prospects with the highest propensity to buy.",
      },
      {
        title: "Sales Qualified Leads (SQLs)",
        description: "Pre-vetted prospects primed for direct sales conversations, ensuring time is spent closing.",
      },
      {
        title: "Marketing Qualified Leads (MQLs)",
        description: "Identify prospects who have demonstrated genuine interest through active engagement.",
      },
    ],
    icon: TrendingUp,
    color: "primary",
  },
  {
    title: "Engagement & Appointment Setting",
    description: "Bridge the gap between digital interest and human connection.",
    items: [
      {
        title: "Appointment Generation",
        description: "Securing high-value meetings with qualified stakeholders to help you build rapport.",
      },
      {
        title: "Confirmed Callback Leads",
        description: "Verified outreach with confirmed windows, connecting you when prospects are most receptive.",
      },
      {
        title: "Event Registrations",
        description: "Fill your seats with high-caliber audiences for webinars, seminars, and corporate events.",
      },
    ],
    icon: Calendar,
    color: "fuchsia-600",
  },
  {
    title: "Precision Marketing Solutions",
    description: "Focus your resources where they matter most with institutional growth strategies.",
    items: [
      {
        title: "Account-Based Marketing (ABM)",
        description: "Hyper-targeted campaigns aimed at specific high-value organizations for संस्थागत विकास.",
      },
      {
        title: "Content Syndication",
        description: "Establish authority by distributing insights across premium professional platforms.",
      },
      {
        title: "Performance Email Marketing",
        description: "Tailored strategies engineered to foster meaningful engagement and conversion rates.",
      },
    ],
    icon: Zap,
    color: "cyan-600",
  },
];

export function ServicesContent() {
  const { position, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave } = useSpotlight();

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
            Our Core Services
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Precision strategies for{" "}
            <span className="bg-gradient-to-r from-primary via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
              predictable revenue
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Maximize your pipeline with data-driven strategies designed to connect your brand with high-intent decision-makers.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {coreServices.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="group h-full border-border/80 bg-card/95 hover:-translate-y-1 hover:shadow-soft-lg transition-all">
                <CardHeader>
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md",
                      service.glow
                    )}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold mt-4">{service.title}</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <div className="mt-8 pt-6 border-t border-border/50">
                      <Button variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5 group/btn" asChild>
                        <Link href={service.link}>
                          Explore Web Solutions
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 border-t border-slate-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-foreground"
        >
          Detailed Service Overview
        </motion.h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Comprehensive solutions across the entire marketing and sales funnel.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {detailedGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-lg bg-slate-50", `text-${group.color}`)}>
                  <group.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl">{group.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{group.description}</p>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <Card key={item.title} className="p-4 border-slate-100 bg-white shadow-sm hover:border-primary/20 transition-all duration-300">
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 pt-6 sm:px-6 sm:pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-primary px-6 py-14 text-center shadow-2xl shadow-fuchsia-500/20 sm:px-12"
        >
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(1000px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.15), transparent 40%)`,
            }}
          />
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
