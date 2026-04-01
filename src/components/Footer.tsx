import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";

const MOBILE_DISPLAY = "+91-9959953818";
const MOBILE_TEL = "+919959953818";
import { Logo } from "@/components/Logo";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Blog" },
];

const serviceLinks = [
  { href: "/services#lead-gen", label: "Lead Generation" },
  { href: "/services#cold-email", label: "Cold Email" },
  { href: "/services#linkedin", label: "LinkedIn Outreach" },
  { href: "/services#crm", label: "CRM Integration" },
];

const linkedInUrl = "https://www.linkedin.com/company/prospectoutreach/?viewAsMember=true";
const instagramUrl = "https://www.instagram.com/prospectoutreach?igsh=c3k3ZTYzMnUwZHJ6";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-neutral-800">
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-fuchsia-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 border-b border-slate-200/80 pb-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo footer width={170} height={44} />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              Empowering businesses with AI-driven demand generation - where
              strategy meets precision.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Pune Office
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Kharadi, Pune, Maharashtra
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-fuchsia-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Get In Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="space-y-1">
                  <a
                    href="mailto:sales@prospectoutreach.co.uk"
                    className="block transition-colors hover:text-primary"
                  >
                    sales@prospectoutreach.co.uk
                  </a>
                  <a
                    href="mailto:info@prospectoutreach.co.uk"
                    className="block transition-colors hover:text-primary"
                  >
                    info@prospectoutreach.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-600">
                <Phone className="h-4 w-4 shrink-0 text-cyan-600" />
                <a href={`tel:${MOBILE_TEL}`} className="transition-colors hover:text-primary">
                  {MOBILE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-600">
                <MapPin className="h-4 w-4 shrink-0 text-fuchsia-600" />
                <span>Kharadi, Pune</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-primary/20 bg-white p-2 text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/5"
                aria-label="ProspectOutreach on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-fuchsia-500/20 bg-white p-2 text-fuchsia-700 transition-all hover:-translate-y-0.5 hover:bg-fuchsia-500/5"
                aria-label="ProspectOutreach on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-7 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ProspectOutreach. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
