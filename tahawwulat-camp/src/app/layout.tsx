import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tahawwulat Youth Camp | Kem Terbaik Abad Ini",
  description: "4 hari untuk membina ketahanan emosi, spiritual dan mental berdasarkan psikologi islam & Modul akhir zaman bersumberkan Al Quran dan Hadis.",
  keywords: ["youth camp", "islamic camp", "kem remaja", "tahawwulat", "spiritual", "tarbiyyah"],
  openGraph: {
    title: "Tahawwulat Youth Camp | Kem Terbaik Abad Ini",
    description: "4 hari untuk membina ketahanan emosi, spiritual dan mental berdasarkan psikologi islam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
