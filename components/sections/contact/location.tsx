"use client";

import {
  MapPin,
  Clock,
  Navigation,
  ArrowUpRight,
  Building2,
} from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

const HOURS = [
  { day: "Lundi → Vendredi", hours: "08:00 — 18:00", active: true },
  { day: "Samedi", hours: "09:00 — 16:00", active: true },
  { day: "Dimanche", hours: "Sur demande", active: false },
];

const QUICK_INFO = [
  {
    Icon: Building2,
    label: "Bureau",
    value: SITE.address.street,
  },
  {
    Icon: MapPin,
    label: "Ville",
    value: `${SITE.address.city}, ${SITE.address.country}`,
  },
];

const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.country}`
)}&output=embed`;

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.country}`
)}`;

export function ContactLocation() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      id="location"
      ref={ref}
      className="w-full py-20 md:py-28 bg-surface px-4 sm:px-6 scroll-mt-24"
    >
      <div className="max-w-350 mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-16 items-end">
          <div
            className={`lg:col-span-7 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
              Notre localisation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              On vous attend à
              <span className="text-accent"> Bepanda</span>.
            </h2>
          </div>
          <div
            className={`lg:col-span-5 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Notre bureau opérationnel à Douala. Visites sur rendez-vous —
              contactez-nous pour planifier.
            </p>
          </div>
        </div>

        {/* Map + Info split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Map (8/12) */}
          <div
            className={`lg:col-span-8 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.3s" } : undefined}
          >
            <div className="relative bg-white border border-border rounded-3xl overflow-hidden shadow-sm aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[480px]">
              <iframe
                src={MAP_URL}
                title={`Carte de ${SITE.address.full}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />

              {/* Overlay flottant: pin + bouton itinéraire */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-col sm:flex-row items-stretch sm:items-end gap-3 pointer-events-none">
                <div className="flex items-start gap-3 p-4 bg-white/95 backdrop-blur-md border border-border rounded-2xl shadow-xl pointer-events-auto flex-1">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <MapPin
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-0.5">
                      NTCHOUPE Supply Chain
                    </p>
                    <p className="text-sm font-bold text-foreground leading-tight">
                      {SITE.address.full}
                    </p>
                  </div>
                </div>

                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-3 bg-foreground hover:bg-primary text-white font-semibold rounded-full transition-colors text-sm pointer-events-auto"
                >
                  <span className="flex items-center gap-2">
                    <Navigation className="w-4 h-4" aria-hidden="true" />
                    <span>Itinéraire</span>
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 bg-accent rounded-full">
                    <ArrowUpRight
                      className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar (4/12) */}
          <div
            className={`lg:col-span-4 flex flex-col gap-5 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.45s" } : undefined}
          >
            {/* Adresse rapide */}
            <div className="bg-white border border-border rounded-2xl p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5">
                Adresse
              </p>
              <ul className="space-y-4">
                {QUICK_INFO.map(({ Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center mt-0.5">
                      <Icon
                        className="w-4 h-4 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-muted mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-foreground leading-tight">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Horaires */}
            <div className="bg-white border border-border rounded-2xl p-6 md:p-7">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Horaires
                </p>
              </div>
              <ul className="space-y-3">
                {HOURS.map(({ day, hours, active }) => (
                  <li
                    key={day}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-semibold text-foreground">
                      {day}
                    </span>
                    <span
                      className={`text-sm font-mono font-bold ${
                        active ? "text-accent" : "text-muted"
                      }`}
                    >
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Status badge */}
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <div className="relative shrink-0">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-40"
                  />
                  <div className="relative w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <p className="text-xs text-muted leading-tight">
                  WhatsApp disponible
                  <span className="font-bold text-foreground"> 7j/7</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
