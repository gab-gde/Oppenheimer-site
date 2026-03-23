import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Oppenheimer Conseil — Accompagnement de situations complexes",
  description:
    "Conseil, structuration et intervention sur des dossiers bloqués ou difficiles à faire évoluer.",
  keywords:
    "accompagnement, situations complexes, institutions, conseil stratégique, dossiers bloqués, Oppenheimer Conseil",
  openGraph: {
    title: "Oppenheimer Conseil — Accompagnement de situations complexes",
    description:
      "Conseil, structuration et intervention sur des dossiers bloqués ou difficiles à faire évoluer.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
