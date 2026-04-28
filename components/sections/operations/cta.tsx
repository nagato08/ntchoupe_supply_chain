"use client";

import { ArrowUpRight, MessageCircle, Activity } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

export function OperationsCta() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-primary-50 px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        <div
          className={`relative bg-primary text-white rounded-3xl p-8 md:p-14 lg:p-16 overflow-hidden ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          {/* Décor: motif diagonal + blobs */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-32 w-md h-112 rotate-12 opacity-[0.06] pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(135deg, var(--color-accent) 0 2px, transparent 2px 14px)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-12 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none"
          />

          {/* Filets accent */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div
              className={`lg:col-span-7 ${
                isInView ? "animate-reveal-up" : "opacity-0"
              }`}
              style={isInView ? { animationDelay: "0.15s" } : undefined}
            >
              {/* Live activity badge */}
              <div className="inline-flex items-center gap-3 pl-3 pr-5 py-2 bg-accent/15 border border-accent/40 rounded-full mb-6">
                <div className="relative shrink-0">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-accent rounded-full animate-ping opacity-50"
                  />
                  <div className="relative w-2.5 h-2.5 rounded-full bg-accent" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Une mission par jour
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
                La prochaine
                <br />
                <span className="text-accent">pourrait être la vôtre</span>.
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                Décrivez-nous votre besoin — origine, destination, marchandise.
                Nous évaluons et lançons l&apos;opération sous 1 heure.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between gap-4 pl-6 pr-2 py-3 bg-accent hover:bg-accent-600 text-white font-semibold rounded-full transition-colors animate-fade-in-up ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={isInView ? { animationDelay: "0.4s" } : undefined}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <MessageCircle
                    className="w-5 h-5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm md:text-base truncate">
                    Lancer une opération
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
                href="/contact"
                className={`group flex items-center justify-between gap-4 pl-6 pr-2 py-3 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-semibold rounded-full transition-colors animate-fade-in-up ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={isInView ? { animationDelay: "0.5s" } : undefined}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Activity className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span className="text-sm md:text-base truncate">
                    Page contact détaillée
                  </span>
                </div>
                <span className="flex items-center justify-center w-10 h-10 bg-white/10 group-hover:bg-white rounded-full shrink-0 transition-colors">
                  <ArrowUpRight
                    className="w-4 h-4 text-white group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    aria-hidden="true"
                  />
                </span>
              </a>

              <p
                className={`text-xs text-white/60 leading-relaxed mt-2 pl-2 animate-fade-in-up ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={isInView ? { animationDelay: "0.6s" } : undefined}
              >
                Réponse sous 1 h, du lundi au samedi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
