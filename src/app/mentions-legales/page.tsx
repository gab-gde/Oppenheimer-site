import { mentionsLegales } from "@/lib/content";

export const metadata = {
  title: "Mentions légales — Rodolphe Oppenheimer",
};

export default function MentionsLegales() {
  return (
    <>
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-gold">
            {mentionsLegales.label}
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-white">
            {mentionsLegales.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="p-8 bg-section border-l-2 border-gold">
          <p className="text-sm text-muted italic">
            {mentionsLegales.contenu}
          </p>
        </div>
      </section>
    </>
  );
}
