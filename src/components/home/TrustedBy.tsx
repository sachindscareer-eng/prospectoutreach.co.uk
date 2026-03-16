"use client";

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

// Duplicate list for a seamless desktop marquee
const MARQUEE_LOGOS = [...LOGOS, ...LOGOS];

export function TrustedBy() {
  return (
    <section className="relative border-y border-border/60 bg-muted/30 py-12 sm:py-16 overflow-hidden">
      {/* Strong white blur/fade at edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/90 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground"
        >
          Trusted by B2B Teams
        </motion.p>

        <div className="relative mx-auto flex h-[200px] max-w-5xl items-center">
          {/* Mobile & tablet: static grid, clear and centered logos */}
          <div className="block md:hidden">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6">
              {LOGOS.map((logo) => (
                <div
                  key={logo.src}
                  className="flex h-[120px] w-[260px] items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={200}
                    unoptimized
                    className="h-[100px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: smooth horizontal marquee */}
          <div className="hidden md:block overflow-hidden">
            <div className="flex min-w-max animate-[logo-marquee_35s_linear_infinite] gap-6">
              {MARQUEE_LOGOS.map((logo, index) => (
                <div
                  key={`${logo.src}-${index}`}
                  className="flex h-[120px] w-[260px] items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={200}
                    unoptimized
                    className="h-[100px] w-auto object-contain"
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
