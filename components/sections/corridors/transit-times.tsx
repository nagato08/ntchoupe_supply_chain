"use client";

import { Timer, AlertCircle } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const TRANSIT_DATA = [
  {
    route: "Douala → Yaoundé",
    distance: "245 km",
    standard: "4–5 h",
    express: "Même jour",
    type: "national",
  },
  {
    route: "Douala → Bafoussam",
    distance: "290 km",
    standard: "5–6 h",
    express: "Même jour",
    type: "national",
  },
  {
    route: "Douala → Kribi",
    distance: "170 km",
    standard: "3 h",
    express: "Même jour",
    type: "national",
  },
  {
    route: "Douala → Garoua",
    distance: "1 100 km",
    standard: "16–20 h",
    express: "1–2 jours",
    type: "national",
  },
  {
    route: "Cameroun → Tchad (N'Djamena)",
    distance: "~1 500 km",
    standard: "3–5 jours",
    express: "Sur devis",
    type: "international",
  },
  {
    route: "Cameroun → RCA (Bangui)",
    distance: "~1 400 km",
    standard: "4–6 jours",
    express: "Sur devis",
    type: "international",
  },
  {
    route: "Cameroun → Gabon (Libreville)",
    distance: "~900 km",
    standard: "2–4 jours",
    express: "Sur devis",
    type: "international",
  },
];

export function TransitTimes() {
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
              Délais de transit
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Des délais
              <span className="text-accent"> annoncés</span>,
              <br className="hidden md:block" />
              des délais tenus.
            </h2>
          </div>
          <div
            className={`lg:col-span-5 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Voici les délais indicatifs sur nos principaux axes. Les délais
              réels dépendent des conditions routières, des formalités et de
              la nature de votre marchandise.
            </p>
          </div>
        </div>

        {/* Tableau visuel */}
        <div
          className={`bg-white border border-border rounded-2xl overflow-hidden shadow-sm ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.3s" } : undefined}
        >
          {/* Header de tableau */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-7 py-5 bg-primary text-white text-xs font-semibold uppercase tracking-[0.15em]">
            <div className="col-span-5">Trajet</div>
            <div className="col-span-2">Distance</div>
            <div className="col-span-3">Délai standard</div>
            <div className="col-span-2">Express</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {TRANSIT_DATA.map((row, idx) => (
              <div
                key={row.route}
                className={`group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-5 md:px-7 py-5 md:py-6 hover:bg-surface transition-colors ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={
                  isInView
                    ? { animationDelay: `${0.4 + idx * 0.06}s` }
                    : undefined
                }
              >
                {/* Trajet (avec badge type) */}
                <div className="md:col-span-5 flex items-center gap-3">
                  <span
                    className={`shrink-0 w-2 h-2 rounded-full ${
                      row.type === "international"
                        ? "bg-accent"
                        : "bg-primary"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold text-foreground leading-tight truncate">
                      {row.route}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-muted mt-0.5 md:hidden">
                      {row.type === "international" ? "International" : "National"}
                    </p>
                  </div>
                </div>

                {/* Distance */}
                <div className="md:col-span-2 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-muted md:hidden">
                    Distance:
                  </span>
                  <span className="text-sm font-mono font-bold text-foreground">
                    {row.distance}
                  </span>
                </div>

                {/* Standard */}
                <div className="md:col-span-3 flex items-center gap-2">
                  <Timer
                    className="w-4 h-4 text-accent shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-bold text-foreground">
                    {row.standard}
                  </span>
                </div>

                {/* Express */}
                <div className="md:col-span-2 flex items-center">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      row.express === "Sur devis"
                        ? "bg-muted/15 text-muted border border-muted/30"
                        : "bg-accent/15 text-accent border border-accent/30"
                    }`}
                  >
                    {row.express}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note de bas */}
        <div
          className={`mt-6 flex items-start gap-3 p-4 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.9s" } : undefined}
        >
          <AlertCircle
            className="w-4 h-4 text-muted shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-xs md:text-sm text-muted leading-relaxed">
            Délais indicatifs hors arrêts douaniers et aléas routiers. Pour
            les chargements urgents ou les itinéraires complexes, consultez-nous
            pour un délai personnalisé.
          </p>
        </div>
      </div>
    </section>
  );
}
