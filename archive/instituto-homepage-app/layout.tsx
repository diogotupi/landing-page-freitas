import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Instituto 2630 — Forje sua melhor versão',
  description: 'Centro de excelência em treinamento humano e empresarial.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dlb7wlq.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
