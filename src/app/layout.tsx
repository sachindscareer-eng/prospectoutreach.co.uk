import type { Metadata, Viewport } from "next";
import { Inter, Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://prospectoutreach.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "B2B Lead Generation Agency UK | ProspectOutreach",
    template: "%s | ProspectOutreach",
  },
  description:
    "ProspectOutreach is a B2B lead generation and demand generation agency. We find best-fit buyers, run cold email and LinkedIn outreach, and book qualified meetings.",
  applicationName: "ProspectOutreach",
  authors: [{ name: "ProspectOutreach" }],
  keywords: [
    "b2b lead generation agency",
    "demand generation agency",
    "appointment setting",
    "cold email outreach",
    "LinkedIn outreach",
    "B2B SaaS lead generation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "ProspectOutreach",
    title: "B2B Lead Generation Agency UK | ProspectOutreach",
    description:
      "B2B lead generation and demand generation agency. We find best-fit buyers and book qualified meetings your team actually wants to show up to.",
    images: [
      {
        url: "/hero_section.jpg",
        width: 1600,
        height: 1000,
        alt: "ProspectOutreach — B2B lead generation agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Lead Generation Agency UK | ProspectOutreach",
    description:
      "B2B lead generation and demand generation agency. Qualified meetings, not vanity metrics.",
    images: ["/hero_section.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/icon.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/icon.png?v=2",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// Organization + WebSite JSON-LD (valid site-wide)
const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "ProspectOutreach",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      description:
        "B2B lead generation and demand generation agency running cold email, LinkedIn outreach and appointment setting.",
      sameAs: [
        "https://www.linkedin.com/company/prospectoutreach/",
        "https://www.instagram.com/prospectoutreach",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9959953818",
          contactType: "sales",
          areaServed: ["GB", "US", "IN"],
          availableLanguage: ["en"],
        },
      ],
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          postalCode: "411014",
          streetAddress: "EON Free Zone, Kharadi",
          addressCountry: "IN",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ProspectOutreach",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={cn(inter.variable, syne.variable, dmSans.variable)}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
