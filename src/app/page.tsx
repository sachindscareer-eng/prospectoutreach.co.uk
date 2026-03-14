import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChoose } from "@/components/home/WhyChoose";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ServicesOverview />
      <HowItWorks />
      <WhyChoose />
      <CTASection />
    </>
  );
}
