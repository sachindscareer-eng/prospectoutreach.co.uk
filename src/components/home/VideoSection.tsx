"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Mail,
  CalendarCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const points = [
  {
    icon: Mail,
    title: "Reach best-fit buyers",
    text: "Cold email & LinkedIn outreach that actually lands.",
  },
  {
    icon: CalendarCheck,
    title: "Predictable meetings",
    text: "Generate qualified meetings, consistently, every month.",
  },
  {
    icon: TrendingUp,
    title: "Real revenue growth",
    text: "Build a pipeline that drives real revenue, not vanity metrics.",
  },
];

export function VideoSection() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { amount: 0.3 });

  // autoplay (muted, looping) while the video is on screen; pause when scrolled away
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    v.muted = true; // must be set on the element for browsers to allow autoplay
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView, reduce]);

  return (
    <section className="relative overflow-hidden bg-[#08060f] py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c5cff]/12 blur-[130px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left text */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              How it works
            </span>

            <h2 className="mt-5 font-syne text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              See how ProspectOutreach{" "}
              <span className="bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">
                builds pipeline.
              </span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              A proven, full-funnel outbound engine that helps B2B companies
              find, engage, and convert the right buyers into qualified sales
              meetings.
            </p>

            {/* checklist as cards */}
            <div className="mt-8 space-y-3">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  data-spotlight
                  initial={{ opacity: 0, x: reduce ? 0 : -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "150px" }}
                  transition={{ delay: reduce ? 0 : i * 0.1, duration: 0.45 }}
                  className="group flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#7c5cff]/40 hover:bg-white/[0.04]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{p.title}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* right video */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* glow */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#4f7bff]/40 via-[#7c5cff]/35 to-[#e552ff]/35 opacity-50 blur-3xl" />

            <div className="group relative overflow-hidden rounded-2xl border border-white/12 bg-[#0d0b18] shadow-[0_30px_80px_-20px_rgba(124,92,255,0.6)]">
              <video
                ref={videoRef}
                className="aspect-video h-auto w-full object-cover"
                width={1920}
                height={1080}
                poster="/hero_section.jpg"
                preload="none"
                muted
                loop
                playsInline
                // reduced-motion users get normal controls and choose to play it themselves
                controls={!!reduce}
                aria-label="How ProspectOutreach builds pipeline"
              >
                <source src="/3205679-hd_1920_1080_25fps.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0b18]/50 via-transparent to-transparent" />
            </div>

            {/* floating stat badges */}
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#15121f]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#34d399] to-[#4f7bff] text-white">
                <CalendarCheck className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-foreground">126 meetings</p>
                <p className="text-[11px] text-muted-foreground">booked this month</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-4 -top-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#15121f]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-foreground">+41% replies</p>
                <p className="text-[11px] text-muted-foreground">vs. last quarter</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
