"use client";

import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

const METHODS = [
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    primary: "Chat direct",
    secondary: SITE.phone,
    description: "Le moyen le plus rapide. Réponse en quelques minutes.",
    href: SITE.whatsappUrl,
    external: true,
    accent: true,
  },
  {
    Icon: Phone,
    label: "Téléphone",
    primary: "Nous appeler",
    secondary: SITE.phone,
    description: "Pour discuter de vive voix d'une mission urgente.",
    href: SITE.phoneHref,
    external: false,
    accent: false,
  },
  {
    Icon: Mail,
    label: "Email",
    primary: "Nous écrire",
    secondary: SITE.email,
    description: "Pour les demandes détaillées avec pièces jointes.",
    href: SITE.emailHref,
    external: false,
    accent: false,
  },
  {
    Icon: MapPin,
    label: "Adresse",
    primary: "Nous rendre visite",
    secondary: SITE.address.full,
    description: "Notre bureau à Douala — sur rendez-vous uniquement.",
    href: "#location",
    external: false,
    accent: false,
  },
];

export function ContactMethods() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="w-full pt-20 md:pt-28 pb-12 md:pb-16 bg-white px-4 sm:px-6 relative"
    >
      <div className="max-w-350 mx-auto">
        {/* Heading */}
        <div
          className={`max-w-3xl mb-12 md:mb-14 ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
            Choisissez votre canal
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            Quatre façons de
            <span className="text-accent"> nous joindre</span>.
          </h2>
        </div>

        {/* Methods grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {METHODS.map((method, idx) => {
            const { Icon, label, primary, secondary, description, href, external, accent } = method;
            const linkProps = external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <a
                key={label}
                href={href}
                {...linkProps}
                className={`group relative flex flex-col p-7 md:p-8 rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  accent
                    ? "bg-accent text-white border-accent hover:bg-accent-600"
                    : "bg-surface text-foreground border-border hover:border-accent/50 hover:bg-white"
                } ${
                  isInView ? "animate-reveal-up" : "opacity-0"
                }`}
                style={
                  isInView
                    ? { animationDelay: `${0.15 + idx * 0.1}s` }
                    : undefined
                }
              >
                {/* Decorative ring/halo */}
                <div
                  aria-hidden="true"
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full transition-all duration-500 ${
                    accent
                      ? "bg-white/10 group-hover:bg-white/20"
                      : "bg-accent/0 group-hover:bg-accent/10"
                  }`}
                />

                {/* Top: icon + label */}
                <div className="relative flex items-start justify-between mb-8">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      accent
                        ? "bg-white/20 border border-white/30"
                        : "bg-accent/10 border border-accent/20 group-hover:bg-accent group-hover:border-accent"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors duration-500 ${
                        accent
                          ? "text-white"
                          : "text-accent group-hover:text-white"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.15em] font-bold ${
                      accent ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {label}
                  </span>
                </div>

                {/* Content */}
                <div className="relative flex-1">
                  <h3
                    className={`text-xl md:text-2xl font-extrabold leading-tight mb-2 ${
                      accent ? "text-white" : "text-foreground"
                    }`}
                  >
                    {primary}
                  </h3>
                  <p
                    className={`text-sm font-mono font-semibold mb-4 break-all ${
                      accent ? "text-white/90" : "text-accent"
                    }`}
                  >
                    {secondary}
                  </p>
                  <p
                    className={`text-xs md:text-sm leading-relaxed ${
                      accent ? "text-white/80" : "text-muted"
                    }`}
                  >
                    {description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="relative mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      accent ? "text-white/70" : "text-muted"
                    }`}
                  >
                    Y aller
                  </span>
                  <span
                    className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      accent ? "bg-white" : "bg-accent"
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-4 h-4 ${
                        accent ? "text-accent" : "text-white"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
