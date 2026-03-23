import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rodolphe Oppenheimer — Accompagnement de situations complexes",
  description:
    "Conseil, structuration et intervention sur des dossiers nécessitant une approche stratégique et discrète. Dans le sillage du Président Edgar Faure.",
  keywords:
    "accompagnement, situations complexes, institutions, conseil stratégique, dossiers bloqués, Edgar Faure",
  openGraph: {
    title: "Rodolphe Oppenheimer — Accompagnement de situations complexes",
    description:
      "Conseil, structuration et intervention sur des dossiers nécessitant une approche stratégique et discrète.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-cream text-charcoal antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
