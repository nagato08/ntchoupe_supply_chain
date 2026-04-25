"use client";

import {
  PhoneCall,
  ClipboardCheck,
  Truck,
  PackageCheck,
} from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const STEPS = [
  {
    number: "01",
    Icon: PhoneCall,
    title: "Vous nous contactez",
    description:
      "Décrivez-nous votre marchandise, l'origine et la destination. Par téléphone, WhatsApp ou email — comme vous préférez.",
  },
  {
    number: "02",
    Icon: ClipboardCheck,
    title: "Devis sous 1 heure",
    description:
      "Nous évaluons le corridor optimal, le camion adapté, les délais et le tarif. Vous recevez une proposition claire et complète.",
  },
  {
    number: "03",
    Icon: Truck,
    title: "Transport sécurisé",
    description:
      "Chargement, transit et suivi régulier. Vous êtes informé à chaque étape clé du parcours, sans surprise.",
  },
  {
    number: "04",
    Icon: PackageCheck,
    title: "Livraison confirmée",
    description:
      "Marchandise remise au destinataire. Confirmation de livraison et clôture de mission — propre et documenté.",
  },
];

export function CorridorsProcess() {
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
            Notre process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            De la demande à la
            <span className="text-accent"> livraison</span>,
            <br className="hidden md:block" />
            quatre étapes seulement.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Ligne pointillée horizontale derrière sur desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{
              background:
                "repeating-linear-gradient(90deg, var(--color-accent) 0 6px, transparent 6px 14px)",
              opacity: 0.3,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {STEPS.map((step, idx) => {
              const { Icon, number, title, description } = step;
              return (
                <article
                  key={number}
                  className={`group relative ${
                    isInView ? "animate-reveal-up" : "opacity-0"
                  }`}
                  style={
                    isInView
                      ? { animationDelay: `${0.2 + idx * 0.15}s` }
                      : undefined
                  }
                >
                  {/* Icon container avec halo accent */}
                  <div className="relative mb-6">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-accent/10 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="relative w-24 h-24 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                      <Icon
                        className="w-9 h-9 text-accent"
                        aria-hidden="true"
                      />
                      {/* Numéro flottant */}
                      <span className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-primary text-white text-xs font-extrabold flex items-center justify-center shadow-lg">
                        {number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight mb-3">
                    {title}
                  </h3>
                  <p className="text-sm md:text-base text-muted leading-relaxed">
                    {description}
                  </p>

                  {/* Connector arrow (mobile vertical, desktop hidden) */}
                  {idx < STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="md:hidden flex justify-center my-6"
                    >
                      <span className="text-accent text-2xl font-bold">↓</span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
