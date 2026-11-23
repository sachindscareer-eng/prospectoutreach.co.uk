import { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

const SITE_URL = "https://prospectoutreach.co.uk";

export const metadata: Metadata = {
  // the root layout's title template appends " | ProspectOutreach"
  title: "Services",
  description:
    "B2B demand generation services: account-based marketing, content syndication, intent-based demand generation, lead qualification, appointment setting and web solutions.",
  alternates: { canonical: `${SITE_URL}/services` },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/services#list`,
  name: "ProspectOutreach services",
  itemListElement: [
    ["abm", "Account-Based Marketing (ABM)"],
    ["syndication", "Global Content Syndication"],
    ["intent", "Intent-Based Demand Generation"],
    ["qualification", "Full-Funnel Lead Qualification"],
    ["web-solutions", "Web & Software Solutions"],
  ].map(([id, name], i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name,
      url: `${SITE_URL}/services#${id}`,
      provider: { "@id": `${SITE_URL}/#organization` },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
