"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSpotlight } from "@/hooks/use-spotlight";

export function CTASection() {
  const {
    position,
    isHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useSpotlight();

  return (
    <section className="bg-background pb-24 pt-4 sm:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          {/* gradient fill */}
          <div className="absolute inset-0 -z-10 bg-accent-gradient opacity-90" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
          {/* spotlight */}
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(700px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.14), transparent 40%)`,
            }}
          />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/85">
              Ready when you are
            </p>
            <h2 className="mt-3 font-syne text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your next deal is already out there.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
              Let ProspectOutreach find it, reach it, and bring it to your team
              ready to close.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 border-0 bg-white text-[#0a0a0b] shadow-lg hover:bg-white/95 hover:text-[#0a0a0b]"
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
                className="border border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                asChild
              >
                <Link href="/contact?demo=1">Talk to sales</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
