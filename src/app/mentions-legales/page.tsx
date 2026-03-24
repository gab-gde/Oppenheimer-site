import { mentionsLegales } from "@/lib/content";

export const metadata = { title: "Mentions légales — Oppenheimer Conseil" };

export default function MentionsLegales() {
  return (
    <>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
          <div className="section-label">{mentionsLegales.label}</div>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-charcoal">{mentionsLegales.titre}</h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
        <div className="p-10 bg-sand/50 border border-beige/30 rounded-sm">
          <h2 className="font-serif text-xl font-medium mb-6">{mentionsLegales.editeur.titre}</h2>
          <div className="space-y-2">
            {mentionsLegales.editeur.lignes.map((l, i) => (
              <p key={i} className={`text-sm ${i === 0 ? "text-oak font-medium mb-4" : "text-taupe"} leading-relaxed`}>
                {l}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
