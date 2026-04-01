"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-primary px-6 py-16 text-center shadow-2xl shadow-fuchsia-500/25 sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-2xl" />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='52' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M0 0h26v26H0V0zm26 26h26v26H26V26z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "52px 52px",
            }}
          />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/85">
              Ready when you are
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start generating B2B leads today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
              Join teams using ProspectOutreach to fill the pipeline and close
              more deals—without sacrificing quality.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 border-0 bg-white text-primary shadow-lg hover:bg-white/95"
                asChild
              >
                <Link href="/contact">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/90 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                asChild
              >
                <Link href="/contact?demo=1">Contact sales</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
