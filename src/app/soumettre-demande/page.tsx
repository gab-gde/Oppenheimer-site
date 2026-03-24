"use client";
import { useState, useRef } from "react";
import { soumettredemande } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";

export default function SoumettredemandePage() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", description: "", urgence: "Standard" });
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const fileRef = useRef<HTMLInputElement>(null);
  const ref = useReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([k, v]) => formData.append(k, v));
      files.forEach((f) => formData.append("documents", f));
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) { setForm({ nom: "", email: "", telephone: "", description: "", urgence: "Standard" }); setFiles([]); }
    } catch { setStatus("error"); }
  };

  const inputClass = "w-full px-5 py-3.5 bg-cream border border-beige/50 text-sm text-charcoal placeholder:text-beige-dark focus:outline-none focus:border-accent transition-colors duration-300 rounded-sm";

  return (
    <div ref={ref}>
      <section className="bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
          <div className="section-label reveal">{soumettredemande.label}</div>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-charcoal mb-6 reveal">{soumettredemande.titre}</h1>
        </div>
      </section>
      <div className="gold-line" />

      <section className="max-w-2xl mx-auto px-6 lg:px-16 py-22 lg:py-30">
        <div className="mb-14 p-7 bg-sand/50 border-l-[3px] border-accent rounded-sm reveal">
          <p className="text-sm text-oak leading-[1.8]">{soumettredemande.texte}</p>
        </div>

        {status === "success" ? (
          <div className="text-center py-20 reveal">
            <div className="w-18 h-18 mx-auto mb-8 border-2 border-accent rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 6L9 17l-5-5" /></svg>
            </div>
            <h2 className="font-serif text-3xl font-normal mb-4">Demande envoyée</h2>
            <p className="text-sm text-taupe">{soumettredemande.message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 reveal">
            <div>
              <label className="block text-xs text-taupe uppercase tracking-wider mb-2">{soumettredemande.formulaire.nom} *</label>
              <input type="text" name="nom" required value={form.nom} onChange={handleChange} className={inputClass} placeholder="Votre nom complet" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-taupe uppercase tracking-wider mb-2">{soumettredemande.formulaire.email} *</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-xs text-taupe uppercase tracking-wider mb-2">{soumettredemande.formulaire.telephone}</label>
                <input type="tel" name="telephone" value={form.telephone} onChange={handleChange} className={inputClass} placeholder="+33 6 00 00 00 00" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-taupe uppercase tracking-wider mb-2">{soumettredemande.formulaire.description} *</label>
              <textarea name="description" required rows={7} value={form.description} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Décrivez votre situation de manière synthétique. Toutes les informations restent strictement confidentielles." />
            </div>

            <div>
              <label className="block text-xs text-taupe uppercase tracking-wider mb-2">{soumettredemande.formulaire.urgence}</label>
              <select name="urgence" value={form.urgence} onChange={handleChange} className={inputClass}>
                {soumettredemande.formulaire.niveaux.map((n) => (<option key={n} value={n}>{n}</option>))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-taupe uppercase tracking-wider mb-2">{soumettredemande.formulaire.upload}</label>
              <div onClick={() => fileRef.current?.click()} className="border border-dashed border-beige p-8 text-center cursor-pointer hover:border-accent/40 transition-colors duration-300 rounded-sm">
                <svg className="w-6 h-6 mx-auto mb-3 text-beige-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                </svg>
                <p className="text-sm text-taupe">{files.length > 0 ? `${files.length} fichier(s) sélectionné(s)` : "Cliquez pour ajouter des documents"}</p>
              </div>
              <input ref={fileRef} type="file" multiple onChange={handleFiles} className="hidden" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
            </div>

            <div className="pt-4">
              <button type="submit" disabled={status === "sending"} className="w-full text-[13px] tracking-[0.1em] uppercase py-5 bg-charcoal text-cream hover:bg-oak transition-colors duration-300 disabled:opacity-50 rounded-sm">
                {status === "sending" ? "Envoi en cours..." : soumettredemande.formulaire.bouton}
              </button>
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600 text-center">Une erreur est survenue. Veuillez réessayer ou nous contacter directement.</p>
            )}

            <p className="text-[11px] text-beige-dark text-center leading-relaxed">
              Vos informations sont traitées avec la plus stricte confidentialité et ne sont jamais transmises à des tiers.
            </p>
          </form>
        )}
      </section>
    </div>
  );
}
