"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  CalendarCheck,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Cold email & LinkedIn outreach",
  "Qualified appointment setting",
  "Full-funnel demand generation",
];

const floatingBadges = [
  {
    icon: CalendarCheck,
    label: "Meeting booked",
    sub: "Qualified · fits ICP",
    pos: "left-[-8%] top-[14%]",
    delay: 0.6,
  },
  {
    icon: TrendingUp,
    label: "Reply rate ↑",
    sub: "Positive intent detected",
    pos: "right-[-6%] top-[40%]",
    delay: 0.9,
  },
  {
    icon: Users,
    label: "New prospects",
    sub: "ICP-matched decision-makers",
    pos: "left-[-6%] bottom-[10%]",
    delay: 1.2,
  },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // mouse parallax for the visual
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 18,
  });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetMouse = () => {
    mx.set(0);
    my.set(0);
  };

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background pb-20 pt-10 sm:pb-28 sm:pt-14">
      {/* animated gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <motion.div
          aria-hidden
          className="absolute -left-40 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-[#4f7bff]/25 blur-[130px]"
          animate={
            reduce ? undefined : { x: [0, 60, -20, 0], y: [0, -40, 20, 0] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute right-[-15%] top-[5%] h-[34rem] w-[34rem] rounded-full bg-[#e552ff]/20 blur-[130px]"
          animate={
            reduce ? undefined : { x: [0, -50, 30, 0], y: [0, 40, -30, 0] }
          }
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-[-20%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-[#7c5cff]/20 blur-[120px]"
          animate={reduce ? undefined : { x: [0, 40, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* LEFT — copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                B2B lead generation agency · UK · US · Global
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-syne text-[2.6rem] font-bold uppercase leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4.2rem]"
            >
              B2B lead generation
              <span className="mt-1 block bg-gradient-to-r from-[#4f7bff] via-[#7c5cff] to-[#e552ff] bg-clip-text text-transparent">
                that fills your pipeline
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
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
              <Button size="lg" className="group h-14 gap-2 px-8 text-base" asChild>
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
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {h}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT — interactive visual */}
          <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={resetMouse}
            initial={{ opacity: 0, scale: reduce ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg [perspective:1200px] lg:max-w-none"
          >
            <motion.div
              style={reduce ? undefined : { rotateX: rx, rotateY: ry }}
              className="relative [transform-style:preserve-3d]"
            >
              {/* glow frame */}
              <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.25rem] bg-gradient-to-br from-[#4f7bff]/40 via-[#7c5cff]/30 to-[#e552ff]/40 opacity-40 blur-3xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#101119] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
                {/* top browser-ish bar */}
                <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs text-muted-foreground">
                    pipeline.prospectoutreach.co.uk
                  </span>
                </div>
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
                  <source src="/3205679-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/80 via-transparent to-transparent" />
              </div>

              {/* floating badges */}
              {floatingBadges.map((b) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: reduce ? 0 : 14, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: reduce ? 0 : b.delay,
                    ease: "easeOut",
                  }}
                  style={{ transform: "translateZ(60px)" }}
                  className={`absolute ${b.pos} z-10 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#15161f]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white">
                    <b.icon className="h-4.5 w-4.5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-foreground">
                      {b.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{b.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
