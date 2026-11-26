import type { Metadata } from "next";
import { glossary } from "@/lib/glossary";
import { GlossaryContent } from "./GlossaryContent";

const SITE_URL = "https://prospectoutreach.co.uk";
const PAGE_URL = `${SITE_URL}/glossary`;
const description =
  `B2B demand generation glossary: ${glossary.length} plain-English definitions of ABM, intent data, ICP, MQL, SQL, MQA, CPQL, email deliverability, data hygiene, GDPR and more.`;

export const metadata: Metadata = {
  title: "B2B Demand Generation Glossary",
  description,
  keywords: ["b2b marketing glossary", "demand generation terms", "what is an MQL", "what is ICP", "ABM definition", "intent data definition"],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: "B2B Demand Generation Glossary | ProspectOutreach", description, url: PAGE_URL, type: "website" },
  twitter: { card: "summary_large_image", title: "B2B Demand Generation Glossary | ProspectOutreach", description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DefinedTermSet",
      "@id": `${PAGE_URL}#terms`,
      name: "B2B Demand Generation Glossary",
      description,
      url: PAGE_URL,
      hasDefinedTerm: glossary.map((g) => ({
        "@type": "DefinedTerm",
        name: g.term,
        description: g.def,
        url: `${PAGE_URL}#${g.slug}`,
        inDefinedTermSet: `${PAGE_URL}#terms`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Glossary", item: PAGE_URL },
      ],
    },
  ],
};

export default function GlossaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GlossaryContent />
    </>
  );
}
