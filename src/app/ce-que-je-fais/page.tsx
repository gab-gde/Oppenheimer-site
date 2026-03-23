import { ceQueJeFais } from "@/lib/content";

export const metadata = {
  title: "Ce que je fais — Rodolphe Oppenheimer",
  description: "Analyse, structuration, conseil stratégique et accompagnement dans les démarches complexes.",
};

export default function CeQueJeFais() {
  return (
    <>
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-gold">{ceQueJeFais.label}</div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-white">
            {ceQueJeFais.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="space-y-4">
          {ceQueJeFais.items.map((item, i) => (
            <div
              key={i}
              className="relative p-6 lg:p-8 border border-charcoal/10 hover:border-gold/30 transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-10 h-0.5 bg-gold" />
              <div className="flex items-start gap-4">
                <span className="font-serif text-3xl text-gold/20 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm lg:text-base font-medium pt-1">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted leading-[1.9] mt-12 p-6 bg-section border-l-2 border-gold">
          {ceQueJeFais.note}
        </p>
      </section>
    </>
  );
}
