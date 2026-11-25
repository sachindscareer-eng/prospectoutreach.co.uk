"use client";

import { useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Compass,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Rocket,
  Send,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic, useFinePointer } from "@/components/interactive";
import { offices } from "@/lib/offices";
import { GlobalOffices } from "@/components/GlobalOffices";

/* ================================================================== */
/* Data                                                                */
/* ================================================================== */

const EASE = [0.22, 1, 0.36, 1] as const;
const GRAD = "bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[#8b6fff]/70 focus:bg-white/[0.05] focus:ring-4 focus:ring-[#7c5cff]/15";
const labelCls = "mb-1.5 block text-[13px] font-semibold text-foreground/85";

const channels = [
  {
    icon: Mail,
    label: "Email us",
    lines: [
      { text: "sales@prospectoutreach.co.uk", href: "mailto:sales@prospectoutreach.co.uk" },
      { text: "info@prospectoutreach.co.uk", href: "mailto:info@prospectoutreach.co.uk" },
    ],
    gradient: "from-[#4f7bff] to-[#7c5cff]",
  },
  {
    icon: Phone,
    label: "Call us",
    lines: [
      { text: "UK: +44 7915 378769", href: "tel:+447915378769" },
      { text: "India: +91-9959953818", href: "tel:+919959953818" },
    ],
    gradient: "from-[#7c5cff] to-[#a855f7]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    lines: [{ text: "ProspectOutreach", href: "https://www.linkedin.com/company/prospectoutreach/" }],
    gradient: "from-[#a855f7] to-[#e552ff]",
    external: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    lines: [{ text: "@prospectoutreach", href: "https://www.instagram.com/prospectoutreach" }],
    gradient: "from-[#e552ff] to-[#ff7ab8]",
    external: true,
  },
];

const expectationSteps = [
  { icon: Clock, title: "Quick response", text: "Our team reviews your inquiry quickly and shares clear next steps." },
  { icon: MessageSquareText, title: "Personalised consultation", text: "We understand your goals, ICP, and current pipeline challenges." },
  { icon: Compass, title: "Tailored strategy", text: "You receive a custom demand and outreach plan built for your market." },
  { icon: Rocket, title: "Seamless onboarding", text: "We launch quickly and keep operations simple for your team." },
];

/* ================================================================== */
/* Building blocks (same patterns as About / Careers)                  */
/* ================================================================== */

function SectionHead({ eyebrow, children, sub, center = true }: { eyebrow: string; children: ReactNode; sub?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "120px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}
    >
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{children}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
    </motion.div>
  );
}

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: reduce ? 0 : "105%" }}
            animate={{ y: 0 }}
            transition={{ delay: delay + i * 0.07, duration: 0.7, ease: EASE }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
}

/* ================================================================== */
/* Hero visual — "talk to our team" card with the contact channels     */
/* ================================================================== */

