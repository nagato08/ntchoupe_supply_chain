"use client";

import { Truck, Clock, Package, ArrowUpRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { CameroonMap } from "@/components/sections/home/cameroon-map";
import { SITE } from "@/lib/site-config";

const NATIONAL_CORRIDORS = [
  {
    code: "C-01",
    from: "Douala",
    to: "Yaoundé",
    distance: "245 km",
    duration: "4–5 h",
    truck: "10 / 12 roues",
    cargo: "Marchandises générales, conteneurs",
    note: "Axe principal — flux quotidien",
    highlight: true,
  },
  {
    code: "C-02",
    from: "Douala",
    to: "Bafoussam",
    distance: "290 km",
    duration: "5–6 h",
    truck: "10 roues",
    cargo: "BTP, alimentaire, distribution",
    note: "Hub de l'Ouest",
    highlight: false,
  },
  {
    code: "C-03",
    from: "Douala",
    to: "Garoua",
    distance: "1 100 km",
    duration: "16–20 h",
    truck: "12 roues",
    cargo: "Chargements lourds, longue distance",
    note: "Axe Nord — trajets multi-jours",
    highlight: false,
  },
  {
    code: "C-04",
    from: "Douala",
    to: "Kribi",
    distance: "170 km",
    duration: "3 h",
    truck: "6 / 10 roues",
    cargo: "Port en eau profonde, conteneurs",
    note: "Liaison portuaire secondaire",
    highlight: false,
  },
];

export function NationalCorridors() {
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
            Corridors nationaux
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Quatre axes pour
            <span className="text-accent"> couvrir le Cameroun</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Carte sticky à gauche */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-28 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <div className="relative bg-surface rounded-2xl border border-border p-5 md:p-7 overflow-hidden">
              {/* Fond grille subtil */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Cameroun
                  </span>
                  <span className="text-xs text-muted">
                    Vue d&apos;ensemble
                  </span>
                </div>

                <CameroonMap />

                <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-border text-xs">
                  <div className="flex items-center gap-2 text-muted">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span>Hub Douala</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span>Villes desservies</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <span
                      className="w-5 h-px"
                      style={{
                        background:
                          "repeating-linear-gradient(90deg, #F26B21 0 4px, transparent 4px 8px)",
                      }}
                    />
                    <span>Corridors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des corridors à droite */}
          <div className="lg:col-span-7 space-y-4">
            {NATIONAL_CORRIDORS.map((corridor, idx) => (
              <article
                key={corridor.code}
                className={`group relative rounded-2xl border overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  corridor.highlight
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-foreground border-border hover:border-accent/50"
                } ${
                  isInView ? "animate-reveal-up" : "opacity-0"
                }`}
                style={
                  isInView
                    ? { animationDelay: `${0.3 + idx * 0.12}s` }
                    : undefined
                }
              >
                {/* Bordure latérale accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />

                <div className="p-6 md:p-7">
                  {/* Top bar: code + note */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-bold ${
                          corridor.highlight ? "text-accent" : "text-accent"
                        }`}
                      >
                        {corridor.code}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-[0.15em] font-semibold ${
                          corridor.highlight ? "text-white/60" : "text-muted"
                        }`}
                      >
                        {corridor.note}
                      </span>
                    </div>
                    {corridor.highlight && (
                      <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-accent bg-accent/15 border border-accent/30 px-2.5 py-1 rounded-full">
                        Star
                      </span>
                    )}
                  </div>

                  {/* From → To */}
                  <div className="flex items-center gap-3 md:gap-4 mb-6">
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[10px] uppercase tracking-wider mb-1 ${
                          corridor.highlight
                            ? "text-white/50"
                            : "text-muted/70"
                        }`}
                      >
                        Origine
                      </p>
                      <h3 className="text-xl md:text-2xl font-extrabold leading-tight truncate">
                        {corridor.from}
                      </h3>
                    </div>
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-accent">
                      <ArrowUpRight
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1 text-right">
                      <p
                        className={`text-[10px] uppercase tracking-wider mb-1 ${
                          corridor.highlight
                            ? "text-white/50"
                            : "text-muted/70"
                        }`}
                      >
                        Destination
                      </p>
                      <h3 className="text-xl md:text-2xl font-extrabold leading-tight truncate">
                        {corridor.to}
                      </h3>
                    </div>
                  </div>

                  {/* Stats inline */}
                  <div
                    className={`grid grid-cols-3 gap-3 pt-5 border-t ${
                      corridor.highlight ? "border-white/10" : "border-border"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Clock
                        className="w-4 h-4 text-accent shrink-0"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <p
                          className={`text-[10px] uppercase tracking-wider ${
                            corridor.highlight
                              ? "text-white/50"
                              : "text-muted/70"
                          }`}
                        >
                          Délai
                        </p>
                        <p className="text-sm font-bold leading-tight truncate">
                          {corridor.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <Truck
                        className="w-4 h-4 text-accent shrink-0"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <p
                          className={`text-[10px] uppercase tracking-wider ${
                            corridor.highlight
                              ? "text-white/50"
                              : "text-muted/70"
                          }`}
                        >
                          Camion
                        </p>
                        <p className="text-sm font-bold leading-tight truncate">
                          {corridor.truck}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 min-w-0">
                      <Package
                        className="w-4 h-4 text-accent shrink-0"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <p
                          className={`text-[10px] uppercase tracking-wider ${
                            corridor.highlight
                              ? "text-white/50"
                              : "text-muted/70"
                          }`}
                        >
                          Distance
                        </p>
                        <p className="text-sm font-bold leading-tight truncate">
                          {corridor.distance}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Cargo type */}
                  <p
                    className={`text-xs mt-4 ${
                      corridor.highlight ? "text-white/70" : "text-muted"
                    }`}
                  >
                    <span className="font-semibold">Marchandises typiques:</span>{" "}
                    {corridor.cargo}
                  </p>
                </div>
              </article>
            ))}

            {/* CTA en bas */}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 p-5 mt-2 bg-surface border border-border rounded-2xl hover:border-accent/50 hover:shadow-md transition-all"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground leading-tight">
                  Un autre axe à couvrir?
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Nos partenaires nous permettent d&apos;atteindre toutes les
                  villes du Cameroun.
                </p>
              </div>
              <span className="flex items-center justify-center w-10 h-10 bg-accent rounded-full shrink-0 group-hover:bg-accent-600 transition-colors">
                <ArrowUpRight
                  className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
