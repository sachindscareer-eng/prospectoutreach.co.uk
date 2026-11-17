"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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

export function TrustedBy() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-background py-12 sm:py-14">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mx-auto mb-9 max-w-2xl text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          Built for the enterprise B2B landscape we sell into
        </motion.p>

        {/* centered, symmetric logo grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {LOGOS.map((logo, i) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ delay: reduce ? 0 : i * 0.04, duration: 0.4 }}
              className="flex h-10 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={44}
                unoptimized
                className="max-h-9 w-auto max-w-[8.5rem] object-contain opacity-50 brightness-0 invert transition-opacity duration-300 hover:opacity-90"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
