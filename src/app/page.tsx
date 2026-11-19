import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { VideoSection } from "@/components/home/VideoSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Industries } from "@/components/home/Industries";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Faq } from "@/components/home/Faq";
import { faqs } from "@/components/home/faq-data";
import { CTASection } from "@/components/home/CTASection";

const SITE_URL = "https://prospectoutreach.co.uk";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      serviceType: "B2B Demand Generation & Sales Outreach",
      name: "B2B Demand Generation & Appointment Setting",
      description:
        "Full-funnel B2B demand generation: ICP research, cold email and LinkedIn outreach, intent-based demand generation and qualified appointment setting.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: ["United Kingdom", "United States", "Global"],
      url: SITE_URL,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "B2B demand generation services",
        itemListElement: [
          "Account-Based Marketing (ABM)",
          "Intent-Based Demand Generation",
          "Content Syndication",
          "B2B Appointment Setting",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroSection />
      <TrustedBy />
      <VideoSection />
      <ServicesOverview />
      <Industries />
      <HowItWorks />
      <WhyChoose />
      <Faq />
      <CTASection />
    </>
  );
}
