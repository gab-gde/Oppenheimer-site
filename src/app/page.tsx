import Link from "next/link";
import { accueil } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-charcoal flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50 z-10" />
        <div className="absolute right-0 bottom-0 font-serif text-[12rem] lg:text-[18rem] text-white/[0.03] leading-none tracking-tighter select-none z-0">
          Institutions
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-2xl">
            <div className="section-label !text-gold !mb-6">{accueil.hero.label}</div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.2] mb-4">
              {accueil.hero.titre}{" "}
              <em className="italic text-gold-light">{accueil.hero.titreAccent}</em>
            </h1>
            <p className="text-sm lg:text-base text-white/70 leading-relaxed max-w-lg mb-3">
              {accueil.hero.sousTitre}
            </p>
            <p className="text-sm text-white/50 leading-relaxed max-w-lg mb-10">
              {accueil.hero.description}
            </p>
            <Link
              href="/soumettre-demande"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-white border border-white/30 px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
            >
              {accueil.hero.cta}
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 13L13 1M13 1H5M13 1v8" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* ══════ ÊTES-VOUS CONCERNÉ ? ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="section-label">{accueil.concerne.label}</div>
        <h2 className="font-serif text-2xl lg:text-3xl font-normal leading-snug mb-10">
          {accueil.concerne.titre}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accueil.concerne.items.map((item, i) => (
            <div key={i} className="relative p-6 border border-charcoal/10 hover:border-gold/30 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-8 h-0.5 bg-gold" />
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                <p className="text-sm">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ POSITIONNEMENT ══════ */}
      <section className="bg-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="section-label">{accueil.positionnement.label}</div>
          <h2 className="font-serif text-2xl lg:text-4xl font-normal leading-snug mb-4 max-w-2xl">
            {accueil.positionnement.titre}
          </h2>
          <p className="text-sm text-muted leading-relaxed max-w-xl font-medium">
            {accueil.positionnement.texte}
          </p>
        </div>
      </section>

      {/* ══════ CE QUE NOUS APPORTONS ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="section-label">{accueil.apports.label}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {accueil.apports.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-5 border border-charcoal/10">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
              <p className="text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ COMMENT NOUS INTERVENONS ══════ */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-gold">{accueil.commentNousIntervenons.label}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {accueil.commentNousIntervenons.etapes.map((etape, i) => (
              <div key={i} className="relative">
                <div className="font-serif text-5xl text-gold/20 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-2">
                  {etape.titre}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {etape.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ POUR QUI ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="section-label">{accueil.pourQui.label}</div>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          {accueil.pourQui.items.map((item, i) => (
            <div key={i} className="flex-1 p-6 border border-charcoal/10 text-center">
              <div className="w-10 h-10 mx-auto mb-4 border border-gold/30 rounded-full flex items-center justify-center">
                <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ MÉTHODE — PILIERS ══════ */}
      <section className="bg-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-0">
          <div className="section-label">{accueil.methode.label}</div>
          <h2 className="font-serif text-2xl lg:text-3xl font-normal leading-snug mb-10">
            {accueil.methode.titre}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-charcoal/10 border border-charcoal/10 bg-cream">
            {accueil.methode.piliers.map((pilier, i) => (
              <div key={i} className="p-8 lg:p-10 text-center">
                <div className="w-12 h-12 mx-auto mb-5 border border-gold rounded-full flex items-center justify-center">
                  {i === 0 && (
                    <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  )}
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">{pilier.titre}</h3>
                <p className="text-xs text-subtle leading-relaxed">{pilier.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ DIMENSION + SÉLECTIVITÉ + CADRE ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border-l-2 border-gold bg-section">
            <p className="text-sm text-muted leading-[1.8] italic">
              {accueil.dimensionImplicite.texte}
            </p>
          </div>
          <div className="p-6 border-l-2 border-charcoal/20 bg-section">
            <p className="text-sm text-muted leading-[1.8]">
              {accueil.selectivite.texte}
            </p>
          </div>
          <div className="p-6 border-l-2 border-charcoal/20 bg-section">
            <p className="text-sm text-muted leading-[1.8]">
              {accueil.cadre.texte}
            </p>
          </div>
        </div>
      </section>

      {/* ══════ CTA FINAL ══════ */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-normal text-white leading-snug max-w-lg">
            {accueil.ctaFinal.titre}{" "}
            <em className="italic text-gold-light">{accueil.ctaFinal.titreAccent}</em>
          </h2>
          <Link
            href="/soumettre-demande"
            className="whitespace-nowrap text-xs tracking-[0.15em] uppercase px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            {accueil.ctaFinal.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
