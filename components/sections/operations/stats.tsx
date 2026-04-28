"use client";

import {
  TrendingUp,
  Truck,
  CheckCircle2,
  Globe,
  Award,
  Repeat,
} from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const STATS = [
  {
    Icon: CheckCircle2,
    value: "10+",
    label: "Missions livrées",
    sublabel: "depuis le démarrage",
  },
  {
    Icon: Truck,
    value: "10K+",
    label: "Kilomètres parcourus",
    sublabel: "sur les corridors",
  },
  {
    Icon: Globe,
    value: "8",
    label: "Pays couverts",
    sublabel: "via partenaires",
  },
  {
    Icon: Award,
    value: "98%",
    label: "Taux de livraison",
    sublabel: "missions honorées",
  },
  {
    Icon: Repeat,
    value: "70%",
    label: "Clients récurrents",
    sublabel: "qui reviennent",
  },
  {
    Icon: TrendingUp,
    value: "1 h",
    label: "Réponse moyenne",
    sublabel: "lun. → sam.",
  },
];

export function OperationsStats() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="relative w-full py-20 md:py-28 bg-foreground text-white px-4 sm:px-6 overflow-hidden"
    >
      {/* Décor: motif diagonal + blobs flous */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-md h-112 rotate-12 opacity-[0.05] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--color-accent) 0 2px, transparent 2px 14px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="max-w-350 mx-auto relative">
        {/* Heading split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1 mb-6">
              En chiffres
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              L&apos;activité,
              <br className="hidden md:block" />
              <span className="text-accent"> mesurée et tenue</span>.
            </h2>
          </div>
          <div
            className={`lg:col-span-5 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Quelques indicateurs clés de notre activité opérationnelle. Des
              chiffres prudents, vérifiés, et amenés à grandir avec chaque
              nouvelle mission.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {STATS.map(({ Icon, value, label, sublabel }, idx) => (
            <article
              key={label}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:border-accent/40 transition-all duration-500 overflow-hidden ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? { animationDelay: `${0.3 + idx * 0.08}s` }
                  : undefined
              }
            >
              {/* Halo accent au hover */}
              <div
                aria-hidden="true"
                className="absolute -top-12 -right-12 w-24 h-24 bg-accent/0 group-hover:bg-accent/15 rounded-full transition-colors duration-500 blur-xl"
              />

              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:border-accent transition-colors duration-500">
                  <Icon
                    className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-500"
                    aria-hidden="true"
                  />
                </div>

                <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-none mb-2">
                  {value}
                </p>

                <p className="text-xs md:text-sm font-semibold text-white/90 leading-tight mb-1">
                  {label}
                </p>
                <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">
                  {sublabel}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className={`mt-10 text-xs text-white/50 text-center ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "1s" } : undefined}
        >
          Indicateurs internes consolidés sur l&apos;activité récente. Mise à
          jour périodique.
        </p>
      </div>
    </section>
  );
}
