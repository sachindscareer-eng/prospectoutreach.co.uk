import { CareersContent } from "./CareersContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | ProspectOutreach",
  description: "Join our team and help us shape the future of B2B outreach and demand generation.",
};

export default function CareersPage() {
  return <CareersContent />;
}
