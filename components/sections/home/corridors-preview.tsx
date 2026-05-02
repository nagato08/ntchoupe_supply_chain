"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin, Anchor } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import {
  CITIES_CAMEROON,
  CENTRAL_AFRICA_COUNTRIES,
} from "@/lib/site-config";
import { CameroonMap } from "./cameroon-map";

// Corridors principaux affichés sur la home (preview de la page /corridors).
// L'origine et la destination sont séparées pour un rendu visuel "axe" plus clair
// que le format texte unique "X ↔ Y".
const CORRIDORS = [
  { from: "Douala", to: "Yaoundé", note: "Axe principal" },
  { from: "Kribi", to: "Garoua", note: "Axe nord" },
  { from: "Douala", to: "Bafoussam", note: "Conteneurs" },
];

export function CorridorsPreview() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-12 md:py-16 bg-surface px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Colonne gauche: header + corridors + CTA. */}
          <div
            className={`${isInView ? "animate-reveal-up" : "opacity-0"}`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
              Notre couverture
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-5">
              De Douala vers tout
              <br className="hidden md:block" />
              <span className="text-accent"> l&apos;Afrique centrale</span>.
            </h2>

            <p className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-lg">
              Trois axes majeurs au Cameroun, prolongés vers les differentes villes
              voisines. Notre flotte et notre réseau de partenaires couvrent
              l&apos;essentiel des axes commerciaux régionaux.
            </p>

            {/* Liste des corridors principaux avec un visuel "axe" clair
                (origine → destination, séparées par une flèche orange). */}
            <ul className="space-y-4 mb-10">
              {CORRIDORS.map((corridor) => (
                <li
                  key={`${corridor.from}-${corridor.to}`}
                  className="flex items-start gap-4 p-4 bg-white border border-border rounded-xl hover:border-accent/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <ArrowUpRight
                      className="w-4 h-4 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-foreground">
                      <span className="truncate">{corridor.from}</span>
                      <span className="text-accent font-bold">→</span>
                      <span className="truncate">{corridor.to}</span>
                    </div>
                    <p className="text-xs text-muted mt-1 uppercase tracking-wider">
                      {corridor.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/corridors"
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-accent hover:bg-accent-600 text-white font-semibold rounded-full transition-colors text-sm group"
            >
              <span>Voir tous les corridors</span>
              <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                <ArrowUpRight
                  className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>

          {/* Colonne droite: schéma logistique stylisé + grille des villes +
              pills des pays Afrique centrale. */}
          <div
            className={`${isInView ? "animate-reveal-up" : "opacity-0"}`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            {/* Schéma SVG: pas une vraie carte, un diagramme abstrait des axes. */}
            <div className="relative bg-white rounded-2xl border border-border p-5 md:p-7 mb-6 overflow-hidden">
              {/* Fond grille très subtil pour donner un effet "plan". */}
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
                    Schéma indicatif
                  </span>
                </div>

                {/* Vraie carte du Cameroun via react-simple-maps + données
                    Natural Earth (domaine public). Voisins en gris, Cameroun en
                    surbrillance, lignes corridors orange depuis Douala. */}
                <CameroonMap />

                {/* Légende compacte sous le schéma. */}
                <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-border text-xs">
                  <div className="flex items-center gap-2 text-muted">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span>Hub principal</span>
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

            {/* Bloc "Afrique centrale" — pays voisins couverts via partenaires. */}
            <div className="bg-white rounded-2xl border border-border p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Anchor className="w-4 h-4 text-accent" aria-hidden="true" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                  Au-delà du Cameroun
                </h3>
              </div>
              <p className="text-sm text-muted mb-4">
                Nous prolongeons nos corridors vers l&apos;ensemble des pays
                d&apos;Afrique centrale via notre réseau de partenaires.
              </p>
              <div className="flex flex-wrap gap-2">
                {CENTRAL_AFRICA_COUNTRIES.filter(
                  (c) => c !== "Cameroun"
                ).map((country) => (
                  <span
                    key={country}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground bg-surface border border-border rounded-full px-3 py-1"
                  >
                    <MapPin className="w-3 h-3 text-accent" aria-hidden="true" />
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bandeau bas: villes camerounaises desservies — preuve de couverture
            interne complémentaire à la carte ci-dessus. */}
        <div
          className={`mt-12 md:mt-14 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.45s" } : undefined}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Villes desservies au Cameroun
          </span>
          <div className="flex flex-wrap gap-2">
            {CITIES_CAMEROON.map((city) => (
              <span
                key={city}
                className="text-sm text-foreground font-medium bg-white border border-border rounded-full px-3 py-1"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
