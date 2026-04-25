import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 animate-fade-in">
        <Image
          src="/images/hero/hero_acceuil1.png"
          alt="Transport de marchandises NTCHOUPE"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Glassmorphism content card — bottom left */}
      <div
        className="absolute bottom-6 md:bottom-10 left-4 md:left-10 right-4 md:right-auto z-20 max-w-3xl animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="bg-primary/40 backdrop-blur-md rounded-xl px-6 py-5 md:px-8 md:py-6 text-white shadow-2xl">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Logistique pensée pour la rapidité, la précision et l&apos;échelle
          </h1>
          <p
            className="text-sm md:text-base text-gray-100 mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            Du fret routier à la livraison finale, nous structurons vos flux de marchandises au Cameroun et en Afrique centrale.
          </p>

          {/* Pill button with arrow */}
          <a
            href="#services"
            className="inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 bg-accent hover:bg-accent-600 text-white font-semibold rounded-full transition-colors duration-200 text-sm md:text-base group animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <span>Découvrir nos services</span>
            <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-white rounded-full">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F26B21"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
