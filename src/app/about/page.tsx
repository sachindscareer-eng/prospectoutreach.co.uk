import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | ProspectOutreach",
  description:
    "Learn about ProspectOutreach: our mission, approach, and team helping B2B companies grow faster.",
};

export default function AboutPage() {
  return <AboutContent />;
}
