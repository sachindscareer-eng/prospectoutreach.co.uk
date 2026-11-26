/**
 * Blog content. Each post is plain data so it can be statically rendered (SEO) and
 * reused for metadata, JSON-LD and the sitemap.
 *
 * Inline text supports **bold** and [link text](/path) — see renderInline in the post view.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  /** <title> / SEO title (kept under ~60 chars) */
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  keywords: string[];
  published: string; // ISO date
  updated: string; // ISO date
  author: string;
  /** cover art accent: tailwind gradient stops */
  accent: string;
  body: Block[];
  faqs: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: "what-is-b2b-demand-generation",
    title: "What Is B2B Demand Generation? A Practical Guide to Building Predictable Pipeline",
    seoTitle: "What Is B2B Demand Generation? A Practical Guide",
    description:
      "Learn what B2B demand generation is, how it differs from lead generation, the core channels and stages, the metrics that matter, and a step-by-step framework to build predictable pipeline.",
    excerpt:
      "Demand generation is how B2B companies create interest, capture buyers who are ready, and turn both into real pipeline. Here is a practical framework you can put to work.",
    category: "Demand Generation",
    keywords: [
      "b2b demand generation",
      "what is demand generation",
      "demand generation vs lead generation",
      "demand generation strategy",
      "b2b pipeline",
    ],
    published: "2026-11-26",
    updated: "2026-11-26",
    author: "ProspectOutreach Team",
    accent: "from-[#4f7bff] via-[#7c5cff] to-[#a855f7]",
    body: [
      {
        type: "p",
        text: "Most B2B teams don't have a lead problem. They have a **pipeline problem**: plenty of names in the CRM, but too few conversations with people who actually have a need, a budget and a reason to act now. Demand generation is the discipline that fixes that gap.",
      },
      {
        type: "p",
        text: "In this guide we explain what B2B demand generation really means, how it differs from lead generation, which channels do the heavy lifting, and a simple framework you can use to build pipeline that is predictable instead of lumpy.",
      },
      { type: "h2", id: "definition", text: "What is B2B demand generation?" },
      {
        type: "p",
        text: "**B2B demand generation** is the end-to-end process of creating awareness and interest among the businesses that fit your ideal customer profile, capturing the ones who show buying intent, and nurturing them until they are ready for a sales conversation.",
      },
      {
        type: "p",
        text: "It covers the whole journey, from the first time a prospect hears about you to the moment a qualified meeting lands in a sales rep's calendar. That is why demand generation sits between marketing and sales and works best when both teams share the same definition of a good-fit buyer.",
      },
      {
        type: "callout",
        title: "In one sentence",
        text: "Demand generation creates and captures interest from the right accounts, then converts that interest into qualified pipeline.",
      },
      { type: "h2", id: "vs-lead-generation", text: "Demand generation vs lead generation" },
      {
        type: "p",
        text: "The two terms are often used interchangeably, but they are not the same thing. Lead generation is one part of demand generation: it focuses on collecting contact details. Demand generation is broader and is measured on revenue outcomes, not on form fills.",
      },
      {
        type: "table",
        head: ["", "Demand generation", "Lead generation"],
        rows: [
          ["Goal", "Create and capture demand that becomes pipeline", "Collect contact details from prospects"],
          ["Scope", "Full funnel: awareness to booked meeting", "Mostly the capture stage"],
          ["Audience", "Accounts that match your ICP, including buyers not yet in-market", "People willing to fill in a form now"],
          ["Main metrics", "Pipeline created, meetings held, win rate", "Number of leads, cost per lead"],
          ["Typical risk", "Takes longer to show results", "High volume, low quality"],
        ],
      },
      {
        type: "p",
        text: "A healthy programme uses both: demand generation builds familiarity and trust, and lead generation tactics capture prospects when they raise their hand.",
      },
      { type: "h2", id: "why-it-matters", text: "Why demand generation matters in B2B" },
      {
        type: "ul",
        items: [
          "**Buying committees are bigger.** Several stakeholders usually influence a B2B purchase, so you need to reach more than one contact per account.",
          "**Buyers research before they talk to sales.** If they have never heard of you during that research, you are unlikely to make the shortlist.",
          "**Only a small share of your market is buying right now.** Demand generation keeps you visible to the rest, so you are the obvious choice when their time comes.",
          "**Quality beats volume.** Sales teams lose time on poorly qualified leads. A demand programme filters for fit and intent before handing over.",
        ],
      },
      { type: "h2", id: "channels", text: "The core channels of a demand generation programme" },
      { type: "h3", text: "1. Account-based marketing (ABM)" },
      {
        type: "p",
        text: "ABM treats each target account as a market of one. You pick a defined list of high-value accounts and coordinate personalised messaging across the buying committee. Read more about our [account-based marketing service](/services#abm).",
      },
      { type: "h3", text: "2. Intent data" },
      {
        type: "p",
        text: "Intent data shows which companies are actively researching topics related to your solution. It helps you prioritise accounts that are already in-market. We cover it in depth in our [guide to B2B intent data](/blog/b2b-intent-data-guide).",
      },
      { type: "h3", text: "3. Content syndication" },
      {
        type: "p",
        text: "Content syndication distributes your whitepapers, reports and guides to relevant professionals through third-party networks, generating leads who have engaged with your expertise. See our [content syndication service](/services#syndication).",
      },
      { type: "h3", text: "4. Multi-channel outbound" },
      {
        type: "p",
        text: "Personalised cold email, LinkedIn outreach and calling reach decision-makers directly. Done well, it is respectful, relevant and tightly targeted, never spray-and-pray.",
      },
      { type: "h3", text: "5. Lead qualification and appointment setting" },
      {
        type: "p",
        text: "Before a lead reaches sales, it should be checked against agreed criteria such as role, company fit, need and timing. Human verification (for example, a short qualification call) protects your sales team's time. Learn about our [lead qualification process](/services#qualification).",
      },
      { type: "h2", id: "framework", text: "A 6-step demand generation framework" },
      {
        type: "ol",
        items: [
          "**Define your ICP and buyer personas.** Document firmographics (industry, size, region), the roles in the buying committee, and the problems you solve for each.",
          "**Build a clean, verified target list.** Use compliant data and verify contacts so your outreach reaches real decision-makers.",
          "**Layer in intent signals.** Prioritise accounts showing research activity on topics related to your offer.",
          "**Create value-first content and messaging.** Lead with the buyer's problem, not your product. Give each persona a reason to engage.",
          "**Run coordinated multi-channel campaigns.** Combine email, LinkedIn, phone and content so each touch reinforces the last.",
          "**Qualify, hand over and measure.** Agree what a sales-ready lead looks like, verify it, book the meeting and track pipeline outcomes.",
        ],
      },
      {
        type: "callout",
        title: "Tip",
        text: "Write your qualification criteria down and share them with sales before the campaign starts. Most disagreements about lead quality come from criteria that were never agreed.",
      },
      { type: "h2", id: "metrics", text: "Demand generation metrics that actually matter" },
      {
        type: "p",
        text: "Vanity metrics like impressions and raw lead counts are easy to report but say little about revenue. Focus on numbers that connect activity to pipeline:",
      },
      {
        type: "ul",
        items: [
          "**Marketing qualified leads (MQLs)** and **sales qualified leads (SQLs)**, and the conversion rate between them.",
          "**Meetings booked and meetings held**, since a no-show is not pipeline.",
          "**Pipeline created**: the value of opportunities generated by the programme.",
          "**Cost per qualified meeting** and **cost per opportunity**, rather than cost per lead.",
          "**Sales cycle length and win rate** for demand-sourced deals.",
        ],
      },
      {
        type: "p",
        text: "Not sure what MQL, SQL or ICP mean? Our [B2B marketing glossary](/glossary) explains the key terms in plain English.",
      },
      { type: "h2", id: "mistakes", text: "Common demand generation mistakes to avoid" },
      {
        type: "ul",
        items: [
          "Targeting too broadly instead of focusing on a well-defined ICP.",
          "Measuring success by lead volume instead of qualified pipeline.",
          "Sending generic, product-first messages that ignore the buyer's context.",
          "Handing unverified leads to sales and eroding trust between the teams.",
          "Stopping a campaign too early. Demand generation compounds over time.",
          "Ignoring data compliance requirements such as GDPR when building lists and running outreach.",
        ],
      },
      { type: "h2", id: "getting-started", text: "Getting started" },
      {
        type: "p",
        text: "Demand generation doesn't have to be complicated. Start with a sharp ICP, a verified list and a clear definition of a qualified meeting, then add channels and intent data as you learn what works.",
      },
      {
        type: "p",
        text: "If you would rather have a team run it for you, ProspectOutreach plans and runs B2B demand generation programmes covering ABM, intent data, content syndication, multi-channel outreach and human-verified lead qualification. [Talk to our team](/contact) about your pipeline goals.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between demand generation and lead generation?",
        a: "Lead generation focuses on collecting contact details from prospects. Demand generation is broader: it creates awareness and interest among your ideal customers, captures those showing intent and nurtures them into qualified sales opportunities. Lead generation is one part of a demand generation programme.",
      },
      {
        q: "Which channels are used in B2B demand generation?",
        a: "Common channels include account-based marketing, intent data, content syndication, cold email, LinkedIn outreach, phone outreach, webinars and content marketing, supported by lead qualification and appointment setting.",
      },
      {
        q: "How do you measure demand generation success?",
        a: "Measure outcomes connected to revenue: qualified leads (MQLs and SQLs), meetings held, pipeline created, cost per qualified meeting or opportunity, and win rate for demand-sourced deals.",
      },
      {
        q: "How long does demand generation take to show results?",
        a: "Outbound and intent-led campaigns can start producing conversations within weeks, while brand awareness and content-driven demand compound over several months. The timeline depends on your market, sales cycle and offer.",
      },
    ],
  },
  {
    slug: "b2b-intent-data-guide",
    title: "B2B Intent Data: How to Find High-Intent Buyers Before Your Competitors Do",
    seoTitle: "B2B Intent Data: How to Find High-Intent Buyers",
    description:
      "A practical guide to B2B intent data: what it is, first-party vs third-party intent, the signals that matter, and how to turn intent into qualified meetings with outreach.",
    excerpt:
      "Intent data tells you which companies are researching problems you solve right now. Here is how it works and how to turn those signals into real conversations.",
    category: "Intent Data",
    keywords: [
      "b2b intent data",
      "buyer intent data",
      "intent signals",
      "first-party vs third-party intent data",
      "high-intent buyers",
    ],
    published: "2026-11-26",
    updated: "2026-11-26",
    author: "ProspectOutreach Team",
    accent: "from-[#a855f7] via-[#c026d3] to-[#e552ff]",
    body: [
      {
        type: "p",
        text: "Imagine knowing which companies are comparing solutions like yours this month, before they fill in a form or book a demo with a competitor. That is the promise of **B2B intent data**.",
      },
      {
        type: "p",
        text: "Used well, intent data helps you spend time on accounts that are actually in-market. Used badly, it becomes another dashboard nobody acts on. This guide explains how intent data works and how to turn signals into qualified meetings.",
      },
      { type: "h2", id: "what-is-intent-data", text: "What is B2B intent data?" },
      {
        type: "p",
        text: "**Intent data** is behavioural information that suggests a company or person is researching a topic, problem or product category. It is collected from online activity such as reading articles, comparing vendors, downloading content or visiting specific web pages.",
      },
      {
        type: "p",
        text: "When several people from the same company research related topics more than usual, that account is said to be **surging** on that topic, which is a sign it may be entering a buying cycle.",
      },
      {
        type: "callout",
        title: "Key idea",
        text: "Intent data doesn't tell you who will buy. It tells you who is researching now, so you can reach them while the problem is top of mind.",
      },
      { type: "h2", id: "types", text: "The types of intent data" },
      {
        type: "table",
        head: ["Type", "Where it comes from", "Strengths", "Limitations"],
        rows: [
          [
            "First-party",
            "Your own website, emails, webinars, product and CRM",
            "Accurate and specific to your brand",
            "Only covers people who already found you",
          ],
          [
            "Second-party",
            "Another company's first-party data, shared through a partnership (e.g. review sites)",
            "Shows in-market comparison activity",
            "Limited to that partner's audience",
          ],
          [
            "Third-party",
            "Networks of publisher sites tracking topic research across the web",
            "Reveals accounts that have never visited you",
            "Broader and noisier; needs careful filtering",
          ],
        ],
      },
      { type: "h2", id: "signals", text: "Intent signals worth tracking" },
      {
        type: "ul",
        items: [
          "Repeat visits to your pricing, comparison or product pages.",
          "Research spikes on topics closely tied to the problem you solve.",
          "Engagement with bottom-of-funnel content such as case studies and buyer's guides.",
          "Activity on review and comparison sites in your category.",
          "Trigger events like new funding, leadership changes, hiring for relevant roles or expansion into new regions.",
          "Multiple people from the same account engaging at the same time, often a sign that a buying committee is forming.",
        ],
      },
      { type: "h2", id: "how-to-use", text: "How to turn intent data into qualified meetings" },
      {
        type: "ol",
        items: [
          "**Start with your ICP.** Filter intent signals through your ideal customer profile first. A surging account that will never buy from you is noise.",
          "**Choose a focused set of topics.** Track topics that map to real buying problems, not generic industry terms.",
          "**Score and prioritise accounts.** Combine fit (does the company match your ICP?) with intent (are they researching now?) to rank who to contact first.",
          "**Identify the buying committee.** Find the decision-makers and influencers inside each priority account and verify their contact details.",
          "**Personalise outreach around the problem.** Reference the challenge they are likely researching, without being creepy or naming the data source.",
          "**Act fast.** Intent decays. Reach out while the signal is fresh, and follow up across email, LinkedIn and phone.",
          "**Qualify before hand-over.** Confirm need, role and timing so sales gets conversations, not just names.",
        ],
      },
      {
        type: "callout",
        title: "Good practice",
        text: "Never open with \"we saw you were researching X\". Lead with a relevant insight about the problem instead. The signal should shape your timing and message, not become the message.",
      },
      { type: "h2", id: "abm", text: "Intent data and account-based marketing" },
      {
        type: "p",
        text: "Intent data and [account-based marketing](/services#abm) work especially well together. ABM tells you which accounts deserve focus; intent tells you when to engage and what they care about right now. Together they help you concentrate budget and effort on the accounts most likely to convert.",
      },
      {
        type: "p",
        text: "If you are new to the wider strategy, start with our guide to [what B2B demand generation is](/blog/what-is-b2b-demand-generation).",
      },
      { type: "h2", id: "mistakes", text: "Common intent data mistakes" },
      {
        type: "ul",
        items: [
          "Treating every signal as a hot lead instead of combining intent with fit.",
          "Tracking too many broad topics, which creates noise.",
          "Waiting too long to act, so the account has already chosen a vendor.",
          "Sending outreach that feels like surveillance.",
          "Ignoring privacy and consent rules. Make sure your data providers and processes are compliant with regulations such as GDPR.",
        ],
      },
      { type: "h2", id: "summary", text: "The bottom line" },
      {
        type: "p",
        text: "Intent data is most valuable when it changes what your team does on Monday morning: which accounts they call, what they say and how quickly they follow up. Pair it with a sharp ICP, verified contacts and human qualification, and it becomes a reliable source of pipeline.",
      },
      {
        type: "p",
        text: "ProspectOutreach uses [intent data](/services#intent) to identify in-market accounts, then runs multi-channel outreach and tele-verified qualification to book meetings with real buyers. [Book a strategy call](/contact) to see how it could work for you.",
      },
    ],
    faqs: [
      {
        q: "What is intent data in B2B marketing?",
        a: "B2B intent data is behavioural information showing that a company or person is researching a topic, problem or product category, collected from online activity like reading content, comparing vendors and visiting relevant web pages.",
      },
      {
        q: "What is the difference between first-party and third-party intent data?",
        a: "First-party intent data comes from your own channels, such as website visits and email engagement. Third-party intent data is collected across external publisher networks and can reveal accounts researching your category that have never visited your site.",
      },
      {
        q: "Is intent data GDPR compliant?",
        a: "It can be, but it depends on how the data is collected and processed. Work with providers that document their consent and compliance practices, and make sure your own outreach follows GDPR and other applicable regulations.",
      },
      {
        q: "How should sales teams use intent data?",
        a: "Combine intent with ICP fit to prioritise accounts, identify the buying committee, personalise outreach around the problem being researched, act quickly while the signal is fresh, and qualify leads before they reach sales.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** rough reading time at ~220 words per minute */
export function readingTime(post: Post) {
  const words = post.body
    .map((b) => {
      if (b.type === "ul" || b.type === "ol") return b.items.join(" ");
      if (b.type === "table") return [...b.head, ...b.rows.flat()].join(" ");
      if (b.type === "callout") return `${b.title} ${b.text}`;
      return b.text;
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
