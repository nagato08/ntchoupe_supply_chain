"use client";

import { useInView } from "@/lib/hooks/use-in-view";

export function MissionVideo() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

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
            Opérations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-2xl">
            Découvrez nos opérations en action
          </h2>
        </div>

        {/* Video container */}
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.2s" } : undefined}
        >
          <div className="aspect-video bg-foreground">
            <video
              width="100%"
              height="100%"
              controls
              className="w-full h-full object-cover"
              poster="/images/hero/hero_acceuil1.png"
            >
              <source src="/videos/video1.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
