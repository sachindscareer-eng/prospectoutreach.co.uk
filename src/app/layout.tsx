import { offices } from "@/lib/offices";
import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";
import { SpotlightTracker } from "@/components/interactive";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

// Display font for big headings (still Roboto family for consistency)
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://prospectoutreach.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "B2B Demand Generation Agency UK | ProspectOutreach",
    template: "%s | ProspectOutreach",
  },
  description:
    "ProspectOutreach is a B2B demand generation and sales outreach agency. Lead generation, cold email and LinkedIn outreach, and appointment setting that books qualified meetings.",
  applicationName: "ProspectOutreach",
  authors: [{ name: "ProspectOutreach" }],
  keywords: [
    "b2b demand generation agency",
    "b2b lead generation agency",
    "sales outreach agency",
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
    title: "B2B Demand Generation Agency UK | ProspectOutreach",
    description:
      "B2B demand generation and sales outreach agency. We find best-fit buyers and book qualified meetings your team actually wants to show up to.",
    images: [
      {
        url: "/hero_section.jpg",
        width: 1600,
        height: 1000,
        alt: "ProspectOutreach — B2B demand generation agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Demand Generation Agency UK | ProspectOutreach",
    description:
      "B2B demand generation and sales outreach agency. Qualified meetings, not vanity metrics.",
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
        "B2B demand generation and sales outreach agency running cold email, LinkedIn outreach and appointment setting.",
      sameAs: [
        "https://www.linkedin.com/company/prospectoutreach/",
        "https://www.instagram.com/prospectoutreach",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+447915378769",
          contactType: "sales",
          areaServed: ["GB", "US"],
          availableLanguage: ["en"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+919959953818",
          contactType: "sales",
          areaServed: ["IN"],
          availableLanguage: ["en"],
        },
      ],
      address: offices.map((o) => ({ "@type": "PostalAddress", ...o.schema })),
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
      className={cn(roboto.variable, robotoCondensed.variable)}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <ScrollProgress />
        <CursorGlow />
        <SpotlightTracker />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
