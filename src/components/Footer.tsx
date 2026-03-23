import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="gold-line" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left */}
          <div>
            <p className="font-serif text-lg font-medium text-charcoal mb-2">
              Rodolphe Oppenheimer-Faure
            </p>
            <p className="text-xs text-subtle tracking-wider">
              Président fondateur de l&apos;Association Edgar Faure
            </p>
          </div>

          {/* Center links */}
          <div className="flex flex-col gap-3">
            <Link
              href="/qui-je-suis"
              className="text-xs tracking-wider uppercase text-muted hover:text-charcoal transition-colors"
            >
              Qui sommes-nous
            </Link>
            <Link
              href="/approche-reseau"
              className="text-xs tracking-wider uppercase text-muted hover:text-charcoal transition-colors"
            >
              Approche & réseau
            </Link>
            <Link
              href="/soumettre-demande"
              className="text-xs tracking-wider uppercase text-muted hover:text-charcoal transition-colors"
            >
              Soumettre une demande
            </Link>
            <Link
              href="/mentions-legales"
              className="text-xs tracking-wider uppercase text-muted hover:text-charcoal transition-colors"
            >
              Mentions légales
            </Link>
          </div>

          {/* Right */}
          <div className="lg:text-right">
            <p className="text-xs text-subtle tracking-wider uppercase mb-3">
              Confidentialité & discrétion
            </p>
            <Link
              href="/soumettre-demande"
              className="inline-flex text-xs tracking-wider uppercase px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-cream transition-all duration-300"
            >
              Prendre contact
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-charcoal/10 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-subtle">
            © {new Date().getFullYear()} Rodolphe Oppenheimer-Faure — Tous droits
            réservés
          </p>
          <p className="text-[11px] text-subtle">
            Association Edgar Faure
          </p>
        </div>
      </div>
    </footer>
  );
}
