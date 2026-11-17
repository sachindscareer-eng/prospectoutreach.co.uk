"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LOGOS = [
  { src: "/company_logos/11.svg", alt: "Unisys logo" },
  { src: "/company_logos/2.svg", alt: "Red Hat logo" },
  { src: "/company_logos/3.svg", alt: "Zscaler logo" },
  { src: "/company_logos/4.svg", alt: "Dell logo" },
  { src: "/company_logos/5.svg", alt: "Hewlett Packard Enterprise logo" },
  { src: "/company_logos/6.svg", alt: "Hitachi logo" },
  { src: "/company_logos/7.svg", alt: "IBM logo" },
  { src: "/company_logos/8.svg", alt: "Oracle logo" },
  { src: "/company_logos/9.svg", alt: "Salesforce logo" },
  { src: "/company_logos/10.svg", alt: "Snowflake logo" },
];

const MARQUEE_LOGOS = [...LOGOS, ...LOGOS];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-background py-14 sm:py-16">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Built for the enterprise B2B landscape we sell into
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground/70">
            We run outreach into the kinds of technology and enterprise accounts
            your best-fit buyers work at.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

          <div className="overflow-hidden">
            <div
              className="flex min-w-max items-center gap-10 motion-safe:animate-marquee sm:gap-14"
              style={{ ["--marquee-duration" as string]: `${LOGOS.length * 4}s` }}
            >
              {MARQUEE_LOGOS.map((logo, index) => (
                <div
                  key={`${logo.src}-${index}`}
                  className="flex h-12 w-32 shrink-0 items-center justify-center opacity-50 brightness-0 invert transition-opacity hover:opacity-90 sm:h-14 sm:w-40"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={56}
                    unoptimized
                    className="max-h-10 w-full max-w-[9rem] object-contain sm:max-h-12"
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
