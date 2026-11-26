"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookA, CalendarDays, Clock, Linkedin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/interactive";
import { CoverArt } from "@/components/blog/shared";
import { formatDate, posts, readingTime, type Post } from "@/lib/blog";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const NEWSLETTER_URL = "https://www.linkedin.com/newsletters/7449502823119056896/";

export function BlogIndex() {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], []);
  const filtered = posts.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchQ = !q || `${p.title} ${p.excerpt} ${p.keywords.join(" ")}`.toLowerCase().includes(q);
    return matchQ && (cat === "All" || p.category === cat);
  });
  const [featured, ...rest] = filtered;

  return (
    <div className="relative overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#06040d] pb-16 pt-[8.5rem] sm:pb-20 sm:pt-44">
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
            Resources · Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
            className="mx-auto mt-6 max-w-3xl font-syne text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            Insights to grow your{" "}
            <span className="bg-gradient-to-r from-[#8b6fff] via-[#b57bff] to-[#e552ff] bg-clip-text pr-[0.12em] italic text-transparent">
              B2B pipeline
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Practical guides on demand generation, intent data, account-based marketing and outbound outreach, written by the
            team that runs these campaigns every day.
          </motion.p>

          {/* search + filters */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
            className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4"
          >
            <label className="relative w-full">
              <span className="sr-only">Search articles</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, e.g. intent data"
                className="h-12 w-full rounded-full border border-white/10 bg-white/[0.04] pl-11 pr-4 text-sm text-white placeholder:text-white/35 outline-none backdrop-blur transition focus:border-[#7c5cff]/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-[#7c5cff]/15"
              />
            </label>
            <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by category">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-[13px] font-medium transition-all",
                    cat === c
                      ? "border-transparent bg-gradient-to-r from-[#7c5cff] to-[#e552ff] text-white shadow-[0_8px_24px_-10px_rgba(168,85,247,0.8)]"
                      : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/25 hover:text-white"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= POSTS ================= */}
      <section className="relative py-16 sm:py-20" aria-label="Articles">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 && (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center text-muted-foreground">
              No articles match your search. Try another keyword.
            </p>
          )}

          {featured && <BigCard post={featured} label="Featured guide" />}

          {rest.length > 0 && rest.length < 3 && (
            <div className="mt-8 space-y-8">
              {rest.map((p, i) => (
                <BigCard key={p.slug} post={p} label="Latest guide" flip={i % 2 === 0} />
              ))}
            </div>
          )}

          {rest.length >= 3 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "80px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0e0d14] transition-all duration-300 hover:-translate-y-1 hover:border-[#7c5cff]/40 hover:shadow-[0_24px_60px_-28px_rgba(124,92,255,0.6)]"
                >
                  <Link href={`/blog/${p.slug}`} className="flex h-full flex-col">
                    <CoverArt post={p} className="aspect-[16/9]" />
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-syne text-xl font-bold leading-snug text-white">{p.title}</h2>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                      <div className="mt-auto">
                        <Meta date={p.published} mins={readingTime(p)} />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* resources row */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <ResourceCard
              href="/glossary"
              icon={<BookA className="h-5 w-5" />}
              eyebrow="Glossary"
              title="B2B marketing glossary"
              text="ABM, MQL, SQL, ICP, intent data and more: key demand generation terms explained in plain English."
              cta="Browse the glossary"
            />
            <ResourceCard
              href={NEWSLETTER_URL}
              external
              icon={<Linkedin className="h-5 w-5" />}
              eyebrow="Newsletter"
              title="Get insights on LinkedIn"
              text="Subscribe to our LinkedIn newsletter for demand generation and outreach tips straight to your feed."
              cta="Subscribe on LinkedIn"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative pb-24">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#14102a] via-[#0e0b1c] to-[#1a0f24] p-10 text-center sm:p-14">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-60 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7c5cff]/30 to-[#e552ff]/25 blur-[90px]" />
            <h2 className="relative font-syne text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Want us to run it{" "}
              <span className="bg-gradient-to-r from-[#8b6fff] to-[#e552ff] bg-clip-text text-transparent">for you?</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
              We plan and run demand generation programmes that turn the right accounts into qualified meetings.
            </p>
            <div className="relative mt-8 flex justify-center">
              <Magnetic>
                <Button size="lg" className="group h-14 gap-2 px-7 text-base" asChild>
                  <Link href="/contact">
                    Book a strategy call
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BigCard({ post, label, flip = false }: { post: Post; label: string; flip?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0d14] transition-all duration-300 hover:border-[#7c5cff]/40 hover:shadow-[0_30px_80px_-36px_rgba(124,92,255,0.7)]"
    >
      <Link href={`/blog/${post.slug}`} className={cn("grid lg:grid-cols-[1.1fr_1fr]", flip && "lg:grid-cols-[1fr_1.1fr]")}>
        <CoverArt post={post} large className={cn("aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]", flip && "lg:order-2")} />
        <div className="flex flex-col justify-center p-7 sm:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b59cff]">{label}</span>
          <h2 className="mt-3 font-syne text-2xl font-bold leading-tight text-white sm:text-3xl">{post.title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <Meta date={post.published} mins={readingTime(post)} />
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Read the guide
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function Meta({ date, mins }: { date: string; mins: number }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-4 text-[13px] text-white/45">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5" />
        <time dateTime={date}>{formatDate(date)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" />
        {mins} min read
      </span>
    </div>
  );
}

function ResourceCard({
  href,
  external,
  icon,
  eyebrow,
  title,
  text,
  cta,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
}) {
  const inner = (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white shadow-[0_10px_30px_-10px_rgba(168,85,247,0.8)]">
        {icon}
      </span>
      <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.16em] text-[#b59cff]">{eyebrow}</span>
      <span className="mt-2 block font-syne text-xl font-bold text-white">{title}</span>
      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{text}</span>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </>
  );
  const cls =
    "group block rounded-3xl border border-white/10 bg-[#0e0d14] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#7c5cff]/40";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
