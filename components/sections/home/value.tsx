"use client";

import { LayoutGrid, Network, TrendingUp } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const VALUES = [
  {
    Icon: LayoutGrid,
    title: "Structurer",
    description:
      "Nous organisons chaque mission en amont : choix du camion, planification du chargement, anticipation des étapes — pour des opérations sans improvisation.",
  },
  {
    Icon: Network,
    title: "Coordonner",
    description:
      "Communication directe avec votre équipe et nos chauffeurs, mise en relation avec nos partenaires logistiques sur l'ensemble du parcours.",
  },
  {
    Icon: TrendingUp,
    title: "Optimiser",
    description:
      "Itinéraires choisis, délais maîtrisés, coûts optimisés — nous améliorons en continu nos process pour livrer plus vite et plus sûr.",
  },
];

export function Value() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="w-full py-12 md:py-16 px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        <div className="relative bg-foreground text-white rounded-3xl overflow-hidden p-6 sm:p-8 md:p-14 lg:p-16">
          {/* Ghost watermark "Nos Valeurs" — top left */}
          <span
            aria-hidden="true"
            className="absolute -top-2 left-6 md:left-12 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white/4 pointer-events-none select-none whitespace-nowrap"
          >
            Nos Valeurs
          </span>

          {/* Label */}
          <span
            className={`relative inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 mb-6 z-10 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            Nos valeurs
          </span>

          {/* Title */}
          <h2
            className={`relative text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] max-w-2xl mb-12 md:mb-20 z-10 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.15s" } : undefined}
          >
            Une logistique sur laquelle vous pouvez compter.
          </h2>

          {/* Values grid with dashed connector */}
          <div className="relative">
            {/* Dashed horizontal line — passes behind the icons */}
            <div
              aria-hidden="true"
              className={`absolute top-6 left-[16.66%] right-[16.66%] hidden md:block border-t-2 border-dashed border-white/15 ${
                isInView ? "animate-fade-in" : "opacity-0"
              }`}
              style={isInView ? { animationDelay: "0.6s" } : undefined}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {VALUES.map(({ Icon, title, description }, idx) => (
                <div
                  key={title}
                  className={`relative ${
                    isInView ? "animate-reveal-up" : "opacity-0"
                  }`}
                  style={
                    isInView
                      ? { animationDelay: `${0.3 + idx * 0.15}s` }
                      : undefined
                  }
                >
                  {/* Icon circle */}
                  <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-10 md:mb-14">
                    <Icon
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-extrabold mb-3 leading-tight">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-sm">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
