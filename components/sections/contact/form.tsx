"use client";

import { useState, FormEvent } from "react";
import {
  Send,
  CheckCircle2,
  Truck,
  HelpCircle,
  Briefcase,
  User,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Lightbulb,
  Shield,
  MessageCircle,
} from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { SITE } from "@/lib/site-config";

const REQUEST_TYPES = [
  { id: "quote", Icon: Truck, label: "Devis transport" },
  { id: "question", Icon: HelpCircle, label: "Question" },
  { id: "partnership", Icon: Briefcase, label: "Partenariat" },
];

const REASONS = [
  {
    Icon: Lightbulb,
    title: "Une réponse claire",
    description:
      "Pas de jargon, pas de devis flou. Vous obtenez une proposition concrète et compréhensible.",
  },
  {
    Icon: Shield,
    title: "Aucun engagement",
    description:
      "Demander un devis ne vous engage à rien. Pas de coût caché, pas de relance commerciale agressive.",
  },
  {
    Icon: MessageCircle,
    title: "Conversation directe",
    description:
      "Votre formulaire arrive directement sur WhatsApp — pas de file d'attente, pas de bot.",
  },
];

export function ContactForm() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  const [requestType, setRequestType] = useState("quote");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const typeLabel =
      REQUEST_TYPES.find((t) => t.id === requestType)?.label ?? "Demande";

    const lines = [
      `*Nouvelle demande NTCHOUPE — ${typeLabel}*`,
      "",
      `*Nom:* ${name || "—"}`,
      `*Téléphone:* ${phone || "—"}`,
    ];
    if (email) lines.push(`*Email:* ${email}`);
    if (origin || destination) {
      lines.push("", "*Trajet*");
      if (origin) lines.push(`Origine: ${origin}`);
      if (destination) lines.push(`Destination: ${destination}`);
    }
    if (message) {
      lines.push("", "*Détails*", message);
    }

    const text = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${SITE.whatsappNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const isQuote = requestType === "quote";
  const requiredFilled = name.trim() !== "" && phone.trim() !== "";

  return (
    <section
      ref={ref}
      className="relative w-full pt-12 md:pt-16 pb-20 md:pb-28 bg-white px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Colonne formulaire (8/12) */}
          <div
            className={`lg:col-span-8 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <div className="relative bg-white border border-border rounded-3xl shadow-sm overflow-hidden">
              {/* Filet accent en haut */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
              />

              <form onSubmit={handleSubmit} className="p-6 md:p-10 lg:p-12">
                {/* Type de demande — segmented control */}
                <div className="mb-8 md:mb-10">
                  <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-4">
                    1. Type de demande
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
                    {REQUEST_TYPES.map((type) => {
                      const { id, Icon, label } = type;
                      const isSelected = requestType === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setRequestType(id)}
                          className={`flex items-center justify-center gap-3 px-5 py-4 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                            isSelected
                              ? "bg-accent text-white border-accent shadow-md"
                              : "bg-surface text-foreground border-border hover:border-accent/40"
                          }`}
                          aria-pressed={isSelected}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                          <span>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Identité */}
                <div className="mb-8 md:mb-10">
                  <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-4">
                    2. Vous
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      Icon={User}
                      placeholder="Nom complet *"
                      value={name}
                      onChange={setName}
                      required
                    />
                    <FormField
                      Icon={Phone}
                      placeholder="Téléphone *"
                      value={phone}
                      onChange={setPhone}
                      required
                      type="tel"
                    />
                    <div className="md:col-span-2">
                      <FormField
                        Icon={Mail}
                        placeholder="Email (optionnel)"
                        value={email}
                        onChange={setEmail}
                        type="email"
                      />
                    </div>
                  </div>
                </div>

                {/* Trajet — visible si Devis */}
                {isQuote && (
                  <div className="mb-8 md:mb-10">
                    <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-4">
                      3. Trajet
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-center">
                      <FormField
                        Icon={MapPin}
                        placeholder="Ville d'origine"
                        value={origin}
                        onChange={setOrigin}
                      />
                      <ArrowRight
                        className="w-5 h-5 text-accent justify-self-center hidden md:block"
                        aria-hidden="true"
                      />
                      <FormField
                        Icon={MapPin}
                        placeholder="Ville de destination"
                        value={destination}
                        onChange={setDestination}
                      />
                    </div>
                  </div>
                )}

                {/* Message */}
                <div className="mb-8 md:mb-10">
                  <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-4">
                    {isQuote ? "4." : "3."} Détails de votre demande
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder={
                      isQuote
                        ? "Type de marchandise, volume estimé, délai souhaité, contraintes particulières..."
                        : "Décrivez votre demande aussi précisément que possible..."
                    }
                    className="w-full px-5 py-4 bg-surface border border-border rounded-xl text-sm md:text-base text-foreground placeholder:text-muted resize-none focus:outline-none focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-border">
                  <p className="text-xs text-muted leading-relaxed flex-1 max-w-md">
                    En cliquant, votre message s&apos;ouvre directement sur
                    WhatsApp prêt à être envoyé. Aucun stockage,
                    aucun spam.
                  </p>
                  <button
                    type="submit"
                    disabled={!requiredFilled}
                    className={`group inline-flex items-center justify-between gap-4 pl-6 pr-2 py-3 rounded-full font-semibold text-sm md:text-base transition-all whitespace-nowrap ${
                      requiredFilled
                        ? "bg-accent text-white hover:bg-accent-600 cursor-pointer"
                        : "bg-muted/30 text-muted cursor-not-allowed"
                    }`}
                  >
                    <span>Envoyer sur WhatsApp</span>
                    <span
                      className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                        requiredFilled ? "bg-white" : "bg-muted/20"
                      }`}
                    >
                      <Send
                        className={`w-4 h-4 transition-transform ${
                          requiredFilled
                            ? "text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            : "text-muted"
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar (4/12) */}
          <aside
            className={`lg:col-span-4 lg:sticky lg:top-28 ${
              isInView ? "animate-reveal-up" : "opacity-0"
            }`}
            style={isInView ? { animationDelay: "0.2s" } : undefined}
          >
            <div className="bg-foreground text-white rounded-3xl p-7 md:p-8 relative overflow-hidden">
              {/* Décor */}
              <div
                aria-hidden="true"
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none"
              />

              <div className="relative">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1 mb-5">
                  Pourquoi nous écrire
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold leading-tight mb-7">
                  Une demande,
                  <br />
                  <span className="text-accent">trois bonnes raisons</span>.
                </h3>

                <ul className="space-y-5">
                  {REASONS.map(({ Icon, title, description }) => (
                    <li key={title} className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <Icon
                          className="w-4 h-4 text-accent"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white leading-tight mb-1">
                          {title}
                        </p>
                        <p className="text-xs text-white/70 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Mini badge réactivité */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="relative shrink-0">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-accent rounded-full animate-ping opacity-30"
                    />
                    <div className="relative w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <p className="text-xs text-white/80 font-semibold leading-tight">
                    Disponibles maintenant —
                    <span className="text-white"> réponse sous 1 h</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Mini stats / proof */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="bg-surface border border-border rounded-2xl p-4 md:p-5 text-center">
                <CheckCircle2
                  className="w-5 h-5 text-accent mx-auto mb-2"
                  aria-hidden="true"
                />
                <p className="text-xl md:text-2xl font-extrabold text-foreground leading-none mb-1">
                  100+
                </p>
                <p className="text-[10px] uppercase tracking-wider text-muted">
                  Missions
                </p>
              </div>
              <div className="bg-surface border border-border rounded-2xl p-4 md:p-5 text-center">
                <CheckCircle2
                  className="w-5 h-5 text-accent mx-auto mb-2"
                  aria-hidden="true"
                />
                <p className="text-xl md:text-2xl font-extrabold text-foreground leading-none mb-1">
                  8
                </p>
                <p className="text-[10px] uppercase tracking-wider text-muted">
                  Pays
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ----- Sous-composant: champ de formulaire avec icône -----
type FormFieldProps = {
  Icon: typeof User;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
};

function FormField({
  Icon,
  placeholder,
  value,
  onChange,
  required,
  type = "text",
}: FormFieldProps) {
  return (
    <div className="relative group">
      <Icon
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-accent transition-colors pointer-events-none"
        aria-hidden="true"
      />
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full pl-11 pr-4 py-3.5 bg-surface border border-border rounded-xl text-sm md:text-base text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20 transition-all"
      />
    </div>
  );
}
