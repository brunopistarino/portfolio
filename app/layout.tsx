import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://brunop.vercel.app"),
  title: "Bruno Pistarino",
  description:
    "Estudio Ingeniería en Informática y me apasiona crear interfaces que resalten por su experiencia de usuario (UX). Soy una persona proactiva y emprendedora, siempre aprendiendo nuevas tecnologías y aplicándolas en proyectos personales.",
  keywords:
    "bruno, pistarino, bruno pistarino, ingenieria, informatica, full stack, developer, ux, ui, ux/ui, ux/ui designer, ux/ui developer, ux/ui designer developer, ux/ui designer and developer, ux/ui designer & developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
