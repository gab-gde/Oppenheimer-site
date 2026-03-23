"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/qui-je-suis", label: "Qui je suis" },
  { href: "/approche-reseau", label: "Approche" },
  { href: "/ce-que-je-fais", label: "Interventions" },
  { href: "/situations", label: "Situations" },
  { href: "/faq", label: "FAQ" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-sm lg:text-base font-medium tracking-[0.2em] uppercase text-charcoal"
        >
          R. Oppenheimer
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.12em] uppercase text-muted hover:text-charcoal transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/soumettre-demande"
          className="hidden lg:inline-flex text-[11px] tracking-[0.15em] uppercase px-6 py-2.5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
        >
          Contact
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-charcoal transition-transform duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-charcoal transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-charcoal transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-charcoal/10 bg-cream">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wider uppercase text-muted hover:text-charcoal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/soumettre-demande"
              onClick={() => setOpen(false)}
              className="mt-2 text-center text-sm tracking-wider uppercase px-6 py-3 border border-charcoal text-charcoal"
            >
              Soumettre une demande
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
