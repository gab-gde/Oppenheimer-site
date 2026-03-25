"use client";
import Image from "next/image";
import { approcheReseau, avocats } from "@/lib/content";
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

        {/* Réseau */}
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

        {/* Collaborateurs */}
        <div className="p-10 border-l-[3px] border-accent bg-sand/50 rounded-sm mb-20 reveal">
          <h2 className="font-serif text-xl font-medium mb-5">{approcheReseau.collaborateurs.titre}</h2>
          <p className="text-base text-oak leading-[1.9]">{approcheReseau.collaborateurs.texte}</p>
        </div>

        {/* Réseau d'avocats */}
        <div className="mb-20 reveal">
          <div className="section-label">Notre réseau d&apos;avocats</div>
          <p className="text-base text-oak leading-[1.9] mb-10">
            Nous travaillons avec des avocats spécialisés, chacun expert dans son domaine, pour répondre avec précision aux situations les plus exigeantes.
          </p>

          <div className="space-y-8 stagger">
            {avocats.map((avocat, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-sand/40 border border-beige/30 rounded-sm">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-beige mx-auto md:mx-0">
                    <Image src={avocat.photo} alt={avocat.nom} fill className="object-cover" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-serif text-xl lg:text-2xl font-medium mb-1">{avocat.nom}</h3>
                  <p className="text-sm text-accent tracking-wider mb-4">{avocat.titre}</p>
                  {avocat.bio && (
                    <p className="text-sm text-taupe leading-[1.8]">{avocat.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature */}
        <div className="pt-10 border-t border-beige/40 reveal">
          <p className="font-serif text-xl italic text-stone leading-relaxed">
            &ldquo;{approcheReseau.signature}&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
