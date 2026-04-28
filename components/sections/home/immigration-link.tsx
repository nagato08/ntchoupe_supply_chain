"use client";

import { ArrowUpRight, Plane } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

export function ImmigrationLink() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="w-full py-16 md:py-20 bg-white px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        <a
          href="https://n-k-immagration.vercel.app/acceuil"
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative block max-w-2xl mx-auto bg-linear-to-br from-primary to-primary-900 text-white rounded-3xl p-8 md:p-10 overflow-hidden hover:shadow-2xl transition-all duration-500 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Décor subtle */}
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent"
          />

          <div className="relative flex items-start gap-5 md:gap-6">
            {/* Icone */}
            <div className="shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/40 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <Plane
                  className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Contenu */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent/80 mb-2">
                Services complémentaires
              </p>
              <h3 className="text-xl md:text-2xl font-extrabold leading-tight mb-2">
                Besoin d&apos;aide en immigration?
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-5">
                NTCHOUPE IMMIGRATION AGENCY vous accompagne pour vos démarches
                d&apos;immigration et administrative en Afrique centrale.
              </p>

              <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                <span>Découvrir</span>
                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
