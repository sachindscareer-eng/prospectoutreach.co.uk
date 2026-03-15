import Link from "next/link";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
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

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo footer width={160} height={42} />
            <p className="mt-3 text-sm text-muted-foreground">
              B2B lead generation and sales outreach automation for growing teams.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Services</h4>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="mailto:sales@prospectoutreach.co.uk" className="block hover:text-primary">
                    sales@prospectoutreach.co.uk
                  </a>
                  <a href="mailto:info@prospectoutreach.co.uk" className="block hover:text-primary">
                    info@prospectoutreach.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Kharadi, Pune</span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-muted-foreground transition-colors hover:text-primary"
                aria-label="ProspectOutreach on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ProspectOutreach. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
