"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Normalized client logos – all served from /public/company_logos
const LOGOS = [
  { src: "/company_logos/1-removebg-preview.png", alt: "Unisys" },
  { src: "/company_logos/2-removebg-preview.png", alt: "Red Hat" },
  { src: "/company_logos/3-removebg-preview.png", alt: "Zscaler" },
  { src: "/company_logos/4-removebg-preview.png", alt: "Dell" },
  { src: "/company_logos/5-removebg-preview.png", alt: "Hewlett Packard Enterprise" },
  { src: "/company_logos/6-removebg-preview.png", alt: "Hitachi" },
  { src: "/company_logos/7-removebg-preview.png", alt: "IBM" },
  { src: "/company_logos/8-removebg-preview.png", alt: "Oracle" },
  { src: "/company_logos/9-removebg-preview.png", alt: "Salesforce" },
  { src: "/company_logos/10-removebg-preview.png", alt: "Snowflake" },
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
                  className="flex h-[72px] w-[180px] items-center justify-center sm:h-[84px] sm:w-[210px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={200}
                    unoptimized
                    className="h-[56px] w-auto object-contain sm:h-[70px]"
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
