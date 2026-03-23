import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sand border-t border-beige/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-charcoal mb-2">
              Oppenheimer Conseil
            </p>
            <p className="text-xs text-taupe">
              Accompagnement de situations complexes et sensibles
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              ["/qui-je-suis", "Qui sommes-nous"],
              ["/approche-reseau", "Approche & réseau"],
              ["/soumettre-demande", "Soumettre une demande"],
              ["/mentions-legales", "Mentions légales"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="text-xs text-taupe hover:text-charcoal transition-colors">
                {label}
              </Link>
            ))}
          </div>
          <div className="lg:text-right">
            <p className="text-xs text-taupe mb-4">Confidentialité & discrétion</p>
            <Link
              href="/soumettre-demande"
              className="inline-flex text-xs tracking-wider uppercase px-5 py-2.5 border border-accent text-accent hover:bg-accent hover:text-cream transition-all duration-300 rounded-sm"
            >
              Prendre contact
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-beige flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-beige-dark">
            © {new Date().getFullYear()} Oppenheimer Conseil — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
