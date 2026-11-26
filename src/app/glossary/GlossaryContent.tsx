"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { glossary } from "@/lib/glossary";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function GlossaryContent() {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = glossary.filter((g) => !q || `${g.term} ${g.def}`.toLowerCase().includes(q));
  const groups = ALPHABET.map((l) => ({ letter: l, terms: filtered.filter((g) => g.term[0].toUpperCase() === l) })).filter(
    (g) => g.terms.length
  );
  const present = new Set(glossary.map((g) => g.term[0].toUpperCase()));

  return (
    <div className="relative overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#06040d] pb-14 pt-[8.5rem] sm:pb-16 sm:pt-44">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-56 left-1/2 h-[30rem] w-[64rem] -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-[#4f7bff]/30 via-[#a855f7]/30 to-[#e552ff]/25 blur-[130px]"
          animate={reduce ? undefined : { opacity: [0.55, 1, 0.55], scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7c5cff]/60 to-transparent" />

        <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#b59cff] backdrop-blur"
          >
            Resources · Glossary
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
            className="mx-auto mt-6 max-w-3xl font-syne text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            B2B demand generation{" "}
            <span className="bg-gradient-to-r from-[#8b6fff] via-[#b57bff] to-[#e552ff] bg-clip-text pr-[0.12em] italic text-transparent">
              glossary
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            The key terms in B2B marketing, sales outreach and lead generation, explained in plain English.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
            className="mx-auto mt-10 max-w-xl"
          >
            <label className="relative block">
              <span className="sr-only">Search the glossary</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${glossary.length} terms, e.g. MQL`}
                className="h-12 w-full rounded-full border border-white/10 bg-white/[0.04] pl-11 pr-4 text-sm text-white placeholder:text-white/35 outline-none backdrop-blur transition focus:border-[#7c5cff]/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-[#7c5cff]/15"
              />
            </label>
          </motion.div>
        </div>
      </section>

      {/* A–Z jump bar */}
      <nav
        aria-label="Jump to letter"
        className="sticky top-[4.75rem] z-30 border-y border-white/[0.08] bg-[#08070d]/85 backdrop-blur-xl sm:top-[5.25rem]"
      >
        <div className="container mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 py-2.5 [scrollbar-width:none] sm:justify-center">
          {ALPHABET.map((l) =>
            present.has(l) ? (
              <a
                key={l}
                href={`#letter-${l}`}
                className="flex h-8 min-w-[2rem] shrink-0 items-center justify-center rounded-lg text-[13px] font-semibold text-white/75 transition-colors hover:bg-gradient-to-br hover:from-[#7c5cff] hover:to-[#e552ff] hover:text-white"
              >
                {l}
              </a>
            ) : (
              <span key={l} className="flex h-8 min-w-[2rem] shrink-0 items-center justify-center text-[13px] text-white/20" aria-hidden>
                {l}
              </span>
            )
          )}
        </div>
      </nav>

      {/* ================= TERMS ================= */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {groups.length === 0 && (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center text-muted-foreground">
              No terms match “{query}”.
            </p>
          )}
          <div className="space-y-12">
            {groups.map((g) => (
              <div key={g.letter} id={`letter-${g.letter}`} className="scroll-mt-40 grid gap-5 md:grid-cols-[4rem_1fr]">
                <h2 className="font-syne text-4xl font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_rgba(181,156,255,0.6)] md:sticky md:top-40 md:self-start">
                  {g.letter}
                </h2>
                <dl className="grid gap-4 sm:grid-cols-2">
                  {g.terms.map((t, i) => (
                    <motion.div
                      key={t.slug}
                      id={t.slug}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "60px" }}
                      transition={{ delay: (i % 4) * 0.05, duration: 0.5, ease: EASE }}
                      className={cn(
                        "group relative scroll-mt-40 overflow-hidden rounded-2xl border border-white/10 bg-[#0e0d14] p-5 transition-all duration-300",
                        "hover:-translate-y-0.5 hover:border-[#7c5cff]/40 hover:shadow-[0_20px_50px_-28px_rgba(124,92,255,0.7)] target:border-[#a855f7]/70"
                      )}
                    >
                      <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-[#7c5cff]/20 to-[#e552ff]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                      <dt className="relative font-semibold text-white">{t.term}</dt>
                      <dd className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                        {t.def}
                        {t.link && (
                          <Link
                            href={t.link.href}
                            className="mt-3 flex items-center gap-1.5 text-[13px] font-semibold text-[#b59cff] transition-colors hover:text-white"
                          >
                            {t.link.label}
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        )}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#14102a] via-[#0e0b1c] to-[#1a0f24] p-10 text-center sm:p-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-60 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7c5cff]/30 to-[#e552ff]/25 blur-[90px]" />
            <h2 className="relative font-syne text-3xl font-bold text-white">Go deeper with our guides</h2>
            <p className="relative mx-auto mt-3 max-w-xl text-muted-foreground">
              See how these ideas fit together in a real demand generation programme.
            </p>
            <div className="relative mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group h-12 gap-2 px-6" asChild>
                <Link href="/blog">
                  Read the blog
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6" asChild>
                <Link href="/contact">Talk to our team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
