import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petaling Care - Memperkasa Komuniti",
  description: "Pertubuhan bukan kerajaan (NGO) yang komited untuk memperkasa komuniti melalui pembangunan berterusan, pendidikan, sukan, dan kesukarelawanan untuk masa depan yang lebih cerah.",
  keywords: ["Petaling Care", "NGO", "Malaysia", "Komuniti", "Pendidikan", "Kesukarelawanan", "Sukan"],
  authors: [{ name: "Petaling Care" }],
  openGraph: {
    title: "Petaling Care - Memperkasa Komuniti",
    description: "Memperkasa komuniti melalui pembangunan berterusan untuk masa depan yang lebih cerah.",
    type: "website",
    locale: "ms_MY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
