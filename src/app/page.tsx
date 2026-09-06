import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StorylineViewer from "@/components/StorylineViewer";
import FieldMomentsSection from "@/components/FieldMomentsSection";
import PhotoboothGallery from "@/components/PhotoboothGallery";
import Link from "next/link";
import { Building2, Layers, Users } from "lucide-react";

export default function HomePage() {
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
              <span className="text-slate-400">Dosen Pembimbing:</span>{" "}
              <strong className="text-slate-800">Audiyati Ishmata Hani&apos;a, S.T., M.T.</strong>
            </div>
            <div className="flex items-center gap-3">
              <span>Semarang, Jawa Tengah</span>
              <span>•</span>
              <span>Juli – Agustus 2026</span>
            </div>
          </div>
        </header>

        {/* QUICK NAVIGATION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
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
            <div className="text-[11px] text-slate-500 mt-0.5">Nama, NIM, prodi, & peran</div>
          </Link>
        </div>

        {/* THE INTERACTIVE STORYLINE COMPONENT */}
        <StorylineViewer />

        {/* DOKUMENTASI OTENTIK AKSI LAPANGAN DARI DOCX */}
        <FieldMomentsSection />

        {/* PHOTOBOOTH GALLERY SECTION */}
        <PhotoboothGallery />

      </main>

      <Footer />
    </>
  );
}
