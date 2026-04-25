"use client";

import { Sparkles, Zap, Clock } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const PROOFS = [
  { Icon: Zap, label: "Réponse sous 1 h" },
  { Icon: Clock, label: "Lundi → Samedi" },
  { Icon: Sparkles, label: "Devis personnalisé" },
];

export function ContactHero() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-primary text-white pt-32 md:pt-40 pb-16 md:pb-20 px-4 sm:px-6"
    >
      {/* Décor: motif diagonal orange + filets */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-20 w-96 h-96 rotate-12 opacity-[0.06] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--color-accent) 0 2px, transparent 2px 14px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="max-w-350 mx-auto relative z-10">
        <div className="max-w-4xl">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1 mb-6 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Contact
          </span>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 md:mb-8 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.15s" } : undefined}
          >
            Parlons de votre
            <br className="hidden md:block" />
            projet
            <span className="text-accent"> logistique</span>.
          </h1>

          <p
            className={`text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mb-10 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.3s" } : undefined}
          >
            Décrivez-nous votre besoin — origine, destination, marchandise. Nous
            revenons vers vous avec une proposition claire et personnalisée.
          </p>

          {/* Proof points */}
          <div
            className={`flex flex-wrap gap-3 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.45s" } : undefined}
          >
            {PROOFS.map(({ Icon, label }, idx) => (
              <span
                key={label}
                className={`inline-flex items-center gap-2.5 pl-3 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-sm font-semibold text-white ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={
                  isInView
                    ? { animationDelay: `${0.55 + idx * 0.08}s` }
                    : undefined
                }
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 border border-accent/30">
                  <Icon className="w-3 h-3 text-accent" aria-hidden="true" />
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
