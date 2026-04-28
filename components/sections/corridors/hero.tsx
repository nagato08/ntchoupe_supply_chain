"use client";

import Image from "next/image";
import { Route, Globe, MapPin } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const KPIS = [
  { Icon: Route, value: "5+", label: "Corridors majeurs" },
  { Icon: Globe, value: "8", label: "Pays couverts" },
  { Icon: MapPin, value: "Douala", label: "Hub principal" },
];

export function CorridorsHero() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden text-white pt-32 md:pt-40 pb-20 md:pb-28 px-4 sm:px-6"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero_corridor.png"
          alt="Corridors logistiques NTCHOUPE"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/65 via-primary/55 to-primary/70" />
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
          Un réseau qui relie
          <br className="hidden md:block" />
          <span className="text-accent font-extrabold">
            {" "}l&apos;Afrique centrale
          </span>
          .
        </h1>

        <p
          className={`mt-6 md:mt-8 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.3s" } : undefined}
        >
          Du port de Douala à l&apos;intérieur du Cameroun, et au-delà vers
          tous les pays voisins. Nos corridors structurent vos flux
          logistiques avec des partenaires reconnus et une couverture éprouvée.
        </p>

        {/* KPIs cards */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          {KPIS.map(({ Icon, value, label }, idx) => (
            <div
              key={label}
              className={`flex items-center gap-4 p-4 md:p-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? { animationDelay: `${0.5 + idx * 0.1}s` }
                  : undefined
              }
            >
              <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <div className="text-xl md:text-2xl font-extrabold leading-none">
                  {value}
                </div>
                <p className="text-xs text-white/70 mt-1 uppercase tracking-wider">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
