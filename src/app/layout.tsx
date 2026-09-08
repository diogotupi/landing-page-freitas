import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NUCOE | Formação Ao Vivo | Instituto 2630",
  description:
    "Construa o Núcleo Organizacional da Empresa com Propósito, Valores e Princípios em uma formação ao vivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dlb7wlq.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
