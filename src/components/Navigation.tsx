"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/qui-je-suis", label: "Qui sommes-nous" },
  { href: "/approche-reseau", label: "Approche & réseau" },
  { href: "/ce-que-je-fais", label: "Ce que nous faisons" },
  { href: "/situations", label: "Situations" },
  { href: "/faq", label: "FAQ" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-cream border-b border-beige/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex flex-col">
          <span className="text-xs lg:text-sm font-medium tracking-[0.25em] uppercase text-charcoal">
            Oppenheimer Conseil
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] tracking-wide px-4 py-2 text-stone hover:text-charcoal hover:bg-sand rounded transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/soumettre-demande"
          className="hidden lg:inline-flex text-[11px] tracking-[0.12em] uppercase px-5 py-2.5 bg-charcoal text-cream hover:bg-oak transition-colors duration-300 rounded-sm"
        >
          Soumettre une demande
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-charcoal transition-transform duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-charcoal transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-charcoal transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-beige/50 bg-cream">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-stone hover:text-charcoal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/soumettre-demande"
              onClick={() => setOpen(false)}
              className="mt-2 text-center text-sm px-6 py-3 bg-charcoal text-cream rounded-sm"
            >
              Soumettre une demande
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
