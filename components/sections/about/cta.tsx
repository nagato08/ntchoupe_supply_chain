"use client";

import { ArrowUpRight, MessageCircle, Mail } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

export function AboutCta() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-primary-50 px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        <div
          className={`relative bg-white border border-border rounded-3xl p-8 md:p-14 lg:p-16 overflow-hidden ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          {/* Décor: motif diagonal orange en filigrane */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-32 w-md h-112 rotate-12 opacity-[0.04] pointer-events-none"
            style={{
              background:
                "repeating-linear-gradient(135deg, var(--color-accent) 0 2px, transparent 2px 14px)",
            }}
          />

          {/* Filet accent en haut */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div
              className={`lg:col-span-7 ${
                isInView ? "animate-reveal-up" : "opacity-0"
              }`}
              style={isInView ? { animationDelay: "0.15s" } : undefined}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1 mb-6">
                Travaillons ensemble
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] mb-5">
                Une mission
                <br />
                <span className="text-accent">à structurer</span>?
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl">
                Que vous soyez importateur, distributeur ou industriel —
                discutons de vos flux. Une simple description suffit pour
                démarrer la conversation.
              </p>
            </div>

            <div
              className={`lg:col-span-5 flex flex-col gap-4 ${
                isInView ? "animate-reveal-up" : "opacity-0"
              }`}
              style={isInView ? { animationDelay: "0.3s" } : undefined}
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
                    Discuter sur WhatsApp
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
                href={SITE.emailHref}
                className="group flex items-center justify-between gap-4 pl-6 pr-2 py-3 bg-foreground hover:bg-primary text-white font-semibold rounded-full transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span className="text-sm md:text-base truncate">
                    Nous écrire
                  </span>
                </div>
                <span className="flex items-center justify-center w-10 h-10 bg-accent rounded-full shrink-0">
                  <ArrowUpRight
                    className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </span>
              </a>

              <p className="text-xs text-muted leading-relaxed mt-2 pl-2">
                Réponse sous 1 h, du lundi au samedi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
