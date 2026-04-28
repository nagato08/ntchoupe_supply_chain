"use client";

import { useState, useMemo } from "react";
import {
  Check,
  ArrowRight,
  Truck,
  Package,
  Calendar,
  Container,
  HardHat,
  Apple,
  Factory,
  ShoppingBag,
  Fuel,
} from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const FILTERS = [
  { id: "all", label: "Toutes", count: 8 },
  { id: "container", label: "Conteneurs", count: 2 },
  { id: "btp", label: "BTP", count: 2 },
  { id: "food", label: "Alimentaire", count: 1 },
  { id: "industrial", label: "Industriel", count: 1 },
  { id: "retail", label: "Distribution", count: 1 },
  { id: "fuel", label: "Énergie", count: 1 },
];

type MissionCategory =
  | "container"
  | "btp"
  | "food"
  | "industrial"
  | "retail"
  | "fuel";

const CATEGORY_META: Record<
  MissionCategory,
  { label: string; Icon: typeof Container }
> = {
  container: { label: "Conteneurs", Icon: Container },
  btp: { label: "BTP", Icon: HardHat },
  food: { label: "Alimentaire", Icon: Apple },
  industrial: { label: "Industriel", Icon: Factory },
  retail: { label: "Distribution", Icon: ShoppingBag },
  fuel: { label: "Énergie", Icon: Fuel },
};

const MISSIONS: {
  code: string;
  category: MissionCategory;
  cargo: string;
  from: string;
  to: string;
  truck: string;
  date: string;
  weight: string;
}[] = [
  {
    code: "OP-2025-018",
    category: "container",
    cargo: "Conteneur 40' import",
    from: "Port de Douala",
    to: "Yaoundé",
    truck: "12 roues",
    date: "Avril 2025",
    weight: "~24 t",
  },
  {
    code: "OP-2025-017",
    category: "btp",
    cargo: "Ciment & fer à béton",
    from: "Douala",
    to: "Bafoussam",
    truck: "12 roues",
    date: "Avril 2025",
    weight: "~28 t",
  },
  {
    code: "OP-2025-016",
    category: "food",
    cargo: "Denrées alimentaires",
    from: "Douala",
    to: "Garoua",
    truck: "10 roues",
    date: "Mars 2025",
    weight: "~18 t",
  },
  {
    code: "OP-2025-015",
    category: "container",
    cargo: "Conteneur 20' export",
    from: "Bafoussam",
    to: "Port de Douala",
    truck: "10 roues",
    date: "Mars 2025",
    weight: "~14 t",
  },
  {
    code: "OP-2025-014",
    category: "industrial",
    cargo: "Pièces détachées industrielles",
    from: "Douala",
    to: "Edéa",
    truck: "10 roues",
    date: "Mars 2025",
    weight: "~12 t",
  },
  {
    code: "OP-2025-013",
    category: "btp",
    cargo: "Engins & matériel chantier",
    from: "Douala",
    to: "Kribi",
    truck: "12 roues",
    date: "Février 2025",
    weight: "~26 t",
  },
  {
    code: "OP-2025-012",
    category: "retail",
    cargo: "Réassort multi-points",
    from: "Yaoundé",
    to: "Bertoua",
    truck: "6 roues",
    date: "Février 2025",
    weight: "~7 t",
  },
  {
    code: "OP-2025-011",
    category: "fuel",
    cargo: "Lubrifiants conditionnés",
    from: "Douala",
    to: "Ngaoundéré",
    truck: "10 roues",
    date: "Janvier 2025",
    weight: "~16 t",
  },
];

export function OperationsMissions() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMissions = useMemo(() => {
    if (activeFilter === "all") return MISSIONS;
    return MISSIONS.filter((m) => m.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-surface px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 md:mb-12 items-end">
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
              Missions récentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Le terrain,
              <span className="text-accent"> ce sont nos missions</span>.
            </h2>
          </div>
          <div
            className={`lg:col-span-5 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Quelques exemples concrets de nos opérations récentes — types de
              charges, axes parcourus, camions mobilisés.
            </p>
          </div>
        </div>

        {/* Filters bar — style sobre */}
        <div
          className={`mb-8 md:mb-10 -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.35s" } : undefined}
        >
          <div className="flex md:flex-wrap items-center gap-2 overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                    isActive
                      ? "bg-foreground border-foreground text-white"
                      : "bg-white border-border text-muted hover:border-foreground/30 hover:text-foreground"
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{filter.label}</span>
                  <span
                    className={`text-[10px] font-mono font-bold tabular-nums ${
                      isActive ? "text-white/60" : "text-muted/60"
                    }`}
                  >
                    {String(filter.count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Missions Grid — style sobre, cohérent, pro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filteredMissions.map((mission, idx) => {
            const meta = CATEGORY_META[mission.category];
            const { Icon, label } = meta;
            return (
              <article
                key={mission.code}
                className="group relative bg-white rounded-2xl border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.05 + idx * 0.05}s` }}
              >
                {/* Trait accent gauche au hover (subtil) */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-0.5 h-full bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
                />

                <div className="p-6">
                  {/* Top: code + status */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
                    <span className="text-[11px] font-mono font-bold text-muted tracking-wider tabular-nums">
                      {mission.code}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground">
                      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-foreground">
                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span>Livrée</span>
                    </span>
                  </div>

                  {/* Category + cargo */}
                  <div className="flex items-start gap-3 mb-5">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors duration-300">
                      <Icon
                        className="w-4 h-4 text-foreground group-hover:text-accent transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted mb-1">
                        {label}
                      </p>
                      <h3 className="text-base font-bold text-foreground leading-snug">
                        {mission.cargo}
                      </h3>
                    </div>
                  </div>

                  {/* Trajet */}
                  <div className="bg-surface rounded-xl p-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-muted mb-0.5">
                          Origine
                        </p>
                        <p className="text-sm font-semibold text-foreground truncate">
                          {mission.from}
                        </p>
                      </div>
                      <ArrowRight
                        className="w-4 h-4 text-accent shrink-0 group-hover:translate-x-0.5 transition-transform duration-300"
                        aria-hidden="true"
                      />
                      <div className="flex-1 min-w-0 text-right">
                        <p className="text-[10px] uppercase tracking-wider text-muted mb-0.5">
                          Destination
                        </p>
                        <p className="text-sm font-semibold text-foreground truncate">
                          {mission.to}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Meta footer — typographie épurée */}
                  <div className="flex items-center justify-between text-xs text-muted">
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5" aria-hidden="true" />
                      <span className="font-semibold text-foreground">
                        {mission.truck}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5" aria-hidden="true" />
                      <span className="font-mono font-semibold text-foreground tabular-nums">
                        {mission.weight}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      <span className="font-semibold text-foreground">
                        {mission.date}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredMissions.length === 0 && (
          <div className="text-center py-12 text-muted">
            Aucune mission dans cette catégorie pour le moment.
          </div>
        )}
      </div>
    </section>
  );
}
