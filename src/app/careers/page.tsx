import { Metadata } from "next";
import { CareersContent } from "./CareersContent";

const SITE_URL = "https://prospectoutreach.co.uk";

export const metadata: Metadata = {
  // the root layout's title template appends " | ProspectOutreach"
  title: "Careers",
  description:
    "Careers at ProspectOutreach: join a B2B demand generation team across India, the UK and the USA. Mentorship, freedom to execute and a people-first culture.",
  alternates: { canonical: `${SITE_URL}/careers` },
};

export default function CareersPage() {
  return <CareersContent />;
}
