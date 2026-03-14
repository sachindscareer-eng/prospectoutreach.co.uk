"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
      {/* Animated gradient mesh - CSS animation */}
      <div
        className="absolute inset-0 animate-hero-gradient pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.2), transparent 60%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(37, 99, 235, 0.12), transparent 55%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(37, 99, 235, 0.12), transparent 55%)",
        }}
      />
      {/* Subtle grid - B2B feel */}
      <div
        className="absolute inset-0 animate-hero-grid pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37, 99, 235, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Floating orbs - CSS animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-hero-orb-1"
          aria-hidden
        />
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-hero-orb-2"
          aria-hidden
        />
        <div
          className="absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-hero-orb-center"
          style={{ transform: "translate(-50%, -50%)" }}
          aria-hidden
        />
      </div>

      <div className="container relative mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
          >
            <Sparkles className="h-4 w-4" />
            B2B lead generation made simple
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Grow Your B2B Pipeline with{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Smart Outreach
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            ProspectOutreach helps B2B companies generate qualified leads,
            automate outreach, and close more deals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="group gap-2" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact?demo=1">Book Demo</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <div className="rounded-2xl border border-border/60 bg-card/80 p-8 shadow-soft backdrop-blur sm:p-10">
              <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm">AI-powered targeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">Verified B2B data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-sm">Automated workflows</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
