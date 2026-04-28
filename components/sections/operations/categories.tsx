"use client";

import {
  Container,
  HardHat,
  Apple,
  Factory,
  Fuel,
  ShoppingBag,
} from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const CATEGORIES = [
  {
    Icon: Container,
    code: "OP-01",
    title: "Conteneurs maritimes",
    description:
      "Acheminement depuis le port de Douala vers l'intérieur du pays. 20 et 40 pieds, plein ou vide.",
    examples: ["Import / export", "Conteneurs reefer", "Cross-docking"],
  },
  {
    Icon: HardHat,
    code: "OP-02",
    title: "BTP & matériaux",
    description:
      "Ciment, fer à béton, agrégats, équipements de chantier. Charges lourdes vers les sites de construction.",
    examples: ["Ciment & gravats", "Engins lourds", "Matériaux divers"],
  },
  {
    Icon: Apple,
    code: "OP-03",
    title: "Alimentaire & frais",
    description:
      "Distribution de denrées alimentaires en respectant les normes d'hygiène et la chaîne du frais.",
    examples: ["Produits secs", "Denrées fraîches", "Boissons & emballés"],
  },
  {
    Icon: Factory,
    code: "OP-04",
    title: "Industriel",
    description:
      "Pièces détachées, équipements industriels, fournitures techniques pour usines et ateliers.",
    examples: ["Équipements", "Pièces détachées", "Outillage industriel"],
  },
  {
    Icon: Fuel,
    code: "OP-05",
    title: "Énergie & lubrifiants",
    description:
      "Transport sécurisé de produits énergétiques sous toutes les précautions réglementaires.",
    examples: ["Lubrifiants", "Carburants conditionnés", "Produits techniques"],
  },
  {
    Icon: ShoppingBag,
    code: "OP-06",
    title: "Distribution & retail",
    description:
      "Approvisionnement de magasins, supermarchés et points de vente sur tout le territoire.",
    examples: ["Stock magasin", "Réassort réseau", "Multi-points livraison"],
  },
];

export function OperationsCategories() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-white px-4 sm:px-6"
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
              Types d&apos;opérations
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Six familles
              <span className="text-accent"> d&apos;opérations</span>,
              <br className="hidden md:block" />
              une même rigueur.
            </h2>
          </div>
          <div
            className={`lg:col-span-5 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Chaque famille a ses contraintes, ses standards, sa
              documentation. Notre équipe maîtrise les spécificités de chacune
              pour livrer dans les conditions optimales.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CATEGORIES.map((category, idx) => {
            const { Icon, code, title, description, examples } = category;
            return (
              <article
                key={code}
                className={`group relative bg-surface rounded-2xl p-7 md:p-8 border border-border hover:border-accent/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                  isInView ? "animate-reveal-up" : "opacity-0"
                }`}
                style={
                  isInView
                    ? { animationDelay: `${0.2 + idx * 0.08}s` }
                    : undefined
                }
              >
                {/* Code badge top-right */}
                <span
                  aria-hidden="true"
                  className="absolute top-6 right-6 text-xs font-mono font-bold text-accent/40 group-hover:text-accent transition-colors duration-500"
                >
                  {code}
                </span>

                {/* Icon watermark coin bas-droit */}
                <Icon
                  className="absolute -bottom-4 -right-4 w-32 h-32 text-accent/[0.04] pointer-events-none group-hover:text-accent/[0.08] transition-colors duration-500"
                  strokeWidth={1.2}
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* Icon principal */}
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:rotate-6 transition-all duration-500">
                    <Icon
                      className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight mb-3">
                    {title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {description}
                  </p>

                  {/* Examples chips */}
                  <ul className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {examples.map((example) => (
                      <li
                        key={example}
                        className="inline-flex items-center text-[11px] font-semibold text-foreground bg-white border border-border rounded-full px-2.5 py-1"
                      >
                        {example}
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
