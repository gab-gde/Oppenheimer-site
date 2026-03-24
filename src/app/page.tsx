"use client";
import Link from "next/link";
import Image from "next/image";
import { accueil, team } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";

export default function Home() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[88vh] flex items-center bg-sand overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sand via-warm/80 to-cream z-10" />
        <div className="absolute right-[-5%] bottom-[-10%] font-serif text-[14rem] lg:text-[22rem] font-light text-accent/[0.04] leading-none select-none z-0">Conseil</div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-16 py-30 w-full">
          <div className="max-w-3xl">
            <div className="section-label !mb-8 reveal">{accueil.hero.label}</div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light text-charcoal leading-[1.08] mb-8 reveal">
              {accueil.hero.titre}<br />
              <em className="italic text-accent font-normal">{accueil.hero.titreAccent}</em>
            </h1>
            <p className="text-base lg:text-lg text-oak leading-relaxed max-w-xl mb-4 reveal">{accueil.hero.sousTitre}</p>
            <p className="text-sm text-taupe leading-relaxed max-w-xl mb-12 reveal">{accueil.hero.description}</p>
            <div className="reveal">
              <Link href="/soumettre-demande" className="group inline-flex items-center gap-3 text-[13px] tracking-[0.1em] uppercase text-cream bg-charcoal px-10 py-5 hover:bg-oak transition-colors duration-300 rounded-sm">
                {accueil.hero.cta}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 13L13 1M13 1H5M13 1v8" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* ══════ ÊTES-VOUS CONCERNÉ ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-26 lg:py-36">
        <div className="section-label reveal">{accueil.concerne.label}</div>
        <h2 className="font-serif text-3xl lg:text-5xl font-light leading-tight mb-14 reveal">{accueil.concerne.titre}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {accueil.concerne.items.map((item, i) => (
            <div key={i} className="p-7 bg-sand/50 border border-beige/30 hover:border-accent/30 transition-all duration-300 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                <p className="text-[15px] text-oak leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ POSITIONNEMENT — full width band ══════ */}
      <section className="bg-warm/60 reveal-fade">
        <div className="max-w-5xl mx-auto px-6 lg:px-16 py-22 lg:py-30 text-center">
          <div className="section-label justify-center">{accueil.positionnement.label}</div>
          <h2 className="font-serif text-3xl lg:text-5xl font-light leading-tight mb-6 max-w-3xl mx-auto">{accueil.positionnement.titre}</h2>
          <p className="text-base text-stone leading-relaxed max-w-xl mx-auto">{accueil.positionnement.texte}</p>
        </div>
      </section>

      {/* ══════ LES ASSOCIÉS — bigger photos ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-26 lg:py-36">
        <div className="section-label reveal">Les associés</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-12 stagger">
          {[team.rodolphe, team.magali].map((person) => (
            <div key={person.nom} className="text-center">
              <div className="relative w-56 h-56 lg:w-72 lg:h-72 mx-auto mb-8 rounded-full overflow-hidden border-3 border-beige shadow-sm">
                <Image src={person.photo} alt={person.nom} fill className="object-cover" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-normal mb-1">{person.nom}</h3>
              <p className="text-sm text-taupe tracking-wider mb-3">{person.role}</p>
              <a href={`mailto:${person.email}`} className="text-sm text-accent hover:text-accent-dark transition-colors">{person.email}</a>
              {person.linkedin && (
                <div className="mt-3">
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-taupe hover:text-accent transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══════ CE QUE NOUS APPORTONS ══════ */}
      <section className="bg-sand/40 reveal-fade">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-26 lg:py-36">
          <div className="section-label">{accueil.apports.label}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 stagger">
            {accueil.apports.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-7 bg-cream border border-beige/30 rounded-sm">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-[15px] font-medium text-oak">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMMENT NOUS INTERVENONS ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-26 lg:py-36">
        <div className="section-label reveal">{accueil.commentNousIntervenons.label}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 stagger">
          {accueil.commentNousIntervenons.etapes.map((etape, i) => (
            <div key={i} className="p-7 bg-sand/40 border border-beige/30 rounded-sm">
              <div className="font-serif text-5xl text-accent/15 mb-4">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-serif text-lg font-medium text-charcoal mb-2">{etape.titre}</h3>
              <p className="text-sm text-taupe leading-relaxed">{etape.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ POUR QUI ══════ */}
      <section className="bg-warm/40 reveal-fade">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
          <div className="section-label justify-center">{accueil.pourQui.label}</div>
          <div className="flex flex-col md:flex-row gap-6 mt-10 stagger">
            {accueil.pourQui.items.map((item, i) => (
              <div key={i} className="flex-1 p-8 bg-cream border border-beige/30 text-center rounded-sm">
                <div className="w-12 h-12 mx-auto mb-5 border border-accent/30 rounded-full flex items-center justify-center">
                  <span className="font-serif text-lg text-accent">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-[15px] text-oak">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PILIERS ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-26 lg:py-36">
        <div className="section-label reveal">{accueil.methode.label}</div>
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight mb-14 reveal">{accueil.methode.titre}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-beige/40 border border-beige/40 rounded-sm stagger">
          {accueil.methode.piliers.map((p, i) => (
            <div key={i} className="p-10 lg:p-14 text-center">
              <div className="w-14 h-14 mx-auto mb-6 border border-accent/40 rounded-full flex items-center justify-center">
                {i === 0 && <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                {i === 1 && <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
                {i === 2 && <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>}
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">{p.titre}</h3>
              <p className="text-sm text-taupe leading-relaxed">{p.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ 3 blocs dimension/sélectivité/cadre ══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-26 lg:pb-36 stagger">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 border-l-[3px] border-accent bg-sand/40 rounded-sm"><p className="text-sm text-oak leading-[1.8] italic">{accueil.dimensionImplicite.texte}</p></div>
          <div className="p-7 border-l-[3px] border-beige bg-sand/40 rounded-sm"><p className="text-sm text-taupe leading-[1.8]">{accueil.selectivite.texte}</p></div>
          <div className="p-7 border-l-[3px] border-beige bg-sand/40 rounded-sm"><p className="text-sm text-taupe leading-[1.8]">{accueil.cadre.texte}</p></div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="bg-charcoal mx-6 lg:mx-16 mb-26 rounded-sm reveal">
        <div className="max-w-5xl mx-auto px-10 lg:px-20 py-20 lg:py-26 flex flex-col lg:flex-row items-center justify-between gap-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-cream leading-snug max-w-lg">
            {accueil.ctaFinal.titre} <em className="italic text-accent-light">{accueil.ctaFinal.titreAccent}</em>
          </h2>
          <Link href="/soumettre-demande" className="whitespace-nowrap text-[13px] tracking-[0.1em] uppercase px-10 py-5 border border-accent-light text-accent-light hover:bg-accent-light hover:text-charcoal transition-all duration-300 rounded-sm">
            {accueil.ctaFinal.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
