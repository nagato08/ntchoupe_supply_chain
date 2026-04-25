"use client";

import { ClipboardList, Package, MapPin } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const STEPS = [
  {
    number: "01",
    title: "Demande de devis",
    description:
      "Contactez-nous sur WhatsApp ou via notre formulaire. Nous analysons votre besoin et vous proposons une solution adaptée sous 1 heure.",
    Icon: ClipboardList,
  },
  {
    number: "02",
    title: "Prise en charge",
    description:
      "Nous mobilisons le camion adapté (6, 10 ou 12 roues) et organisons le chargement avec votre équipe ou la nôtre.",
    Icon: Package,
  },
  {
    number: "03",
    title: "Livraison sécurisée",
    description:
      "Suivi temps réel de votre marchandise jusqu'à destination. Vous recevez confirmation à chaque étape clé du trajet.",
    Icon: MapPin,
  },
];

export function Process() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="w-full pt-20 md:pt-28 pb-12 md:pb-16 bg-white px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        {/* Heading */}
        <div
          className={`text-center max-w-3xl mx-auto mb-14 md:mb-20 ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-5">
            Une logistique optimisée
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            De votre demande à la livraison finale, nous orchestrons chaque étape avec rigueur pour vous garantir des délais respectés et des marchandises intactes.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {STEPS.map(({ number, title, description, Icon }, idx) => (
            <div
              key={number}
              className={`group relative bg-white border border-border rounded-2xl p-7 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                isInView ? "animate-reveal-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? { animationDelay: `${0.25 + idx * 0.18}s` }
                  : undefined
              }
            >
              {/* Big faded number — top right */}
              <span className="absolute top-5 right-6 text-5xl md:text-6xl font-extrabold text-border select-none pointer-events-none transition-colors duration-300 group-hover:text-accent-50">
                {number}
              </span>

              {/* Icon — top left */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface mb-12 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                <Icon
                  className="w-5 h-5 text-foreground transition-colors duration-300 group-hover:text-white"
                  aria-hidden="true"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
