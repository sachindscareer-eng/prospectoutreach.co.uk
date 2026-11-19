"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// route the glowing line (and the climbing dot) follow — ends exactly on the summit (250,120)
const CLIMB = "M110 330 C 175 305, 185 260, 228 225 S 250 165, 250 122";

// fixed star positions (deterministic so server and client render the same)
const STARS = [
  { x: 70, y: 40, r: 1.4, d: 0 },
  { x: 140, y: 75, r: 1, d: 0.8 },
  { x: 205, y: 30, r: 1.6, d: 1.6 },
  { x: 320, y: 55, r: 1.2, d: 0.4 },
  { x: 385, y: 25, r: 1.5, d: 1.2 },
  { x: 440, y: 80, r: 1, d: 2 },
  { x: 470, y: 35, r: 1.3, d: 0.6 },
  { x: 290, y: 95, r: 0.9, d: 1.8 },
  { x: 30, y: 110, r: 1.1, d: 2.4 },
];

// replay every time the section scrolls into view (not just the first time)
const REPLAY = { once: false, amount: 0.35 } as const;

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
          {/* ambient glow — slow continuous pulse */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_80%_30%,rgba(124,92,255,0.35),transparent_60%)]"
            animate={reduce ? undefined : { opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            {/* left copy — re-reveals on every scroll-in */}
            <motion.div
              className="px-7 py-14 sm:px-12 sm:py-16"
              initial="hidden"
              whileInView="show"
              viewport={REPLAY}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
              }}
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: reduce ? 0 : 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="font-syne text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
              >
                Your next deal <span className="pr-[0.12em] italic">is</span>{" "}
                <span className="block bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">
                  already out there.
                </span>
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: reduce ? 0 : 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground"
              >
                Let’s find it together. Get a dedicated outreach engine that
                fills your pipeline with qualified meetings.
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: reduce ? 0 : 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button size="lg" className="group h-14 gap-2 px-7 text-base" asChild>
                  <Link href="/contact">
                    Talk to sales
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

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

                {/* twinkling stars — continuous */}
                {STARS.map((s, i) => (
                  <motion.circle
                    key={i}
                    cx={s.x}
                    cy={s.y}
                    r={s.r}
                    fill="#e9ddff"
                    initial={{ opacity: 0.5 }}
                    animate={reduce ? undefined : { opacity: [0.15, 0.9, 0.15] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: s.d, ease: "easeInOut" }}
                  />
                ))}

                {/* back mountain — slow continuous drift (parallax feel) */}
                <motion.path
                  d="M0 340 L150 180 L260 270 L370 150 L500 310 L500 340 Z"
                  fill="url(#peak2)"
                  opacity="0.7"
                  animate={reduce ? undefined : { x: [0, -8, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* front mountain — summit at (250, 120) */}
                <path d="M40 340 L250 120 L360 250 L430 195 L500 270 L500 340 Z" fill="url(#peak)" />

                {/* glowing route — redraws every time the section scrolls into view */}
                <motion.path
                  id="climb-route"
                  d={CLIMB}
                  fill="none"
                  stroke="url(#path)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={REPLAY}
                  transition={{ duration: reduce ? 0 : 1.6, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(124,92,255,0.9))" }}
                />

                {!reduce && (
                  <>
                    {/* energy flowing up the route — continuous moving dashes */}
                    <motion.path
                      d={CLIMB}
                      fill="none"
                      stroke="#ffffff"
                      strokeOpacity="0.55"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="6 26"
                      animate={{ strokeDashoffset: [0, -64] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                    />
                    {/* glowing climber that keeps climbing to the summit */}
                    <circle r="5" fill="#ffffff" style={{ filter: "drop-shadow(0 0 8px rgba(229,82,255,1))" }}>
                      <animateMotion dur="3.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.45 0 0.55 1">
                        <mpath href="#climb-route" />
                      </animateMotion>
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="3.4s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}

                {/* FLAG planted on the summit — re-plants on every scroll-in */}
                <motion.g
                  initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={REPLAY}
                  transition={{ delay: reduce ? 0 : 1.5, type: "spring", stiffness: 200, damping: 12 }}
                  style={{ transformOrigin: "250px 120px", filter: "drop-shadow(0 0 8px rgba(229,82,255,1))" }}
                >
                  <line x1="250" y1="120" x2="250" y2="80" stroke="#f0c0ff" strokeWidth="3" strokeLinecap="round" />
                  <motion.path
                    d="M250 82 L278 90 L250 100 Z"
                    fill="#e552ff"
                    style={{ transformBox: "fill-box", transformOrigin: "left center" }}
                    animate={reduce ? undefined : { skewY: [0, -10, 0, 6, 0], scaleX: [1, 0.92, 1, 0.96, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.g>

                {/* summit glow pulse — continuous */}
                {!reduce && (
                  <motion.circle
                    cx="250"
                    cy="120"
                    r="10"
                    fill="none"
                    stroke="#e552ff"
                    strokeWidth="2"
                    animate={{ r: [8, 26], opacity: [0.8, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.8 }}
                  />
                )}
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
