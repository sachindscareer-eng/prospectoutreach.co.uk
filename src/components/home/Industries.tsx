"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Server,
  ShieldCheck,
  Landmark,
  Briefcase,
  Factory,
  HeartPulse,
  Truck,
} from "lucide-react";

const industries = [
  { icon: Code2, name: "SaaS & Software", buyers: "Founders, CROs, VPs of Sales and Marketing" },
  { icon: Server, name: "IT & Managed Services", buyers: "CIOs, IT Directors and Infrastructure leads" },
  { icon: ShieldCheck, name: "Cybersecurity", buyers: "CISOs, Security Architects and IT Risk leads" },
  { icon: Landmark, name: "Fintech & Financial Services", buyers: "CFOs, Finance Directors and Ops leaders" },
  { icon: Briefcase, name: "Professional Services", buyers: "Partners, MDs and Practice leads" },
  { icon: Factory, name: "Manufacturing", buyers: "Operations, Procurement and Plant Directors" },
  { icon: HeartPulse, name: "Healthcare & HealthTech", buyers: "Clinical, Digital and Procurement leaders" },
  { icon: Truck, name: "Logistics & Supply Chain", buyers: "Supply Chain, Fleet and Operations heads" },
];

export function Industries() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#08060f] py-16 sm:py-20">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Industries
          </span>
          <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            B2B demand generation{" "}
            <span className="bg-gradient-to-r from-[#8b6fff] to-[#c084fc] bg-clip-text text-transparent">
              for your industry
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            We build prospect lists and outreach around the decision-makers who
            actually buy in your market.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ delay: reduce ? 0 : (i % 4) * 0.07, duration: 0.45 }}
              whileHover={reduce ? undefined : { y: -5 }}
              className="group flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-[#7c5cff]/45 hover:bg-white/[0.04]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#a78bfa] transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#7c5cff] group-hover:to-[#e552ff] group-hover:text-white">
                <ind.icon className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <div>
                <h3 className="text-[15px] font-bold text-foreground">{ind.name}</h3>
                <p className="mt-1 text-[12.5px] leading-snug text-muted-foreground">
                  {ind.buyers}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
