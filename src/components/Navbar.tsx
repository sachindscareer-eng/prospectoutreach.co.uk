"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "Outreach Services" },
      { href: "/web-solutions", label: "Web Solutions" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-4 sm:px-5 sm:pt-5">
      <div className="relative w-full max-w-5xl">
        <nav
          className={cn(
            "flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-[#0d0e12]/80 px-4 py-2.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:gap-6 sm:px-6 sm:py-3"
          )}
          aria-label="Primary"
        >
          <Logo priority className="shrink-0" width={168} height={44} />

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.children && link.children.some(child => pathname === child.href));
              
              if (link.children) {
                return (
                  <div key={link.href} className="group relative">
                    <button
                      className={cn(
                        "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors lg:px-4",
                        active
                          ? "bg-white/10 text-white"
                          : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-1/2 top-full mt-2 w-48 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e12]/95 p-1.5 opacity-0 shadow-xl backdrop-blur-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 invisible translate-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                            pathname === child.href
                              ? "bg-white/10 text-white"
                              : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors lg:px-4",
                    active
                      ? "bg-white/10 text-white"
                      : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden shrink-0 md:flex md:items-center">
            <Button className="gap-1.5" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2.5 text-foreground hover:bg-white/[0.06] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e12]/95 p-2 shadow-xl shadow-black/40 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-1 py-1">
                {navLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div key={link.href} className="flex flex-col gap-1">
                        <div className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                          {link.label}
                        </div>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                              pathname === child.href
                                ? "bg-white/10 text-white"
                                : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-white/10 text-white"
                          : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="border-t border-white/10 p-2 pt-3">
                  <Button className="w-full gap-2" asChild>
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
