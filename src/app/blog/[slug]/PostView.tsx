"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Lightbulb,
  Link2,
  Linkedin,
  ListOrdered,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CoverArt, renderInline } from "@/components/blog/shared";
import { formatDate, getPost, posts, readingTime, type Block } from "@/lib/blog";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const SITE_URL = "https://prospectoutreach.co.uk";

export function PostView({ slug }: { slug: string }) {
  const post = getPost(slug)!;
  const reduce = useReducedMotion();
  const toc = post.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const [activeId, setActiveId] = useState(toc[0]?.id);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);
  const url = `${SITE_URL}/blog/${post.slug}`;

  // reading progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // table-of-contents scroll spy
  useEffect(() => {
    const els = toc.map((h) => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="relative">
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#4f7bff] via-[#a855f7] to-[#e552ff]"
      />

      {/* ================= HEADER ================= */}
      <header className="relative overflow-hidden bg-[#06040d] pb-14 pt-[8rem] sm:pt-40">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-56 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-[#4f7bff]/25 via-[#a855f7]/25 to-[#e552ff]/20 blur-[130px]"
          animate={reduce ? undefined : { opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />

        <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/45">
              <li>
                <Link href="/" className="transition-colors hover:text-white">Home</Link>
              </li>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              <li>
                <Link href="/blog" className="transition-colors hover:text-white">Blog</Link>
              </li>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              <li className="text-white/70">{post.category}</li>
            </ol>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mt-6 font-syne text-[2rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
            className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/55"
          >
            <span className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-[11px] font-bold text-white">
                PO
              </span>
              <span className="font-medium text-white/80">{post.author}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              <time dateTime={post.published}>{formatDate(post.published)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {readingTime(post)} min read
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
          className="container relative mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <div className="group overflow-hidden rounded-3xl border border-white/10">
            <CoverArt post={post} large className="aspect-[16/8] sm:aspect-[16/6]" />
          </div>
        </motion.div>
      </header>

      {/* ================= BODY ================= */}
      <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] xl:gap-16">
          {/* TOC */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <details className="group rounded-2xl border border-white/10 bg-[#0e0d14] p-5 lg:border-0 lg:bg-transparent lg:p-0" open>
              <summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/50 lg:pointer-events-none">
                <ListOrdered className="h-4 w-4 text-[#b59cff]" />
                On this page
              </summary>
              <ol className="mt-4 space-y-1 border-l border-white/10">
                {toc.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className={cn(
                        "-ml-px block border-l-2 py-1.5 pl-4 text-[13.5px] leading-snug transition-colors",
                        activeId === h.id
                          ? "border-[#a855f7] font-medium text-white"
                          : "border-transparent text-white/50 hover:text-white/85"
                      )}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </details>

            <div className="mt-8 hidden lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Share</p>
              <div className="mt-3 flex gap-2">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-0.5 hover:border-[#7c5cff]/50 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={copyLink}
                  aria-label="Copy link"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-0.5 hover:border-[#7c5cff]/50 hover:text-white"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Link2 className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </aside>

          {/* article */}
          <article className="min-w-0 max-w-3xl">
            {post.body.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}

            {/* FAQ */}
            <section aria-labelledby="faq-heading" className="mt-16">
              <h2 id="faq-heading" className="scroll-mt-28 font-syne text-2xl font-bold text-white sm:text-3xl">
                Frequently asked questions
              </h2>
              <div className="mt-6 space-y-3">
                {post.faqs.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div
                      key={f.q}
                      className={cn(
                        "overflow-hidden rounded-2xl border transition-colors",
                        open ? "border-[#7c5cff]/40 bg-[#110e1d]" : "border-white/10 bg-[#0e0d14]"
                      )}
                    >
                      <h3>
                        <button
                          type="button"
                          onClick={() => setOpenFaq(open ? null : i)}
                          aria-expanded={open}
                          aria-controls={`faq-${i}`}
                          className="flex w-full items-center justify-between gap-4 p-5 text-left text-[15px] font-semibold text-white"
                        >
                          {f.q}
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/70">
                            {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                          </span>
                        </button>
                      </h3>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            id={`faq-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* CTA */}
            <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#14102a] via-[#0e0b1c] to-[#1a0f24] p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-[#7c5cff]/35 to-[#e552ff]/25 blur-[70px]" />
              <h2 className="relative font-syne text-2xl font-bold text-white sm:text-3xl">Turn this into pipeline</h2>
              <p className="relative mt-3 max-w-xl text-muted-foreground">
                ProspectOutreach runs B2B demand generation for you, from ICP and intent data to human-verified meetings.
              </p>
              <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="group h-12 gap-2 px-6" asChild>
                  <Link href="/contact">
                    Book a strategy call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6" asChild>
                  <Link href="/services">Explore our services</Link>
                </Button>
              </div>
            </div>

            <Link href="/blog" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              All articles
            </Link>
          </article>
        </div>
      </div>

      {/* ================= RELATED ================= */}
      {related.length > 0 && (
        <section className="border-t border-white/[0.08] py-16" aria-labelledby="related-heading">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="font-syne text-2xl font-bold text-white">Keep reading</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group grid overflow-hidden rounded-3xl border border-white/10 bg-[#0e0d14] transition-all duration-300 hover:-translate-y-1 hover:border-[#7c5cff]/40 sm:grid-cols-[11rem_1fr]"
                >
                  <CoverArt post={p} className="aspect-[16/9] sm:aspect-auto" />
                  <div className="p-6">
                    <h3 className="font-syne text-lg font-bold leading-snug text-white">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function BlockView({ block: b }: { block: Block }) {
  switch (b.type) {
    case "h2":
      return (
        <h2 id={b.id} className="mb-4 mt-12 scroll-mt-28 font-syne text-2xl font-bold leading-tight text-white first:mt-0 sm:text-[1.9rem]">
          {b.text}
        </h2>
      );
    case "h3":
      return <h3 className="mb-2 mt-8 text-lg font-semibold text-white sm:text-xl">{b.text}</h3>;
    case "p":
      return <p className="my-5 text-[16.5px] leading-[1.8] text-white/70">{renderInline(b.text)}</p>;
    case "ul":
      return (
        <ul className="my-6 space-y-3">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[16px] leading-[1.75] text-white/70">
              <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#8b6fff] to-[#e552ff]" />
              <span>{renderInline(it)}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="my-6 space-y-4">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-4 text-[16px] leading-[1.75] text-white/70">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-xs font-bold text-white">
                {i + 1}
              </span>
              <span>{renderInline(it)}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className="relative my-8 overflow-hidden rounded-2xl border border-[#7c5cff]/30 bg-gradient-to-br from-[#7c5cff]/[0.10] to-[#e552ff]/[0.05] p-6">
          <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#8b6fff] to-[#e552ff]" />
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#c4b1ff]">
            <Lightbulb className="h-4 w-4" />
            {b.title}
          </p>
          <p className="mt-2 text-[16px] leading-relaxed text-white/85">{renderInline(b.text)}</p>
        </aside>
      );
    case "table":
      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead className="bg-white/[0.04]">
              <tr>
                {b.head.map((h, i) => (
                  <th key={i} scope="col" className="px-4 py-3 font-semibold text-white">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i} className="border-t border-white/[0.07] transition-colors hover:bg-white/[0.02]">
                  {r.map((c, j) =>
                    j === 0 ? (
                      <th key={j} scope="row" className="px-4 py-3 font-medium text-white/90">
                        {c}
                      </th>
                    ) : (
                      <td key={j} className="px-4 py-3 leading-relaxed text-white/65">
                        {c}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
