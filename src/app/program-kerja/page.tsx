import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { PROGRAM_OUTPUTS } from "@/data/kkn-data";
import { ArrowLeft, ShieldAlert, Store, Recycle } from "lucide-react";

export default function ProgramKerjaPage() {
  const themeIcons = [
    <ShieldAlert key="1" className="w-5 h-5 text-emerald-700" />,
    <Store key="2" className="w-5 h-5 text-emerald-700" />,
    <Recycle key="3" className="w-5 h-5 text-emerald-700" />,
  ];

  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24 w-full space-y-12">
        <header className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Luaran & Teknologi Tepat Guna (TTG)
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-slate-950 tracking-tight">
            Katalog Program Kerja & Hasil Pengabdian
          </h1>
          <p className="text-sm font-serif italic text-slate-500">
            Seluruh produk fisik, modul SOP operasional, cetak biru gambar kerja, dan sistem digital telah diserahterimakan secara resmi kepada Pengasuh Pondok Pesantren Asshodiqiyah.
          </p>
        </header>

        <div className="space-y-12">
          {PROGRAM_OUTPUTS.map((theme, tIdx) => (
            <section key={theme.themeNumber} className="space-y-5">
              <div className="flex items-start gap-3 border-b border-slate-200 pb-3">
                <div className="p-2 bg-emerald-50 border border-emerald-200/80 rounded-xl shrink-0">
                  {themeIcons[tIdx]}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 font-mono">
                    Tema {theme.themeNumber} • {theme.sdgs}
                  </span>
                  <h2 className="text-2xl font-serif text-slate-950 font-normal mt-0.5">
                    {theme.themeTitle}
                  </h2>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {theme.summary}
              </p>

              <div className="space-y-3 pt-2">
                {theme.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-1.5"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-bold text-slate-900 text-sm">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200/60">
                        {item.code}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="text-[11px] text-emerald-800 font-medium pt-1">
                      Penanggung Jawab: {item.leader}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Cerita Perjalanan Utama
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
