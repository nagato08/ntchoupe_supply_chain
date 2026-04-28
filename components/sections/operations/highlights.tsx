"use client";

import {
  Anchor,
  Mountain,
  Boxes,
  Building,
  Sparkles,
} from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const HIGHLIGHTS = [
  {
    Icon: Anchor,
    period: "T1 2025",
    title: "Renforcement liaison portuaire",
    description:
      "Augmentation de la fréquence des rotations conteneurs depuis le port de Douala vers les villes de l'intérieur. Délais gardés sous 8h.",
    metric: "+30%",
    metricLabel: "Rotations / semaine",
  },
  {
    Icon: Mountain,
    period: "T1 2025",
    title: "Corridor Nord renforcé",
    description:
      "Missions multi-jours Douala → Garoua / Maroua avec partenaires reconnus. Suivi GPS partagé en temps réel.",
    metric: "1 100 km",
    metricLabel: "axe nord opérationnel",
  },
  {
    Icon: Boxes,
    period: "T2 2025",
    title: "Volumes BTP en hausse",
    description:
      "Acheminement de matériaux de construction vers les chantiers de l'Ouest et du Sud. 12 roues mobilisés en priorité.",
    metric: "~28 t",
    metricLabel: "moyenne charge BTP",
  },
  {
    Icon: Building,
    period: "T2 2025",
    title: "Distribution multi-points",
    description:
      "Mise en place de tournées de réassort pour des enseignes de distribution. Optimisation par regroupement de stops.",
    metric: "5+",
    metricLabel: "points par tournée",
  },
];

export function OperationsHighlights() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-white px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-350 mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
              Faits marquants
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Les moments forts
              <br className="hidden md:block" />
              de notre
              <span className="text-accent"> activité récente</span>.
            </h2>
          </div>
          <div
            className={`lg:col-span-5 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Quelques jalons opérationnels qui résument l&apos;évolution de
              notre activité. Chaque trimestre apporte de nouveaux défis
              relevés.
            </p>
          </div>
        </div>

        {/* Process Timeline avec animation au scroll */}
        <div className="relative">
          {/* Ligne verticale dotted (background statique) */}
          <div
            aria-hidden="true"
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "repeating-linear-gradient(180deg, rgba(11,42,91,0.15) 0 6px, transparent 6px 12px)",
            }}
          />

          <div>
            {HIGHLIGHTS.map((highlight, idx) => (
              <ProcessStep
                key={highlight.title}
                highlight={highlight}
                idx={idx}
                isLast={idx === HIGHLIGHTS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- Sub-component: étape de process avec animation déclenchée individuellement -----
type ProcessStepProps = {
  highlight: (typeof HIGHLIGHTS)[number];
  idx: number;
  isLast: boolean;
};

function ProcessStep({ highlight, idx, isLast }: ProcessStepProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.35 });
  const { Icon, period, title, description, metric, metricLabel } = highlight;
  const isEven = idx % 2 === 0;
  const number = String(idx + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center pb-12 md:pb-20 last:pb-0"
    >
      {/* CONNECTOR vertical animé (orange progressif au-dessus du marker) */}
      <div
        aria-hidden="true"
        className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-px overflow-hidden"
        style={{ height: "calc(50% - 24px)" }}
      >
        <div
          className="w-full h-full bg-linear-to-b from-accent/0 to-accent origin-top transition-transform duration-700 ease-out"
          style={{
            transform: isInView ? "scaleY(1)" : "scaleY(0)",
          }}
        />
      </div>

      {/* MARKER numéroté avec pulse au moment où l'étape entre en vue */}
      <div
        aria-hidden="true"
        className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 z-10"
      >
        {/* Pulse ring (au moment du trigger) */}
        <div
          className={`absolute inset-0 rounded-full bg-accent transition-all duration-1000 ${
            isInView ? "scale-[2] opacity-0" : "scale-100 opacity-30"
          }`}
        />
        {/* Marker principal */}
        <div
          className={`relative w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-extrabold text-xs shadow-lg transition-all duration-500 ${
            isInView
              ? "bg-accent border-accent text-white"
              : "bg-white border-border text-muted"
          }`}
        >
          {number}
        </div>
      </div>

      {/* Spacer mobile (laisser place au marker à gauche) */}
      <div aria-hidden="true" className="md:hidden h-2" />

      {/* CARD qui slide-in depuis son côté */}
      <article
        className={`relative ml-16 md:ml-0 transition-all duration-700 ease-out ${
          isEven
            ? "md:col-start-1 md:text-right md:pr-8"
            : "md:col-start-2 md:pl-8"
        } ${
          isInView
            ? "opacity-100 translate-x-0"
            : isEven
              ? "opacity-0 md:-translate-x-8"
              : "opacity-0 md:translate-x-8"
        }`}
      >
        {/* Connector horizontal qui pointe vers le marker (desktop only) */}
        <div
          aria-hidden="true"
          className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-px bg-accent transition-transform duration-500 delay-300 ${
            isEven ? "right-0 origin-right" : "left-0 origin-left"
          } ${isInView ? "scale-x-100" : "scale-x-0"}`}
        />

        <div className="group relative bg-surface border border-border rounded-2xl p-7 md:p-8 hover:border-accent/40 hover:shadow-lg transition-all duration-500 overflow-hidden">
          <div
            className={`flex items-center gap-3 mb-4 ${
              isEven ? "md:justify-end" : "justify-start"
            }`}
          >
            <span className="text-xs font-mono font-bold text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
              {period}
            </span>
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
              <Icon
                className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-500"
                aria-hidden="true"
              />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight mb-3">
            {title}
          </h3>

          <p className="text-sm md:text-base text-muted leading-relaxed mb-5">
            {description}
          </p>

          <div
            className={`inline-flex items-baseline gap-2 pt-4 border-t border-border ${
              isEven ? "md:justify-end md:w-full" : ""
            }`}
          >
            <span
              className={`text-2xl md:text-3xl font-extrabold text-accent leading-none transition-all duration-700 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: isInView ? "0.4s" : "0s" }}
            >
              {metric}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted font-semibold">
              {metricLabel}
            </span>
          </div>
        </div>
      </article>

      {/* CONNECTOR vertical animé (orange progressif en-dessous du marker, vers le step suivant) */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-1/2 translate-y-6 w-px overflow-hidden"
          style={{ bottom: "0" }}
        >
          <div
            className="w-full h-full bg-linear-to-b from-accent to-accent/0 origin-top transition-transform duration-700 ease-out delay-500"
            style={{
              transform: isInView ? "scaleY(1)" : "scaleY(0)",
            }}
          />
        </div>
      )}
    </div>
  );
}
