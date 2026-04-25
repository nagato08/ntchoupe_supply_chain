import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/hero";
import { AboutMission } from "@/components/sections/about/mission";
import { AboutValues } from "@/components/sections/about/values";
import { AboutApproach } from "@/components/sections/about/approach";
import { AboutManifesto } from "@/components/sections/about/manifesto";
import { AboutCta } from "@/components/sections/about/cta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "NTCHOUPE SUPPLY CHAIN — notre mission, notre vision, nos valeurs et notre approche logistique au Cameroun et en Afrique centrale.",
  keywords: [
    "NTCHOUPE supply chain",
    "mission logistique Cameroun",
    "valeurs entreprise transport",
    "Afrique centrale logistique",
  ],
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutApproach />
      <AboutManifesto />
      <AboutCta />
    </main>
  );
}
