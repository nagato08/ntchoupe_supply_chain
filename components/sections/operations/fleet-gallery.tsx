"use client";

import Image from "next/image";
import { useInView } from "@/lib/hooks/use-in-view";

const FLEET_IMAGES = [
  { id: 1, src: "/images/flotte/camion1.jpeg", alt: "Camion NTCHOUPE" },
  { id: 2, src: "/images/flotte/camion2.jpeg", alt: "Camion NTCHOUPE" },
  { id: 3, src: "/images/flotte/camion3.jpeg", alt: "Camion NTCHOUPE" },
  { id: 4, src: "/images/flotte/camion4.jpeg", alt: "Camion NTCHOUPE" },
  { id: 5, src: "/images/flotte/camion5.jpeg", alt: "Camion NTCHOUPE" },
  { id: 6, src: "/images/flotte/camion6.jpeg", alt: "Camion NTCHOUPE" },
];

export function FleetGallery() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-16 md:py-24 bg-white px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        {/* Header */}
        <div
          className={`mb-12 md:mb-16 ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1 mb-4 z-10">
            Notre flotte
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-2xl">
            Des véhicules fiables et modernes
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FLEET_IMAGES.map((image, idx) => (
            <div
              key={image.id}
              className={`relative aspect-video rounded-2xl overflow-hidden bg-surface group ${
                isInView ? "animate-reveal-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? { animationDelay: `${0.2 + idx * 0.1}s` }
                  : undefined
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
