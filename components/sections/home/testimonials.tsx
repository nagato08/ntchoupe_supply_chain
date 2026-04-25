"use client";

import { Quote, MessageSquare, ArrowUpRight, MoveHorizontal } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

// Citation signée par l'équipe (pas un client) tant que les vrais témoignages
// ne sont pas collectés. Évite d'inventer un faux retour client.
const FEATURED = {
  text: "Au Cameroun et en Afrique centrale, la logistique ne pardonne pas les retards. Notre engagement: chaque mission honorée, à temps et intacte — sans excuse, sans surprise.",
  author: "L'équipe NTCHOUPE",
  role: "Engagement opérationnel",
};

// TODO: REMPLACER PAR DE VRAIS TÉMOIGNAGES dès qu'ils sont collectés.
// Ces 3 entrées sont des EXEMPLES placeholders pour visualiser le rendu —
// ne PAS partir en prod sans les remplacer (badge "Exemple" affiché côté UI).
const TESTIMONIALS = [
  {
    quote:
      "Quand j'ai des marchandises au port à acheminer vite vers Yaoundé, je passe par NTCHOUPE. La réponse arrive sous l'heure, le devis est clair, et on est tenus informés à chaque étape.",
    author: "Marie K.",
    role: "Importatrice — Douala",
    initials: "MK",
  },
  {
    quote:
      "Nous transportons régulièrement du ciment et du fer à béton vers nos chantiers à l'Ouest. Les 12 roues de NTCHOUPE sont fiables, et leur équipe absorbe bien les pics de volume.",
    author: "David T.",
    role: "Entreprise BTP — Bafoussam",
    initials: "DT",
  },
  {
    quote:
      "L'accompagnement douanier nous a fait gagner un temps précieux. Sur des trajets Douala–Garoua, NTCHOUPE livre dans les délais, sans casse.",
    author: "Société Distri+",
    role: "Distribution alimentaire — Douala",
    initials: "D+",
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-12 md:py-16 bg-white px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        {/* Header */}
        <div
          className={`max-w-3xl mb-12 md:mb-16 ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            La confiance se construit,
            <br className="hidden md:block" />
            <span className="text-accent"> mission après mission</span>.
          </h2>
        </div>

        {/* Featured quote card */}
        <article
          className={`relative bg-primary-50 rounded-2xl md:rounded-3xl p-8 md:p-14 lg:p-16 mb-6 overflow-hidden ${
            isInView ? "animate-reveal-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.2s" } : undefined}
        >
          {/* Watermark Quote en filigrane: opacité 10% + position négative pour
              déborder du cadre — donne du caractère éditorial sans charger l'œil. */}
          <Quote
            className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-44 h-44 md:w-72 md:h-72 text-accent/10 pointer-events-none"
            strokeWidth={1.5}
            aria-hidden="true"
          />

          <div className="relative z-10">
            {/* Small inline quote mark */}
            <Quote
              className="w-8 h-8 md:w-10 md:h-10 text-accent mb-6 md:mb-8"
              aria-hidden="true"
            />

            {/* Quote text */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-snug md:leading-snug max-w-3xl mb-8 md:mb-10">
              {FEATURED.text}
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
              <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-base md:text-lg">
                NT
              </div>
              <div>
                <p className="font-bold text-foreground text-base md:text-lg leading-tight">
                  {FEATURED.author}
                </p>
                <p className="text-xs md:text-sm uppercase tracking-wider text-accent font-semibold mt-0.5">
                  {FEATURED.role}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Mobile: carrousel horizontal swipeable via scroll-snap CSS (sans JS).
            Desktop (md+): grille 3 colonnes classique. */}
        <div
          className="flex md:grid md:grid-cols-3 gap-5 md:gap-6 mb-6 md:mb-14 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0 pb-4 md:pb-0 no-scrollbar scroll-smooth"
        >
          {TESTIMONIALS.map(({ quote, author, role, initials }, i) => (
            <article
              key={author}
              className={`relative bg-surface border border-border rounded-2xl p-7 md:p-8 flex flex-col overflow-hidden snap-center md:snap-align-none shrink-0 md:shrink w-[85%] sm:w-[60%] md:w-auto ${
                isInView ? "animate-reveal-up" : "opacity-0"
              }`}
              style={
                isInView
                  ? { animationDelay: `${0.4 + i * 0.12}s` }
                  : undefined
              }
            >
              {/* Watermark MessageSquare en filigrane — déborde du cadre coin
                  bas-droit pour donner un peu de relief sans charger l'œil. */}
              <MessageSquare
                className="absolute -bottom-6 -right-6 w-32 h-32 text-border pointer-events-none"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div className="relative z-10 flex-1">
                <Quote
                  className="w-6 h-6 text-accent mb-4"
                  aria-hidden="true"
                />
                <blockquote className="text-sm md:text-base text-foreground leading-relaxed mb-6">
                  {quote}
                </blockquote>
              </div>

              {/* Signature: pastille initiales bleu marine + nom + rôle.
                  Initiales utilisées plutôt que photo pour rester sobre tant
                  qu'on n'a pas l'autorisation des clients de publier leurs visages. */}
              <div className="relative z-10 flex items-center gap-3 pt-5 border-t border-border">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-xs">
                  {initials}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-foreground text-sm leading-tight truncate">
                    {author}
                  </p>
                  <p className="text-xs text-muted mt-0.5 truncate">
                    {role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Hint de swipe — visible uniquement sur mobile pour signaler que les
            cartes peuvent être balayées horizontalement. */}
        <div className="flex md:hidden items-center justify-center gap-2 text-xs text-muted mb-10">
          <MoveHorizontal className="w-4 h-4" aria-hidden="true" />
          <span>Glissez pour voir plus</span>
        </div>

        {/* CTA — share your experience */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 md:p-8 bg-foreground text-white rounded-2xl ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.7s" } : undefined}
        >
          <div className="flex-1">
            <p className="text-base md:text-lg font-semibold leading-snug">
              Vous êtes client NTCHOUPE?
            </p>
            <p className="text-sm md:text-base text-white/70 mt-1">
              Partagez votre expérience — vos retours nous aident à grandir.
            </p>
          </div>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 pl-5 pr-2 py-2 bg-accent hover:bg-accent-600 text-white font-semibold rounded-full transition-colors text-sm group"
          >
            <span>Écrire sur WhatsApp</span>
            <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
              <ArrowUpRight
                className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
