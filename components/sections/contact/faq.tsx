"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const FAQ_ITEMS = [
  {
    question: "Sous combien de temps obtiendrai-je une réponse?",
    answer:
      "Toutes les demandes reçoivent une première réponse en moins d'1 heure du lundi au samedi (08:00 — 18:00). Pour les demandes du dimanche ou en dehors des horaires, comptez le matin du jour ouvré suivant.",
  },
  {
    question: "Quelles informations préparer pour un devis?",
    answer:
      "L'origine et la destination, le type de marchandise, le volume estimé (en mètres cubes ou en tonnes) et le délai souhaité. Plus c'est précis, plus notre devis est rapide et juste.",
  },
  {
    question: "Le devis est-il payant ou engageant?",
    answer:
      "Non. Notre devis est totalement gratuit et sans engagement. Si l'offre ne vous convient pas, nous restons disponibles pour ajuster ou simplement répondre à vos questions.",
  },
  {
    question: "Puis-je vous joindre le weekend ou en urgence?",
    answer:
      "WhatsApp reste actif 7j/7. Pour les missions urgentes (départ le jour même), un simple message suffit — nous évaluons la faisabilité et revenons vers vous immédiatement.",
  },
];

export function ContactFaq() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-28 bg-white px-4 sm:px-6"
    >
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Header gauche */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-28 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted border-b border-muted/40 pb-1 mb-6">
              Avant de nous contacter
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-5">
              Quelques précisions
              <span className="text-accent"> utiles</span>.
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-md">
              Les questions les plus fréquentes sur notre processus de
              réponse. Si vous ne trouvez pas la vôtre, un message direct
              suffit.
            </p>
          </div>

          {/* FAQ droite */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const number = String(idx + 1).padStart(2, "0");

              return (
                <article
                  key={item.question}
                  className={`relative bg-surface rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-accent/50 bg-white shadow-md"
                      : "border-border hover:border-accent/30"
                  } ${
                    isInView ? "animate-reveal-up" : "opacity-0"
                  }`}
                  style={
                    isInView
                      ? { animationDelay: `${0.15 + idx * 0.08}s` }
                      : undefined
                  }
                >
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
                      <div className="shrink-0 mt-0.5">
                        <span
                          className={`text-sm font-mono font-bold transition-colors duration-300 ${
                            isOpen ? "text-accent" : "text-muted"
                          }`}
                        >
                          {number}
                        </span>
                      </div>

                      <h3
                        className={`flex-1 text-base md:text-lg font-semibold leading-snug transition-colors duration-300 ${
                          isOpen ? "text-accent" : "text-foreground"
                        }`}
                      >
                        {item.question}
                      </h3>

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
          </div>
        </div>
      </div>
    </section>
  );
}
