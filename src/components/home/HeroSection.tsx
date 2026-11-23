"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  LayoutDashboard,
  Megaphone,
  Users,
  GitBranch,
  LineChart,
  FileText,
  Settings,
  TrendingUp,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp, Magnetic, useFinePointer } from "@/components/interactive";

const stats = [
  { label: "Prospects", value: "12,480", delta: "+28%", icon: Users },
  { label: "Engaged", value: "2,964", delta: "+41%", icon: TrendingUp },
  { label: "Qualified", value: "628", delta: "+36%", icon: CalendarCheck },
  { label: "Meetings", value: "126", delta: "+52%", icon: CalendarCheck },
];

const pipeline = [
  { label: "Prospects", value: "12,480" },
  { label: "Engaged", value: "2,964" },
  { label: "Qualified", value: "628" },
  { label: "Meetings", value: "126", active: true },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Megaphone, label: "Campaigns" },
  { icon: Users, label: "Prospects" },
  { icon: GitBranch, label: "Pipeline" },
  { icon: LineChart, label: "Analytics" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const leads = [
  { name: "Alex Mercer", role: "VP Demand Gen" },
  { name: "Taylor Reed", role: "Head of Growth" },
  { name: "Jordan Kim", role: "RevOps Director" },
];

const bars = [20, 28, 24, 38, 34, 48, 44, 60, 72, 68, 86, 100];

export function HeroSection() {
  const reduce = useReducedMotion();
  const fine = useFinePointer();

  // 3D tilt of the dashboard following the cursor
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 18 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });

  // cycling "meeting booked" notification on the dashboard
  const [toast, setToast] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setToast((t) => (t + 1) % leads.length), 3600);
    return () => clearInterval(id);
  }, [reduce]);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative flex min-h-[calc(100vh-2rem)] items-center overflow-hidden bg-[#070510] pb-20 pt-36 sm:pb-28 sm:pt-44">
      {/* ambient glow — strong purple like reference */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-25" />
      <div className="pointer-events-none absolute right-[8%] top-[6%] -z-10 h-[40rem] w-[46rem] rounded-full bg-[#7c3aed]/35 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-5%] top-[30%] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#9333ea]/25 blur-[140px]" />
      <div className="pointer-events-none absolute left-[-8%] top-[40%] -z-10 h-[26rem] w-[26rem] rounded-full bg-[#4f7bff]/14 blur-[140px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* LEFT copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-flex items-center rounded-full border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground sm:text-xs"
            >
              B2B Demand Generation &amp; Sales Outreach
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-syne text-[2.75rem] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]"
            >
              Turn the Right B2B Prospects into{" "}
              {/* pr: italic glyphs overhang the box; padding extends the clipped gradient so the last letter isn't cut */}
              <span className="relative inline-block bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text pr-[0.18em] italic text-transparent">
                Real Opportunities
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 7 C 80 2, 220 2, 298 7"
                    stroke="url(#ug)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="ug" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8b6fff" />
                      <stop offset="100%" stopColor="#e552ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              ProspectOutreach is a B2B demand generation and sales outreach
              agency. We target the
              right accounts, engage decision-makers with cold email and
              LinkedIn outreach, and turn conversations into qualified meetings
              for your sales team.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <Button size="lg" className="group h-14 gap-2 px-7 text-base" asChild>
                  <Link href="/contact">
                    Book a Strategy Call
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline" className="h-14 px-7 text-base" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </Magnetic>
            </motion.div>

            {/* social proof */}
            <motion.div variants={item} className="mt-9 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["#7c5cff", "#4f7bff", "#e552ff"].map((c, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ y: -4, scale: 1.1, zIndex: 10 }}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-background text-xs font-bold text-white transition-shadow hover:shadow-[0_0_12px_rgba(124,92,255,0.6)]"
                    style={{ background: `linear-gradient(135deg, ${c}, #0d0b18)` }}
                  >
                    <Users className="h-4 w-4" />
                  </motion.span>
                ))}
              </div>
              <span className="h-8 w-px bg-white/15" />
              <p className="max-w-[16rem] text-sm leading-snug text-muted-foreground">
                Trusted by B2B teams to build a{" "}
                <span className="font-semibold text-foreground">
                  stronger, more predictable pipeline.
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative [perspective:1400px]"
            onPointerMove={(e) => {
              if (!fine) return;
              const r = e.currentTarget.getBoundingClientRect();
              mx.set((e.clientX - r.left) / r.width - 0.5);
              my.set((e.clientY - r.top) / r.height - 0.5);
            }}
            onPointerLeave={() => {
              mx.set(0);
              my.set(0);
            }}
          >
            {/* neon edge glows like reference */}
            <div className="pointer-events-none absolute -left-10 -top-10 -z-10 h-48 w-48 rounded-full bg-[#4f7bff]/60 blur-[70px]" />
            <div className="pointer-events-none absolute -bottom-12 -right-6 -z-10 h-56 w-56 rounded-full bg-[#9333ea]/60 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-10 left-1/4 -z-10 h-40 w-64 rounded-full bg-[#7c3aed]/50 blur-[80px]" />
            <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.25rem] bg-gradient-to-br from-[#4f7bff]/40 via-[#8b3dff]/45 to-[#e552ff]/35 opacity-80 blur-3xl" />

            <motion.div
              style={fine ? { rotateX: rotX, rotateY: rotY } : undefined}
              className="relative overflow-hidden rounded-2xl border border-[#8b5cf6]/50 bg-[#0d0b18] shadow-[0_0_0_1px_rgba(139,92,246,0.35),0_0_40px_-5px_rgba(124,92,255,0.6),0_30px_90px_-20px_rgba(124,92,255,0.8)]"
            >
              <div className="flex">
                {/* sidebar */}
                <aside className="hidden w-44 shrink-0 flex-col gap-1.5 border-r border-white/[0.06] bg-white/[0.015] p-4 sm:flex">
                  <div className="mb-4 flex items-center gap-2 px-2 py-1">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-gradient text-[11px] font-bold text-white">P</span>
                    <span className="text-sm font-bold text-foreground">ProspectOutreach</span>
                  </div>
                  {navItems.map((n) => (
                    <div
                      key={n.label}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs font-medium ${
                        n.active ? "bg-white/[0.06] text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <n.icon className="h-3.5 w-3.5" />
                      {n.label}
                    </div>
                  ))}
                </aside>

                {/* main panel */}
                <div className="min-w-0 flex-1 p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-foreground">Pipeline Overview</h3>
                    <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-muted-foreground">
                      Last 30 Days ▾
                    </span>
                  </div>

                  {/* stat cards */}
                  <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                    {stats.map((s, idx) => (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.08 }}
                        whileHover={{ y: -3, scale: 1.03 }}
                        className={`cursor-default rounded-xl border p-3 transition-colors ${
                          idx === 3
                            ? "border-[#7c5cff]/50 bg-[#7c5cff]/15 hover:bg-[#7c5cff]/25"
                            : "border-white/[0.08] bg-white/[0.03] hover:border-[#7c5cff]/40 hover:bg-white/[0.06]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9.5px] text-muted-foreground">{s.label}</span>
                          <s.icon className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <p className="mt-1.5 text-lg font-bold leading-none text-foreground"><CountUp value={s.value} /></p>
                        <p className="mt-1 text-[9px] font-medium text-emerald-400">↑ {s.delta}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* sales pipeline row */}
                  <div className="mt-5 flex items-center gap-2 text-[11px]">
                    <span className="font-semibold text-foreground">Sales Pipeline</span>
                    <span className="text-muted-foreground">$3.4M Potential</span>
                  </div>
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    {pipeline.map((p) => (
                      <div
                        key={p.label}
                        className={`rounded-lg border px-2 py-2.5 text-center ${
                          p.active
                            ? "border-transparent bg-accent-gradient text-white"
                            : "border-white/[0.06] bg-white/[0.02]"
                        }`}
                      >
                        <p className={`text-[9.5px] ${p.active ? "text-white/80" : "text-muted-foreground"}`}>{p.label}</p>
                        <p className={`text-xs font-bold ${p.active ? "text-white" : "text-foreground"}`}>{p.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* bottom row: chart + leads */}
                  <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                      <p className="mb-3 text-[11px] font-semibold text-foreground">Outreach Activity</p>
                      <div className="group/chart flex h-24 items-end gap-1">
                        {bars.map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 0.6 + i * 0.03, duration: 0.4 }}
                            whileHover={{ scaleY: 1.08 }}
                            className="flex-1 origin-bottom cursor-pointer rounded-sm bg-gradient-to-t from-[#7c5cff] to-[#c084fc] transition-opacity hover:from-[#9f7bff] hover:to-[#e552ff] group-hover/chart:opacity-60 hover:!opacity-100"
                          />
                        ))}
                      </div>
                      <div className="mt-2 flex justify-between text-[8px] text-muted-foreground/70">
                        <span>Apr 1</span>
                        <span>Apr 8</span>
                        <span>Apr 15</span>
                        <span>Apr 22</span>
                        <span>Apr 30</span>
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-[11px] font-semibold text-foreground">Recent Qualified Leads</p>
                        <span className="text-[9.5px] text-primary">View All →</span>
                      </div>
                      <div className="space-y-3">
                        {leads.map((l) => (
                          <div
                            key={l.name}
                            className="-mx-1.5 flex cursor-pointer items-center gap-2.5 rounded-lg px-1.5 py-1 transition-colors hover:bg-white/[0.04]"
                          >
                            <span className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-[#7c5cff] to-[#e552ff]" />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-[11px] font-semibold text-foreground">{l.name}</p>
                              <p className="truncate text-[9px] text-muted-foreground">{l.role}</p>
                            </div>
                            <Linkedin className="h-3.5 w-3.5 text-[#4f7bff] transition-transform hover:scale-125" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* live "meeting booked" notification cycling through recent leads */}
            {!reduce && (
              <div className="pointer-events-none absolute -bottom-6 left-4 z-20 hidden sm:block lg:-left-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={toast}
                    initial={{ opacity: 0, y: 14, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#15121f]/95 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md"
                  >
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#34d399] to-[#4f7bff] text-white">
                      <CalendarCheck className="h-4 w-4" />
                      <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400" />
                      <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-[13px] font-bold text-foreground">Meeting booked</p>
                      <p className="text-[11px] text-muted-foreground">
                        {leads[toast].name} · {leads[toast].role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
