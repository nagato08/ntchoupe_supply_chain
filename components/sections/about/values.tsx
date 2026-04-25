"use client";

import { Handshake, Gauge, Eye, HeartHandshake } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const VALUES = [
  {
    Icon: Handshake,
    title: "Engagement",
    description:
      "Nos missions sont des promesses tenues. Une fois la mission acceptée, nous mettons tout en œuvre pour la mener à bien — avec ou sans imprévu.",
  },
  {
    Icon: Gauge,
    title: "Rigueur",
    description:
      "Chargements vérifiés, itinéraires planifiés, délais respectés. La rigueur opérationnelle n'est pas une option : c'est notre standard de base.",
  },
  {
    Icon: Eye,
    title: "Transparence",
    description:
      "Tarifs clairs, communication ouverte, statut de mission partagé en temps réel. Aucune zone d'ombre — vous savez toujours où vous en êtes.",
  },
  {
    Icon: HeartHandshake,
    title: "Proximité",
    description:
      "Nous travaillons avec vous, pas pour vous. Disponibles, réactifs, à l'écoute — la relation humaine reste au cœur de notre métier.",
  },
];

export function AboutValues() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-surface px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
              Nos valeurs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Quatre principes,
              <br className="hidden md:block" />
              <span className="text-accent"> une seule exigence</span>.
            </h2>
          </div>
          <div
            className={`lg:col-span-5 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Nos valeurs ne sont pas des slogans. Ce sont les comportements
              quotidiens qui guident chaque équipe, chaque mission, chaque
              décision.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {VALUES.map((value, idx) => {
            const { Icon, title, description } = value;
            const number = String(idx + 1).padStart(2, "0");

            return (
              <article
                key={title}
                className={`group relative bg-white rounded-2xl p-8 md:p-10 border border-border hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                  isInView ? "animate-reveal-up" : "opacity-0"
                }`}
                style={
                  isInView
                    ? { animationDelay: `${0.2 + idx * 0.1}s` }
                    : undefined
                }
              >
                {/* Numéro accent en haut à droite */}
                <span
                  aria-hidden="true"
                  className="absolute top-6 right-6 text-sm font-mono font-bold text-accent/40 group-hover:text-accent transition-colors duration-500"
                >
                  {number}
                </span>

                {/* Icon background accent */}
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-accent/5 rounded-full pointer-events-none group-hover:bg-accent/10 transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:rotate-6 transition-all duration-500">
                    <Icon
                      className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-3 leading-tight">
                    {title}
                  </h3>

                  <p className="text-sm md:text-base text-muted leading-relaxed">
                    {description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
