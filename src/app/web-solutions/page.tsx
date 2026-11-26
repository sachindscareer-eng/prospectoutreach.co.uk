import { Metadata } from "next";
import { WebSolutionsContent } from "./WebSolutionsContent";
import { webFaqs, webServices } from "./data";

const SITE_URL = "https://prospectoutreach.co.uk";
const PAGE_URL = `${SITE_URL}/web-solutions`;

const description =
  "Custom web design and development: web applications, UI/UX and interactive dashboards, data visualization, secure user management, CRM and business automation, and AWS cloud deployment.";

export const metadata: Metadata = {
  // the root layout's title template appends " | ProspectOutreach"
  title: "Web Design & Development Services",
  description,
  keywords: [
    "web design and development",
    "custom web application development",
    "UI/UX design",
    "interactive dashboards",
    "CRM development",
    "business automation",
    "AWS cloud deployment",
    "web development agency UK",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Web Design & Development Services | ProspectOutreach",
    description,
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Services | ProspectOutreach",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Web Design & Development",
      serviceType: "Web design and software development",
      description,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: ["United Kingdom", "United States", "India", "Worldwide"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web & software solutions",
        itemListElement: webServices.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.desc,
            url: `${PAGE_URL}#${s.slug}`,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: webFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Web Solutions", item: PAGE_URL },
      ],
    },
  ],
};

export default function WebSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WebSolutionsContent />
    </>
  );
}
