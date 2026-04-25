import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { SITE } from "@/lib/site-config";

const NAV_GROUPS = [
  {
    title: "Découvrir",
    links: [
      { href: "/services", label: "Services" },
      { href: "/corridors", label: "Corridors" },
      { href: "/nos-operations", label: "Nos opérations" },
      { href: "/a-propos", label: "À propos" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Service",
    links: [
      { href: "/services#fleet", label: "Camions 6 / 10 / 12 roues" },
      { href: "/services#options", label: "Assurance" },
      { href: "/services#options", label: "Accompagnement douanier" },
      { href: "/contact", label: "Demander un devis" },
    ],
  },
];

// Icônes de marques — lucide-react ne fournit plus les logos officiels (politique
// d'usage), donc on inline les 3 SVG nous-mêmes. Tous utilisent currentColor pour
// hériter de la couleur Tailwind appliquée via className.
type SocialIconProps = { className?: string };

function FacebookIcon({ className = "" }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.71a8.16 8.16 0 0 0 4.77 1.52V6.78a4.85 4.85 0 0 1-1.84-.09Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Décor: motif diagonal orange en filigrane (cohérent avec ServicesHero/CtaBand). */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-32 w-md h-112 rotate-12 opacity-[0.05] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--color-accent) 0 2px, transparent 2px 14px)",
        }}
      />

      {/* Filet accent en haut, pour séparer visuellement du dernier composant. */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
      />

      {/* CONTENU PRINCIPAL — grid 12 colonnes asymétrique. */}
      <div className="relative z-10 max-w-350 mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Colonne Marque (5/12 sur desktop) */}
          <div className="sm:col-span-2 lg:col-span-5">
            {/* Logo + nom: SVG inline pour pouvoir colorer en blanc + flèche orange. */}
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 group"
              aria-label="Retour à l'accueil"
            >
              <svg
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="w-10 h-10 shrink-0 text-white"
              >
                <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="2.5" />
                <path d="M 60 15 Q 55 60 60 105" stroke="currentColor" strokeWidth="2" fill="none" />
                <ellipse cx="60" cy="60" rx="45" ry="18" stroke="currentColor" strokeWidth="2" fill="none" />
                <ellipse cx="60" cy="45" rx="42" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
                <ellipse cx="60" cy="75" rx="42" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M 50 30 Q 45 60 50 90" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.8" />
                <g transform="translate(60, 60)">
                  <line x1="0" y1="20" x2="35" y2="-15" stroke="#F26B21" strokeWidth="3.5" strokeLinecap="round" />
                  <polygon points="35,-15 38,-8 30,-12" fill="#F26B21" />
                </g>
              </svg>
              <div>
                <div className="text-base md:text-lg font-extrabold tracking-tight leading-tight">
                  NTCHOUPE
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Supply Chain
                </div>
              </div>
            </Link>

            <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md mb-6">
              Transport de marchandises au Cameroun et en Afrique centrale. Nous
              structurons, coordonnons et optimisons vos flux logistiques avec
              fiabilité, rapidité et transparence.
            </p>

            {/* CTA principal: WhatsApp pill (signature design system). */}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 bg-accent hover:bg-accent-600 text-white font-semibold rounded-full transition-colors text-sm group"
            >
              <span>Devis sur WhatsApp</span>
              <span className="flex items-center justify-center w-7 h-7 bg-white rounded-full">
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>

          {/* Colonnes Navigation (2 groupes, 2/12 + 2/12). */}
          {NAV_GROUPS.map((group) => (
            <nav key={group.title} className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Colonne Contact (3/12). */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone
                  className="w-4 h-4 mt-0.5 text-accent shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={SITE.phoneHref}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  className="w-4 h-4 mt-0.5 text-accent shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="w-4 h-4 mt-0.5 text-accent shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={SITE.emailHref}
                  className="text-white/80 hover:text-white transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 text-accent shrink-0"
                  aria-hidden="true"
                />
                <span className="text-white/80">{SITE.address.full}</span>
              </li>
            </ul>

            {/* Réseaux sociaux: liens conditionnels. Si l'URL n'est pas fournie
                dans site-config, on désactive le lien (cursor-not-allowed) au
                lieu de pointer vers une URL bidon. À activer quand le client
                fournit ses comptes Facebook/Instagram/TikTok. */}
            <div className="mt-7">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">
                Suivez-nous
              </h4>
              <div className="flex items-center gap-2">
                {[
                  { Icon: FacebookIcon, name: "Facebook", href: SITE.social.facebook as string },
                  { Icon: InstagramIcon, name: "Instagram", href: SITE.social.instagram as string },
                  { Icon: TikTokIcon, name: "TikTok", href: SITE.social.tiktok as string },
                ].map(({ Icon, name, href }) => {
                  const enabled = href.length > 0;
                  const baseClasses =
                    "w-9 h-9 rounded-full flex items-center justify-center transition-colors border";
                  return enabled ? (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className={`${baseClasses} border-white/20 hover:border-accent hover:bg-accent text-white/80 hover:text-white`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ) : (
                    <span
                      key={name}
                      aria-label={`${name} (à venir)`}
                      title={`${name} — à venir`}
                      className={`${baseClasses} border-white/10 text-white/30 cursor-not-allowed`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BARRE BAS: copyright + baseline du logo. */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-350 mx-auto px-4 sm:px-6 py-5 md:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {year} NTCHOUPE SUPPLY CHAIN. Tous droits réservés.
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            Structurer • Coordonner • Optimiser
          </p>
        </div>
      </div>
    </footer>
  );
}
