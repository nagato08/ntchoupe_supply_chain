"use client";

import Image from "next/image";
import { Activity, Truck, Package, MapPin } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const LIVE_STATS = [
  { Icon: Activity, value: "Missions", subValue: "10+ honorées" },
  { Icon: Truck, value: "Flotte", subValue: "6/10/12 roues" },
  { Icon: Package, value: "Marchandises", subValue: "Tous secteurs" },
  { Icon: MapPin, value: "Couverture", subValue: "8 pays" },
];

export function OperationsHero() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden text-white pt-32 md:pt-40 pb-20 md:pb-28 px-4 sm:px-6"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero_operation.png"
          alt="Opérations logistiques NTCHOUPE sur le terrain"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/70 via-primary/55 to-primary/75" />
      </div>

      {/* Décor */}
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
          className={`text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] max-w-5xl mb-6 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.15s" } : undefined}
        >
          Nos opérations,
          <br className="hidden md:block" />
          <span className="text-accent"> notre meilleur</span> argument.
        </h1>

        <p
          className={`text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mb-12 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.3s" } : undefined}
        >
          Du port de Douala aux chantiers du Nord, des conteneurs au matériel
          BTP — voici ce que nous faisons concrètement, jour après jour.
        </p>

        {/* Quick stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {LIVE_STATS.map(({ Icon, value, subValue }, idx) => (
            <div
              key={value}
              className={`flex items-center gap-3 p-4 md:p-5 bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? { animationDelay: `${0.5 + idx * 0.08}s` }
                  : undefined
              }
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-sm md:text-base font-extrabold leading-tight">
                  {value}
                </p>
                <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mt-0.5">
                  {subValue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
