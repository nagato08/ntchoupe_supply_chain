import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services/hero";
import { Fleet } from "@/components/sections/services/fleet";
import { CargoTypes } from "@/components/sections/services/cargo-types";
import { Options } from "@/components/sections/services/options";
import { ServicesFaq } from "@/components/sections/services/faq";
import { Guarantees } from "@/components/sections/services/guarantees";
import { ServicesCta } from "@/components/sections/services/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez notre flotte de camions 6, 10 et 12 roues, nos types de marchandises transportées, l'assurance à la demande et l'accompagnement douanier au Cameroun et en Afrique centrale.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <Fleet />
      <CargoTypes />
      <Options />
      <ServicesFaq />
      <Guarantees />
      <ServicesCta />
    </main>
  );
}
