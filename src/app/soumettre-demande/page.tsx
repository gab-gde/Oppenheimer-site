"use client";

import { useState, useRef } from "react";
import { soumettredemande } from "@/lib/content";

export default function SoumettredemandePage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    description: "",
    urgence: "Standard",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => formData.append(key, val));
      files.forEach((file) => formData.append("documents", file));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        setForm({ nom: "", email: "", telephone: "", description: "", urgence: "Standard" });
        setFiles([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-cream border border-charcoal/10 text-sm text-charcoal placeholder:text-subtle focus:outline-none focus:border-gold transition-colors duration-300";

  return (
    <>
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="section-label !text-gold">
            {soumettredemande.label}
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-normal text-white mb-6">
            {soumettredemande.titre}
          </h1>
          <p className="text-sm text-white/50 max-w-lg leading-relaxed">
            {soumettredemande.texte}
          </p>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Critères */}
        <div className="mb-12 p-6 bg-section border-l-2 border-gold">
          <p className="text-xs text-muted uppercase tracking-wider mb-3">
            Cette première analyse évalue :
          </p>
          {soumettredemande.criteres.map((c, i) => (
            <div key={i} className="flex items-center gap-2 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <p className="text-sm text-muted">{c}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        {status === "success" ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6 border border-gold rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-medium mb-3">
              Demande envoyée
            </h2>
            <p className="text-sm text-muted">
              {soumettredemande.message}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                {soumettredemande.formulaire.nom} *
              </label>
              <input
                type="text"
                name="nom"
                required
                value={form.nom}
                onChange={handleChange}
                className={inputClass}
                placeholder="Votre nom complet"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                  {soumettredemande.formulaire.email} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                  {soumettredemande.formulaire.telephone}
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+33 6 00 00 00 00"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                {soumettredemande.formulaire.description} *
              </label>
              <textarea
                name="description"
                required
                rows={6}
                value={form.description}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Décrivez votre situation de manière synthétique. Toutes les informations restent strictement confidentielles."
              />
            </div>

            <div>
              <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                {soumettredemande.formulaire.urgence}
              </label>
              <select
                name="urgence"
                value={form.urgence}
                onChange={handleChange}
                className={inputClass}
              >
                {soumettredemande.formulaire.niveaux.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                {soumettredemande.formulaire.upload}
              </label>
              <div
                onClick={() => fileRef.current?.click()}
                className="border border-dashed border-charcoal/15 p-6 text-center cursor-pointer hover:border-gold/40 transition-colors duration-300"
              >
                <svg className="w-6 h-6 mx-auto mb-2 text-subtle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                </svg>
                <p className="text-xs text-muted">
                  {files.length > 0
                    ? `${files.length} fichier(s) sélectionné(s)`
                    : "Cliquez pour ajouter des documents"}
                </p>
              </div>
              <input
                ref={fileRef}
                type="file"
                multiple
                onChange={handleFiles}
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full text-xs tracking-[0.15em] uppercase py-4 bg-charcoal text-cream hover:bg-gold transition-colors duration-300 disabled:opacity-50"
              >
                {status === "sending"
                  ? "Envoi en cours..."
                  : soumettredemande.formulaire.bouton}
              </button>
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600 text-center">
                Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
              </p>
            )}

            <p className="text-[11px] text-subtle text-center leading-relaxed">
              Vos informations sont traitées avec la plus stricte confidentialité et ne sont jamais transmises à des tiers.
            </p>
          </form>
        )}
      </section>
    </>
  );
}
