import { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | ProspectOutreach",
  description:
    "B2B lead generation, cold email, LinkedIn outreach, CRM integration, data enrichment, and pipeline automation.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
