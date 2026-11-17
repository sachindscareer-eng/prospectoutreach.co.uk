"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Play,
  CalendarCheck,
  BarChart3,
  Zap,
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

const highlights = [
  { icon: CalendarCheck, label: "More qualified meetings" },
  { icon: BarChart3, label: "A stronger sales pipeline" },
  { icon: Zap, label: "Predictable revenue growth" },
];

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

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-10 sm:pb-20 sm:pt-12">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="pointer-events-none absolute right-[-10%] top-[-5%] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#7c5cff]/20 blur-[130px]" />
      <div className="pointer-events-none absolute left-[-10%] top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#4f7bff]/12 blur-[130px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* LEFT copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/90"
            >
              B2B Lead Generation Agency
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-syne text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              B2B lead generation that fills your{" "}
              <span className="bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text italic text-transparent">
                pipeline.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              We find best-fit buyers, run targeted cold email and LinkedIn
              outreach, and book qualified meetings directly on your calendar.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="group h-14 gap-2 px-7 text-base" asChild>
                <Link href="/contact">
                  Book qualified meetings
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 gap-2 px-7 text-base" asChild>
                <Link href="#how-it-works">
                  <Play className="h-4 w-4 fill-current" />
                  See how it works
                </Link>
              </Button>
            </motion.div>

            <motion.ul variants={item} className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              {highlights.map((h) => (
                <li key={h.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <h.icon className="h-4 w-4 text-primary" />
                  {h.label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* glow frame */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#4f7bff]/40 via-[#7c5cff]/30 to-[#e552ff]/30 opacity-50 blur-3xl" />

            <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0d0b18] shadow-[0_30px_80px_-24px_rgba(124,92,255,0.5)]">
              <div className="flex">
                {/* sidebar */}
                <aside className="hidden w-40 shrink-0 flex-col gap-1 border-r border-white/[0.06] bg-white/[0.015] p-3 sm:flex">
                  <div className="mb-3 flex items-center gap-2 px-2 py-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-gradient text-[10px] font-bold text-white">P</span>
                    <span className="text-xs font-bold text-foreground">ProspectOutreach</span>
                  </div>
                  {navItems.map((n) => (
                    <div
                      key={n.label}
                      className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                        n.active ? "bg-white/[0.06] text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <n.icon className="h-3.5 w-3.5" />
                      {n.label}
                    </div>
                  ))}
                </aside>

                {/* main panel */}
                <div className="min-w-0 flex-1 p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-foreground">Pipeline Overview</h3>
                    <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-muted-foreground">
                      Last 30 Days ▾
                    </span>
                  </div>

                  {/* stat cards */}
                  <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
                    {stats.map((s, idx) => (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.08 }}
                        className={`rounded-xl border p-2.5 ${
                          idx === 3
                            ? "border-[#7c5cff]/40 bg-[#7c5cff]/10"
                            : "border-white/[0.06] bg-white/[0.02]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-muted-foreground">{s.label}</span>
                          <s.icon className="h-3 w-3 text-primary" />
                        </div>
                        <p className="mt-1 text-base font-bold text-foreground">{s.value}</p>
                        <p className="text-[9px] font-medium text-emerald-400">↑ {s.delta}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* sales pipeline row */}
                  <div className="mt-3 flex items-center gap-2 text-[10px]">
                    <span className="font-semibold text-foreground">Sales Pipeline</span>
                    <span className="text-muted-foreground">$3.4M Potential</span>
                  </div>
                  <div className="mt-1.5 grid grid-cols-4 gap-1.5">
                    {pipeline.map((p) => (
                      <div
                        key={p.label}
                        className={`rounded-lg border px-2 py-1.5 text-center ${
                          p.active
                            ? "border-transparent bg-accent-gradient text-white"
                            : "border-white/[0.06] bg-white/[0.02]"
                        }`}
                      >
                        <p className={`text-[9px] ${p.active ? "text-white/80" : "text-muted-foreground"}`}>{p.label}</p>
                        <p className={`text-[11px] font-bold ${p.active ? "text-white" : "text-foreground"}`}>{p.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* bottom row: chart + leads */}
                  <div className="mt-3 grid grid-cols-1 gap-2 lg:grid-cols-2">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
                      <p className="mb-2 text-[10px] font-semibold text-foreground">Outreach Activity</p>
                      <div className="flex h-16 items-end gap-1">
                        {bars.map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 0.6 + i * 0.03, duration: 0.4 }}
                            className="flex-1 rounded-sm bg-gradient-to-t from-[#7c5cff] to-[#c084fc]"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="text-[10px] font-semibold text-foreground">Recent Qualified Leads</p>
                        <span className="text-[9px] text-primary">View All →</span>
                      </div>
                      <div className="space-y-1.5">
                        {leads.map((l) => (
                          <div key={l.name} className="flex items-center gap-2">
                            <span className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-[#7c5cff] to-[#e552ff]" />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-[10px] font-semibold text-foreground">{l.name}</p>
                              <p className="truncate text-[8px] text-muted-foreground">{l.role}</p>
                            </div>
                            <Linkedin className="h-3 w-3 text-[#4f7bff]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
