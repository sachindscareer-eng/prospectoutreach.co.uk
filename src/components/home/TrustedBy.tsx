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
      <div className="flex h-8 w-28 shrink-0 items-center justify-center opacity-45 brightness-0 invert transition-opacity hover:opacity-80 sm:w-32">
        <Image
          src={company.src}
          alt={company.alt || ""}
          width={128}
          height={32}
          unoptimized
          className="max-h-7 w-auto max-w-[7.5rem] object-contain"
        />
      </div>
    );
  }
  const Icon = company.icon!;
  return (
    <div className="flex shrink-0 items-center gap-2 text-foreground/70 transition-colors hover:text-foreground">
      <Icon className="h-5 w-5 text-[#a78bfa]" strokeWidth={2} />
      <span className="whitespace-nowrap text-base font-semibold tracking-tight">
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
        <div className="flex flex-col items-center gap-5 py-7 md:flex-row md:gap-8">
          {/* label */}
          <p className="shrink-0 text-center text-[11px] font-semibold uppercase leading-tight tracking-[0.15em] text-muted-foreground md:text-left">
            Trusted by
            <br className="hidden md:block" /> growing B2B companies
          </p>

          {/* divider */}
          <span className="hidden h-10 w-px shrink-0 bg-white/10 md:block" />

          {/* sliding marquee */}
          <div className="relative w-full overflow-hidden">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0a0a0f] to-transparent" />

            <div
              className="flex min-w-max items-center gap-10 motion-safe:animate-marquee sm:gap-14"
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
