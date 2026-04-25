"use client";

import { Target, Eye, Compass } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const PILLARS = [
  {
    Icon: Target,
    title: "Notre mission",
    text: "Structurer, coordonner et optimiser les flux logistiques des entreprises au Cameroun et en Afrique centrale, avec une exigence opérationnelle constante.",
  },
  {
    Icon: Eye,
    title: "Notre vision",
    text: "Devenir la référence de la logistique régionale moderne — un opérateur reconnu pour sa fiabilité, sa transparence et sa capacité à tenir les engagements pris.",
  },
  {
    Icon: Compass,
    title: "Notre raison d'être",
    text: "Nous croyons que chaque entreprise mérite des partenaires logistiques rigoureux. Pas d'excuses, pas de surprises — uniquement des missions honorées.",
  },
];

export function AboutMission() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-white px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Colonne gauche: header + contexte */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-28 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
              Notre histoire
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Bâtie sur une
              <span className="text-accent"> conviction</span>.
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-5 max-w-md">
              NTCHOUPE SUPPLY CHAIN organise et sécurise vos opérations de
              transport au Cameroun et en Afrique centrale. Une approche
              opérationnelle pure, ancrée dans la réalité du terrain.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-md">
              Pas de promesses creuses. Juste une méthode rigoureuse, des
              équipes engagées, et une obsession : que chaque mission soit
              honorée.
            </p>
          </div>

          {/* Colonne droite: 3 piliers (Mission/Vision/Raison d'être) */}
          <div className="lg:col-span-7 space-y-5">
            {PILLARS.map((pillar, idx) => {
              const { Icon, title, text } = pillar;
              return (
                <article
                  key={title}
                  className={`group relative bg-surface rounded-2xl p-7 md:p-8 border border-border hover:border-accent/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                    isInView ? "animate-reveal-up" : "opacity-0"
                  }`}
                  style={
                    isInView
                      ? { animationDelay: `${0.2 + idx * 0.15}s` }
                      : undefined
                  }
                >
                  {/* Decorative number watermark */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-4 -right-2 text-7xl md:text-8xl font-extrabold text-accent/[0.06] select-none pointer-events-none leading-none"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-start gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                      <Icon
                        className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-500"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-3 leading-tight">
                        {title}
                      </h3>
                      <p className="text-sm md:text-base text-muted leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
