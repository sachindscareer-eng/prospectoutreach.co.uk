"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-4 sm:pb-24 sm:pt-6">
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-fuchsia-300/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-cyan-300/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-amber-200/45 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-56 w-56 rounded-full bg-violet-300/35 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 lg:py-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 via-fuchsia-500/10 to-cyan-500/10 px-4 py-2 text-sm font-medium text-foreground shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              B2B lead generation made simple
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]"
            >
              Grow your pipeline with{" "}
              <span className="bg-gradient-to-r from-primary via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
                smart outreach
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              ProspectOutreach helps B2B teams find qualified leads, automate
              sequences, and close more deals—with verified data and workflows
              your reps will actually use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button size="lg" className="group gap-2 shadow-soft-lg" asChild>
                <Link href="/contact">
                  Get started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact?demo=1">Book a demo</Link>
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                AI-powered targeting
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary shadow-sm shadow-primary/40" />
                Verified B2B data
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500 shadow-sm shadow-amber-400/50" />
                Automated workflows
              </li>
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="overflow-hidden rounded-2xl shadow-soft-lg ring-1 ring-black/[0.06] sm:rounded-3xl">
              <Image
                src="/hero_section.jpg"
                alt="B2B teams using ProspectOutreach to grow their pipeline"
                width={1600}
                height={1000}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
