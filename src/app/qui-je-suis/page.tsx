"use client";
import Image from "next/image";
import { quiSommesNous, team } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";

export default function QuiSommesNous() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
          <div className="section-label reveal">{quiSommesNous.label}</div>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-charcoal reveal">{quiSommesNous.titre}</h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-4xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
        {/* Photos */}
        <div className="flex justify-center gap-10 lg:gap-16 mb-20 stagger">
          {[team.rodolphe, team.magali].map((p) => (
            <div key={p.nom} className="text-center">
              <div className="relative w-40 h-40 lg:w-56 lg:h-56 mx-auto mb-5 rounded-full overflow-hidden border-2 border-beige">
                <Image src={p.photo} alt={p.nom} fill className="object-cover" />
              </div>
              <p className="font-serif text-lg font-medium">{p.nom}</p>
              <p className="text-xs text-taupe tracking-wider mb-2">{p.role}</p>
              <a href={`mailto:${p.email}`} className="text-xs text-accent hover:text-accent-dark transition-colors">{p.email}</a>
              {p.linkedin && (
                <div className="mt-2">
                  <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-taupe hover:text-accent transition-colors">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-7 mb-20">
          {quiSommesNous.paragraphes.map((p, i) => (
            <p key={i} className="text-base text-oak leading-[1.9] reveal">{p}</p>
          ))}
        </div>

        <div className="p-10 border-l-[3px] border-accent bg-sand/50 rounded-sm mb-20 reveal">
          <h2 className="font-serif text-2xl font-normal mb-5">{quiSommesNous.experience.titre}</h2>
          <p className="text-base text-oak leading-[1.9]">{quiSommesNous.experience.texte}</p>
        </div>

        <div className="mb-20 reveal">
          <h2 className="font-serif text-2xl font-normal mb-7">{quiSommesNous.mandats.titre}</h2>
          <div className="space-y-5">
            {quiSommesNous.mandats.paragraphes.map((p, i) => (
              <p key={i} className="text-base text-oak leading-[1.9]">{p}</p>
            ))}
          </div>
        </div>

        <div className="reveal">
          <h2 className="font-serif text-2xl font-normal mb-3">{quiSommesNous.distinctions.titre}</h2>
          <p className="text-sm text-taupe tracking-wider mb-7">{quiSommesNous.distinctions.sousTitre}</p>
          <div className="space-y-3">
            {quiSommesNous.distinctions.items.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <p className="text-[15px] text-oak">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
