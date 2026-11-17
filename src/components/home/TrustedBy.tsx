"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
    <section className="relative overflow-hidden border-y border-primary/10 bg-gradient-to-b from-white to-muted/40 py-12 sm:py-16">
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

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8 flex flex-col items-center gap-2 text-center sm:mb-10"
        >
          <span className="rounded-full bg-gradient-to-r from-primary/15 via-fuchsia-500/15 to-cyan-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Social proof
          </span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            TRUSTED BY THE WORLD’S BEST
          </h2>
          <p className="mt-2 text-muted-foreground sm:text-lg">
            Global brands trust ProspectOutreach as their demand generation partner:
          </p>
        </motion.div>

        <div className="relative mx-auto flex h-[180px] max-w-5xl items-center">
          <Card className="w-full overflow-hidden border-border/60 bg-white/60 py-4 shadow-sm backdrop-blur-sm">
            <div
              className="trusted-marquee-inner flex min-w-max gap-4 sm:gap-5"
              style={{ animationDuration: `${LOGOS.length * 3}s` }}
            >
              {MARQUEE_LOGOS.map((logo, index) => (
                <div
                  key={`${logo.src}-${index}`}
                  className="flex h-16 w-40 shrink-0 items-center justify-center px-2 opacity-90 grayscale transition-[filter,opacity] hover:opacity-100 hover:grayscale-0 sm:h-[4.5rem] sm:w-44"
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
          </Card>
        </div>
      </div>
    </section>
  );
}
