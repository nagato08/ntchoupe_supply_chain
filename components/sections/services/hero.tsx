"use client";

import Image from "next/image";
import { useInView } from "@/lib/hooks/use-in-view";

export function ServicesHero() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden text-white pt-32 md:pt-40 pb-20 md:pb-28 px-4 sm:px-6"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero_service.png"
          alt="Services background"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/55 via-primary/50 to-primary/65" />
      </div>

      {/* Decorative diagonal orange lines overlay */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-20 w-96 h-96 rotate-12 opacity-[0.08] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--color-accent) 0 2px, transparent 2px 14px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="max-w-350 mx-auto relative z-10">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] max-w-4xl ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.15s" } : undefined}
        >
          Une flotte{" "}
          <span className="text-accent font-extrabold">adaptée</span> à
          chaque mission.
        </h1>

        <p
          className={`mt-6 md:mt-8 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.3s" } : undefined}
        >
          Du chargement urbain au transport longue distance, nous mobilisons le
          camion adapté à votre marchandise, votre itinéraire et vos délais.
          Trois capacités, des solutions sur mesure et un accompagnement
          opérationnel complet.
        </p>

        {/* Three keywords accent */}
        <div
          className={`mt-10 md:mt-14 flex flex-wrap gap-x-6 gap-y-4 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.45s" } : undefined}
        >
          {["Structurer", "Coordonner", "Optimiser"].map((keyword, idx) => (
            <span
              key={keyword}
              className={`inline-flex items-center gap-3 px-4 md:px-5 py-2 md:py-2.5 bg-accent/15 border border-accent/40 rounded-full text-sm md:text-base font-semibold text-accent ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? { animationDelay: `${0.55 + idx * 0.08}s` }
                  : undefined
              }
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
