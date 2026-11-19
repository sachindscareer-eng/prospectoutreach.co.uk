"use client";

import Image from "next/image";
import {
  Zap,
  Cloud,
  Hexagon,
  Layers,
  BarChart3,
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
