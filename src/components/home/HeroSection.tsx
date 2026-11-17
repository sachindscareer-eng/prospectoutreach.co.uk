"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Cold email & LinkedIn outreach",
  "Qualified appointment setting",
  "Full-funnel demand generation",
];

export function HeroSection() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-6 sm:pb-24 sm:pt-10">
      {/* aurora glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#4f7bff]/20 blur-[120px] motion-safe:animate-aurora" />
      <div className="pointer-events-none absolute right-0 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#e552ff]/15 blur-[120px] motion-safe:animate-aurora-2" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#7c5cff]/15 blur-[100px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
                B2B lead generation agency
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-5 font-syne text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              B2B lead generation that fills your pipeline.
              <span className="mt-2 block text-gradient">
                The pipeline won&apos;t fill itself.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              ProspectOutreach is a B2B lead generation and demand generation
              agency. We find your best-fit buyers, reach them with cold email
              and LinkedIn outreach that lands, and book qualified meetings your
              team actually wants to show up to.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                className="group h-14 gap-2 px-8 text-base"
                asChild
              >
                <Link href="/contact">
                  Book qualified meetings
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base"
                asChild
              >
                <Link href="#how-it-works">See how it works</Link>
              </Button>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {h}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Dark video with scrim */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* gradient glow frame */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-accent-gradient opacity-25 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-soft-lg">
              <video
                className="h-auto w-full object-cover"
                width={1920}
                height={1080}
                poster="/hero_section.jpg"
                preload="none"
                autoPlay
                muted
                loop
                playsInline
                aria-label="B2B outreach and lead generation in action"
              >
                <source
                  src="/3205679-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
              </video>
              {/* dark scrim for contrast */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
