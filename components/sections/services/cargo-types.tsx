"use client";

import { Wheat, HardHat, Boxes, Wrench } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const CARGO_TYPES = [
  {
    Icon: Wheat,
    title: "Produits alimentaires",
    description:
      "Denrées sèches, conserves, marchandises emballées — transport rigoureux dans le respect des conditions de chargement.",
  },
  {
    Icon: HardHat,
    title: "Matériaux de construction",
    description:
      "Ciment, fer à béton, agrégats, briques — chargements lourds vers les chantiers urbains et inter-régions.",
  },
  {
    Icon: Boxes,
    title: "Marchandises générales",
    description:
      "Distribution commerciale, palettisation, conteneurs depuis le port de Douala vers tout le territoire.",
  },
  {
    Icon: Wrench,
    title: "Équipements & outillage",
    description:
      "Machines, mobilier industriel, équipements de chantier — transport sécurisé avec arrimage adapté.",
  },
];

export function CargoTypes() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-surface px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        {/* Heading */}
        <div
          className={`max-w-3xl mb-14 md:mb-20 ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
            Marchandises transportées
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Tous types de chargements,
            <br className="hidden md:block" />
            <span className="text-accent"> une rigueur</span> commune.
          </h2>
        </div>

        {/* Cargo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {CARGO_TYPES.map(({ Icon, title, description }, idx) => (
            <article
              key={title}
              className={`group bg-white p-7 md:p-8 hover:bg-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                isInView ? "animate-reveal-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? { animationDelay: `${0.15 + idx * 0.1}s` }
                  : undefined
              }
            >
              <div className="w-14 h-14 rounded-xl bg-primary-50 group-hover:bg-accent flex items-center justify-center mb-6 transition-colors duration-500">
                <Icon
                  className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-white mb-3 leading-tight transition-colors duration-500">
                {title}
              </h3>
              <p className="text-sm text-muted group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
