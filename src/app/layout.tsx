import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ProspectOutreach | B2B Lead Generation & Sales Outreach",
  description:
    "ProspectOutreach helps B2B companies generate qualified leads, automate outreach, and close more deals. AI-powered targeting, verified data, and automated workflows.",
  keywords: ["B2B", "lead generation", "sales outreach", "CRM", "automation"],
  openGraph: {
    title: "ProspectOutreach | B2B Lead Generation & Sales Outreach",
    description:
      "Generate qualified leads, automate outreach, and close more deals.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=1" },
      { url: "/icon.png?v=1", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=1",
    apple: "/icon.png?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, syne.variable, dmSans.variable)}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
