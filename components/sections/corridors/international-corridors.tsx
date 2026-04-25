"use client";

import { Globe, MapPin, Anchor } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const INTERNATIONAL_CORRIDORS = [
  {
    country: "Tchad",
    capital: "N'Djamena",
    flag: "🇹🇩",
    via: "via Garoua",
    type: "Routier longue distance",
    note: "Corridor stratégique vers le Sahel",
  },
  {
    country: "République centrafricaine",
    capital: "Bangui",
    flag: "🇨🇫",
    via: "via Bertoua",
    type: "Routier longue distance",
    note: "Acheminement de l'Est camerounais",
  },
  {
    country: "Gabon",
    capital: "Libreville",
    flag: "🇬🇦",
    via: "via Ambam",
    type: "Routier transfrontalier",
    note: "Corridor Sud — partenariats actifs",
  },
  {
    country: "Guinée équatoriale",
    capital: "Malabo / Bata",
    flag: "🇬🇶",
    via: "via Kye-Ossi",
    type: "Routier + maritime",
    note: "Liaison océanique depuis Kribi",
  },
  {
    country: "Congo (Brazzaville)",
    capital: "Brazzaville",
    flag: "🇨🇬",
    via: "via partenaires",
    type: "Multimodal",
    note: "Via réseau de partenaires reconnus",
  },
  {
    country: "RDC",
    capital: "Kinshasa",
    flag: "🇨🇩",
    via: "via Brazzaville",
    type: "Multimodal",
    note: "Corridor étendu — délais variables",
  },
];

export function InternationalCorridors() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="relative w-full py-20 md:py-28 bg-foreground text-white px-4 sm:px-6 overflow-hidden"
    >
      {/* Watermark Globe */}
      <Globe
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] text-white/[0.03] pointer-events-none"
        strokeWidth={1}
        aria-hidden="true"
      />

      {/* Filet accent en haut */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="max-w-350 mx-auto relative">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent border-b border-accent/40 pb-1 mb-6">
              Corridors internationaux
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Au-delà du Cameroun,
              <br className="hidden md:block" />
              <span className="text-accent">
                {" "}toute l&apos;Afrique centrale
              </span>
              .
            </h2>
          </div>
          <div
            className={`lg:col-span-5 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Nos corridors prolongent vers les pays voisins via notre réseau
              de partenaires reconnus. Des opérations transfrontalières
              maîtrisées avec accompagnement douanier complet.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {INTERNATIONAL_CORRIDORS.map((corridor, idx) => (
            <article
              key={corridor.country}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-7 hover:bg-white/10 hover:border-accent/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                isInView ? "animate-reveal-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? { animationDelay: `${0.3 + idx * 0.08}s` }
                  : undefined
              }
            >
              {/* Decorative corner accent */}
              <div
                aria-hidden="true"
                className="absolute -top-6 -right-6 w-20 h-20 bg-accent/0 group-hover:bg-accent/20 rounded-full transition-colors duration-500"
              />

              <div className="relative">
                {/* Flag + arrow */}
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl md:text-4xl leading-none">
                    {corridor.flag}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors duration-500">
                    <MapPin
                      className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Country */}
                <h3 className="text-xl md:text-2xl font-extrabold leading-tight mb-1">
                  {corridor.country}
                </h3>
                <p className="text-sm text-accent font-semibold mb-4">
                  {corridor.capital}
                </p>

                {/* Meta */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-white/50 uppercase tracking-wider min-w-[60px]">
                      Voie
                    </span>
                    <span className="text-white/90 font-semibold">
                      {corridor.via}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-white/50 uppercase tracking-wider min-w-[60px]">
                      Type
                    </span>
                    <span className="text-white/90 font-semibold">
                      {corridor.type}
                    </span>
                  </div>
                </div>

                {/* Note en bas */}
                <p className="mt-4 text-xs text-white/60 leading-relaxed">
                  {corridor.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Note réseau de partenaires */}
        <div
          className={`mt-12 md:mt-14 flex items-start gap-4 p-6 md:p-7 bg-accent/10 border border-accent/30 rounded-2xl ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.8s" } : undefined}
        >
          <div className="shrink-0 w-11 h-11 rounded-full bg-accent flex items-center justify-center">
            <Anchor className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-sm md:text-base font-semibold text-white leading-snug mb-1">
              Réseau de partenaires reconnus
            </p>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              Pour les corridors les plus étendus, nous travaillons avec des
              transporteurs et transitaires éprouvés. Vous bénéficiez de la
              même rigueur que sur nos opérations directes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
