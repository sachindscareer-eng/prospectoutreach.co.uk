import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
