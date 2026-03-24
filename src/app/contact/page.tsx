import Link from "next/link";
import { contactPage, siteConfig, team } from "@/lib/content";

export const metadata = { title: "Contact — Oppenheimer Conseil" };

export default function ContactPageView() {
  return (
    <>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
          <div className="section-label">{contactPage.label}</div>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-charcoal">{contactPage.titre}</h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
        <p className="text-base text-oak leading-[1.9] mb-14">{contactPage.texte}</p>

        <div className="space-y-5 mb-14">
          {/* Contact général */}
          <div className="p-8 bg-sand/50 border border-beige/30 rounded-sm">
            <p className="text-xs text-taupe uppercase tracking-wider mb-2">Contact général</p>
            <a href={`mailto:${siteConfig.contact}`} className="text-base font-medium text-charcoal hover:text-accent transition-colors">{siteConfig.contact}</a>
          </div>

          {/* Rodolphe */}
          <div className="p-8 bg-sand/50 border border-beige/30 rounded-sm flex items-center gap-5">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-beige flex-shrink-0">
              <img src={team.rodolphe.photo} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium">{team.rodolphe.nom}</p>
              <a href={`mailto:${team.rodolphe.email}`} className="text-sm text-accent hover:text-accent-dark transition-colors">{team.rodolphe.email}</a>
            </div>
          </div>

          {/* Magali */}
          <div className="p-8 bg-sand/50 border border-beige/30 rounded-sm flex items-center gap-5">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-beige flex-shrink-0">
              <img src={team.magali.photo} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium">{team.magali.nom}</p>
              <a href={`mailto:${team.magali.email}`} className="text-sm text-accent hover:text-accent-dark transition-colors">{team.magali.email}</a>
            </div>
          </div>
        </div>

        <Link href="/soumettre-demande" className="inline-flex text-[13px] tracking-[0.1em] uppercase px-8 py-4 bg-charcoal text-cream hover:bg-oak transition-colors duration-300 rounded-sm mb-14">
          Soumettre une demande confidentielle
        </Link>

        <div className="p-7 bg-sand/40 border-l-[3px] border-accent rounded-sm">
          <p className="text-sm text-taupe leading-[1.8]">Toute prise de contact est traitée avec la plus stricte confidentialité. Les informations transmises ne sont jamais partagées avec des tiers.</p>
        </div>
      </section>
    </>
  );
}
