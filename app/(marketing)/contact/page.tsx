import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/hero";
import { ContactMethods } from "@/components/sections/contact/methods";
import { ContactForm } from "@/components/sections/contact/form";
import { ContactLocation } from "@/components/sections/contact/location";
import { ContactFaq } from "@/components/sections/contact/faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez NTCHOUPE Supply Chain pour vos besoins de transport et de logistique au Cameroun et en Afrique centrale. Réponse sous 1 heure.",
  keywords: [
    "contact NTCHOUPE",
    "devis transport Cameroun",
    "logistique Douala",
    "WhatsApp transport",
  ],
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactLocation />
      <ContactFaq />
    </main>
  );
}
