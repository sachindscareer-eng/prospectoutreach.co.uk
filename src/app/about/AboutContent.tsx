"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Database, Zap, Target, ArrowRight } from "lucide-react";
import { useSpotlight } from "@/hooks/use-spotlight";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

const stats = [
  {
    label: "North America",
    numeric: 8,
    suffix: "M+",
    card: "border-violet-500/25 bg-gradient-to-b from-violet-500/[0.09] to-white/95",
    num: "bg-gradient-to-br from-violet-600 to-fuchsia-600 bg-clip-text text-transparent",
  },
  {
    label: "APAC",
    numeric: 6,
    suffix: "M+",
    card: "border-sky-500/25 bg-gradient-to-b from-sky-500/[0.09] to-white/95",
    num: "bg-gradient-to-br from-sky-600 to-primary bg-clip-text text-transparent",
  },
  {
    label: "EMEA",
    numeric: 7,
    suffix: "M+",
    card: "border-emerald-500/25 bg-gradient-to-b from-emerald-500/[0.09] to-white/95",
    num: "bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent",
  },
  {
    label: "Clients & Counting",
    numeric: 45,
    suffix: "+",
    card: "border-fuchsia-500/25 bg-gradient-to-b from-fuchsia-500/[0.09] to-white/95",
    num: "bg-gradient-to-br from-fuchsia-600 to-pink-600 bg-clip-text text-transparent",
  },
  {
    label: "Leads Delivered",
    numeric: 1,
    suffix: "M+",
    card: "border-amber-500/25 bg-gradient-to-b from-amber-500/[0.09] to-white/95",
    num: "bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text text-transparent",
  },
  {
    label: "Global Database",
    numeric: 75,
    suffix: "M+",
    card: "border-cyan-500/25 bg-gradient-to-b from-cyan-500/[0.09] to-white/95",
    num: "bg-gradient-to-br from-cyan-600 to-primary bg-clip-text text-transparent",
  },
] as const;

const approachStyles = [
  "from-violet-500 to-fuchsia-600",
  "from-cyan-500 to-primary",
  "from-emerald-500 to-teal-600",
];

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function AboutStatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);
  const { position, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave } = useSpotlight();

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    let start: number | null = null;
    const target = stat.numeric;
    let raf = 0;

    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(t);
      setCount(Math.round(target * eased));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, stat.numeric]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden flex h-full min-h-[5.25rem] w-full flex-col items-center justify-center rounded-xl border px-2.5 py-3 text-center shadow-soft transition-all duration-300 ease-out hover:shadow-soft-lg sm:min-h-0 sm:px-3 sm:py-3.5",
        stat.card
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(217, 70, 239, 0.08), transparent 40%)`,
        }}
      />
      <p
        className={cn(
          "text-sm font-bold tabular-nums tracking-tight sm:text-base md:text-lg lg:text-xl",
          stat.num
        )}
      >
        {count}
        {stat.suffix}
      </p>
      <p className="mt-1.5 max-w-[11rem] text-[11px] font-medium leading-snug text-muted-foreground sm:mt-2 sm:max-w-none sm:text-xs">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function AboutContent() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full bg-fuchsia-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-[34rem] h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl" />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-fuchsia-500/5 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-gradient-to-r from-primary/15 to-fuchsia-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              About us
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Where data, design, and{" "}
              <span className="bg-gradient-to-r from-primary via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
                revenue converge
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We architect demand for B2B brands by combining intent
              intelligence with creative execution and strong data operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 md:gap-3 lg:grid-cols-6 lg:gap-3">
            {stats.map((stat, i) => (
              <AboutStatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl space-y-6"
          >
            <p className="text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
              Backed by 9 years of deep B2B expertise, ProspectOutreach empowers Marketing and Sales teams to outpace the competition and maximize ROI.
            </p>
            <p className="leading-[1.75] text-muted-foreground">
              ProspectOutreach is a global B2B demand generation partner dedicated to driving sustainable revenue for the world&apos;s leading tech companies and publishers.
            </p>
            <p className="leading-[1.75] text-muted-foreground">
              We believe that successful outreach happens at the intersection of data and human connection. By utilizing our proprietary technology and a vast network of 75 million global professionals, we deliver omnichannel marketing solutions including ABM and intent-based syndication that put you in front of the right decision-makers at the right time.
            </p>
            <p className="leading-[1.75] text-muted-foreground">
              At our core, we are more than a service provider we are a growth engine designed to turn your target audience into your most valuable long-term partners.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-muted/40 to-background py-16 sm:py-24">
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
                <Card className="h-full border-border/80 bg-card/95 transition-shadow hover:shadow-soft-lg">
                  <CardHeader>
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md",
                        approachStyles[i % approachStyles.length]
                      )}
                    >
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

      <section className="container mx-auto px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-border/80 bg-white p-8 text-center shadow-soft sm:p-12"
        >
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
            Ready to partner?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Let&apos;s turn intent into outcomes with programs built for
            performance, scale, and speed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/contact">
                Talk to an expert
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore services</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
