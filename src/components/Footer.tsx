"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { DoNotShareModal } from "@/components/DoNotShareModal";
import { GdprModal } from "@/components/GdprModal";
import { CcpaModal } from "@/components/CcpaModal";

const MOBILE_DISPLAY = "+44 7915 378769";
const MOBILE_TEL = "+447915378769";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/web-solutions", label: "Web Solutions" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "#", label: "GDPR" },
  { href: "#", label: "CCPA" },
];

const offices = [
  {
    name: "USA Office",
    lines: "21 N Main St #1022, Milltown, NJ 08850, United States",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/prospectoutreach/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/prospectoutreach", label: "Instagram" },
];

export function Footer() {
  const [isOptOutOpen, setIsOptOutOpen] = useState(false);
  const [isGdprOpen, setIsGdprOpen] = useState(false);
  const [isCcpaOpen, setIsCcpaOpen] = useState(false);

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#08080a] text-foreground">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#4f7bff]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#e552ff]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand + offices */}
          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-4">
              <Logo footer width={180} height={48} />
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
                A B2B lead generation and{" "}
                <span className="text-gradient font-semibold">demand generation</span>{" "}
                agency — we find best-fit buyers and book qualified meetings your team wants to show up to.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {offices.map((office) => (
                <div
                  key={office.name}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="mb-1 text-sm font-semibold text-foreground">
                        {office.name}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {office.lines}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company links */}
          <nav className="lg:col-span-2" aria-label="Footer company links">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-accent-gradient" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Company
              </h2>
            </div>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal links */}
          <nav className="lg:col-span-2" aria-label="Footer legal links">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-accent-gradient" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Legal
              </h2>
            </div>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  {link.label === "GDPR" ? (
                    <button
                      onClick={() => setIsGdprOpen(true)}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </button>
                  ) : link.label === "CCPA" ? (
                    <button
                      onClick={() => setIsCcpaOpen(true)}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + social */}
          <div className="space-y-6 lg:col-span-3">
            <div className="mb-1 flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-accent-gradient" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Get in touch
              </h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:${MOBILE_TEL}`}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {MOBILE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:info@prospectoutreach.co.uk"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  info@prospectoutreach.co.uk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:contact@prospectoutreach.co.uk"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  contact@prospectoutreach.co.uk
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-8 text-sm text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} ProspectOutreach. All rights reserved.</span>
          <button
            onClick={() => setIsOptOutOpen(true)}
            className="underline transition-colors hover:text-foreground md:no-underline md:hover:underline"
          >
            Do Not Share or Sell My Information
          </button>
        </div>
      </div>

      <DoNotShareModal isOpen={isOptOutOpen} onClose={() => setIsOptOutOpen(false)} />
      <GdprModal isOpen={isGdprOpen} onClose={() => setIsGdprOpen(false)} />
      <CcpaModal isOpen={isCcpaOpen} onClose={() => setIsCcpaOpen(false)} />
    </footer>
  );
}
