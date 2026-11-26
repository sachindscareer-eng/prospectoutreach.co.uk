import type { Metadata } from "next";
import { posts } from "@/lib/blog";
import { BlogIndex } from "./BlogIndex";

const SITE_URL = "https://prospectoutreach.co.uk";
const PAGE_URL = `${SITE_URL}/blog`;
const description =
  "Practical guides on B2B demand generation, intent data, account-based marketing, outbound outreach and lead qualification from the ProspectOutreach team.";

export const metadata: Metadata = {
  title: "B2B Demand Generation Blog & Guides",
  description,
  keywords: ["b2b demand generation blog", "b2b lead generation tips", "intent data", "account-based marketing", "sales outreach"],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: "B2B Demand Generation Blog & Guides | ProspectOutreach", description, url: PAGE_URL, type: "website" },
  twitter: { card: "summary_large_image", title: "B2B Demand Generation Blog & Guides | ProspectOutreach", description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${PAGE_URL}#blog`,
      name: "ProspectOutreach Blog",
      description,
      url: PAGE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${PAGE_URL}/${p.slug}`,
        datePublished: p.published,
        dateModified: p.updated,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: PAGE_URL },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogIndex />
    </>
  );
}
