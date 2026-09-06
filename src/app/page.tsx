import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContinuousScrollStoryline from "@/components/ContinuousScrollStoryline";
import PhotoboothGallery from "@/components/PhotoboothGallery";
import Link from "next/link";
import { Building2, Layers, Users, ArrowDown } from "lucide-react";

export default function HomePage() {
  const weeksIndex = [
    { num: 1, label: "M1: Sowan", date: "29 Jun - 05 Jul" },
    { num: 2, label: "M2: Kolam", date: "06 - 12 Jul" },
    { num: 3, label: "M3: Trashrack", date: "13 - 19 Jul" },
    { num: 4, label: "M4: IoT & Kas", date: "20 - 26 Jul" },
    { num: 5, label: "M5: SDGs 11", date: "27 Jul - 02 Agu" },
    { num: 6, label: "M6: Kemitraan", date: "03 - 09 Agu" },
    { num: 7, label: "M7: TTG & Expo", date: "10 - 19 Agu" },
  ];

  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24 w-full">
        
        {/* HERO TITLE SECTION */}
        <header className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            KKN-T Tim II Universitas Diponegoro 2025/2026
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal text-slate-950 leading-[1.12] tracking-tight">
            Air, Koperasi, dan 45 Hari Menatap Genangan di Kaligawe
          </h1>

          <p className="text-lg sm:text-xl font-serif italic text-slate-600 leading-relaxed font-normal pt-1">
            Catatan lapangan 11 mahasiswa lintas disiplin ilmu di Pondok Pesantren Asshodiqiyah. Cerita tentang bagaimana obrolan sowan, pengukuran tanah, sensor air rakitan, dan buku kas sederhana mempertemukan teori kampus dengan denyut nyata santri.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium">
            <div>
              <span className="text-slate-400">Dosen Pembimbing Lapangan:</span>{" "}
              <strong className="text-slate-800">Audiyati Ishmata Hani&apos;a, S.T., M.T.</strong>
            </div>
            <div className="flex items-center gap-3">
              <span>Kaligawe, Semarang</span>
              <span>•</span>
              <span>Juli – Agustus 2026</span>
            </div>
          </div>
        </header>

        {/* QUICK NAVIGATION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <Link
            href="/profil-pesantren"
            className="p-4 bg-white rounded-xl border border-slate-200/80 hover:border-emerald-600/60 transition shadow-xs group"
          >
            <Building2 className="w-4 h-4 text-emerald-700 mb-2 group-hover:scale-110 transition" />
            <div className="text-xs font-bold text-slate-900">Tentang Pesantren</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Kondisi dataran rob & kolam</div>
          </Link>

          <Link
            href="/program-kerja"
            className="p-4 bg-white rounded-xl border border-slate-200/80 hover:border-emerald-600/60 transition shadow-xs group"
          >
            <Layers className="w-4 h-4 text-emerald-700 mb-2 group-hover:scale-110 transition" />
            <div className="text-xs font-bold text-slate-900">Program & TTG</div>
            <div className="text-[11px] text-slate-500 mt-0.5">IoT, SOP, & digital kas</div>
          </Link>

          <Link
            href="/anggota"
            className="p-4 bg-white rounded-xl border border-slate-200/80 hover:border-emerald-600/60 transition shadow-xs group"
          >
            <Users className="w-4 h-4 text-emerald-700 mb-2 group-hover:scale-110 transition" />
            <div className="text-xs font-bold text-slate-900">11 Mahasiswa Tim</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Nama asli, NIM, prodi, & peran</div>
          </Link>
        </div>

        {/* STICKY QUICK WEEK JUMPER */}
        <div className="sticky top-18 z-30 bg-[#FCFCFC]/95 backdrop-blur-sm py-2.5 my-8 border-y border-slate-200/70 flex items-center justify-between gap-2 overflow-x-auto text-xs">
          <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider pl-1 shrink-0 flex items-center gap-1">
            <ArrowDown className="w-3.5 h-3.5 text-emerald-700" /> Lompat ke:
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {weeksIndex.map((w) => (
              <a
                key={w.num}
                href={`#week-${w.num}`}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 font-medium transition text-[11px]"
              >
                M{w.num}
              </a>
            ))}
          </div>
        </div>

        {/* CONTINUOUS SCROLL-DRIVEN STORYLINE WITH EMBEDDED WEEKLY DOCX PHOTOS */}
        <ContinuousScrollStoryline />

        {/* PHOTOBOOTH CELEBRATION SECTION */}
        <PhotoboothGallery />

      </main>

      <Footer />
    </>
  );
}
