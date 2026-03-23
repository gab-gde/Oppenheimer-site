import Link from "next/link";
import { situations } from "@/lib/content";

export const metadata = {
  title: "Situations accompagnées — Rodolphe Oppenheimer",
  description: "Types de situations prises en charge : dossiers bloqués, décisions complexes, environnements institutionnels.",
};

export default function Situations() {
  return (
    <>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-accent">{situations.label}</div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-charcoal">
            {situations.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {situations.items.map((item, i) => (
            <div
              key={i}
              className="relative p-6 lg:p-8 border border-beige/40 bg-cream hover:border-accent/30 transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-10 h-0.5 bg-accent" />
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <p className="text-sm lg:text-base">{item}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-stone mb-6">
            Vous vous reconnaissez dans l&apos;une de ces situations ?
          </p>
          <Link
            href="/soumettre-demande"
            className="inline-flex text-xs tracking-[0.15em] uppercase px-8 py-4 border border-charcoal text-charcoal hover:bg-sand/60 hover:text-cream transition-all duration-300"
          >
            Soumettre une demande confidentielle
          </Link>
        </div>
      </section>
    </>
  );
}
