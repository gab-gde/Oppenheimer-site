import { approcheReseau } from "@/lib/content";

export const metadata = {
  title: "Approche & réseau — Rodolphe Oppenheimer",
  description: "Une méthode fondée sur l'analyse, la structuration et un réseau de compétences complémentaires.",
};

export default function ApprocheReseau() {
  return (
    <>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-accent">{approcheReseau.label}</div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-charcoal leading-snug max-w-2xl">
            {approcheReseau.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <p className="text-sm lg:text-base text-stone leading-[1.9] mb-12">
          {approcheReseau.intro}
        </p>

        {/* Réseau */}
        <div className="mb-16">
          <h2 className="font-serif text-xl lg:text-2xl font-medium mb-6">
            {approcheReseau.reseau.titre}
          </h2>
          <p className="text-sm text-stone leading-[1.9] mb-6">
            {approcheReseau.reseau.texte}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {approcheReseau.reseau.domaines.map((d, i) => (
              <div
                key={i}
                className="p-5 border border-beige/40 relative"
              >
                <div className="absolute top-0 left-0 w-8 h-0.5 bg-accent" />
                <p className="text-sm font-medium">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone leading-[1.9]">
            {approcheReseau.reseau.conclusion}
          </p>
        </div>

        {/* Collaborateurs */}
        <div className="p-8 lg:p-10 border-l-2 border-accent bg-sand/50 mb-12">
          <h2 className="font-serif text-xl font-medium mb-4">
            {approcheReseau.collaborateurs.titre}
          </h2>
          <p className="text-sm text-stone leading-[1.9]">
            {approcheReseau.collaborateurs.texte}
          </p>
        </div>

        {/* Signature */}
        <div className="pt-8 border-t border-beige/40">
          <p className="font-serif text-lg italic text-charcoal/70 leading-relaxed">
            &ldquo;{approcheReseau.signature}&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
