"use client";

import { useState } from "react";
import { faq } from "@/lib/content";

function FaqItem({
  question,
  reponse,
  open,
  toggle,
}: {
  question: string;
  reponse: string;
  open: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-serif text-lg lg:text-xl font-medium pr-8 group-hover:text-gold transition-colors duration-300">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 border border-charcoal/15 rounded-full flex items-center justify-center transition-all duration-300 ${
            open ? "bg-gold border-gold rotate-45" : ""
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors ${open ? "text-cream" : "text-charcoal"}`}
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M7 1v12M1 7h12" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted leading-[1.9] max-w-2xl">
          {reponse}
        </p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-gold">{faq.label}</div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-white">
            {faq.titre}
          </h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="border-t border-charcoal/10">
          {faq.questions.map((item, i) => (
            <FaqItem
              key={i}
              question={item.question}
              reponse={item.reponse}
              open={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
