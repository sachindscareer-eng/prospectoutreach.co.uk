"use client";

import {
  Zap,
  Cloud,
  Hexagon,
  Layers,
  BarChart3,
  Shield,
  Boxes,
  Globe,
  Rocket,
  CircuitBoard,
} from "lucide-react";

// Uniform text-style companies — all identical treatment (icon + name), one colour, equal size
const companies = [
  { icon: Zap, name: "Techwave" },
  { icon: Cloud, name: "Cloudify" },
  { icon: Hexagon, name: "Nexora" },
  { icon: Layers, name: "DataSync" },
  { icon: BarChart3, name: "ScaleHQ" },
  { icon: Shield, name: "SecureNet" },
  { icon: Boxes, name: "Stackly" },
  { icon: Globe, name: "Globex" },
  { icon: Rocket, name: "Launchpad" },
  { icon: CircuitBoard, name: "Nodeflow" },
];

function TrackItem({
  company,
}: {
  company: { icon: typeof Zap; name: string };
}) {
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

          {/* sliding marquee — pauses on hover */}
          <div className="group/marquee relative w-full overflow-hidden">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0a0a0f] to-transparent" />

            <div
              className="flex min-w-max items-center gap-14 motion-safe:animate-marquee group-hover/marquee:[animation-play-state:paused] sm:gap-20"
              style={{ ["--marquee-duration" as string]: `${track.length * 2.4}s` }}
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
