import { quiJeSuis } from "@/lib/content";

export const metadata = {
  title: "Qui je suis — Rodolphe Oppenheimer",
  description: "Parcours et approche de Rodolphe Oppenheimer, président fondateur de l'Association Edgar Faure.",
};

export default function QuiJeSuis() {
  return (
    <>
      {/* Header */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-gold">{quiJeSuis.label}</div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-white mb-4">
            {quiJeSuis.titre}
          </h1>
          <p className="text-sm text-white/50 tracking-wider">
            {quiJeSuis.sousTitre}
          </p>
        </div>
      </section>
      <div className="gold-line" />

      {/* Bio */}
      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="space-y-6">
          {quiJeSuis.paragraphes.map((p, i) => (
            <p key={i} className="text-sm lg:text-base text-muted leading-[1.9]">
              {p}
            </p>
          ))}
        </div>

        {/* Heritage */}
        <div className="mt-16 p-8 lg:p-10 border-l-2 border-gold bg-section">
          <h2 className="font-serif text-xl lg:text-2xl font-medium mb-4">
            {quiJeSuis.heritage.titre}
          </h2>
          <p className="text-sm text-muted leading-[1.9]">
            {quiJeSuis.heritage.texte}
          </p>
        </div>

        {/* Distinctions */}
        <div className="mt-16">
          <h2 className="font-serif text-xl lg:text-2xl font-medium mb-6">
            Distinctions & parcours
          </h2>
          <div className="space-y-3">
            {quiJeSuis.distinctions.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Signature */}
        <div className="mt-16 pt-8 border-t border-charcoal/10">
          <p className="font-serif text-lg italic text-charcoal/70 leading-relaxed">
            &ldquo;{quiJeSuis.signature}&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
