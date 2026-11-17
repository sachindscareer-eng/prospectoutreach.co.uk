"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Instagram, ArrowRight, Twitter, RefreshCcw } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/card";
import { DoNotShareModal } from "@/components/DoNotShareModal";
import { GdprModal } from "@/components/GdprModal";
import { CcpaModal } from "@/components/CcpaModal";

const MOBILE_DISPLAY = "+91-9959953818";
const MOBILE_TEL = "+919959953818";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "#", label: "GDPR" },
  { href: "#", label: "CCPA" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/prospectoutreach/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/prospectoutreach", label: "Instagram" },
  { icon: Twitter, href: "#", label: "X" },
];

export function Footer() {
  const [isOptOutOpen, setIsOptOutOpen] = useState(false);
  const [isGdprOpen, setIsGdprOpen] = useState(false);
  const [isCcpaOpen, setIsCcpaOpen] = useState(false);

  return (
    <footer className="relative w-full overflow-hidden bg-white text-slate-800 border-t border-slate-100">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-fuchsia-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-20 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand and Addresses */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <Logo footer width={180} height={48} />
              <p className="max-w-xs text-base leading-relaxed text-slate-500 font-medium">
                Empowering businesses with <span className="text-primary font-bold">AI-driven demand generation</span> - where strategy meets precision.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="rounded-3xl bg-[#FDFCFD] border-fuchsia-200/60 p-6 shadow-sm shadow-fuchsia-500/5">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-none mb-1">Pune Office</p>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      EON Free Zone, Kharadi, Pune, Maharashtra 411014
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 lg:gap-4">
            {/* Company */}
            <Card className="bg-[#FDFCFD] border-fuchsia-200/60 p-6 shadow-sm shadow-fuchsia-500/5">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-6 rounded-full bg-primary" />
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight">Company</h4>
                </div>
                <ul className="space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between text-base font-medium text-slate-500 transition-all hover:text-primary"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Legal */}
            <Card className="bg-[#FDFCFD] border-fuchsia-200/60 p-6 shadow-sm shadow-fuchsia-500/5">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-6 rounded-full bg-primary" />
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight">Legal</h4>
                </div>
                <ul className="space-y-4">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      {link.label === "GDPR" ? (
                        <button
                          onClick={() => setIsGdprOpen(true)}
                          className="w-full group flex items-center justify-between text-base font-medium text-slate-500 transition-all hover:text-primary"
                        >
                          {link.label}
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                        </button>
                      ) : link.label === "CCPA" ? (
                        <button
                          onClick={() => setIsCcpaOpen(true)}
                          className="w-full group flex items-center justify-between text-base font-medium text-slate-500 transition-all hover:text-primary"
                        >
                          {link.label}
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between text-base font-medium text-slate-500 transition-all hover:text-primary"
                        >
                          {link.label}
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Contact and Social */}
          <div className="lg:col-span-4 space-y-8">
            {/* Get In Touch */}
            <Card className="rounded-[2rem] bg-[#FDFCFD] border-fuchsia-200/60 p-8 shadow-sm shadow-fuchsia-500/5 space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <Mail className="h-6 w-6" />
                <h4 className="text-xl font-bold tracking-tight">Get In Touch</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a href={`tel:${MOBILE_TEL}`} className="text-base font-semibold text-slate-700 hover:text-primary transition-colors">
                    {MOBILE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href="mailto:info@prospectoutreach.co.uk" className="text-base font-semibold text-slate-700 hover:text-primary transition-colors">
                    info@prospectoutreach.co.uk
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href="mailto:contact@prospectoutreach.co.uk" className="text-base font-semibold text-slate-700 hover:text-primary transition-colors">
                    contact@prospectoutreach.co.uk
                  </a>
                </li>
              </ul>
            </Card>

            {/* Follow Us */}
            <Card className="rounded-[2rem] bg-[#FDFCFD] border-fuchsia-200/60 p-6 shadow-sm shadow-fuchsia-500/5 space-y-4">
              <div className="flex items-center gap-2 text-slate-900">
                <div className="p-1 rounded bg-slate-100">
                   <RefreshCcw className="h-4 w-4 text-slate-600 hidden" />
                   <div className="w-1 h-1 rounded-full bg-slate-900" />
                </div>
                <h4 className="text-lg font-bold tracking-tight">Follow Us</h4>
              </div>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-white text-slate-400 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:text-primary hover:shadow-md"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-50 text-center text-sm font-medium text-slate-400 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>© {new Date().getFullYear()} ProspectOutreach. All rights reserved.</span>
          <span className="hidden md:inline text-slate-200">|</span>
          <button 
            onClick={() => setIsOptOutOpen(true)}
            className="hover:text-primary transition-colors underline md:no-underline"
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

