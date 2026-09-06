"use client";

import React, { useState } from "react";
import Image from "next/image";
import moments from "@/data/field_moments.json";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function FieldMomentsSection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % moments.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + moments.length) % moments.length);
    }
  };

  return (
    <section className="my-16 space-y-8">
      {/* SECTION TITLE */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Dokumentasi Otentik Logbook DOCX
          </div>
          <h2 className="text-3xl font-serif text-slate-950 font-normal">
            Potret Nyata Aksi Lapangan di Asshodiqiyah
          </h2>
        </div>
        <p className="text-xs text-slate-500 max-w-xs sm:text-right font-serif italic">
          Foto asli yang diekstrak langsung dari berkas logbook harian 11 mahasiswa saat melaksanakan program kerja di pesantren.
        </p>
      </div>

      {/* MASONRY PHOTO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {moments.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedIdx(idx)}
            className="group relative bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-2 rounded-full bg-white/95 text-slate-900 shadow">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Caption & Metadata */}
            <div className="pt-3 px-1 space-y-1">
              <div className="flex items-center justify-between text-[11px] text-emerald-800 font-semibold font-mono">
                <span>Catatan {item.member}</span>
                <span className="text-slate-400">#Dok{item.id}</span>
              </div>
              <p className="text-xs text-slate-700 leading-snug font-serif">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedIdx !== null && (
        <div
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* Close */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50 hidden sm:flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50 hidden sm:flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="relative w-full h-[65vh] bg-slate-900">
              <Image
                src={moments[selectedIdx].src}
                alt={moments[selectedIdx].caption}
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono text-emerald-800 font-bold uppercase tracking-wider">
                  Dokumentasi {moments[selectedIdx].member} ({selectedIdx + 1} / {moments.length})
                </div>
                <div className="font-serif font-medium text-slate-900 text-base sm:text-lg mt-0.5">
                  {moments[selectedIdx].caption}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
