"use client";

import { Layers, Network, TrendingUp } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const APPROACH_STEPS = [
  {
    Icon: Layers,
    keyword: "Structurer",
    title: "Nous organisons vos flux",
    description:
      "Avant le moindre kilomètre parcouru, nous analysons votre besoin : marchandises, volumes, fréquences, contraintes. Une mission bien préparée est une mission qui réussit.",
    bullets: [
      "Analyse des flux entrants/sortants",
      "Choix du camion adapté",
      "Planification des itinéraires",
    ],
  },
  {
    Icon: Network,
    keyword: "Coordonner",
    title: "Nous orchestrons l'exécution",
    description:
      "Une fois la mission lancée, notre équipe assure la coordination terrain — chargements, transitaires, douanes, points de livraison. Vous restez informé sans avoir à courir derrière.",
    bullets: [
      "Suivi temps réel des missions",
      "Coordination terrain et partenaires",
      "Gestion des imprévus",
    ],
  },
  {
    Icon: TrendingUp,
    keyword: "Optimiser",
    title: "Nous améliorons en continu",
    description:
      "Chaque mission est une occasion d'apprendre. Nous capitalisons sur l'expérience pour réduire les délais, les coûts et les risques sur les prochaines opérations.",
    bullets: [
      "Retours d'expérience exploités",
      "Réduction des temps morts",
      "Amélioration continue",
    ],
  },
];

export function AboutApproach() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

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
            Notre approche
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Trois mots,
            <span className="text-accent"> une méthode</span>.
          </h2>
        </div>

        {/* Approach pillars — vertical stacked layout */}
        <div className="space-y-6 md:space-y-8">
          {APPROACH_STEPS.map((step, idx) => {
            const { Icon, keyword, title, description, bullets } = step;
            const number = String(idx + 1).padStart(2, "0");

            return (
              <article
                key={keyword}
                className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-7 md:p-10 bg-surface rounded-2xl border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-500 overflow-hidden ${
                  isInView ? "animate-reveal-up" : "opacity-0"
                }`}
                style={
                  isInView
                    ? { animationDelay: `${0.2 + idx * 0.15}s` }
                    : undefined
                }
              >
                {/* Numéro filigrane gigantesque */}
                <span
                  aria-hidden="true"
                  className="absolute -top-12 -right-6 md:-right-2 text-[10rem] md:text-[14rem] font-extrabold text-accent/[0.06] select-none pointer-events-none leading-none group-hover:text-accent/[0.1] transition-colors duration-500"
                >
                  {number}
                </span>

                {/* Colonne gauche: keyword + icon */}
                <div className="lg:col-span-4 relative">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-5">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-accent flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                      <Icon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-accent uppercase tracking-wider mb-1">
                        Étape {number}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                        {keyword}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Colonne droite: title + description + bullets */}
                <div className="lg:col-span-8 relative">
                  <h4 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-snug">
                    {title}
                  </h4>
                  <p className="text-sm md:text-base text-muted leading-relaxed mb-5">
                    {description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-xs md:text-sm text-foreground"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
