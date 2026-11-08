import type { Metadata } from "next";
import { ContactFormSection } from "@/components/sections/contact-form-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Suhanur Rahman Mahin for design collaborations.",
};

export default function ContactPage() {
  return <ContactFormSection />;
}
