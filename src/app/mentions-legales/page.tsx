import { mentionsLegales } from "@/lib/content";

export const metadata = {
  title: "Mentions légales — Rodolphe Oppenheimer",
};

export default function MentionsLegales() {
  return (
    <>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-accent">
            {mentionsLegales.label}
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-charcoal">
            {mentionsLegales.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="p-8 bg-sand/50 border-l-2 border-accent">
          <p className="text-sm text-stone italic">
            {mentionsLegales.contenu}
          </p>
        </div>
      </section>
    </>
  );
}
