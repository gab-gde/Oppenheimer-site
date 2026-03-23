"use client";

import Link from "next/link";
import Image from "next/image";
import { accueil } from "@/lib/content";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Home() {
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] bg-sand flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sand via-sand/95 to-cream z-10" />
        <div className="absolute right-0 bottom-0 font-serif text-[10rem] lg:text-[16rem] text-accent/[0.04] leading-none tracking-tighter select-none z-0">
          Conseil
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="max-w-2xl">
            <div className="section-label !mb-6 fade-up">{accueil.hero.label}</div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] font-normal text-charcoal leading-[1.15] mb-4 fade-up">
              {accueil.hero.titre}{" "}
              <em className="italic text-accent">{accueil.hero.titreAccent}</em>
            </h1>

            <p className="text-sm lg:text-base text-stone leading-relaxed max-w-lg mb-3 fade-up">
              {accueil.hero.sousTitre}
            </p>
            <p className="text-sm text-taupe leading-relaxed max-w-lg mb-10 fade-up">
              {accueil.hero.description}
            </p>

            <div className="fade-up">
              <Link
                href="/soumettre-demande"
                className="group inline-flex items-center gap-3 text-xs tracking-[0.12em] uppercase text-cream bg-charcoal px-8 py-4 hover:bg-oak transition-colors duration-300 rounded-sm"
              >
                {accueil.hero.cta}
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 13L13 1M13 1H5M13 1v8" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* ══════ ÊTES-VOUS CONCERNÉ ? ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="section-label fade-up">{accueil.concerne.label}</div>
        <h2 className="font-serif text-2xl lg:text-3xl font-normal leading-snug mb-10 fade-up">
          {accueil.concerne.titre}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {accueil.concerne.items.map((item, i) => (
            <div key={i} className="relative p-6 bg-sand/60 border border-beige/40 hover:border-accent/30 transition-colors duration-300 rounded-sm">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <p className="text-sm text-stone">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ POSITIONNEMENT ══════ */}
      <section className="bg-sand/50 fade-in">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="section-label">{accueil.positionnement.label}</div>
          <h2 className="font-serif text-2xl lg:text-4xl font-normal leading-snug mb-4 max-w-2xl">
            {accueil.positionnement.titre}
          </h2>
          <p className="text-sm text-stone leading-relaxed max-w-xl font-medium">
            {accueil.positionnement.texte}
          </p>
        </div>
      </section>

      {/* ══════ LES ASSOCIÉS ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="section-label fade-up">Les associés</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8 stagger-children">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-beige">
              <Image src="/rodolphe.png" alt="Rodolphe Oppenheimer" fill className="object-cover" />
            </div>
            <h3 className="font-serif text-xl font-medium mb-1">Rodolphe Oppenheimer</h3>
            <p className="text-xs text-taupe tracking-wider">Fondateur</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-beige">
              <Image src="/magali.jpg" alt="Magali Duval" fill className="object-cover" />
            </div>
            <h3 className="font-serif text-xl font-medium mb-1">Magali Duval</h3>
            <p className="text-xs text-taupe tracking-wider">Associée</p>
          </div>
        </div>
      </section>

      {/* ══════ CE QUE NOUS APPORTONS ══════ */}
      <section className="bg-sand/50 fade-in">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label">{accueil.apports.label}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 stagger-children">
            {accueil.apports.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-cream border border-beige/40 rounded-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-sm font-medium text-stone">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMMENT NOUS INTERVENONS ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="section-label fade-up">{accueil.commentNousIntervenons.label}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 stagger-children">
          {accueil.commentNousIntervenons.etapes.map((etape, i) => (
            <div key={i} className="relative p-6 bg-sand/50 border border-beige/40 rounded-sm">
              <div className="font-serif text-4xl text-accent/20 mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-base font-medium text-charcoal mb-2">
                {etape.titre}
              </h3>
              <p className="text-sm text-taupe leading-relaxed">{etape.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ POUR QUI ══════ */}
      <section className="bg-sand/50 fade-in">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="section-label">{accueil.pourQui.label}</div>
          <div className="flex flex-col md:flex-row gap-4 mt-6 stagger-children">
            {accueil.pourQui.items.map((item, i) => (
              <div key={i} className="flex-1 p-6 bg-cream border border-beige/40 text-center rounded-sm">
                <div className="w-10 h-10 mx-auto mb-4 border border-accent/30 rounded-full flex items-center justify-center">
                  <span className="font-serif text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-sm text-stone">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ MÉTHODE — PILIERS ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="section-label fade-up">{accueil.methode.label}</div>
        <h2 className="font-serif text-2xl lg:text-3xl font-normal leading-snug mb-10 fade-up">
          {accueil.methode.titre}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-beige/50 border border-beige/50 rounded-sm stagger-children">
          {accueil.methode.piliers.map((pilier, i) => (
            <div key={i} className="p-8 lg:p-10 text-center">
              <div className="w-12 h-12 mx-auto mb-5 border border-accent/40 rounded-full flex items-center justify-center">
                {i === 0 && <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                {i === 1 && <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>}
                {i === 2 && <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>}
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">{pilier.titre}</h3>
              <p className="text-xs text-taupe leading-relaxed">{pilier.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ DIMENSION + SÉLECTIVITÉ + CADRE ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 stagger-children">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border-l-2 border-accent bg-sand/50 rounded-sm">
            <p className="text-sm text-stone leading-[1.8] italic">{accueil.dimensionImplicite.texte}</p>
          </div>
          <div className="p-6 border-l-2 border-beige bg-sand/50 rounded-sm">
            <p className="text-sm text-taupe leading-[1.8]">{accueil.selectivite.texte}</p>
          </div>
          <div className="p-6 border-l-2 border-beige bg-sand/50 rounded-sm">
            <p className="text-sm text-taupe leading-[1.8]">{accueil.cadre.texte}</p>
          </div>
        </div>
      </section>

      {/* ══════ CTA FINAL ══════ */}
      <section className="bg-charcoal rounded-sm mx-6 lg:mx-12 mb-20 fade-up">
        <div className="max-w-5xl mx-auto px-8 lg:px-16 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-normal text-cream leading-snug max-w-lg">
            {accueil.ctaFinal.titre}{" "}
            <em className="italic text-accent-light">{accueil.ctaFinal.titreAccent}</em>
          </h2>
          <Link
            href="/soumettre-demande"
            className="whitespace-nowrap text-xs tracking-[0.12em] uppercase px-10 py-4 border border-accent-light text-accent-light hover:bg-accent-light hover:text-charcoal transition-all duration-300 rounded-sm"
          >
            {accueil.ctaFinal.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
