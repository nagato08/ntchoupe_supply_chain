"use client";

import { CheckCircle, Clock, Shield, Headphones } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const GUARANTEES = [
  {
    Icon: Clock,
    title: "Ponctualité garantie",
    description:
      "Nos délais sont respectés. Si un retard survient malgré nos efforts, nous vous en informons immédiatement et cherchons une solution.",
  },
  {
    Icon: Shield,
    title: "Intégrité des marchandises",
    description:
      "Vos biens arrivent comme prévus. Chaque chargement est sécurisé, arrimage adapté, et inspections régulières tout au long du parcours.",
  },
  {
    Icon: CheckCircle,
    title: "Transparence des prix",
    description:
      "Pas de frais cachés. Le devis que nous vous proposons est le prix final. Tout est clair et documenté dès le départ.",
  },
  {
    Icon: Headphones,
    title: "Support réactif",
    description:
      "Disponible 24/7 pour vos questions. Vous avez besoin d'aide? Nous répondons sur WhatsApp, téléphone ou email — sans délai.",
  },
];

export function Guarantees() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-primary-50 px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        {/* Heading */}
        <div
          className={`max-w-3xl mb-14 md:mb-20 ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
            Notre engagement
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Nous nous engageons sur
            <span className="text-accent"> 4 promesses</span>.
          </h2>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {GUARANTEES.map((guarantee, idx) => {
            const { Icon, title, description } = guarantee;
            return (
              <div
                key={title}
                className={`group relative bg-white rounded-2xl p-8 md:p-9 border border-border hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                  isInView ? "animate-reveal-up" : "opacity-0"
                }`}
                style={
                  isInView
                    ? { animationDelay: `${0.2 + idx * 0.1}s` }
                    : undefined
                }
              >
                {/* Icon background accent */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/5 rounded-full pointer-events-none group-hover:bg-accent/10 transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                    <Icon
                      className="w-6 h-6 text-accent"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                    {title}
                  </h3>

                  <p className="text-sm md:text-base text-muted leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
