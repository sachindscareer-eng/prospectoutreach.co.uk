import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

const SITE_URL = "https://prospectoutreach.co.uk";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About ProspectOutreach: a global B2B demand generation partner with 9 years of expertise, a 75M+ professional network and teams in the USA and India.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#about`,
  url: `${SITE_URL}/about`,
  name: "About ProspectOutreach",
  description:
    "ProspectOutreach is a global B2B demand generation partner dedicated to driving sustainable revenue for leading tech companies and publishers.",
  about: { "@id": `${SITE_URL}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutContent />
    </>
  );
}
