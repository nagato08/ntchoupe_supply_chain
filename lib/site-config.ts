const FALLBACK_URL = "https://ntchoupe-supply-chain.vercel.app";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? FALLBACK_URL;

export const SITE = {
  name: "NTCHOUPE SUPPLY CHAIN",
  shortName: "NTCHOUPE",
  tagline: "Structurer • Coordonner • Optimiser",
  description:
    "NTCHOUPE SUPPLY CHAIN organise et sécurise vos opérations de transport de marchandises au Cameroun et en Afrique centrale.",
  url: SITE_URL,
  locale: "fr_FR",
  phone: "+237 6 88 69 47 28",
  phoneHref: "tel:+237688694728/",
  phone2: "+237 6 93 04 73 00",
  phoneHref2: "tel:+237693047300/",
  whatsappNumber: "237688694728/23793047300",
  whatsappUrl: "https://wa.me/237688694728",
  email: "ntchoupesupplychain@gmail.com",
  emailHref: "mailto:ntchoupesupplychain@gmail.com",
  address: {
    street: "Bepanda",
    city: "Douala",
    country: "Cameroun",
    full: "Douala – Bepanda, Cameroun",
  },
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },
} as const;

export const CITIES_CAMEROON = [
  "Douala",
  "Yaoundé",
  "Kribi",
  "Bafoussam",
  "Garoua",
] as const;

export const CENTRAL_AFRICA_COUNTRIES = [
  "Cameroun",
  "Gabon",
  "Congo (Brazzaville)",
  "République démocratique du Congo",
  "Guinée équatoriale",
  "Tchad",
  "République centrafricaine",
  "São Tomé-et-Príncipe",
] as const;

export const MAIN_CORRIDORS = [
  "Douala ↔ Yaoundé",
  "Douala ↔ Nord Cameroun",
  "Port de Douala ↔ intérieur du pays",
] as const;
