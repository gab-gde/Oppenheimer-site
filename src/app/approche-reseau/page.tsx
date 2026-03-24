"use client";
import { approcheReseau } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";

export default function ApprocheReseau() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
          <div className="section-label reveal">{approcheReseau.label}</div>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-charcoal leading-tight max-w-3xl reveal">
            {approcheReseau.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-4xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
        <p className="text-base text-oak leading-[1.9] mb-20 reveal">{approcheReseau.intro}</p>

        <div className="mb-20 reveal">
          <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-8">{approcheReseau.reseau.titre}</h2>
          <p className="text-base text-oak leading-[1.9] mb-8">{approcheReseau.reseau.texte}</p>
          <div className="grid grid-cols-2 gap-4 mb-8 stagger">
            {approcheReseau.reseau.domaines.map((d, i) => (
              <div key={i} className="p-6 bg-sand/50 border border-beige/30 rounded-sm relative">
                <div className="absolute top-0 left-0 w-10 h-[2px] bg-accent" />
                <p className="text-[15px] font-medium text-oak">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-oak leading-[1.9]">{approcheReseau.reseau.conclusion}</p>
        </div>

        <div className="p-10 border-l-[3px] border-accent bg-sand/50 rounded-sm mb-20 reveal">
          <h2 className="font-serif text-xl font-medium mb-5">{approcheReseau.collaborateurs.titre}</h2>
          <p className="text-base text-oak leading-[1.9]">{approcheReseau.collaborateurs.texte}</p>
        </div>

        <div className="pt-10 border-t border-beige/40 reveal">
          <p className="font-serif text-xl italic text-stone leading-relaxed">
            &ldquo;{approcheReseau.signature}&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
