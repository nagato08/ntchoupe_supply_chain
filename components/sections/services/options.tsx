"use client";

import { ShieldCheck, FileCheck, ArrowUpRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

const OPTIONS = [
  {
    Icon: ShieldCheck,
    title: "Assurance à la demande",
    subtitle: "Protection sur mesure",
    description:
      "Selon la nature et la valeur de vos marchandises, nous activons une couverture d'assurance adaptée. Vous décidez du niveau de protection qui correspond à votre risque.",
    bullets: [
      "Couverture sur demande, mission par mission",
      "Adaptée à la valeur déclarée",
      "Process simple et rapide",
    ],
  },
  {
    Icon: FileCheck,
    title: "Accompagnement douanier",
    subtitle: "Formalités sans friction",
    description:
      "Nous orientons et accompagnons vos procédures douanières au port de Douala et aux frontières d'Afrique centrale. Vous gagnez du temps, nous gardons les délais.",
    bullets: [
      "Orientation administrative",
      "Suivi des documents",
      "Coordination port & frontières",
    ],
  },
];

export function Options() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

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
            Services additionnels
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Plus qu&apos;un transporteur,
            <span className="text-accent"> un partenaire</span>.
          </h2>
        </div>

        {/* Options — asymmetric split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {OPTIONS.map(({ Icon, title, subtitle, description, bullets }, idx) => (
            <article
              key={title}
              className={`group relative bg-primary-50 rounded-2xl p-8 md:p-10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                isInView ? "animate-reveal-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? { animationDelay: `${0.2 + idx * 0.15}s` }
                  : undefined
              }
            >
              {/* Big watermark icon */}
              <Icon
                className="absolute -bottom-6 -right-6 w-44 h-44 text-primary/5 pointer-events-none"
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {subtitle}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-4">
                  {title}
                </h3>

                <p className="text-sm md:text-base text-muted leading-relaxed mb-6 max-w-md">
                  {description}
                </p>

                <ul className="space-y-2 mb-8">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                >
                  <span>En discuter sur WhatsApp</span>
                  <ArrowUpRight
                    className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
