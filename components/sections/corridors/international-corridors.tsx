"use client";

import { useState, useMemo } from "react";
import {
  Globe,
  MapPin,
  ArrowUpRight,
  Zap,
  Users,
  Compass,
} from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

type ConnectionType = "direct" | "partner";

const INTERNATIONAL_CORRIDORS: {
  code: string;
  country: string;
  capital: string;
  via: string;
  distance: string;
  connection: ConnectionType;
}[] = [
  {
    code: "TD",
    country: "Tchad",
    capital: "N'Djamena",
    via: "Garoua",
    distance: "~1 500 km",
    connection: "direct",
  },
  {
    code: "CF",
    country: "Centrafrique",
    capital: "Bangui",
    via: "Bertoua",
    distance: "~1 400 km",
    connection: "direct",
  },
  {
    code: "GA",
    country: "Gabon",
    capital: "Libreville",
    via: "Ambam",
    distance: "~900 km",
    connection: "direct",
  },
  {
    code: "GQ",
    country: "Guinée équatoriale",
    capital: "Malabo / Bata",
    via: "Kye-Ossi",
    distance: "~600 km",
    connection: "direct",
  },
  {
    code: "CG",
    country: "Congo",
    capital: "Brazzaville",
    via: "Partenaires",
    distance: "Sur devis",
    connection: "partner",
  },
  {
    code: "CD",
    country: "RDC",
    capital: "Kinshasa",
    via: "Brazzaville",
    distance: "Sur devis",
    connection: "partner",
  },
];

const FILTERS: {
  id: "all" | ConnectionType;
  label: string;
  Icon: typeof Compass;
}[] = [
  { id: "all", label: "Toutes", Icon: Compass },
  { id: "direct", label: "Directes", Icon: Zap },
  { id: "partner", label: "Via partenaires", Icon: Users },
];

export function InternationalCorridors() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState<"all" | ConnectionType>(
    "all"
  );

  const filteredCorridors = useMemo(() => {
    if (activeFilter === "all") return INTERNATIONAL_CORRIDORS;
    return INTERNATIONAL_CORRIDORS.filter(
      (c) => c.connection === activeFilter
    );
  }, [activeFilter]);

  const counts = useMemo(
    () => ({
      all: INTERNATIONAL_CORRIDORS.length,
      direct: INTERNATIONAL_CORRIDORS.filter((c) => c.connection === "direct")
        .length,
      partner: INTERNATIONAL_CORRIDORS.filter(
        (c) => c.connection === "partner"
      ).length,
    }),
    []
  );

  return (
    <section
      ref={ref}
      className="relative w-full pt-20 md:pt-28 pb-10 md:pb-14 bg-surface px-4 sm:px-6 overflow-hidden"
    >
      {/* Watermark Globe — très léger */}
      <Globe
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] text-foreground/2.5 pointer-events-none"
        strokeWidth={1}
        aria-hidden="true"
      />

      <div className="max-w-350 mx-auto relative">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 md:mb-12 items-end">
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
              Corridors internationaux
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
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
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Nos corridors prolongent vers les pays voisins. Filtrez par type
              de connexion pour voir nos opérations directes ou celles via
              partenaires.
            </p>
          </div>
        </div>

        {/* Filter Tabs — sobre et clean */}
        <div
          className={`mb-8 md:mb-10 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.35s" } : undefined}
        >
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              const count = counts[filter.id];
              const { Icon, label } = filter;
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
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{label}</span>
                  <span
                    className={`text-[10px] font-mono font-bold tabular-nums ${
                      isActive ? "text-white/60" : "text-muted/60"
                    }`}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filteredCorridors.map((corridor, idx) => {
            const isDirect = corridor.connection === "direct";
            const whatsappMsg = encodeURIComponent(
              `Bonjour, je souhaite un devis pour un transport vers ${corridor.country} (${corridor.capital}).`
            );
            const corridorUrl = `https://wa.me/${SITE.whatsappNumber}?text=${whatsappMsg}`;

            return (
              <article
                key={corridor.code}
                className="group relative bg-white border border-border rounded-2xl overflow-hidden hover:border-foreground/20 hover:shadow-lg transition-all duration-300 flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                {/* Trait accent gauche au hover (subtil) */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-0.5 h-full bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"
                />

                {/* TOP STATUS BAR — discret */}
                <div className="flex items-center justify-between px-5 md:px-6 py-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isDirect ? "bg-accent" : "bg-muted/50"
                      }`}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
                      {isDirect ? "Opération directe" : "Via partenaire"}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-muted/60 tabular-nums">
                    {corridor.code}
                  </span>
                </div>

                {/* MAIN CONTENT */}
                <div className="relative p-5 md:p-6 flex flex-col flex-1">
                  {/* Country header */}
                  <div className="mb-5">
                    <h3 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight tracking-tight mb-1">
                      {corridor.country}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-muted">
                      <MapPin
                        className="w-3 h-3 text-muted/70 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="truncate">{corridor.capital}</span>
                    </div>
                  </div>

                  {/* Meta — distance + via, compact */}
                  <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-border flex-1">
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted/60 mb-0.5">
                        Via
                      </p>
                      <p className="text-sm font-semibold text-foreground truncate">
                        {corridor.via}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted/60 mb-0.5">
                        Distance
                      </p>
                      <p className="text-sm font-mono font-semibold text-foreground tabular-nums">
                        {corridor.distance}
                      </p>
                    </div>
                  </div>

                  {/* CTA — sobre */}
                  <a
                    href={corridorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta flex items-center justify-between gap-3 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                    aria-label={`Demander un devis pour ${corridor.country}`}
                  >
                    <span>Demander un devis</span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border group-hover/cta:border-accent group-hover/cta:bg-accent transition-all duration-300 shrink-0">
                      <ArrowUpRight
                        className="w-3.5 h-3.5 text-foreground group-hover/cta:text-white group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-all"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Note réseau de partenaires — sobre */}
        <div
          className={`mt-10 md:mt-12 flex items-start gap-4 p-6 md:p-7 bg-white border border-border rounded-2xl ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.8s" } : undefined}
        >
          <div className="shrink-0 w-11 h-11 rounded-full bg-foreground flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-sm md:text-base font-semibold text-foreground leading-snug mb-1">
              Même rigueur, partout
            </p>
            <p className="text-xs md:text-sm text-muted leading-relaxed">
              Que l&apos;opération soit directe ou via un de nos partenaires
              reconnus, vous bénéficiez du même standard de suivi, de
              transparence et d&apos;accompagnement douanier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
