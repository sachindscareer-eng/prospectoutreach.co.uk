"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  FileText,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Rocket,
  Send,
  Sprout,
  Upload,
  Users,
  Zap,
  Handshake,
  SearchCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic, useFinePointer } from "@/components/interactive";
import { offices } from "@/lib/offices";

/* ================================================================== */
/* Content — existing Careers copy kept; descriptions only support it  */
/* ================================================================== */

const benefits = [
  {
    icon: Globe2,
    title: "Global Reach",
    text: "Work on demand generation programmes for B2B brands across North America, EMEA and APAC.",
    gradient: "from-[#4f7bff] to-[#7c5cff]",
  },
  {
    icon: GraduationCap,
    title: "Accelerated Mentorship",
    text: "Learn from experienced demand generation specialists through hands-on coaching.",
    gradient: "from-[#7c5cff] to-[#a855f7]",
  },
  {
    icon: Zap,
    title: "Freedom to Execute",
    text: "Own your work, pilot bold ideas and see the impact of what you build.",
    gradient: "from-[#a855f7] to-[#e552ff]",
  },
  {
    icon: Users,
    title: "People-First Culture",
    text: "A supportive team that invests in your growth, wellbeing and recognition.",
    gradient: "from-[#e552ff] to-[#ff7ab8]",
  },
];

const values = [
  {
    icon: Handshake,
    title: "Collaborate",
    description:
      "We thrive on a culture of collective genius. By blending our unique strengths, we don't just achieve results, we ignite innovation and fuel each other’s professional evolution.",
  },
  {
    icon: SearchCheck,
    title: "Assess",
    description:
      "We fuel a culture of relentless inquiry. Here, you’re empowered to pilot bold strategies and transform every outcome, win or lose, into a blueprint for future excellence.",
  },
  {
    icon: Sprout,
    title: "Grow",
    description:
      "We don’t just scale businesses; we scale people. As you sharpen your skills and push your limits, you reshape our collective vision and drive the future of our industry.",
  },
];

const steps = [
  { icon: Send, title: "Submit your profile", text: "Share your details and resume using the form." },
  { icon: FileText, title: "We review it", text: "Our HR team reviews every application we receive." },
  { icon: Mail, title: "We get in touch", text: "If there's a fit, we'll reach out about next steps." },
];

