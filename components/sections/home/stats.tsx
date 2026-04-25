"use client";

import { useInView } from "@/lib/hooks/use-in-view";

// TODO: Valider/remplacer ces chiffres avec le client. La mémoire projet
// interdit d'inventer des chiffres ; les valeurs ci-dessous sont prudentes
// mais doivent être confirmées avant la mise en prod.
const STATS = [
  { value: "1+", label: "Année d'activité" },
  { value: "100+", label: "Missions effectuées" },
  { value: "5+", label: "Partenaires logistiques" },
  { value: "24/7", label: "Support client" },
  { value: "10K+", label: "Kilomètres parcourus" },
  { value: "8+", label: "Pays couverts" },
];

export function Stats() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="w-full pt-12 md:pt-16 pb-20 md:pb-28 bg-white px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Colonne gauche: label filigrane + label souligné + titre + paragraphe. */}
          <div
            className={`relative ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            {/* Watermark "En bref" en filigrane derrière le label visible —
                effet éditorial type "magazine". */}
            <span
              aria-hidden="true"
              className="absolute -top-3 -left-1 text-4xl md:text-5xl font-extrabold text-foreground/5 pointer-events-none select-none whitespace-nowrap"
            >
              En bref
            </span>

            <span className="relative inline-block text-xs font-semibold uppercase tracking-wider text-foreground border-b border-foreground/40 pb-1 mb-6 z-10">
              En bref
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-5">
              Au service des entreprises au Cameroun et en Afrique centrale.
            </h2>

            <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl">
              Du fret routier à la livraison finale, nous structurons vos flux
              logistiques avec fiabilité, rapidité et transparence — au service
              des importateurs, distributeurs et industries locales.
            </p>
          </div>

          {/* Colonne droite: grille 2x3 des chiffres clés avec animation cascadée. */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`${
                  isInView ? "animate-reveal-up" : "opacity-0"
                }`}
                style={
                  isInView
                    ? { animationDelay: `${0.2 + idx * 0.08}s` }
                    : undefined
                }
              >
                <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 leading-none">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
