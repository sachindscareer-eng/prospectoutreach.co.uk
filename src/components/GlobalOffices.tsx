"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import { offices } from "@/lib/offices";

const GRAD = "bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent";

/** "Our Global Presence" section — three office cards. */
export function GlobalOffices({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <section className={`relative overflow-hidden bg-[#08060f] py-20 sm:py-24 ${className}`}>
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-[#7c5cff]/10 blur-[120px]" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "120px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our global offices</span>
          <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Global <span className={GRAD}>Presence</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Serving B2B clients across North America, EMEA and APAC from offices in India, the United Kingdom and the United States.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
          {offices.map((o, i) => {
            const head = o.id === "india";
            return (
              <motion.address
                key={o.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "120px" }}
                transition={{ delay: reduce ? 0 : i * 0.1, duration: 0.55 }}
                data-spotlight
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border p-7 not-italic transition-all duration-300 hover:-translate-y-1 ${
                  head
                    ? "border-[#7c5cff]/40 bg-gradient-to-b from-[#7c5cff]/[0.12] to-white/[0.01]"
                    : "border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] hover:border-[#7c5cff]/40"
                }`}
              >
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#4f7bff] via-[#a855f7] to-[#e552ff] transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#e552ff] text-white shadow-lg ring-1 ring-white/20">
                    {head ? <Building2 className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
                  </span>
                  <span className="text-2xl" aria-hidden>{o.flag}</span>
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#a78bfa]">{o.label}</p>
                <h3 className="mt-1.5 font-syne text-xl font-bold text-foreground">
                  {o.city}, {o.country}
                </h3>
                <div className="mt-4 space-y-0.5 border-t border-white/[0.08] pt-4 text-sm leading-relaxed text-muted-foreground">
                  {o.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </motion.address>
            );
          })}
        </div>
      </div>
    </section>
  );
}
