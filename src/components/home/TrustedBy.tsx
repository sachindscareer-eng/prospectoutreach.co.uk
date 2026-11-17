"use client";

import Image from "next/image";
import { Zap, Cloud, Hexagon, Layers, BarChart3 } from "lucide-react";

// Text-style companies (new set)
const textCompanies = [
  { icon: Zap, name: "Techwave" },
  { icon: Cloud, name: "Cloudify" },
  { icon: Hexagon, name: "Nexora" },
  { icon: Layers, name: "DataSync" },
  { icon: BarChart3, name: "ScaleHQ" },
];

// Brand SVG logos (old set)
const brandLogos = [
  { src: "/company_logos/11.svg", alt: "Unisys logo" },
  { src: "/company_logos/3.svg", alt: "Zscaler logo" },
  { src: "/company_logos/4.svg", alt: "Dell logo" },
  { src: "/company_logos/5.svg", alt: "Hewlett Packard Enterprise logo" },
  { src: "/company_logos/7.svg", alt: "IBM logo" },
  { src: "/company_logos/8.svg", alt: "Oracle logo" },
  { src: "/company_logos/2.svg", alt: "Red Hat logo" },
  { src: "/company_logos/10.svg", alt: "Snowflake logo" },
];

function TrackItem({
  company,
}: {
  company: { icon?: typeof Zap; name?: string; src?: string; alt?: string };
}) {
  if (company.src) {
    return (
      // fixed-size box so every logo occupies the same space
      <div className="flex h-10 w-36 shrink-0 items-center justify-center sm:w-40">
        <Image
          src={company.src}
          alt={company.alt || ""}
          width={170}
          height={40}
          unoptimized
          // grayscale + dim by default, full original colour on hover
          className="max-h-9 w-auto max-w-[9rem] object-contain opacity-60 grayscale brightness-150 transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:brightness-100"
        />
      </div>
    );
  }
  const Icon = company.icon!;
  return (
    // same fixed box for text companies too
    <div className="group flex h-10 w-36 shrink-0 items-center justify-center gap-2.5 opacity-70 transition-opacity hover:opacity-100 sm:w-40">
      <Icon className="h-7 w-7 text-[#a78bfa] transition-colors group-hover:text-[#c084fc]" strokeWidth={2} />
      <span className="whitespace-nowrap text-xl font-semibold tracking-tight text-foreground/80 transition-colors group-hover:text-foreground">
        {company.name}
      </span>
    </div>
  );
}

export function TrustedBy() {
  // combine both sets, duplicated for seamless loop
  const all = [...textCompanies, ...brandLogos];
  const track = [...all, ...all];

  return (
    <section className="relative border-y border-white/[0.06] bg-[#0a0a0f]">
      {/* aligned to the same container width as the banner */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 py-9 md:flex-row md:gap-10">
          {/* label */}
          <p className="shrink-0 text-center text-[13px] font-semibold uppercase leading-tight tracking-[0.15em] text-muted-foreground md:text-left">
            Trusted by
            <br className="hidden md:block" /> growing B2B companies
          </p>

          {/* divider */}
          <span className="hidden h-12 w-px shrink-0 bg-white/10 md:block" />

          {/* sliding marquee */}
          <div className="relative w-full overflow-hidden">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0a0a0f] to-transparent" />

            <div
              className="flex min-w-max items-center gap-12 motion-safe:animate-marquee sm:gap-16"
              style={{ ["--marquee-duration" as string]: `${track.length * 2.2}s` }}
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
