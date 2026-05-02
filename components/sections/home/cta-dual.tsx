"use client";

import { ArrowUpRight, Plane, Shield, Globe } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const FEATURES = [
  { Icon: Globe, label: "Visa & démarches" },
  { Icon: Shield, label: "Accompagnement expert" },
];

export function CtaDual() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="w-full py-16 md:py-20 bg-white px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        <div
          className={`relative grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/40 hover:shadow-xl transition-all duration-500 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Section visuelle gauche (icône + badge) */}
          <div className="relative lg:col-span-4 bg-linear-to-br from-primary to-primary-900 p-6 md:p-10 flex flex-row lg:flex-col items-center lg:items-start justify-between gap-4 lg:gap-0 lg:min-h-56 overflow-hidden">
            {/* Décor: cercles concentriques */}
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute top-8 right-8 w-32 h-32 rounded-full border border-accent/30"
            />

            {/* Badge top */}
            <div className="relative inline-flex items-center gap-2 self-start px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                Service partenaire
              </span>
            </div>

            {/* Icône principale */}
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-accent shadow-lg">
                <Plane className="w-6 h-6 lg:w-8 lg:h-8 text-white" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Section contenu droite */}
          <div className="lg:col-span-8 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              NTCHOUPE Immigration Agency
            </p>

            <h3 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight mb-3">
              Besoin de service en immigration&nbsp;?
            </h3>

            <p className="text-sm md:text-lg text-muted leading-relaxed mb-6 max-w-xl">
              Consultez notre site partenaire pour un accompagnement complet sur
              vos démarches d&apos;immigration.
            </p>

            {/* Features list */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-7">
              {FEATURES.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 text-sm text-foreground"
                >
                  <Icon
                    className="w-4 h-4 text-accent"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://n-k-immagration.vercel.app/acceuil"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground hover:bg-accent text-white font-semibold rounded-full transition-colors duration-300 text-sm md:text-base"
              >
                <span>Consulter le site</span>
                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://n-k-immagration.vercel.app/acceuil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-muted hover:text-accent transition-colors px-4 py-3"
              >
                En savoir plus →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
