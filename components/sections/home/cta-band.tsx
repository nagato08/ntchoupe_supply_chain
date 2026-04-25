"use client";

import { ArrowUpRight, MessageCircle, Phone, Clock } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

export function CtaBand() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-primary text-white px-4 sm:px-6 py-20 md:py-28"
    >
      {/* Décor: motif diagonal orange en filigrane (cohérent avec ServicesHero). */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-24 w-md h-112 rotate-12 opacity-[0.06] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--color-accent) 0 2px, transparent 2px 14px)",
        }}
      />

      {/* Watermark MessageCircle imposant en bas-gauche pour donner du caractère. */}
      <MessageCircle
        aria-hidden="true"
        strokeWidth={1.5}
        className="absolute -bottom-16 -left-16 w-88 h-88 text-accent/8 pointer-events-none"
      />

      {/* Filets accent en haut et en bas pour encadrer la bande. */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent"
      />

      <div className="max-w-350 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Colonne gauche: label + titre éditorial. */}
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1 mb-6">
              Parlons-en
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Une mission à
              <br />
              <span className="text-accent">confier</span> ?
            </h2>
          </div>

          {/* Colonne droite: pitch + CTA principal + téléphone secondaire. */}
          <div
            className={`lg:col-span-5 flex flex-col items-start gap-6 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-md">
              Décrivez-nous votre marchandise, votre origine et votre destination.
              Nous revenons avec une proposition claire — sans engagement.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              {/* CTA principal: WhatsApp pill avec arrow circle (signature du design). */}
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 pl-6 pr-2 py-2 bg-accent hover:bg-accent-600 text-white font-semibold rounded-full transition-colors text-base group"
              >
                <span>Demander un devis</span>
                <span className="flex items-center justify-center w-9 h-9 bg-white rounded-full">
                  <ArrowUpRight
                    className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </span>
              </a>

              {/* CTA secondaire: appel direct, pour les visiteurs qui préfèrent le téléphone. */}
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-full text-sm transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{SITE.phone}</span>
              </a>
            </div>

            {/* Mention discrète "réponse en moins d'une heure" — promesse SLA visible. */}
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>Réponse sous 1 h, du lundi au samedi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
