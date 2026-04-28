import type { Metadata } from "next";
import { OperationsHero } from "@/components/sections/operations/hero";
import { OperationsCategories } from "@/components/sections/operations/categories";
import { OperationsMissions } from "@/components/sections/operations/missions";
import { OperationsStats } from "@/components/sections/operations/stats";
import { OperationsHighlights } from "@/components/sections/operations/highlights";
import { OperationsCta } from "@/components/sections/operations/cta";

export const metadata: Metadata = {
  title: "Nos opérations",
  description:
    "Découvrez notre activité opérationnelle au Cameroun et en Afrique centrale : types de marchandises, missions récentes, indicateurs et faits marquants.",
  keywords: [
    "opérations logistiques",
    "missions transport",
    "Cameroun",
    "conteneurs Douala",
    "BTP transport",
    "distribution Afrique centrale",
  ],
};

export default function NosOperationsPage() {
  return (
    <main>
      <OperationsHero />
      <OperationsCategories />
      <OperationsMissions />
      <OperationsStats />
      <OperationsHighlights />
      <OperationsCta />
    </main>
  );
}