const GRAD = "bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent";
const CARD = "rounded-[1.4rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01]";
const EASE = [0.22, 1, 0.36, 1] as const;
const MAX_MB = 5;

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[#8b6fff]/70 focus:bg-white/[0.05] focus:ring-4 focus:ring-[#7c5cff]/15";
const labelCls = "mb-1.5 block text-[13px] font-semibold text-foreground/85";

/* ================================================================== */
/* Building blocks (same patterns as the About page)                   */
/* ================================================================== */

function SectionHead({
  eyebrow,
  children,
  sub,
  center = true,
}: {
  eyebrow: string;
  children: ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "120px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}
    >
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {children}
      </h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
    </motion.div>
  );
}

/** Card that tilts slightly towards the cursor (mouse only, respects reduced motion). */
function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const fine = useFinePointer();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 180, damping: 18 });

  return (
    <motion.div
      ref={ref}
      data-spotlight
      style={fine ? { rotateX: rx, rotateY: ry, transformPerspective: 900 } : undefined}
      onPointerMove={(e) => {
        if (!fine || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Headline that reveals word by word. */
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
/* Hero visual — floating culture cards                                */
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
              <Rocket className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-foreground">Life at ProspectOutreach</p>
              <p className="text-[11px] text-muted-foreground">What you can expect</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
            <span className="relative flex h-2 w-2">
              {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Hiring
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: EASE }}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4"
            >
              <span className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${b.gradient} text-white`}>
                <b.icon className="h-4 w-4" />
              </span>
              <p className="mt-3 text-[13px] font-bold leading-snug text-foreground">{b.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">Our values</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {values.map((v, i) => (
              <motion.span
                key={v.title}
                initial={{ opacity: 0, scale: reduce ? 1 : 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#7c5cff]/30 bg-[#7c5cff]/10 px-3 py-1.5 text-xs font-semibold text-[#d6c8ff]"
              >
                <v.icon className="h-3.5 w-3.5" />
                {v.title}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* floating badge */}
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 12 }}
        animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -8, 0] }}
        transition={
          reduce
            ? { delay: 1.1, duration: 0.5 }
            : { opacity: { delay: 1.1, duration: 0.5 }, y: { delay: 1.1, duration: 5, repeat: Infinity, ease: "easeInOut" } }
        }
        className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#15121f]/95 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md sm:flex"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#34d399] to-[#4f7bff] text-white">
          <Briefcase className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-[13px] font-bold text-foreground">Teams across 3 countries</p>
          <p className="text-[11px] text-muted-foreground">India · UK · USA</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ================================================================== */
/* Page                                                                */
/* ================================================================== */

export function CareersContent() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // --- application form (posts to /apply-mail.php, same as before) ---
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/apply-mail.php", {
        method: "POST",
        body: formData, // browser sets the multipart headers
      });
      const data = await res.json();
      if (data.status === "success") {
        setSubmitted(true);
        form.reset();
        setFileName(null);
      } else {
        setError(data.message || "Error submitting application.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  /** Accepts a picked or dropped file, enforcing type and size before upload. */
  function acceptFile(file: File | undefined) {
    if (!file) return;
    if (!/\.(pdf|docx?)$/i.test(file.name)) {
      setError("Please upload your resume as a PDF or DOC file.");
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      setError(`Your resume is larger than ${MAX_MB}MB. Please upload a smaller file.`);
      if (fileRef.current) fileRef.current.value = "";
      setFileName(null);
      return;
    }
    setError(null);
    setFileName(file.name);
  }

  function clearFile() {
    if (fileRef.current) fileRef.current.value = "";
    setFileName(null);
  }

  const rise = (i = 0) => ({
    initial: { opacity: 0, y: 22 },
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
                  href="#apply"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-3.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-[#7c5cff]/50 hover:text-white sm:text-[13px]"
                >
                  <span className="rounded-full bg-gradient-to-r from-[#7c5cff] to-[#e552ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    Careers
                  </span>
                  Be part of a team that invests in you
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>

              <h1 className="mt-7 font-syne text-[2.7rem] font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[3.9rem]">
                <WordReveal text="Shaping growth" delay={0.1} />
                <br className="hidden sm:block" />
                <span className="relative inline-block bg-gradient-to-r from-[#8b6fff] via-[#b57bff] to-[#e552ff] bg-clip-text pr-[0.18em] italic text-transparent">
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
                  >
                    together
                  </motion.span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none" aria-hidden>
                    <motion.path
                      d="M2 7 C 80 2, 220 2, 298 7"
                      stroke="url(#careersug)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: reduce ? 1 : 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 0.9, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="careersug" x1="0" y1="0" x2="1" y2="0">
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
                Passion. Performance. Impact. We value the drive it takes to
                deliver results. Join a team where your creativity has a purpose.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
                className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <Magnetic>
                  <Button size="lg" className="group h-14 gap-2 px-7 text-base shadow-[0_18px_40px_-12px_rgba(168,85,247,0.7)]" asChild>
                    <a href="#apply">
                      Apply now
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button size="lg" variant="outline" className="h-14 px-7 text-base" asChild>
                    <Link href="/about">About us</Link>
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

      {/* ================= 2. WHY JOIN (benefits) ================= */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Why join us"
            sub="We invest in the people who drive our clients' growth."
          >
            Built for people who <span className={GRAD}>want to grow</span>
          </SectionHead>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <motion.div key={b.title} {...rise(i)} className="h-full">
                <TiltCard className={`group relative h-full overflow-hidden ${CARD} p-6 transition-colors duration-300 hover:border-[#7c5cff]/50`}>
                  <span
                    className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${b.gradient} transition-transform duration-500 group-hover:scale-x-100`}
                    aria-hidden
                  />
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${b.gradient} text-white shadow-lg ring-1 ring-white/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                    <b.icon className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-foreground">{b.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{b.text}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. VALUES ================= */}
      <section className="relative overflow-hidden bg-[#08060f] py-20 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/10 blur-[120px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Our values" sub="Three principles shape how we work with each other and our clients.">
            How we <span className={GRAD}>work together</span>
          </SectionHead>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div key={v.title} {...rise(i)} className="h-full">
                <TiltCard className={`group relative h-full overflow-hidden ${CARD} p-7 transition-colors duration-300 hover:border-[#7c5cff]/50`}>
                  <span className="pointer-events-none absolute right-5 top-3 font-syne text-5xl font-bold text-white/[0.05] transition-colors duration-300 group-hover:text-white/[0.09]">
                    0{i + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#a78bfa] transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#7c5cff] group-hover:to-[#e552ff] group-hover:text-white">
                    <v.icon className="h-6 w-6" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. APPLY ================= */}
      <section id="apply" className="relative scroll-mt-28 bg-background py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* left: intro + how it works + offices */}
            <div>
              <SectionHead
                eyebrow="Join our team"
                center={false}
                sub="Ready to join our mission? Submit your profile to discover open roles and grow alongside us."
              >
                Apply to <span className={GRAD}>ProspectOutreach</span>
              </SectionHead>

              <ol className="mt-10 space-y-3">
                {steps.map((s, i) => (
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

              <motion.div {...rise(3)} className="mt-8">
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
                        className="flex min-h-[460px] flex-col items-center justify-center text-center"
                        role="status"
                      >
                        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#34d399] to-[#4f7bff] text-white shadow-[0_0_40px_-5px_rgba(52,211,153,0.6)]">
                          <CheckCircle2 className="h-10 w-10" />
                        </span>
                        <h3 className="mt-6 font-syne text-3xl font-bold text-foreground">Application received!</h3>
                        <p className="mt-3 max-w-sm text-base text-muted-foreground">
                          Thank you for your interest in ProspectOutreach. Our HR team will review your profile and get back to you soon.
                        </p>
                        <Button variant="outline" className="mt-8 px-8" onClick={() => setSubmitted(false)}>
                          Apply for another role
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
                        <div>
                          <h3 className="font-syne text-2xl font-bold text-foreground">Apply now</h3>
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

                        <div>
                          <label htmlFor="email" className={labelCls}>Email address *</label>
                          <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="john@example.com" />
                        </div>

                        <div>
                          <label htmlFor="mobile" className={labelCls}>Mobile number</label>
                          <input id="mobile" name="mobile" type="tel" autoComplete="tel" className={inputCls} placeholder="+44 7700 900000" />
                        </div>

                        <div>
                          <p className={labelCls}>Upload resume (PDF/DOC) *</p>
                          <label
                            htmlFor="resume"
                            onDragOver={(e) => {
                              e.preventDefault();
                              setDragging(true);
                            }}
                            onDragLeave={() => setDragging(false)}
                            onDrop={(e) => {
                              e.preventDefault();
                              setDragging(false);
                              const f = e.dataTransfer.files?.[0];
                              if (f && fileRef.current) {
                                const dt = new DataTransfer();
                                dt.items.add(f);
                                fileRef.current.files = dt.files;
                              }
                              acceptFile(f);
                            }}
                            className={`group relative flex h-36 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all ${
                              dragging
                                ? "border-[#c084fc] bg-[#7c5cff]/15"
                                : fileName
                                  ? "border-emerald-400/40 bg-emerald-400/5"
                                  : "border-[#7c5cff]/35 bg-[#7c5cff]/5 hover:border-[#8b6fff]/70 hover:bg-[#7c5cff]/10"
                            }`}
                          >
                            {fileName ? (
                              <>
                                <FileText className="mb-2 h-8 w-8 text-emerald-300" />
                                <p className="max-w-[90%] truncate text-sm font-semibold text-emerald-200">{fileName}</p>
                                <p className="mt-1 text-xs text-muted-foreground">Click to choose a different file</p>
                                <button
                                  type="button"
                                  aria-label="Remove file"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    clearFile();
                                  }}
                                  className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/[0.06] p-1.5 text-muted-foreground transition-colors hover:text-white"
                                >
                                  <X className="h-3.5 w-3.5" />
                                </button>
                              </>
                            ) : (
                              <>
                                <Upload className="mb-2 h-8 w-8 text-[#a78bfa] transition-transform duration-300 group-hover:-translate-y-1" />
                                <p className="text-sm font-medium text-foreground/80">Click to select or drag and drop</p>
                                <p className="mt-1 text-xs text-muted-foreground">PDF, DOC up to {MAX_MB}MB</p>
                              </>
                            )}
                            {/* visually hidden but still validated by the browser */}
                            <input
                              ref={fileRef}
                              id="resume"
                              name="resume"
                              type="file"
                              required
                              accept=".pdf,.doc,.docx"
                              className="sr-only"
                              onChange={(e) => acceptFile(e.target.files?.[0])}
                            />
                          </label>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="group mt-2 h-14 w-full gap-2 text-base font-bold shadow-[0_18px_40px_-12px_rgba(168,85,247,0.7)]"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : "Submit profile"}
                          {!loading && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
