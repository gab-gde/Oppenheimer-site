"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/qui-je-suis", label: "Qui sommes-nous" },
  { href: "/approche-reseau", label: "Approche & réseau" },
  { href: "/ce-que-je-fais", label: "Ce que nous faisons" },
  { href: "/situations", label: "Situations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-cream/95 backdrop-blur-sm border-b border-beige/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-18 lg:h-22">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Oppenheimer Conseil" width={48} height={48} className="w-10 h-10 lg:w-12 lg:h-12" />
          <span className="hidden sm:block text-xs lg:text-sm font-medium tracking-[0.2em] uppercase text-charcoal">
            Oppenheimer Conseil
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[12.5px] tracking-wide px-4 py-2 text-stone hover:text-charcoal hover:bg-sand/70 rounded transition-all duration-200">
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/soumettre-demande" className="hidden lg:inline-flex text-[11px] tracking-[0.1em] uppercase px-6 py-2.5 bg-charcoal text-cream hover:bg-oak transition-colors duration-300 rounded-sm">
          Soumettre une demande
        </Link>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          <span className={`block w-5 h-px bg-charcoal mb-1.5 transition-transform ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-charcoal mb-1.5 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-charcoal transition-transform ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-beige/40 bg-cream px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-stone hover:text-charcoal">{l.label}</Link>
          ))}
          <Link href="/soumettre-demande" onClick={() => setOpen(false)} className="mt-2 text-center text-sm px-6 py-3 bg-charcoal text-cream rounded-sm">Soumettre une demande</Link>
        </div>
      )}
    </nav>
  );
}
