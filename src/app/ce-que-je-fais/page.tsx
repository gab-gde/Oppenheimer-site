import { ceQueNousFaisons } from "@/lib/content";

export const metadata = {
  title: "Ce que nous faisons — Rodolphe Oppenheimer-Faure",
  description:
    "Analyse, structuration, conseil stratégique, accompagnement et coordination.",
};

export default function CeQueNousFaisons() {
  return (
    <>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-accent">{ceQueNousFaisons.label}</div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-charcoal">
            {ceQueNousFaisons.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Domaines */}
        <div className="space-y-4 mb-20">
          {ceQueNousFaisons.items.map((item, i) => (
            <div
              key={i}
              className="relative p-6 lg:p-8 border border-beige/40 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-10 h-0.5 bg-accent" />
              <div className="flex items-start gap-4">
                <span className="font-serif text-3xl text-accent/20 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <h3 className="text-sm lg:text-base font-medium mb-1">
                    {item.titre}
                  </h3>
                  <p className="text-sm text-stone leading-relaxed">
                    {item.texte}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Méthode */}
        <div>
          <div className="section-label">{ceQueNousFaisons.methode.titre}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {ceQueNousFaisons.methode.etapes.map((etape, i) => (
              <div key={i} className="p-6 bg-sand/50 relative">
                <div className="absolute top-0 left-0 w-8 h-0.5 bg-accent" />
                <div className="font-serif text-3xl text-accent/20 mb-2">
                  {etape.num}
                </div>
                <h3 className="font-serif text-base font-medium mb-1">
                  {etape.titre}
                </h3>
                <p className="text-sm text-stone leading-relaxed">
                  {etape.texte}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone mt-6 p-4 border-l-2 border-accent bg-sand/50 italic">
            {ceQueNousFaisons.methode.note}
          </p>
        </div>
      </section>
    </>
  );
}
