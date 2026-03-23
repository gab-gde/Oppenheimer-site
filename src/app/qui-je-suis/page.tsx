import { quiSommesNous } from "@/lib/content";

export const metadata = {
  title: "Qui sommes-nous — Rodolphe Oppenheimer-Faure",
  description:
    "Parcours, expérience et engagements. Association Edgar Faure, mandats électifs et réseau institutionnel.",
};

export default function QuiSommesNous() {
  return (
    <>
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-gold">{quiSommesNous.label}</div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-white mb-4">
            {quiSommesNous.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Paragraphes principaux */}
        <div className="space-y-6 mb-16">
          {quiSommesNous.paragraphes.map((p, i) => (
            <p key={i} className="text-sm lg:text-base text-muted leading-[1.9]">
              {p}
            </p>
          ))}
        </div>

        {/* Expérience décisionnelle */}
        <div className="p-8 lg:p-10 border-l-2 border-gold bg-section mb-16">
          <h2 className="font-serif text-xl lg:text-2xl font-medium mb-4">
            {quiSommesNous.experience.titre}
          </h2>
          <p className="text-sm text-muted leading-[1.9]">
            {quiSommesNous.experience.texte}
          </p>
        </div>

        {/* Mandats */}
        <div className="mb-16">
          <h2 className="font-serif text-xl lg:text-2xl font-medium mb-6">
            {quiSommesNous.mandats.titre}
          </h2>
          <div className="space-y-4">
            {quiSommesNous.mandats.paragraphes.map((p, i) => (
              <p key={i} className="text-sm text-muted leading-[1.9]">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Distinctions */}
        <div className="mb-16">
          <h2 className="font-serif text-xl lg:text-2xl font-medium mb-2">
            {quiSommesNous.distinctions.titre}
          </h2>
          <p className="text-xs text-subtle tracking-wider mb-6">
            {quiSommesNous.distinctions.sousTitre}
          </p>
          <div className="space-y-3">
            {quiSommesNous.distinctions.items.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
