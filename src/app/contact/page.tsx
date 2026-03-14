import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | ProspectOutreach",
  description:
    "Get in touch with ProspectOutreach. Request a demo or contact our sales team.",
};

export default function ContactPage() {
  return <ContactContent />;
}
