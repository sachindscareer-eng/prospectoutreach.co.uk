"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-background pb-20 pt-4 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="relative overflow-hidden rounded-[1.75rem] border border-[#7c5cff]/25 bg-[#0c0a16]"
        >
          {/* ambient glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_80%_30%,rgba(124,92,255,0.35),transparent_60%)]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            {/* left copy */}
            <div className="px-7 py-14 sm:px-12 sm:py-16">
              <h2 className="font-syne text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Your next deal{" "}
                <span className="italic">is</span>{" "}
                <span className="block bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">
                  already out there.
                </span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Let’s find it together. Get a dedicated outreach engine that
                fills your pipeline with qualified meetings.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="group h-14 gap-2 px-7 text-base" asChild>
                  <Link href="/contact">
                    Talk to sales
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* right mountain visual */}
            <div className="relative h-56 w-full overflow-hidden lg:h-full lg:min-h-[22rem]">
              <svg
                viewBox="0 0 500 340"
                preserveAspectRatio="xMidYMid slice"
                className="absolute inset-0 h-full w-full"
                aria-hidden
              >
                <defs>
                  <linearGradient id="peak" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4b3b8f" />
                    <stop offset="100%" stopColor="#15102b" />
                  </linearGradient>
                  <linearGradient id="peak2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6d5bb5" />
                    <stop offset="100%" stopColor="#1b1436" />
                  </linearGradient>
                  <linearGradient id="path" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7c5cff" />
                    <stop offset="100%" stopColor="#e552ff" />
                  </linearGradient>
                </defs>
                {/* back mountain */}
                <path d="M0 340 L150 180 L260 270 L370 150 L500 310 L500 340 Z" fill="url(#peak2)" opacity="0.7" />
                {/* front mountain — summit lowered to (250, 120) so the flag above it stays visible */}
                <path d="M40 340 L250 120 L360 250 L430 195 L500 270 L500 340 Z" fill="url(#peak)" />
                {/* glowing summit path ending exactly at the peak (250,120) */}
                <motion.path
                  d="M110 330 C 175 305, 185 260, 228 225 S 250 165, 250 122"
                  fill="none"
                  stroke="url(#path)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduce ? 0 : 1.6, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(124,92,255,0.9))" }}
                />

                {/* FLAG planted exactly on the summit (250, 120) */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduce ? 0 : 1.7, type: "spring", stiffness: 200, damping: 12 }}
                  style={{ transformOrigin: "250px 120px", filter: "drop-shadow(0 0 8px rgba(229,82,255,1))" }}
                >
                  {/* pole: from summit up */}
                  <line x1="250" y1="120" x2="250" y2="80" stroke="#f0c0ff" strokeWidth="3" strokeLinecap="round" />
                  {/* waving flag triangle */}
                  <motion.path
                    d="M250 82 L278 90 L250 100 Z"
                    fill="#e552ff"
                    // wave via transform (morphing `d` produced an "attribute d: undefined" console error)
                    style={{ transformBox: "fill-box", transformOrigin: "left center" }}
                    animate={reduce ? undefined : { skewY: [0, -10, 0, 6, 0], scaleX: [1, 0.92, 1, 0.96, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.g>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
