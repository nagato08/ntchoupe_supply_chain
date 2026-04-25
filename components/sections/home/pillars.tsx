"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const PILLARS = [
  {
    title: "Fiabilité",
    description:
      "Pas de retard, pas de perte. Vos marchandises arrivent intactes et à l'heure, à chaque mission. Notre rigueur opérationnelle est au cœur de notre engagement.",
  },
  {
    title: "Rapidité",
    description:
      "Réponse sous 1 heure et départ le jour même sur la plupart des trajets. Nous mobilisons rapidement le bon camion pour respecter vos délais.",
  },
  {
    title: "Transparence",
    description:
      "Suivi temps réel via votre chargé d'opération, communication directe, aucune surprise à la livraison. Nous partageons chaque étape clé du trajet.",
  },
  {
    title: "Accompagnement personnalisé",
    description:
      "Support complet sur les documents, l'accompagnement douanier et les conseils logistiques. Nous adaptons nos solutions à votre contexte.",
  },
];

export function Pillars() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      ref={ref}
      className="w-full pt-12 md:pt-16 pb-12 md:pb-16 bg-white px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column: heading + accordion */}
          <div
            className={`${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
              Au service des professionnels
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-10 max-w-lg">
              Nous combinons rigueur opérationnelle, suivi temps réel et engagement sur les délais pour offrir des solutions logistiques fiables.
            </p>

            {/* Accordion */}
            <div className="border-t border-border">
              {PILLARS.map((pillar, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={pillar.title}
                    className="border-b border-border"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between py-5 text-left group"
                    >
                      <span className="text-lg md:text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {pillar.title}
                      </span>
                      <span className="shrink-0 ml-4">
                        {isOpen ? (
                          <ChevronDown
                            className="w-5 h-5 text-muted transition-transform"
                            aria-hidden="true"
                          />
                        ) : (
                          <ChevronRight
                            className="w-5 h-5 text-muted transition-transform group-hover:text-accent"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </button>

                    {/* Description with smooth expand/collapse */}
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm md:text-base text-muted leading-relaxed pb-5 pr-8">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column: image */}
          <div
            className={`relative aspect-4/3 lg:aspect-5/4 rounded-2xl overflow-hidden ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={
              isInView ? { animationDelay: "0.2s" } : undefined
            }
          >
            {/* TODO: replace with a real photo (truck, port, cargo). Path can be changed in public/images/. */}
            <Image
              src="/images/marchandises/pillard.png"
              alt="Opérations de transport NTCHOUPE"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
