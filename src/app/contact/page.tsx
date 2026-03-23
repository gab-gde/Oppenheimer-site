import Link from "next/link";
import { contactPage } from "@/lib/content";

export const metadata = {
  title: "Contact — Rodolphe Oppenheimer-Faure",
  description:
    "Prenez contact pour soumettre une situation ou obtenir des informations.",
};

export default function ContactPageView() {
  return (
    <>
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-gold">{contactPage.label}</div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-white">
            {contactPage.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <p className="text-sm lg:text-base text-muted leading-[1.9] mb-12">
          {contactPage.texte}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Email */}
          <div className="p-8 border border-charcoal/10 relative">
            <div className="absolute top-0 left-0 w-10 h-0.5 bg-gold" />
            <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <p className="text-xs text-muted uppercase tracking-wider mb-2">
              Email
            </p>
            <p className="text-sm font-medium text-subtle italic">
              (à préciser)
            </p>
          </div>

          {/* Formulaire */}
          <div className="p-8 border border-charcoal/10 relative">
            <div className="absolute top-0 left-0 w-10 h-0.5 bg-gold" />
            <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            </div>
            <p className="text-xs text-muted uppercase tracking-wider mb-2">
              Demande confidentielle
            </p>
            <Link
              href="/soumettre-demande"
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              Soumettre via le formulaire →
            </Link>
          </div>
        </div>

        <div className="p-6 bg-section border-l-2 border-gold">
          <p className="text-sm text-muted leading-[1.9]">
            Toute prise de contact est traitée avec la plus stricte
            confidentialité. Les informations transmises ne sont jamais
            partagées avec des tiers.
          </p>
        </div>
      </section>
    </>
  );
}
