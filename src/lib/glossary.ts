/** B2B demand generation glossary (rendered at /glossary with DefinedTermSet JSON-LD). */

export type Term = { term: string; slug: string; def: string; link?: { href: string; label: string } };

const t = (term: string, def: string, link?: Term["link"]): Term => ({
  term,
  slug: term.toLowerCase().replace(/\(.*?\)/g, "").trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  def,
  link,
});

export const glossary: Term[] = [
  t("Account-Based Marketing (ABM)", "A B2B strategy that targets a defined list of high-value accounts with personalised campaigns aimed at the whole buying committee, instead of marketing to a broad audience.", { href: "/services#abm", label: "Our ABM service" }),
  t("Appointment Setting", "The process of contacting and qualifying prospects and booking sales meetings for an account executive or sales team."),
  t("BANT", "A lead qualification framework that checks Budget, Authority, Need and Timeline before a lead is passed to sales."),
  t("Buyer Persona", "A semi-fictional profile of a person in your target buying committee, describing their role, goals, challenges and how they evaluate solutions."),
  t("Buying Committee", "The group of stakeholders inside a company who influence or approve a B2B purchase, such as users, managers, finance and IT."),
  t("Cold Email Outreach", "Sending personalised, relevant emails to prospects who have not contacted you before, with the aim of starting a sales conversation."),
  t("Content Syndication", "Distributing your content, such as whitepapers or reports, through third-party networks to reach and generate leads from relevant professionals.", { href: "/services#syndication", label: "Our content syndication service" }),
  t("Conversion Rate", "The percentage of prospects who move from one stage to the next, for example from lead to MQL, or from meeting to opportunity."),
  t("Cost per Lead (CPL)", "The total spend of a campaign divided by the number of leads it generated."),
  t("Data Enrichment", "Adding missing or updated information, such as job title, company size or direct contact details, to existing lead and account records."),
  t("Demand Generation", "The end-to-end process of creating awareness among ideal customers, capturing buying intent and nurturing prospects into qualified pipeline.", { href: "/blog/what-is-b2b-demand-generation", label: "Read the guide" }),
  t("Firmographics", "Descriptive attributes of a company, such as industry, size, revenue, location and growth stage, used to segment and target accounts."),
  t("GDPR", "The General Data Protection Regulation, the EU and UK law governing how personal data is collected, processed and stored, including for B2B marketing."),
  t("Ideal Customer Profile (ICP)", "A description of the type of company that gets the most value from your product and is most valuable to you, used to focus targeting."),
  t("Intent Data", "Behavioural signals showing that a company or person is researching topics related to your solution, used to prioritise in-market accounts.", { href: "/blog/b2b-intent-data-guide", label: "Read the guide" }),
  t("Lead Generation", "Activities that capture contact details of potential buyers, such as form fills, content downloads and event sign-ups."),
  t("Lead Nurturing", "Building relationships with prospects who are not yet ready to buy, through relevant, timely content and follow-ups."),
  t("Lead Qualification", "Assessing whether a lead matches agreed criteria, such as fit, role, need and timing, before it is passed to sales.", { href: "/services#qualification", label: "Our qualification process" }),
  t("Lead Scoring", "Assigning points to leads based on fit and engagement so sales can prioritise the most promising ones."),
  t("Marketing Qualified Lead (MQL)", "A lead that marketing judges more likely to become a customer based on fit and engagement, but which is not yet ready for a sales conversation."),
  t("Multi-Channel Outreach", "Reaching prospects through a coordinated mix of channels, such as email, LinkedIn and phone, so each touch reinforces the others."),
  t("Pipeline", "The set of open sales opportunities and their value, tracked through stages from first meeting to closed deal."),
  t("Sales Development Representative (SDR)", "A salesperson focused on prospecting, outreach and qualifying leads before handing them to account executives."),
  t("Sales Qualified Lead (SQL)", "A lead that sales has accepted as ready for a direct sales conversation, typically after qualification."),
  t("Tele-Verification", "Confirming a lead's details, relevance and qualification criteria through a phone call before the lead is delivered."),
  t("Total Addressable Market (TAM)", "The total number of companies or the total revenue opportunity available for your product in your target market."),
];
