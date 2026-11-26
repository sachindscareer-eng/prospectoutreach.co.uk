"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Megaphone,
  Code2,
  BookOpen,
  BookA,
  Linkedin,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Magnetic } from "@/components/interactive";
import { cn } from "@/lib/utils";

type Child = { href: string; label: string; desc: string; icon: LucideIcon; external?: boolean };
type NavItem = { href: string; label: string; children?: Child[] };

const navLinks: NavItem[] = [
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "Outreach Services", desc: "ABM, intent data, syndication & appointment setting", icon: Megaphone },
      { href: "/web-solutions", label: "Web Solutions", desc: "Custom websites, web apps & dashboards", icon: Code2 },
    ],
  },
  {
    href: "/blog",
    label: "Resources",
    children: [
      { href: "/blog", label: "Blog", desc: "Guides on demand gen, intent data & outreach", icon: BookOpen },
      { href: "/glossary", label: "Glossary", desc: "B2B marketing terms explained simply", icon: BookA },
      {
        href: "https://www.linkedin.com/newsletters/7449502823119056896/",
        label: "Newsletter",
        desc: "Subscribe to our LinkedIn newsletter",
        icon: Linkedin,
        external: true,
      },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

/** Top-level item is active when the current path is its own page. */
const isActive = (item: NavItem, pathname: string) =>
  pathname === item.href ||
  (item.children?.some((c) => !c.external && c.href !== "/" && pathname.startsWith(c.href.split("#")[0])) ?? false);

export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // compact, more solid bar once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const activeHref = navLinks.find((l) => isActive(l, pathname))?.href ?? null;
  // the pill follows the hovered item, and rests on the active page otherwise
  const pillOn = hovered ?? activeHref;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="relative w-full max-w-6xl">
        <nav
          aria-label="Primary"
          className={cn(
            "relative flex w-full items-center justify-between gap-3 rounded-full border px-3 transition-all duration-300 sm:gap-4 sm:px-4",
            scrolled
              ? "border-white/[0.12] bg-[#0b0a12]/85 py-2 shadow-[0_12px_40px_-14px_rgba(0,0,0,0.9),0_0_0_1px_rgba(124,92,255,0.08)] backdrop-blur-2xl"
              : "border-white/[0.08] bg-[#0b0a12]/45 py-2.5 backdrop-blur-xl"
          )}
        >
          {/* gradient hairline along the bottom edge */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-10 -bottom-px h-px bg-gradient-to-r from-transparent via-[#8b6fff]/60 to-transparent"
          />

          <div className="shrink-0 pl-2">
            <Logo priority width={168} height={44} />
          </div>

          {/* desktop links */}
          <ul
            className="hidden items-center gap-0.5 lg:flex"
            onPointerLeave={() => setHovered(null)}
          >
            {navLinks.map((link) => {
              const active = activeHref === link.href;
              const open = openMenu === link.label;
              const itemCls = cn(
                "relative flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors duration-200",
                active ? "text-white" : "text-white/60 hover:text-white"
              );
              const pill =
                pillOn === link.href ? (
                  <motion.span
                    layoutId="nav-pill"
                    transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                    className={cn(
                      "absolute inset-0 -z-10 rounded-full",
                      active ? "bg-white/[0.10] ring-1 ring-white/10" : "bg-white/[0.06]"
                    )}
                  />
                ) : null;

              if (!link.children) {
                return (
                  <li key={link.label} onPointerEnter={() => setHovered(link.href)}>
                    <Link href={link.href} className={itemCls} aria-current={active ? "page" : undefined}>
                      {pill}
                      {link.label}
                      {active && (
                        <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8b6fff] to-[#e552ff]" />
                      )}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={link.label}
                  className="relative"
                  onPointerEnter={() => {
                    setHovered(link.href);
                    setOpenMenu(link.label);
                  }}
                  onPointerLeave={() => setOpenMenu(null)}
                  onFocus={() => setOpenMenu(link.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null);
                  }}
                >
                  <button
                    type="button"
                    className={itemCls}
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(open ? null : link.label)}
                  >
                    {pill}
                    {link.label}
                    <ChevronDown className={cn("h-3.5 w-3.5 opacity-70 transition-transform duration-200", open && "rotate-180")} />
                    {active && (
                      <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8b6fff] to-[#e552ff]" />
                    )}
                  </button>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, y: reduce ? 0 : 8, scale: reduce ? 1 : 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: reduce ? 0 : 6, scale: reduce ? 1 : 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-1/2 top-full w-[19rem] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e0c16]/95 p-1.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(124,92,255,0.1)] backdrop-blur-2xl">
                          {link.children.map((child) => {
                            const childActive = pathname === child.href.split("#")[0] && !child.href.includes("#");
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className={cn(
                                  "group/item flex items-start gap-3 rounded-xl p-3 transition-colors",
                                  childActive ? "bg-white/[0.07]" : "hover:bg-white/[0.05]"
                                )}
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#a78bfa] transition-all duration-300 group-hover/item:border-transparent group-hover/item:bg-gradient-to-br group-hover/item:from-[#7c5cff] group-hover/item:to-[#e552ff] group-hover/item:text-white">
                                  <child.icon className="h-4 w-4" />
                                </span>
                                <span className="min-w-0">
                                  <span className="flex items-center gap-1 text-[13.5px] font-semibold text-white">
                                    {child.label}
                                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                                  </span>
                                  <span className="mt-0.5 block text-[12px] leading-snug text-white/50">{child.desc}</span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="hidden shrink-0 lg:block">
            <Magnetic strength={0.25}>
              <Button className="group h-11 gap-1.5 px-5 shadow-[0_10px_30px_-10px_rgba(168,85,247,0.8)]" asChild>
                <Link href="/contact">
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </Magnetic>
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-full z-50 mt-2 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl border border-white/10 bg-[#0e0c16]/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col gap-1 py-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label} className="flex flex-col gap-1">
                      <div className="px-4 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                        {link.label}
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors",
                            pathname === child.href ? "bg-white/[0.08] text-white" : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                          )}
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-[#a78bfa]">
                            <child.icon className="h-4 w-4" />
                          </span>
                          <span className="text-[15px] font-medium">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-[15px] font-medium transition-colors",
                        pathname === link.href ? "bg-white/[0.08] text-white" : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="mt-1 border-t border-white/10 p-2 pt-3">
                  <Button className="h-12 w-full gap-2" asChild>
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Book a Strategy Call
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
