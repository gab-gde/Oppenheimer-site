"use client";

import Image from "next/image";
import { quiSommesNous } from "@/lib/content";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function QuiSommesNous() {
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label fade-up">{quiSommesNous.label}</div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-charcoal mb-4 fade-up">
            {quiSommesNous.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Photos des associés */}
        <div className="flex justify-center gap-8 lg:gap-12 mb-16 fade-up">
          <div className="text-center">
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-beige">
              <Image src="/rodolphe.png" alt="Rodolphe Oppenheimer" fill className="object-cover" />
            </div>
            <p className="font-serif text-sm font-medium">Rodolphe Oppenheimer</p>
            <p className="text-xs text-taupe">Fondateur</p>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-beige">
              <Image src="/magali.jpg" alt="Magali Duval" fill className="object-cover" />
            </div>
            <p className="font-serif text-sm font-medium">Magali Duval</p>
            <p className="text-xs text-taupe">Associée</p>
          </div>
        </div>

        <div className="space-y-6 mb-16">
          {quiSommesNous.paragraphes.map((p, i) => (
            <p key={i} className="text-sm lg:text-base text-stone leading-[1.9] fade-up">{p}</p>
          ))}
        </div>

        <div className="p-8 lg:p-10 border-l-2 border-accent bg-sand/50 rounded-sm mb-16 fade-up">
          <h2 className="font-serif text-xl lg:text-2xl font-medium mb-4">{quiSommesNous.experience.titre}</h2>
          <p className="text-sm text-stone leading-[1.9]">{quiSommesNous.experience.texte}</p>
        </div>

        <div className="mb-16 fade-up">
          <h2 className="font-serif text-xl lg:text-2xl font-medium mb-6">{quiSommesNous.mandats.titre}</h2>
          <div className="space-y-4">
            {quiSommesNous.mandats.paragraphes.map((p, i) => (
              <p key={i} className="text-sm text-stone leading-[1.9]">{p}</p>
            ))}
          </div>
        </div>

        <div className="mb-16 fade-up">
          <h2 className="font-serif text-xl lg:text-2xl font-medium mb-2">{quiSommesNous.distinctions.titre}</h2>
          <p className="text-xs text-taupe tracking-wider mb-6">{quiSommesNous.distinctions.sousTitre}</p>
          <div className="space-y-3">
            {quiSommesNous.distinctions.items.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-sm text-stone">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
