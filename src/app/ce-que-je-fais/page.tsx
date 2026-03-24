"use client";
import { ceQueNousFaisons } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";

export default function CeQueNousFaisons() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
          <div className="section-label reveal">{ceQueNousFaisons.label}</div>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-charcoal reveal">
            {ceQueNousFaisons.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-4xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
        <div className="space-y-5 mb-26 stagger">
          {ceQueNousFaisons.items.map((item, i) => (
            <div key={i} className="relative p-8 bg-sand/40 border border-beige/30 hover:border-accent/30 transition-colors duration-300 rounded-sm">
              <div className="absolute top-0 left-0 w-12 h-[2px] bg-accent" />
              <div className="flex items-start gap-5">
                <span className="font-serif text-4xl text-accent/15 leading-none">{String(i + 1).padStart(2, "0")}</span>
                <div className="pt-1">
                  <h3 className="text-base font-medium text-charcoal mb-2">{item.titre}</h3>
                  <p className="text-sm text-taupe leading-relaxed">{item.texte}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <div className="section-label">{ceQueNousFaisons.methode.titre}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 stagger">
            {ceQueNousFaisons.methode.etapes.map((etape, i) => (
              <div key={i} className="p-8 bg-sand/50 border border-beige/30 rounded-sm relative">
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-accent" />
                <div className="font-serif text-4xl text-accent/15 mb-3">{etape.num}</div>
                <h3 className="font-serif text-lg font-medium mb-2">{etape.titre}</h3>
                <p className="text-sm text-taupe leading-relaxed">{etape.texte}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-taupe mt-8 p-6 border-l-[3px] border-accent bg-sand/40 italic rounded-sm">
            {ceQueNousFaisons.methode.note}
          </p>
        </div>
      </section>
    </div>
  );
}
