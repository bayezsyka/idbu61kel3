import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cerita 45 Hari di Kaligawe — KKN-T IDBU 61 Kelompok 3",
  description: "Dokumentasi interaktif pengabdian 11 mahasiswa Universitas Diponegoro di Pondok Pesantren Asshodiqiyah Kaligawe Semarang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${sans.variable} ${serif.variable} font-sans bg-[#FCFCFC] text-slate-800 antialiased selection:bg-emerald-700 selection:text-white min-h-screen flex flex-col justify-between`}>
        {children}
      </body>
    </html>
  );
}
