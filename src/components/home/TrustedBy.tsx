"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Zap, Cloud, Hexagon, Layers, BarChart3 } from "lucide-react";

const companies = [
  { icon: Zap, name: "Techwave" },
  { icon: Cloud, name: "Cloudify" },
  { icon: Hexagon, name: "Nexora" },
  { icon: Layers, name: "DataSync" },
  { icon: BarChart3, name: "ScaleHQ" },
];

export function TrustedBy() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-y border-white/[0.06] bg-[#0a0a0f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 py-6 md:flex-row md:justify-center md:gap-10"
        >
          {/* label */}
          <p className="text-center text-[11px] font-semibold uppercase leading-tight tracking-[0.15em] text-muted-foreground md:text-left">
            Trusted by
            <br className="hidden md:block" /> growing B2B companies
          </p>

          {/* divider */}
          <span className="hidden h-10 w-px bg-white/10 md:block" />

          {/* company strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
            {companies.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ delay: reduce ? 0 : i * 0.06, duration: 0.4 }}
                className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-foreground"
              >
                <c.icon className="h-5 w-5 text-[#a78bfa]" strokeWidth={2} />
                <span className="text-base font-semibold tracking-tight">{c.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
