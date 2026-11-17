"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play, Check } from "lucide-react";

const points = [
  "Reach best-fit buyers with cold email & LinkedIn outreach",
  "Generate predictable, qualified meetings",
  "Build a pipeline that drives real revenue growth",
];

export function VideoSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c5cff]/10 blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* left text */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-syne text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              See how ProspectOutreach{" "}
              <span className="bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">
                builds pipeline.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              A proven, full-funnel outbound engine that helps B2B companies
              find, engage, and convert the right buyers into qualified sales
              meetings.
            </p>
            <ul className="mt-7 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-gradient text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-base">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* right video */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[1.75rem] bg-gradient-to-br from-[#7c5cff]/40 to-[#e552ff]/30 opacity-40 blur-2xl" />
            <div className="group relative overflow-hidden rounded-2xl border border-white/12 bg-[#0d0b18] shadow-soft-lg">
              <video
                className="aspect-video h-auto w-full object-cover"
                width={1920}
                height={1080}
                poster="/hero_section.jpg"
                preload="none"
                controls
                playsInline
                aria-label="How ProspectOutreach builds pipeline"
              >
                <source src="/3205679-hd_1920_1080_25fps.mp4" type="video/mp4" />
              </video>
              {/* play overlay (decorative) */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
