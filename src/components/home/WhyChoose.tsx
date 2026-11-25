"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, ShieldCheck, Workflow, TrendingUp, Phone, Check } from "lucide-react";

/** Phone with a verification tick — lucide has no single icon for this. */
function PhoneVerified({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return (
    <span className="relative inline-flex">
      <Phone className={className} strokeWidth={strokeWidth} />
      <span className="absolute -bottom-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow ring-2 ring-[#8b5cf6]">
        <Check className="h-2.5 w-2.5 text-[#7c5cff]" strokeWidth={3.5} />
      </span>
    </span>
  );
}

const benefits = [
  {
    icon: Target,
    title: "ICP-matched targeting",
    description:
      "Forget spray-and-pray. Every prospect we surface matches your ideal customer profile — by industry, size, role and buying signals.",
    tags: ["Industry", "Role", "Signals"],
    gradient: "from-[#4f7bff] to-[#7c5cff]",
    glow: "bg-[#4f7bff]",
  },
  {
    icon: ShieldCheck,
    title: "Verified, compliant data",
    description:
      "Bounced emails and wrong contacts kill momentum. Our B2B data is verified and enriched, and handled in line with GDPR and CCPA.",
    tags: ["GDPR", "CCPA", "Enriched"],
    gradient: "from-[#7c5cff] to-[#a855f7]",
    glow: "bg-[#7c5cff]",
  },
  {
    icon: PhoneVerified,
    title: "Human-Verified Lead Quality",
    description:
      "Every lead is tele-verified by our team to ensure accurate prospect information, business relevance, and qualification alignment before delivery.",
    tags: ["Tele-verified", "Qualified"],
    gradient: "from-[#8b5cf6] to-[#c084fc]",
    glow: "bg-[#8b5cf6]",
    featured: true,
  },
  {
    icon: Workflow,
    title: "Multi-channel outreach",
    description:
      "Personalised cold email and LinkedIn sequences run on schedule, with every follow-up handled — so your team wakes up to replies.",
    tags: ["Email", "LinkedIn", "Follow-ups"],
    gradient: "from-[#a855f7] to-[#e552ff]",
    glow: "bg-[#a855f7]",
  },
  {
    icon: TrendingUp,
    title: "Meetings that convert",
    description:
      "We don’t just book calls. We qualify intent, confirm fit and pass through conversations with a real reason to move forward.",
    tags: ["Intent", "Fit", "Pipeline"],
    gradient: "from-[#e552ff] to-[#ff7ab8]",
    glow: "bg-[#e552ff]",
  },
];

export function WhyChoose() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/8 blur-[120px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why ProspectOutreach</span>
          <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">revenue</span>,
            not activity metrics
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Most outreach agencies report on emails sent. We focus on what your sales team actually needs — qualified
            conversations with the right decision-makers.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.5 }}
              whileHover={reduce ? undefined : { y: -8 }}
              className={`group relative rounded-2xl p-px ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${
                i === benefits.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""
              } xl:col-span-1`}
            >
              {/* gradient border: always on for featured, on hover for the rest */}
              <span
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${b.gradient} transition-opacity duration-500 ${
                  b.featured ? "opacity-70" : "opacity-0 group-hover:opacity-60"
                }`}
                aria-hidden
              />
              <span className="absolute inset-0 rounded-2xl border border-white/[0.08]" aria-hidden />

              <div
                data-spotlight
                className={`relative flex h-full flex-col overflow-hidden rounded-[calc(1rem-1px)] p-6 ${
                  b.featured ? "bg-[#100c1f]" : "bg-[#0e0d14]"
                }`}
              >
                {/* coloured corner glow */}
                <span
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${b.glow} opacity-[0.18] blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
                  aria-hidden
                />
                {/* faint dot grid */}
                <span className="pointer-events-none absolute inset-0 bg-grid opacity-[0.05]" aria-hidden />

                <div className="relative flex items-start justify-between gap-3">
                  <span className="relative">
                    <span
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${b.gradient} opacity-50 blur-md transition-opacity duration-300 group-hover:opacity-90`}
                      aria-hidden
                    />
                    <span
                      className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${b.gradient} text-white ring-1 ring-white/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                    >
                      <b.icon className="h-6 w-6" strokeWidth={1.9} />
                    </span>
                  </span>
                  {b.featured ? (
                    <span className="whitespace-nowrap rounded-full border border-[#a78bfa]/40 bg-[#7c5cff]/15 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.1em] text-[#c4b5fd]">
                      Our difference
                    </span>
                  ) : (
                    <span className="font-syne text-2xl font-bold text-white/[0.08] transition-colors duration-300 group-hover:text-white/20">
                      0{i + 1}
                    </span>
                  )}
                </div>

                <h3 className="relative mt-5 text-base font-bold leading-snug text-foreground">{b.title}</h3>
                <p className="relative mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{b.description}</p>

                <div className="relative mt-auto pt-5">
                  <span
                    className={`mb-4 block h-px origin-left scale-x-[0.35] bg-gradient-to-r ${b.gradient} opacity-60 transition-transform duration-500 group-hover:scale-x-100`}
                    aria-hidden
                  />
                  <ul className="flex flex-wrap gap-1.5">
                    {b.tags.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/70"
                      >
                        <Check className="h-3 w-3 text-[#a78bfa]" strokeWidth={3} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
