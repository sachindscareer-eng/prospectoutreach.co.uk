import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

const SITE_URL = "https://prospectoutreach.co.uk";

export const metadata: Metadata = {
  // the root layout's title template appends " | ProspectOutreach"
  title: "Contact Us",
  description:
    "Contact ProspectOutreach to discuss B2B demand generation, lead generation and sales outreach. Offices in India, the UK and the USA — we reply within one business day.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return <ContactContent />;
}
