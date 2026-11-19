"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Zap,
  Cloud,
  Hexagon,
  Layers,
  BarChart3,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Cpu,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Company =
  | { icon: typeof Zap; name: string }
  | { src: string; alt: string };

// Mixed set: text-style companies + brand SVG logos (the original ones), all shown as white silhouettes
const companies: Company[] = [
  { icon: Zap, name: "Techwave" },
  { src: "/company_logos/4.svg", alt: "Hewlett Packard Enterprise logo" },
  { icon: Cloud, name: "Cloudify" },
  { src: "/company_logos/8.svg", alt: "Red Hat logo" },
  { icon: Hexagon, name: "Nexora" },
  { src: "/company_logos/2.svg", alt: "Zscaler logo" },
  { icon: Layers, name: "DataSync" },
  { src: "/company_logos/10.svg", alt: "Snowflake logo" },
  { icon: BarChart3, name: "ScaleHQ" },
  { src: "/company_logos/3.svg", alt: "Dell logo" },
  { src: "/company_logos/11.svg", alt: "Unisys logo" },
  { icon: ShieldCheck, name: "Kaspersky" },
  { icon: ShoppingCart, name: "QueueBuster" },
  { icon: Building2, name: "Honeywell" },
  { icon: Sparkles, name: "Katalist.ai" },
  { icon: Cpu, name: "TMB Systems" },
];

function TrackItem({ company }: { company: Company }) {
  if ("src" in company) {
    return (
      // equal-size box; pure white silhouette, original colour + zoom on hover
      // SVG canvases have large transparent padding, so render the image larger than the
      // box (overflow is transparent) to make the visible mark match the text logos
      <div className="flex h-12 w-48 shrink-0 items-center justify-center overflow-visible">
        <Image
          src={company.src}
          alt={company.alt}
          draggable={false}
          width={224}
          height={112}
          unoptimized
          className="h-[60px] w-[120px] max-w-none object-contain brightness-0 invert transition-all duration-300 hover:scale-110 hover:brightness-100 hover:invert-0"
        />
      </div>
    );
  }
  const Icon = company.icon;
  return (
    <div className="group flex h-12 w-48 shrink-0 items-center justify-center gap-3 text-white transition-transform duration-300 hover:scale-110">
      <Icon className="h-7 w-7 text-white transition-colors group-hover:text-[#c084fc]" strokeWidth={2} />
      <span className="whitespace-nowrap text-xl font-semibold tracking-tight transition-colors group-hover:text-[#c084fc]">
        {company.name}
      </span>
    </div>
  );
}

export function TrustedBy() {
  const track = [...companies, ...companies];
  const trackRef = useRef<HTMLDivElement>(null);
  const nudgeRef = useRef<(dir: number) => void>(() => {});

  // Auto-slides like before, but can also be dragged (mouse), swiped (touch) or moved with the arrows.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DURATION = track.length * 2.4; // seconds for one full loop (same pace as the old CSS marquee)
    let half = el.scrollWidth / 2;
    let offset = 0;
    let velocity = 0; // px/frame fling after release
    let target: number | null = null; // arrow-button glide target
    let dragging = false;
    let hovered = false;
    let startX = 0;
    let startOffset = 0;
    let lastX = 0;
    let lastT = 0;
    let raf = 0;
    let prev = performance.now();

    const wrap = () => {
      if (half <= 0) return;
      while (offset <= -half) { offset += half; if (target !== null) target += half; }
      while (offset > 0) { offset -= half; if (target !== null) target -= half; }
    };
    const paint = () => { el.style.transform = `translate3d(${offset}px,0,0)`; };

    const loop = (now: number) => {
      const dt = Math.min(64, now - prev) / 1000;
      prev = now;
      if (!dragging) {
        if (target !== null) {
          offset += (target - offset) * 0.18;
          if (Math.abs(target - offset) < 0.5) { offset = target; target = null; }
        } else if (Math.abs(velocity) > 0.2) {
          offset += velocity;
          velocity *= 0.94;
        } else if (!hovered && !reduce) {
          offset -= (half / DURATION) * dt;
        }
      }
      wrap();
      paint();
      raf = requestAnimationFrame(loop);
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      target = null;
      velocity = 0;
      startX = lastX = e.clientX;
      startOffset = offset;
      lastT = performance.now();
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const now = performance.now();
      offset = startOffset + (e.clientX - startX);
      const dtm = Math.max(1, now - lastT);
      velocity = ((e.clientX - lastX) / dtm) * 16; // px per ~frame
      lastX = e.clientX;
      lastT = now;
      wrap();
    };
    const onUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      el.style.cursor = "";
      velocity = Math.max(-40, Math.min(40, velocity));
    };
    const onEnter = () => { hovered = true; };
    const onLeave = () => { hovered = false; };
    const onResize = () => { half = el.scrollWidth / 2; };

    nudgeRef.current = (dir: number) => {
      velocity = 0;
      target = (target ?? offset) - dir * 260;
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [track.length]);

  const arrow =
    "absolute top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0f]/80 text-white/80 backdrop-blur transition-all hover:border-[#7c5cff]/60 hover:bg-[#7c5cff]/20 hover:text-white sm:flex";

  return (
    <section className="relative border-y border-white/[0.06] bg-[#0a0a0f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 py-9 md:flex-row md:gap-10">
          {/* label */}
          <p className="shrink-0 text-center text-[13px] font-semibold uppercase leading-tight tracking-[0.15em] text-muted-foreground md:text-left">
            Trusted by
            <br className="hidden md:block" /> growing B2B companies
          </p>

          {/* divider */}
          <span className="hidden h-12 w-px shrink-0 bg-white/10 md:block" />

          {/* sliding strip: auto-plays, pauses on hover, drag / swipe / arrows to move it manually */}
          <div className="relative w-full overflow-hidden">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0f] to-transparent" />

            <button type="button" aria-label="Previous logos" onClick={() => nudgeRef.current(-1)} className={`${arrow} left-1`}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" aria-label="Next logos" onClick={() => nudgeRef.current(1)} className={`${arrow} right-1`}>
              <ChevronRight className="h-4 w-4" />
            </button>

            <div
              ref={trackRef}
              className="flex min-w-max cursor-grab select-none items-center gap-14 will-change-transform sm:gap-20"
              style={{ touchAction: "pan-y" }}
            >
              {track.map((c, i) => (
                <TrackItem key={i} company={c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