function HeroVisual() {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
      className="relative mx-auto w-full max-w-md [perspective:1400px] lg:max-w-none"
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
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#4f7bff]/40 via-[#8b3dff]/40 to-[#e552ff]/30 opacity-70 blur-3xl" />

      <motion.div
        style={fine ? { rotateX: rotX, rotateY: rotY } : undefined}
        className="relative overflow-hidden rounded-[1.75rem] border border-[#8b5cf6]/40 bg-[#0d0b18]/95 p-6 shadow-[0_0_0_1px_rgba(139,92,246,0.25),0_30px_90px_-20px_rgba(124,92,255,0.75)] sm:p-7"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-foreground">Talk to our team</p>
              <p className="text-[11px] text-muted-foreground">Pick the channel that suits you</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
            <span className="relative flex h-2 w-2">
              {!reduce && <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />}
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open
          </span>
        </div>

        <ul className="mt-6 space-y-3">
          {channels.map((c, i) => (
            <motion.li
              key={c.label}
              initial={{ opacity: 0, x: reduce ? 0 : 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: EASE }}
            >
              <a
                href={c.lines[0].href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7c5cff]/45 hover:bg-white/[0.05]"
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${c.gradient} text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#a78bfa]">{c.label}</span>
                  <span className="block truncate text-sm font-semibold text-foreground">{c.lines[0].text}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c084fc]" />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#7c5cff]/30 bg-[#7c5cff]/10 p-3.5">
          <CalendarCheck className="h-5 w-5 shrink-0 text-[#c4b5fd]" />
          <p className="text-[13px] leading-snug text-white/80">
            We reply to every inquiry <span className="font-semibold text-white">within 1 business day.</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================== */
/* Page                                                                */
/* ================================================================== */

export function ContactContent() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Spam protection: honeypot
    if (formData.get("_hp_phone")) {
      setSubmitted(true); // don't let the bot know it failed
      return;
    }

    setLoading(true);
    try {
      const body = new URLSearchParams();
      formData.forEach((value, key) => {
        if (!key.startsWith("_hp_")) body.append(key, value.toString());
      });

      const res = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      const data = await res.json();
      if (data.status === "success") {
        form.reset();
        setSubmitted(true);
      } else {
        setError(data.message || "Error sending message. Please check your details and try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  const rise = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "120px" },
    transition: { delay: reduce ? 0 : i * 0.08, duration: 0.55, ease: EASE },
  });

  return (
    <div className="relative overflow-hidden">
      {/* ================= 1. HERO ================= */}
      <section
        ref={heroRef}
        onPointerMove={(e) => {
          const el = heroRef.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          el.style.setProperty("--hx", `${e.clientX - r.left}px`);
          el.style.setProperty("--hy", `${e.clientY - r.top}px`);
        }}
        className="group/hero relative overflow-hidden bg-[#06040d] pb-24 pt-[8.5rem] sm:pb-28 sm:pt-44 lg:pb-32"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-56 left-1/2 h-[34rem] w-[70rem] -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-[#4f7bff]/30 via-[#a855f7]/30 to-[#e552ff]/25 blur-[130px]"
          animate={reduce ? undefined : { opacity: [0.55, 1, 0.55], scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100"
          style={{ background: "radial-gradient(520px circle at var(--hx,50%) var(--hy,30%), rgba(139,111,255,0.14), transparent 60%)" }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7c5cff]/60 to-transparent" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-3.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-[#7c5cff]/50 hover:text-white sm:text-[13px]"
                >
                  <span className="rounded-full bg-gradient-to-r from-[#7c5cff] to-[#e552ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    Contact us
                  </span>
                  We reply within 1 business day
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>

              <h1 className="mt-7 font-syne text-[2.7rem] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[3.9rem]">
                <WordReveal text="Let's build your" delay={0.1} />
                <br className="hidden sm:block" />
                <span className="relative inline-block bg-gradient-to-r from-[#8b6fff] via-[#b57bff] to-[#e552ff] bg-clip-text pr-[0.18em] italic text-transparent">
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
                  >
                    pipeline
                  </motion.span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none" aria-hidden>
                    <motion.path
                      d="M2 7 C 80 2, 220 2, 298 7"
                      stroke="url(#contactug)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: reduce ? 1 : 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 0.9, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="contactug" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b6fff" />
                        <stop offset="100%" stopColor="#e552ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6, ease: EASE }}
                className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
              >
                Have questions or want to collaborate? Tell us about your goals and our team will get back to you
                with clear next steps — usually within one business day.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
                className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <Magnetic>
                  <Button size="lg" className="group h-14 gap-2 px-7 text-base shadow-[0_18px_40px_-12px_rgba(168,85,247,0.7)]" asChild>
                    <a href="#contact-form">
                      Send a message
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button size="lg" variant="outline" className="h-14 gap-2 px-7 text-base" asChild>
                    <a href="tel:+447915378769">
                      <Phone className="h-4 w-4" /> +44 7915 378769
                    </a>
                  </Button>
                </Magnetic>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95, duration: 0.6 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-start"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Offices in</span>
                {offices.map((o) => (
                  <span key={o.id} className="inline-flex items-center gap-1.5 font-medium text-foreground/85">
                    <span aria-hidden>{o.flag}</span>
                    {o.city.split(",")[0]}
                  </span>
                ))}
              </motion.div>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ================= 2. FORM ================= */}
      <section id="contact-form" className="relative scroll-mt-28 bg-background py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* left: what to expect + direct contacts */}
            <div>
              <SectionHead
                eyebrow="Get in touch"
                center={false}
                sub="Share a few details about your business and goals. Here's what happens after you hit send."
              >
                Start the <span className={GRAD}>conversation</span>
              </SectionHead>

              <ol className="mt-10 space-y-3">
                {expectationSteps.map((s, i) => (
                  <motion.li
                    key={s.title}
                    {...rise(i)}
                    className="group flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors hover:border-[#7c5cff]/40 hover:bg-white/[0.04]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#a78bfa]">Step {i + 1}</p>
                      <p className="text-sm font-semibold text-foreground">{s.title}</p>
                      <p className="mt-0.5 text-[13px] text-muted-foreground">{s.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <motion.div {...rise(4)} className="mt-8 grid gap-3 sm:grid-cols-2">
                {channels.slice(0, 2).map((c) => (
                  <div key={c.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#a78bfa]">
                      <c.icon className="h-3.5 w-3.5" /> {c.label}
                    </p>
                    <div className="mt-2 space-y-1">
                      {c.lines.map((l) => (
                        <a key={l.text} href={l.href} className="block break-all text-[13px] font-medium text-foreground/85 transition-colors hover:text-[#c084fc]">
                          {l.text}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div {...rise(5)} className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a78bfa]">Where we work</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {offices.map((o) => (
                    <span
                      key={o.id}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[13px] font-medium text-foreground/85"
                    >
                      <MapPin className="h-3.5 w-3.5 text-[#a78bfa]" />
                      {o.city.split(",")[0]}, {o.country}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* right: form */}
            <motion.div {...rise(1)} className="relative">
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.2rem] bg-gradient-to-br from-[#4f7bff]/25 via-[#7c5cff]/25 to-[#e552ff]/20 opacity-70 blur-3xl" />
              <div className="rounded-[1.75rem] bg-gradient-to-br from-[#7c5cff]/50 via-white/10 to-[#e552ff]/40 p-px">
                <div className="rounded-[calc(1.75rem-1px)] bg-[#0d0b18] p-6 sm:p-9">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="done"
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex min-h-[520px] flex-col items-center justify-center text-center"
                        role="status"
                      >
                        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#34d399] to-[#4f7bff] text-white shadow-[0_0_40px_-5px_rgba(52,211,153,0.6)]">
                          <CheckCircle2 className="h-10 w-10" />
                        </span>
                        <h3 className="mt-6 font-syne text-3xl font-bold text-foreground">Message sent!</h3>
                        <p className="mt-3 max-w-sm text-base text-muted-foreground">
                          Thank you for reaching out. Our team will get back to you within one business day.
                        </p>
                        <Button variant="outline" className="mt-8 px-8" onClick={() => setSubmitted(false)}>
                          Send another message
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        {/* honeypot */}
                        <input type="text" name="_hp_phone" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden />

                        <div>
                          <h3 className="font-syne text-2xl font-bold text-foreground">Send us a message</h3>
                          <p className="mt-1 text-sm text-muted-foreground">Fields marked * are required.</p>
                        </div>

                        {error && (
                          <div role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
                            {error}
                          </div>
                        )}

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label htmlFor="firstName" className={labelCls}>First name *</label>
                            <input id="firstName" name="firstName" required autoComplete="given-name" className={inputCls} placeholder="John" />
                          </div>
                          <div>
                            <label htmlFor="lastName" className={labelCls}>Last name</label>
                            <input id="lastName" name="lastName" autoComplete="family-name" className={inputCls} placeholder="Doe" />
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label htmlFor="email" className={labelCls}>Work email *</label>
                            <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="john@company.com" />
                          </div>
                          <div>
                            <label htmlFor="mobile" className={labelCls}>Mobile number</label>
                            <input id="mobile" name="mobile" type="tel" autoComplete="tel" className={inputCls} placeholder="+44 7700 900000" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="companyWebsite" className={labelCls}>Company website *</label>
                          <input id="companyWebsite" name="companyWebsite" required autoComplete="url" className={inputCls} placeholder="yourcompany.com" />
                        </div>

                        <div>
                          <label htmlFor="message" className={labelCls}>How can we help? *</label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className={`${inputCls} resize-none`}
                            placeholder="Tell us about your goals, target market and timelines…"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          disabled={loading}
                          className="group h-14 w-full gap-2 text-base shadow-[0_18px_40px_-12px_rgba(168,85,247,0.7)]"
                        >
                          {loading ? "Sending…" : "Send message"}
                          {!loading && <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />}
                        </Button>
                        <p className="text-center text-xs text-muted-foreground">
                          We use your details only to respond to your inquiry.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 3. OFFICES ================= */}
      <GlobalOffices />
    </div>
  );
}
