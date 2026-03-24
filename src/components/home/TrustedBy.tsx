"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Normalized client logos – SVGs in /public/company_logos (11.svg = Unisys; no 1.svg)
const LOGOS = [
  { src: "/company_logos/11.svg", alt: "Unisys" },
  { src: "/company_logos/2.svg", alt: "Red Hat" },
  { src: "/company_logos/3.svg", alt: "Zscaler" },
  { src: "/company_logos/4.svg", alt: "Dell" },
  { src: "/company_logos/5.svg", alt: "Hewlett Packard Enterprise" },
  { src: "/company_logos/6.svg", alt: "Hitachi" },
  { src: "/company_logos/7.svg", alt: "IBM" },
  { src: "/company_logos/8.svg", alt: "Oracle" },
  { src: "/company_logos/9.svg", alt: "Salesforce" },
  { src: "/company_logos/10.svg", alt: "Snowflake" },
];

const MARQUEE_LOGOS = [...LOGOS, ...LOGOS];

export function TrustedBy() {
  return (
    <section className="relative border-y border-border/60 bg-muted/30 py-12 sm:py-16 overflow-hidden">
      <style jsx>{`
        .trusted-marquee-inner {
          animation: trustedMarqueeScroll linear infinite;
        }
        @keyframes trustedMarqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Gradient fade edge effect on marquee */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/95 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/95 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8 text-center text-lg font-medium uppercase tracking-wider text-muted-foreground"
        >
          Trusted by B2B Teams
        </motion.p>

        <div className="relative mx-auto flex h-[180px] max-w-5xl items-center">
          {/* Mobile & desktop: smooth horizontal marquee, fully responsive logos */}
          <div className="w-full overflow-hidden">
            <div
              className="trusted-marquee-inner flex min-w-max gap-4 sm:gap-5"
              style={{ animationDuration: `${LOGOS.length * 3}s` }}
            >
              {MARQUEE_LOGOS.map((logo, index) => (
                <div
                  key={`${logo.src}-${index}`}
                  className="flex h-16 w-40 shrink-0 items-center justify-center px-2 sm:h-[4.5rem] sm:w-44"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={72}
                    unoptimized
                    className="max-h-12 w-full max-w-[9.5rem] object-contain object-center sm:max-h-14 sm:max-w-[10.5rem]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
