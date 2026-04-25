"use client";

import { useState } from "react";
import { Plus, HelpCircle, MessageCircle, ArrowUpRight } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

const FAQ_ITEMS = [
  {
    category: "Flotte",
    question: "Quel camion choisir pour mes marchandises?",
    answer:
      "Cela dépend du volume et du poids. Le 6 roues convient aux petits chargements urbains, le 10 roues aux marchandises générales inter-régions, et le 12 roues aux chargements lourds et longue distance. Décrivez-nous votre besoin — nous recommandons le camion optimal.",
  },
  {
    category: "Assurance",
    question: "Comment fonctionne l'assurance?",
    answer:
      "Nous proposons une couverture d'assurance adaptée à la valeur déclarée de vos marchandises. L'assurance s'active sur demande, mission par mission. Le processus est simple et rapide — nous gérons les formalités.",
  },
  {
    category: "Délais",
    question: "Quel délai pour un transport Douala–Yaoundé?",
    answer:
      "Comptez 6–8 heures selon les conditions routières et les arrêts douaniers. Pour les trajets inter-régions, nous fournissons une estimation précise lors du devis. Vous recevez des mises à jour régulières pendant le transport.",
  },
  {
    category: "Suivi",
    question: "Puis-je suivre ma livraison en temps réel?",
    answer:
      "Oui. Après confirmation de votre transport, nous vous fournissons un suivi régulier — points de départ, passage des étapes clés, et arrivée. Vous êtes informé à chaque étape du parcours.",
  },
  {
    category: "Marchandises",
    question: "Acceptez-vous les transports frigorifiques?",
    answer:
      "Nos équipes gèrent les marchandises alimentaires et périssables selon les normes d'hygiène requises. Pour des besoins frigorifiques spécifiques, nous évaluons la faisabilité lors du devis.",
  },
  {
    category: "Réactivité",
    question: "Quels sont vos délais de réponse?",
    answer:
      "Nous répondons à tous les devis sous 1 heure (du lundi au samedi). Pour les urgences ou demandes complexes, contactez-nous directement via WhatsApp — nous trouvons des solutions.",
  },
];

export function ServicesFaq() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className="relative w-full py-20 md:py-28 bg-surface px-4 sm:px-6 overflow-hidden"
    >
      {/* Watermark décoratif HelpCircle en filigrane */}
      <HelpCircle
        className="absolute -top-20 -right-20 w-96 h-96 text-accent/5 pointer-events-none"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <div className="max-w-350 mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Colonne gauche: header sticky */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-28 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
              Questions fréquentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-5">
              Vos questions,
              <br className="hidden md:block" />
              <span className="text-accent"> nos réponses</span>.
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-md">
              Tout ce que vous devez savoir avant d&apos;expédier avec
              NTCHOUPE. Une question manquante? Contactez-nous directement.
            </p>

            {/* Mini CTA card */}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden lg:flex items-center gap-4 p-5 bg-white border border-border rounded-2xl hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                <MessageCircle
                  className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground leading-tight">
                  Une autre question?
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Discutons-en sur WhatsApp
                </p>
              </div>
              <ArrowUpRight
                className="w-4 h-4 text-accent shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Colonne droite: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const number = String(idx + 1).padStart(2, "0");

              return (
                <article
                  key={item.question}
                  className={`relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-accent/50 shadow-lg"
                      : "border-border hover:border-accent/30 hover:shadow-md"
                  } ${
                    isInView ? "animate-reveal-up" : "opacity-0"
                  }`}
                  style={
                    isInView
                      ? { animationDelay: `${0.15 + idx * 0.08}s` }
                      : undefined
                  }
                >
                  {/* Numéro accent en haut */}
                  <div
                    className={`absolute top-0 left-0 w-1 h-full transition-colors duration-300 ${
                      isOpen ? "bg-accent" : "bg-transparent"
                    }`}
                  />

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4 md:gap-5 p-5 md:p-6">
                      {/* Numéro */}
                      <div className="shrink-0 mt-0.5">
                        <span
                          className={`text-sm font-mono font-bold transition-colors duration-300 ${
                            isOpen ? "text-accent" : "text-muted"
                          }`}
                        >
                          {number}
                        </span>
                      </div>

                      {/* Question + catégorie */}
                      <div className="flex-1 min-w-0">
                        <span
                          className={`inline-block text-[10px] font-semibold uppercase tracking-[0.15em] mb-2 transition-colors duration-300 ${
                            isOpen ? "text-accent" : "text-muted/70"
                          }`}
                        >
                          {item.category}
                        </span>
                        <h3
                          className={`text-base md:text-lg font-semibold leading-snug transition-colors duration-300 ${
                            isOpen ? "text-accent" : "text-foreground"
                          }`}
                        >
                          {item.question}
                        </h3>
                      </div>

                      {/* Plus icon */}
                      <div className="shrink-0 mt-0.5">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-accent rotate-45"
                              : "bg-accent/10 rotate-0"
                          }`}
                        >
                          <Plus
                            className={`w-4 h-4 transition-colors duration-300 ${
                              isOpen ? "text-white" : "text-accent"
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Réponse — expandable */}
                  <div
                    className="grid transition-all duration-500 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-6 pl-14 md:pl-16">
                        <div className="pt-5 border-t border-border/60">
                          <p className="text-sm md:text-base text-muted leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* CTA mobile (visible seulement sur mobile, le sticky CTA est sur desktop) */}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group lg:hidden flex items-center gap-4 p-5 mt-6 bg-white border border-border rounded-2xl hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MessageCircle
                  className="w-5 h-5 text-accent"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground leading-tight">
                  Une autre question?
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Discutons-en sur WhatsApp
                </p>
              </div>
              <ArrowUpRight
                className="w-4 h-4 text-accent shrink-0"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
