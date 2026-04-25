"use client";

import { ArrowUpRight, MessageCircle, Phone, MapPin } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

export function CorridorsCta() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-primary text-white px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Décor: motif diagonal orange en filigrane */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-32 w-md h-112 rotate-12 opacity-[0.06] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--color-accent) 0 2px, transparent 2px 14px)",
        }}
      />

      {/* Watermark MapPin */}
      <MapPin
        className="absolute -bottom-24 -left-12 w-80 h-80 text-accent/[0.05] pointer-events-none"
        strokeWidth={1.2}
        aria-hidden="true"
      />

      {/* Filets accent top/bottom */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent"
      />

      <div className="max-w-350 mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Texte */}
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1 mb-6">
              Prêt à expédier?
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
              Quel corridor
              <br />
              <span className="text-accent">pour vos marchandises</span>?
            </h2>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
              Décrivez-nous votre origine, votre destination et le type de
              marchandise. Nous vous proposons l&apos;axe optimal et un devis
              clair en moins d&apos;une heure.
            </p>
          </div>

          {/* CTAs */}
          <div
            className={`lg:col-span-5 flex flex-col gap-4 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 pl-6 pr-2 py-3 bg-accent hover:bg-accent-600 text-white font-semibold rounded-full transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <MessageCircle
                  className="w-5 h-5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm md:text-base truncate">
                  Demander un devis sur WhatsApp
                </span>
              </div>
              <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full shrink-0">
                <ArrowUpRight
                  className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </span>
            </a>

            <a
              href={SITE.phoneHref}
              className="group flex items-center justify-between gap-4 pl-6 pr-2 py-3 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-semibold rounded-full transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span className="text-sm md:text-base truncate">
                  {SITE.phone}
                </span>
              </div>
              <span className="flex items-center justify-center w-10 h-10 bg-white/10 group-hover:bg-white rounded-full shrink-0 transition-colors">
                <ArrowUpRight
                  className="w-4 h-4 text-white group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  aria-hidden="true"
                />
              </span>
            </a>

            {/* Note de réactivité */}
            <p className="text-xs text-white/60 leading-relaxed mt-2 pl-2">
              Réponse sous 1 h, du lundi au samedi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
