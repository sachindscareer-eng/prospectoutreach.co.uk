"use client";

import { motion } from "framer-motion";

const logos = [
  "Acme Corp",
  "TechFlow",
  "DataSync",
  "CloudBase",
  "ScaleUp",
  "GrowthLabs",
];

export function TrustedBy() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground"
        >
          Trusted by B2B Teams
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="text-lg font-semibold text-muted-foreground/80 transition-colors hover:text-foreground"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
