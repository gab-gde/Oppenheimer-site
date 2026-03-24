import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-sand border-t border-beige/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="" width={40} height={40} className="w-9 h-9" />
              <span className="text-sm font-medium tracking-[0.18em] uppercase text-charcoal">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-taupe leading-relaxed max-w-sm">Accompagnement de situations complexes et sensibles. Conseil, structuration et intervention.</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-wider uppercase text-charcoal mb-1">Navigation</p>
            {[["/qui-je-suis","Qui sommes-nous"],["/approche-reseau","Approche & réseau"],["/ce-que-je-fais","Ce que nous faisons"],["/situations","Situations"],["/faq","FAQ"]].map(([h,l])=>(
              <Link key={h} href={h} className="text-sm text-taupe hover:text-charcoal transition-colors">{l}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-wider uppercase text-charcoal mb-1">Contact</p>
            <a href={`mailto:${siteConfig.contact}`} className="text-sm text-taupe hover:text-charcoal transition-colors">{siteConfig.contact}</a>
            <Link href="/soumettre-demande" className="text-sm text-accent hover:text-accent-dark transition-colors">Soumettre une demande →</Link>
            <Link href="/mentions-legales" className="text-sm text-taupe hover:text-charcoal transition-colors mt-2">Mentions légales</Link>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-beige flex flex-col lg:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-beige-dark">© {new Date().getFullYear()} {siteConfig.name} — Tous droits réservés</p>
          <p className="text-[11px] text-beige-dark">Oppenheimer Media SAS</p>
        </div>
      </div>
    </footer>
  );
}
