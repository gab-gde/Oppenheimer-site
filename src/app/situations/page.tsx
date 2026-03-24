"use client";
import Link from "next/link";
import { situations } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";

export default function Situations() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
          <div className="section-label reveal">{situations.label}</div>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-charcoal reveal">
            {situations.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-4xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger">
          {situations.items.map((item, i) => (
            <div key={i} className="relative p-8 bg-sand/40 border border-beige/30 hover:border-accent/30 transition-colors duration-300 rounded-sm">
              <div className="absolute top-0 left-0 w-10 h-[2px] bg-accent" />
              <div className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                <p className="text-[15px] text-oak">{item}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <p className="text-base text-taupe mb-8">Vous vous reconnaissez dans l&apos;une de ces situations ?</p>
          <Link href="/soumettre-demande" className="inline-flex text-[13px] tracking-[0.1em] uppercase px-10 py-5 bg-charcoal text-cream hover:bg-oak transition-colors duration-300 rounded-sm">
            Soumettre une demande confidentielle
          </Link>
        </div>
      </section>
    </div>
  );
}
