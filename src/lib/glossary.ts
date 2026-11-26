/** B2B demand generation glossary (rendered at /glossary with DefinedTermSet JSON-LD). */

export const CATEGORIES = [
  "Core Demand Generation",
  "Lead Generation & Qualification",
  "Email Marketing & Content Syndication",
  "Account-Based Marketing & Data",
  "Performance, Measurement & Analytics",
  "Data Quality, Privacy & Compliance",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Term = {
  term: string;
  slug: string;
  def: string;
  category: Category;
  link?: { href: string; label: string };
};

const [CORE, LEAD, EMAIL, ABM, PERF, DATA] = CATEGORIES;

const t = (category: Category, term: string, def: string, link?: Term["link"]): Term => ({
  term,
  slug: term.toLowerCase().replace(/\(.*?\)/g, "").trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  def,
  category,
  link,
});

const terms: Term[] = [
  /* 1. Core demand generation */
  t(CORE, "Account Penetration", "The process of identifying and engaging multiple decision-makers within a target company to increase the chances of securing a business opportunity."),
  t(CORE, "Account-Based Marketing (ABM)", "A B2B strategy that targets a defined list of high-value accounts with personalised campaigns aimed at the whole buying committee, instead of marketing to a broad audience.", { href: "/services#abm", label: "Our ABM service" }),
  t(CORE, "Account-Based Marketing (ABM) Campaign", "A coordinated marketing initiative designed to engage specific high-value accounts through personalised messaging and targeted outreach."),
  t(CORE, "Account Intelligence", "Research and insights about target companies, including their business priorities, technology stack, challenges and key decision-makers."),
  t(CORE, "Buying Intent", "Signals that indicate a prospect or organisation is actively researching or considering a product or service."),
  t(CORE, "Contact Discovery", "The process of identifying relevant professionals and obtaining accurate business contact information within target organisations."),
  t(CORE, "Demand Generation", "The end-to-end process of creating awareness among ideal customers, capturing buying intent and nurturing prospects into qualified pipeline.", { href: "/blog/what-is-b2b-demand-generation", label: "Read the guide" }),
  t(CORE, "Digital Demand Generation", "Using digital channels, content and targeted campaigns to create awareness, generate interest and build qualified sales pipeline."),
  t(CORE, "Ideal Customer Profile (ICP)", "A description of the type of company that gets the most value from your product and is most valuable to you, used to focus targeting."),
  t(CORE, "Intent Data", "Behavioural signals showing that a company or person is researching topics related to your solution, used to prioritise in-market accounts.", { href: "/blog/b2b-intent-data-guide", label: "Read the guide" }),
  t(CORE, "Lead Database", "A structured collection of prospect information, including names, company details, job titles and business contact information."),
  t(CORE, "Multi-Channel Outreach", "Reaching prospects through a coordinated mix of channels, such as email, LinkedIn and phone, so each touch reinforces the others."),
  t(CORE, "Prospecting", "The process of identifying and researching potential customers who match an organisation's ideal customer profile."),

  /* 2. Lead generation and qualification */
  t(LEAD, "Appointment Setting", "The process of contacting and qualifying prospects and booking sales meetings for an account executive or sales team."),
  t(LEAD, "BANT-Qualified Lead", "A prospect who has been evaluated against agreed Budget, Authority, Need and Timeline criteria."),
  t(LEAD, "Contact Verification", "Confirming the accuracy of a prospect's contact information, professional identity and company details."),
  t(LEAD, "Lead Generation", "Activities that capture contact details of potential buyers, such as form fills, content downloads and event sign-ups."),
  t(LEAD, "Lead Nurturing", "Building relationships with prospects who are not yet ready to buy, through relevant, timely content and follow-ups."),
  t(LEAD, "Lead Qualification", "Assessing whether a lead matches agreed criteria, such as fit, role, need and timing, before it is passed to sales.", { href: "/services#qualification", label: "Our qualification process" }),
  t(LEAD, "Lead Scoring", "Assigning points to leads based on fit and engagement so sales can prioritise the most promising ones."),
  t(LEAD, "Marketing Automation", "Using software platforms to automate marketing activities, including email campaigns, lead scoring, segmentation and follow-ups."),
  t(LEAD, "Marketing Qualified Lead (MQL)", "A lead that marketing judges more likely to become a customer based on fit and engagement, but which is not yet ready for a sales conversation."),
  t(LEAD, "Sales Development Representative (SDR)", "A salesperson focused on prospecting, outreach and qualifying leads before handing them to account executives."),
  t(LEAD, "Sales Pipeline Generation", "Creating new sales opportunities by identifying, engaging and qualifying potential customers."),
  t(LEAD, "Sales Prospecting", "Identifying and researching potential buyers who could become future customers."),
  t(LEAD, "Sales Qualified Lead (SQL)", "A lead that sales has accepted as ready for a direct sales conversation, typically after qualification."),
  t(LEAD, "Tele-Verification", "Confirming a lead's details, relevance and qualification criteria through a phone call before the lead is delivered."),

  /* 3. Email marketing and content syndication */
  t(EMAIL, "Click-Through Rate (CTR)", "The percentage of delivered emails or campaign impressions that generate clicks on a link or call to action."),
  t(EMAIL, "Cold Email Outreach", "Sending personalised, relevant emails to prospects who have not contacted you before, with the aim of starting a sales conversation."),
  t(EMAIL, "Content Engagement", "The level of interaction a prospect demonstrates with marketing content, such as whitepapers, reports, articles and webinars."),
  t(EMAIL, "Content Syndication", "Distributing your content, such as whitepapers or reports, through third-party networks to reach and generate leads from relevant professionals.", { href: "/services#syndication", label: "Our content syndication service" }),
  t(EMAIL, "Double-Touch Campaign", "A campaign that engages prospects through two coordinated content or email interactions to measure sustained interest and engagement."),
  t(EMAIL, "Email Deliverability", "The ability of an email campaign to successfully reach recipients' inboxes rather than being blocked or filtered as spam."),
  t(EMAIL, "Email Engagement", "The level of interaction recipients have with an email campaign, including opens, clicks and other measurable actions."),
  t(EMAIL, "Email Open Rate", "The percentage of successfully delivered emails recorded as opened, subject to email tracking limitations."),
  t(EMAIL, "Gated Content", "Premium content, such as whitepapers and research reports, that requires users to submit information through a form before accessing it."),
  t(EMAIL, "Landing Page (LP)", "A dedicated webpage designed to encourage visitors to complete a specific action, such as downloading content or registering for an event."),
  t(EMAIL, "Marketing Qualified Account (MQA)", "A target company that demonstrates sufficient fit and engagement to be prioritised for account-based marketing activities."),
  t(EMAIL, "Webinar Lead Generation", "The process of attracting and capturing potential business customers through online seminars, presentations and virtual events."),

  /* 4. Account-based marketing and data */
  t(ABM, "Account Engagement", "Measuring interactions and interest demonstrated by individuals across a target company."),
  t(ABM, "Account Mapping", "Identifying key stakeholders, decision-makers and influencers within a target organisation."),
  t(ABM, "Buyer Persona", "A semi-fictional profile of a person in your target buying committee, describing their role, goals, challenges and how they evaluate solutions."),
  t(ABM, "Buying Committee", "The group of stakeholders inside a company who influence or approve a B2B purchase, such as users, managers, finance and IT."),
  t(ABM, "Buying Signals", "Actions or behavioural indicators suggesting that a company may be preparing to purchase a product or service."),
  t(ABM, "Contact-Level Targeting", "Targeting individual professionals within an organisation based on their job titles, responsibilities and decision-making influence."),
  t(ABM, "Firmographic Segmentation", "Dividing businesses into groups based on characteristics such as industry, company size, revenue and location."),
  t(ABM, "Firmographics", "Descriptive attributes of a company, such as industry, size, revenue, location and growth stage, used to segment and target accounts."),
  t(ABM, "ICP Segmentation", "Dividing potential target companies into groups based on how closely they match the Ideal Customer Profile."),
  t(ABM, "Job Title Targeting", "Identifying and reaching professionals based on their organisational roles, seniority and decision-making responsibilities."),
  t(ABM, "Target Account List (TAL)", "A predefined list of companies selected for targeted marketing and sales activities."),
  t(ABM, "Technographic Data", "Information about the technologies, software platforms and IT infrastructure used by an organisation."),
  t(ABM, "Total Addressable Market (TAM) Analysis", "Evaluating the overall market opportunity available for a particular product or service."),

  /* 5. Performance, measurement and analytics */
  t(PERF, "Campaign Attribution", "The process of identifying which marketing channels and activities contribute to generating leads, opportunities and revenue."),
  t(PERF, "Campaign Performance", "The measurement of a marketing campaign's effectiveness against predefined objectives and KPIs."),
  t(PERF, "Conversion Funnel", "The stages prospects move through from initial awareness to becoming qualified leads and eventually customers."),
  t(PERF, "Conversion Rate", "The percentage of prospects who move from one stage to the next, for example from lead to MQL, or from meeting to opportunity."),
  t(PERF, "Cost per Lead (CPL)", "The total spend of a campaign divided by the number of leads it generated."),
  t(PERF, "Cost per Qualified Lead (CPQL)", "The total campaign expenditure divided by the number of leads meeting the agreed qualification criteria."),
  t(PERF, "Engagement Rate", "A measurement of how actively prospects interact with campaign content, emails or other marketing activities."),
  t(PERF, "Lead-to-MQL Conversion Rate", "The percentage of generated leads that meet the criteria to become Marketing Qualified Leads."),
  t(PERF, "Marketing ROI", "The financial return generated from marketing investments compared with the associated campaign costs."),
  t(PERF, "Pipeline", "The set of open sales opportunities and their value, tracked through stages from first meeting to closed deal."),
  t(PERF, "Pipeline Contribution", "The value of sales opportunities influenced or generated through marketing and lead generation activities."),
  t(PERF, "Return on Investment (ROI)", "A performance measure comparing the financial return of an investment against its cost."),
  t(PERF, "Sales Accepted Lead (SAL)", "A lead that has been reviewed and accepted by the sales team for further follow-up."),

  /* 6. Data quality, privacy and compliance */
  t(DATA, "CAN-SPAM Act", "A US law establishing requirements for commercial email messages and giving recipients the right to opt out of marketing emails."),
  t(DATA, "CCPA", "The California Consumer Privacy Act, which provides California residents with rights concerning the collection and use of their personal information."),
  t(DATA, "Data Accuracy", "The extent to which prospect and company information is correct, current and reliable."),
  t(DATA, "Data Deduplication", "The process of identifying and removing duplicate records from a lead database."),
  t(DATA, "Data Enrichment", "Adding missing or updated information, such as job title, company size or direct contact details, to existing lead and account records."),
  t(DATA, "Data Hygiene", "Maintaining accurate, complete and up-to-date prospect information by identifying and correcting data issues."),
  t(DATA, "Data Suppression", "Excluding specific contacts or organisations from marketing campaigns based on client requirements, opt-out requests or compliance restrictions."),
  t(DATA, "Double Opt-In", "A consent process in which a user confirms their subscription through a second verification step, usually by email."),
  t(DATA, "Email Bounce Rate", "The percentage of sent emails that cannot be successfully delivered to recipients' email addresses."),
  t(DATA, "First-Party Data", "Information collected directly by an organisation through its own websites, platforms, interactions and customer relationships."),
  t(DATA, "GDPR", "The General Data Protection Regulation, the EU and UK law governing how personal data is collected, processed and stored, including for B2B marketing."),
  t(DATA, "Third-Party Data", "Information collected or provided by an external organisation rather than directly by the organisation using it."),
];

export const glossary: Term[] = [...terms].sort((a, b) => a.term.localeCompare(b.term, "en"));
