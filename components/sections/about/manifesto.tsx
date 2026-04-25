"use client";

import { Quote } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const MANIFESTO_LINES = [
  "Nous croyons qu'une logistique fiable n'est pas un luxe.",
  "C'est une condition de la croissance économique régionale.",
];

const COMMITMENTS = [
  "Honorer chaque mission acceptée.",
  "Communiquer en transparence, même quand c'est inconfortable.",
  "Améliorer chaque processus opérationnel.",
  "Respecter chaque équipe terrain comme partenaire.",
];

export function AboutManifesto() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="relative w-full py-20 md:py-28 bg-foreground text-white px-4 sm:px-6 overflow-hidden"
    >
      {/* Watermark Quote géant */}
      <Quote
        className="absolute -top-12 -left-8 md:-top-20 md:-left-12 w-72 h-72 md:w-[420px] md:h-[420px] text-accent/[0.06] pointer-events-none"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      {/* Décor: motif diagonal orange en filigrane */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-md h-112 rotate-12 opacity-[0.05] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--color-accent) 0 2px, transparent 2px 14px)",
        }}
      />

      {/* Filets accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent"
      />

      <div className="max-w-350 mx-auto relative">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-20">
          <div
            className={`lg:col-span-12 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1 mb-6">
              Notre manifeste
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Colonne gauche: déclaration */}
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.15s" } : undefined}
          >
            <Quote
              className="w-10 h-10 md:w-12 md:h-12 text-accent mb-6"
              aria-hidden="true"
            />
            <blockquote className="space-y-4">
              {MANIFESTO_LINES.map((line, idx) => (
                <p
                  key={line}
                  className={`text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight ${
                    idx === MANIFESTO_LINES.length - 1
                      ? "text-accent"
                      : "text-white"
                  }`}
                >
                  {line}
                </p>
              ))}
            </blockquote>

            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-extrabold text-base">
                NT
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">
                  L&apos;équipe NTCHOUPE Supply Chain
                </p>
                <p className="text-xs uppercase tracking-wider text-accent font-semibold mt-1">
                  Engagement collectif
                </p>
              </div>
            </div>
          </div>

          {/* Colonne droite: nos engagements */}
          <div
            className={`lg:col-span-5 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.3s" } : undefined}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
                Nos engagements
              </p>
              <ul className="space-y-5">
                {COMMITMENTS.map((commitment, idx) => (
                  <li
                    key={commitment}
                    className={`flex items-start gap-4 ${
                      isInView ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={
                      isInView
                        ? { animationDelay: `${0.45 + idx * 0.1}s` }
                        : undefined
                    }
                  >
                    <span className="shrink-0 w-7 h-7 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-xs font-mono font-bold text-accent">
                      {idx + 1}
                    </span>
                    <p className="text-sm md:text-base text-white/90 leading-relaxed">
                      {commitment}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
