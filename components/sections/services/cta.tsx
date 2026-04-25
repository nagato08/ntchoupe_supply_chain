"use client";

import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

export function ServicesCta() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-primary text-white px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Decorative accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="max-w-350 mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1 mb-6">
              Prêt à expédier?
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Un devis personnalisé,
              <br />
              <span className="text-accent">sous une heure</span>.
            </h2>
          </div>

          <div
            className={`lg:col-span-5 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">
              Décrivez-nous votre marchandise, votre origine et votre
              destination. Nous revenons avec une proposition claire en moins
              d&apos;une heure.
            </p>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-accent hover:bg-accent-600 text-white font-semibold rounded-full transition-colors text-base group"
            >
              <span>Demander un devis</span>
              <span className="flex items-center justify-center w-9 h-9 bg-white rounded-full">
                <ArrowUpRight
                  className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
