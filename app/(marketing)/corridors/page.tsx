import type { Metadata } from "next";
import { CorridorsHero } from "@/components/sections/corridors/hero";
import { NationalCorridors } from "@/components/sections/corridors/national-corridors";
import { InternationalCorridors } from "@/components/sections/corridors/international-corridors";
import { TransitTimes } from "@/components/sections/corridors/transit-times";
import { CorridorsProcess } from "@/components/sections/corridors/process";
import { CorridorsCta } from "@/components/sections/corridors/cta";

export const metadata: Metadata = {
  title: "Corridors logistiques",
  description:
    "Notre réseau de corridors au Cameroun et en Afrique centrale. Douala–Yaoundé, Douala–Garoua, et liaisons internationales vers le Tchad, le Gabon, la RCA et plus.",
  keywords: [
    "corridors logistiques",
    "Cameroun",
    "Afrique centrale",
    "Douala Yaoundé",
    "Douala Garoua",
    "transport transfrontalier",
  ],
};

export default function CorridorsPage() {
  return (
    <main>
      <CorridorsHero />
      <NationalCorridors />
      <InternationalCorridors />
      <TransitTimes />
      <CorridorsProcess />
      <CorridorsCta />
    </main>
  );
}
