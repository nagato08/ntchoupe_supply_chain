"use client";

import Link from "next/link";
import { Truck, ShieldCheck, FileCheck, ArrowUpRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const SERVICES = [
  {
    Icon: Truck,
    title: "Transport routier",
    description:
      "Camions 6, 10 et 12 roues mobilisés selon votre besoin. Du chargement urbain au transport longue distance vers tout le Cameroun et l'Afrique centrale.",
    featured: true,
  },
  {
    Icon: ShieldCheck,
    title: "Assurance à la demande",
    description:
      "Couverture d'assurance activée mission par mission, adaptée à la valeur de vos marchandises. Vous décidez du niveau de protection.",
    featured: false,
  },
  {
    Icon: FileCheck,
    title: "Accompagnement douanier",
    description:
      "Orientation et suivi des formalités douanières au port de Douala et aux frontières d'Afrique centrale. Vous gagnez du temps, on tient les délais.",
    featured: false,
  },
];

export function Services() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="services"
      className="w-full pt-12 md:pt-16 pb-12 md:pb-16 bg-white px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        {/* Header: title left, button + description right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 md:mb-16">
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-left" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05]">
              Une offre logistique
              <br />
              <span className="text-foreground">complète.</span>
            </h2>
          </div>

          <div
            className={`lg:col-span-5 flex flex-col items-start lg:items-end gap-5 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.25s" } : undefined}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-600 text-white font-semibold rounded-full transition-colors text-sm group"
            >
              <span>Voir tous les services</span>
              <ArrowUpRight
                className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                aria-hidden="true"
              />
            </Link>
            <p className="text-sm md:text-base text-muted leading-relaxed lg:text-right max-w-sm">
              Du fret routier à l&apos;accompagnement douanier, nous structurons chaque étape de vos flux de marchandises avec rigueur et transparence.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map(({ Icon, title, description, featured }, idx) => {
            const baseClasses = featured
              ? "bg-primary text-white"
              : "bg-surface text-foreground hover:bg-primary hover:text-white";

            return (
              <Link
                href="/services"
                key={title}
                className={`group relative rounded-2xl p-7 md:p-8 min-h-70 md:min-h-80 flex flex-col transition-colors duration-500 overflow-hidden ${baseClasses} ${
                  isInView ? "animate-reveal-up" : "opacity-0"
                }`}
                style={
                  isInView
                    ? { animationDelay: `${0.4 + idx * 0.15}s` }
                    : undefined
                }
              >
                {/* Top row: icon circle + arrow */}
                <div className="flex items-start justify-between mb-auto">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${
                      featured
                        ? "bg-white/10"
                        : "bg-white group-hover:bg-white/10"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors duration-500 ${
                        featured
                          ? "text-white"
                          : "text-foreground group-hover:text-white"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <ArrowUpRight
                    className={`w-6 h-6 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      featured
                        ? "text-white"
                        : "text-foreground group-hover:text-white"
                    }`}
                    aria-hidden="true"
                  />
                </div>

                {/* Bottom: title + description */}
                <div className="mt-12">
                  <h3 className="text-xl md:text-2xl font-extrabold mb-3 leading-tight">
                    {title}
                  </h3>
                  <p
                    className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${
                      featured
                        ? "text-white/80"
                        : "text-muted group-hover:text-white/80"
                    }`}
                  >
                    {description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
