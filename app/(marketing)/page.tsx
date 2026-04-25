import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero";
import { Process } from "@/components/sections/home/process";
import { Services } from "@/components/sections/home/services";
import { Pillars } from "@/components/sections/home/pillars";
import { CorridorsPreview } from "@/components/sections/home/corridors-preview";
import { Testimonials } from "@/components/sections/home/testimonials";
import { CtaBand } from "@/components/sections/home/cta-band";
import { Value } from "@/components/sections/home/value";
import { Stats } from "@/components/sections/home/stats";

export const metadata: Metadata = {
  title: "NTCHOUPE SUPPLY CHAIN — Transport de marchandises sécurisé",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Process />
      <Services />
      <Pillars />
      <Value />
      <CorridorsPreview />
      <Testimonials />
      <Stats />

      {/* Marker for IntersectionObserver (Header scroll detection) */}
      <div className="h-0" aria-hidden="true" />
    </main>
  );
}
