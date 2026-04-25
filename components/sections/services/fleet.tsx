"use client";

import { Truck, Check, ArrowUpRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

const FLEET = [
  {
    number: "01",
    name: "Camion 6 roues",
    capacity: "Petits & moyens chargements",
    description:
      "Idéal pour les zones urbaines, les livraisons rapides et les missions du quotidien.",
    features: [
      "Manœuvrabilité urbaine",
      "Départ le jour même",
      "Livraisons multi-points",
      "Marchandises légères",
    ],
  },
  {
    number: "02",
    name: "Camion 10 roues",
    capacity: "Capacité standard",
    description:
      "Notre cheval de bataille pour les marchandises générales, alimentaires et matériaux courants.",
    features: [
      "Volume polyvalent",
      "Trajets inter-régions",
      "Marchandises générales",
      "Tarif optimisé",
    ],
  },
  {
    number: "03",
    name: "Camion 12 roues",
    capacity: "Chargements lourds & volumineux",
    description:
      "Pour les marchandises lourdes, les matériaux de construction et les longues distances.",
    features: [
      "Charge utile élevée",
      "Grands axes routiers",
      "Marchandises lourdes",
      "Afrique centrale",
    ],
  },
];

export function Fleet() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-white px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        {/* Heading */}
        <div
          className={`max-w-3xl mb-14 md:mb-20 ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
            Notre flotte
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Trois capacités, une seule
            <span className="text-accent"> exigence</span>.
          </h2>
        </div>

        {/* Fleet cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {FLEET.map((truck, idx) => (
            <article
              key={truck.number}
              className={`group relative bg-surface rounded-2xl p-7 md:p-8 flex flex-col hover:bg-primary hover:text-white transition-all duration-500 overflow-hidden hover:shadow-2xl hover:-translate-y-2 ${
                isInView ? "animate-reveal-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? { animationDelay: `${0.2 + idx * 0.15}s` }
                  : undefined
              }
            >
              {/* Diagonal orange accent — top right */}
              <div
                aria-hidden="true"
                className="absolute -top-12 -right-12 w-32 h-32 rotate-45 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500"
              />

              {/* Header: number + truck icon */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-sm font-mono font-bold text-accent">
                  {truck.number}
                </span>
                <div className="w-12 h-12 rounded-full bg-white group-hover:bg-accent flex items-center justify-center transition-colors duration-500">
                  <Truck
                    className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2 text-foreground group-hover:text-white transition-colors duration-500">
                {truck.name}
              </h3>

              {/* Capacity */}
              <p className="text-sm font-medium text-accent mb-4 uppercase tracking-wide">
                {truck.capacity}
              </p>

              {/* Description */}
              <p className="text-sm md:text-base text-muted group-hover:text-white/80 mb-6 leading-relaxed transition-colors duration-500">
                {truck.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2 mb-8 flex-1">
                {truck.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground group-hover:text-white/90 transition-colors duration-500"
                  >
                    <Check
                      className="w-4 h-4 text-accent shrink-0"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 px-5 py-3 bg-accent hover:bg-accent-600 text-white font-semibold rounded-full transition-colors text-sm"
              >
                <span>Réserver ce camion</span>
                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
