import { Metadata } from "next";
import { WebSolutionsContent } from "./WebSolutionsContent";

export const metadata: Metadata = {
  title: "Web & Software Solutions | ProspectOutreach",
  description:
    "Custom web application development, UI/UX design, cloud infrastructure, and business automation solutions.",
};

export default function WebSolutionsPage() {
  return <WebSolutionsContent />;
}
