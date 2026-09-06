"use client";

import React, { useState } from "react";
import Link from "next/link";
import { STORY_CHAPTERS, MEMBERS } from "@/data/kkn-data";
import { 
  Waves, 
  Cpu, 
  Globe, 
  Bell, 
  ArrowRight, 
  Ruler, 
  Coins, 
  Megaphone, 
  Award, 
  MapPin, 
  Sparkles,
  CheckCircle2,
  Calendar
} from "lucide-react";

export default function StorylineViewer() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const iconsMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-4 h-4 text-emerald-700" />,
    Ruler: <Ruler className="w-4 h-4 text-emerald-700" />,
    Cpu: <Cpu className="w-4 h-4 text-emerald-700" />,
    Coins: <Coins className="w-4 h-4 text-emerald-700" />,
    Megaphone: <Megaphone className="w-4 h-4 text-emerald-700" />,
    Award: <Award className="w-4 h-4 text-emerald-700" />,
  };

  return (
    <div className="space-y-16">
      
      {/* CHAPTER PROGRESS PILLS */}
      <div className="bg-slate-50 border border-slate-200/70 p-2 rounded-2xl flex flex-wrap gap-1.5 items-center justify-between text-xs">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
          Pilih Bab:
        </span>
        <div className="flex flex-wrap gap-1">
          {STORY_CHAPTERS.map((ch, idx) => (
            <button
              key={ch.number}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1.5 rounded-xl font-medium transition flex items-center gap-1.5 ${
                activeTab === idx
                  ? "bg-slate-900 text-white shadow-sm font-semibold"
                  : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/60"
              }`}
            >
              <span className="font-mono text-[10px] opacity-75">{ch.number}</span>
              <span className="hidden sm:inline truncate max-w-[120px]">{ch.title.split(" ")[0]} {ch.title.split(" ")[1]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ACTIVE CHAPTER DISPLAY */}
      {(() => {
        const chapter = STORY_CHAPTERS[activeTab];
        return (
          <section className="space-y-8 animate-fadeIn">
            
            <div className="space-y-2 border-b border-slate-200/80 pb-6">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-800 uppercase tracking-widest font-semibold">
                <span>Bab {chapter.number} dari 06</span>
                <span className="flex items-center gap-1 text-slate-500 font-sans font-normal">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> {chapter.dateRange}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 font-normal tracking-tight">
                {chapter.title}
              </h2>
              <p className="text-sm sm:text-base font-serif italic text-slate-500">
                {chapter.subtitle}
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-6 text-[16px] sm:text-[17px] text-slate-700 leading-[1.85]">
              {chapter.narrative.map((p, pIdx) => (
                <p key={pIdx} className={pIdx === 0 && activeTab === 0 ? "drop-cap" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* Quote Block */}
            {chapter.quote && (
              <figure className="my-8 py-5 pl-6 border-l-2 border-emerald-700 italic font-serif text-lg sm:text-xl text-slate-900 leading-relaxed bg-emerald-50/30 rounded-r-2xl">
                “{chapter.quote.text}”
                <figcaption className="text-xs font-sans not-italic text-slate-500 mt-2 font-medium">
                  — {chapter.quote.author}
                </figcaption>
              </figure>
            )}

            {/* Special Interactive Widget for Chapter 3: IoT Flow */}
            {chapter.number === "03" && (
              <div className="my-10 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  Alur Sensor Level Air Kolam Retensi
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-medium text-slate-800">
                  <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-1">
                    <Waves className="w-5 h-5 text-emerald-700 mx-auto" />
                    <div className="font-bold text-slate-900">Ultrasonik Sensor</div>
                    <div className="text-[11px] text-slate-500">Tahan air & cuaca di kolam</div>
                  </div>
                  <div className="p-4 bg-cyan-50/80 border border-cyan-200 rounded-xl space-y-1">
                    <Cpu className="w-5 h-5 text-cyan-700 mx-auto" />
                    <div className="font-bold text-slate-900">ESP32 Controller</div>
                    <div className="text-[11px] text-slate-500">Kalkulasi data jarak air</div>
                  </div>
                  <div className="p-4 bg-indigo-50/80 border border-indigo-200 rounded-xl space-y-1">
                    <Globe className="w-5 h-5 text-indigo-700 mx-auto" />
                    <div className="font-bold text-slate-900">Cloud Web Server</div>
                    <div className="text-[11px] text-slate-500">Visualisasi status real-time</div>
                  </div>
                  <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1">
                    <Bell className="w-5 h-5 text-amber-700 mx-auto" />
                    <div className="font-bold text-slate-900">Peringatan Pompa</div>
                    <div className="text-[11px] text-slate-500">Aman / Waspada / Bahaya</div>
                  </div>
                </div>
              </div>
            )}

            {/* Special Interactive Widget for Chapter 4: Koperasi Transformation */}
            {chapter.number === "04" && (
              <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sebelum Pendampingan</div>
                  <div className="font-serif font-semibold text-slate-900 text-lg">Pencatatan Buku Manual</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Transaksi hanya ditulis di buku bergaris, pergantian jadwal piket santri rawan menimbulkan selisih kas dan stok barang tidak terpantau.
                  </p>
                </div>
                <div className="p-5 bg-emerald-50/60 rounded-xl border border-emerald-200 shadow-sm space-y-2">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Setelah Intervensi KKN</div>
                  <div className="font-serif font-semibold text-emerald-950 text-lg">Buku Kas Digital Spreadsheet</div>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    Perhitungan saldo otomatis, rekapitulasi laba rugi bulanan, serta SOP stok opname mingguan yang jelas bagi santri kasir.
                  </p>
                </div>
              </div>
            )}

            {/* Highlight Box */}
            {chapter.highlight && (
              <div className="my-6 p-5 bg-slate-50/80 rounded-xl border border-slate-200/80 flex items-start gap-3.5 text-xs sm:text-sm">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-xs shrink-0">
                  {iconsMap[chapter.highlight.icon] || <CheckCircle2 className="w-4 h-4 text-emerald-700" />}
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-slate-900">{chapter.highlight.title}</div>
                  <p className="text-slate-600 leading-relaxed">{chapter.highlight.description}</p>
                </div>
              </div>
            )}

            {/* Tags Strip */}
            <div className="flex flex-wrap items-center gap-1.5 pt-4">
              {chapter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Pagination between chapters */}
            <div className="pt-8 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
              <button
                disabled={activeTab === 0}
                onClick={() => {
                  setActiveTab((prev) => Math.max(0, prev - 1));
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                className={`px-4 py-2 rounded-lg border transition ${
                  activeTab === 0
                    ? "opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200"
                    : "bg-white hover:bg-slate-50 text-slate-800 border-slate-300"
                }`}
              >
                ← Bab Sebelumnya
              </button>

              <span className="text-slate-400 font-mono">
                {activeTab + 1} / {STORY_CHAPTERS.length}
              </span>

              <button
                disabled={activeTab === STORY_CHAPTERS.length - 1}
                onClick={() => {
                  setActiveTab((prev) => Math.min(STORY_CHAPTERS.length - 1, prev + 1));
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                className={`px-4 py-2 rounded-lg border transition ${
                  activeTab === STORY_CHAPTERS.length - 1
                    ? "opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200"
                    : "bg-emerald-700 hover:bg-emerald-800 text-white border-emerald-700 font-medium"
                }`}
              >
                Bab Selanjutnya →
              </button>
            </div>

          </section>
        );
      })()}

      {/* QUICK PEEK: 11 ANGGOTA INTERACTIVE FILTER */}
      <section className="pt-12 border-t border-slate-200 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Kolaborator Lapangan</span>
            <h3 className="text-2xl font-serif text-slate-950 font-normal">11 Mahasiswa di Balik Program</h3>
          </div>
          <Link href="/anggota" className="text-xs font-semibold text-emerald-800 hover:underline flex items-center gap-1">
            Lihat Profil Lengkap <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          {MEMBERS.map((m) => (
            <div key={m.id} className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-md bg-gradient-to-tr ${m.color} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}>
                  {m.initials}
                </div>
                <div className="font-bold text-slate-900 truncate">{m.name}</div>
              </div>
              <div className="text-[11px] text-emerald-800 font-medium">{m.major}</div>
              <p className="text-[11px] text-slate-500 line-clamp-2">{m.program}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
