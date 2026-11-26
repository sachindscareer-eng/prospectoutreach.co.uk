/** Shared content for the Web Solutions page (used by the page UI and its JSON-LD). */

export type WebService = {
  slug: string;
  title: string;
  short: string;
  desc: string;
  items: string[];
};

export const webServices: WebService[] = [
  {
    slug: "web-apps",
    title: "Custom Web Application Development",
    short: "Web apps",
    desc: "Powerful, scalable, fully customised applications tailored to your business goals — fast, secure and built to grow.",
    items: [
      "End-to-end development (frontend + backend)",
      "Clean, modern and responsive UI",
      "Scalable architecture for future growth",
      "Seamless API integrations",
    ],
  },
  {
    slug: "ui-ux",
    title: "Modern UI/UX & Interactive Dashboards",
    short: "UI/UX",
    desc: "Interfaces that are visually striking and highly functional — helping users understand data and make decisions faster.",
    items: [
      "Beautiful, intuitive designs",
      "Interactive dashboards with real-time data",
      "Smooth animations and transitions",
      "Mobile-friendly, responsive layouts",
    ],
  },
  {
    slug: "visualization",
    title: "Advanced Visualization Systems",
    short: "Visualization",
    desc: "Data-driven visualization platforms for engineering and manufacturing — making intricate workflows simple and interactive.",
    items: [
      "Dynamic diagram and schematic rendering",
      "Real-time data visualization",
      "Interactive elements (zoom, pan, actions)",
      "High-performance rendering for large datasets",
    ],
  },
  {
    slug: "auth",
    title: "Secure Authentication & User Management",
    short: "Auth & users",
    desc: "Robust, reliable systems to manage users, roles and access control — built with security as the foundation.",
    items: [
      "Role-based access (Admin, User, etc.)",
      "Secure login & authentication",
      "Data protection best practices",
      "Multi-user system support",
    ],
  },
  {
    slug: "cloud",
    title: "Cloud Deployment & Infrastructure",
    short: "Cloud",
    desc: "We take your application from code to production — managing deployment, scaling and performance on your preferred cloud.",
    items: [
      "Deployment on AWS or your preferred cloud",
      "Database setup & optimisation",
      "File storage (documents, media)",
      "Ongoing support for uptime & performance",
    ],
  },
  {
    slug: "documents",
    title: "File & Document Management Solutions",
    short: "Documents",
    desc: "Efficient systems for handling documents from upload to storage — with automation that saves time and reduces manual work.",
    items: [
      "PDF generation and processing",
      "Secure file uploads",
      "Cloud storage integration (AWS S3)",
      "Automated workflows",
    ],
  },
  {
    slug: "automation",
    title: "Business Automation & CRM Solutions",
    short: "Automation & CRM",
    desc: "Smart systems that help businesses automate operations, improve efficiency and make data-driven decisions — at any scale.",
    items: ["Custom CRM systems", "Admin dashboards & reporting", "Workflow automation", "Scalable business tools"],
  },
];

export const webFaqs: { q: string; a: string }[] = [
  {
    q: "What web development services does ProspectOutreach offer?",
    a: "We design and build custom websites and web applications end to end: UI/UX design, interactive dashboards, data visualization, secure authentication and user management, document management, business automation and CRM systems, and cloud deployment on AWS or your preferred provider.",
  },
  {
    q: "Do you build custom web applications or use templates?",
    a: "Every project is custom built around your workflows and goals. We use proven frameworks and components where they help, but the product, design and architecture are shaped specifically for your business.",
  },
  {
    q: "Can you redesign or improve our existing website or system?",
    a: "Yes. We can audit an existing site or application, improve its design, performance and usability, add new features, or rebuild parts of it on a more scalable architecture — without disrupting your day-to-day operations.",
  },
  {
    q: "Will my website be mobile-friendly and SEO-ready?",
    a: "Yes. Everything we ship is responsive across phones, tablets and desktops, and built with fast loading, clean semantic markup, metadata and structured data so search engines can understand and rank your pages.",
  },
  {
    q: "Do you handle hosting, deployment and ongoing support?",
    a: "We take your application from code to production — cloud setup, databases, file storage and deployment — and stay with you after launch for monitoring, updates and continuous improvement.",
  },
  {
    q: "How do we get started on a web project?",
    a: "Share your requirements through our contact page. We will schedule a discovery call, understand your goals and users, and come back with a recommended approach, scope and next steps.",
  },
];
