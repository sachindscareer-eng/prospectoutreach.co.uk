import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { VideoSection } from "@/components/home/VideoSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
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
      serviceType: "B2B Lead Generation & Demand Generation",
      name: "B2B Lead Generation & Appointment Setting",
      description:
        "Full-funnel B2B lead generation: ICP research, cold email and LinkedIn outreach, intent-based demand generation and qualified appointment setting.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: ["United Kingdom", "United States", "Global"],
      url: SITE_URL,
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
      <HowItWorks />
      <Faq />
      <CTASection />
    </>
  );
}
