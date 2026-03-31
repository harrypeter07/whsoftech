import type { Metadata } from "next";
import { ContactPageClient } from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact WH SoftTech | Web Development & AI Solutions",
  description:
    "Contact WH SoftTech for modern web development, AI-powered applications, and digital solutions. We respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}

