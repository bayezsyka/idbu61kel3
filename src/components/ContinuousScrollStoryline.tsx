"use client";

import React, { useState } from "react";
import Image from "next/image";
import weeks from "@/data/weeks_storyline.json";
import { 
  Calendar, 
  CheckCircle2, 
  Maximize2, 
  X, 
  Sparkles, 
  MapPin, 
  Waves, 
  Cpu, 
  Store, 
  Megaphone, 
  Award 
} from "lucide-react";

export default function ContinuousScrollStoryline() {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; caption: string; author: string } | null>(null);

  const weekIcons = [
    <MapPin key="1" className="w-4 h-4 text-emerald-700" />,
    <Waves key="2" className="w-4 h-4 text-emerald-700" />,
    <Cpu key="3" className="w-4 h-4 text-emerald-700" />,
    <Cpu key="4" className="w-4 h-4 text-emerald-700" />,
    <Megaphone key="5" className="w-4 h-4 text-emerald-700" />,
    <Store key="6" className="w-4 h-4 text-emerald-700" />,
    <Award key="7" className="w-4 h-4 text-emerald-700" />,
  ];

  return (
    <div className="relative space-y-24 py-6">
      
      {/* VERTICAL TIMELINE SPINE (SUBTLE) */}
      <div className="hidden md:block absolute left-8 top-12 bottom-12 w-[1px] bg-slate-200" />

      {weeks.map((item, idx) => (
        <article
          key={item.week}
          id={`week-${item.week}`}
          className="relative md:pl-20 space-y-8 scroll-mt-24 group"
        >
          {/* TIMELINE NODE (DESKTOP) */}
          <div className="hidden md:flex absolute left-8 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-slate-300 items-center justify-center font-mono text-xs font-bold text-slate-800 shadow-xs group-hover:border-emerald-600 group-hover:bg-emerald-50 transition-colors">
            0{item.week}
          </div>

          {/* WEEK HEADER */}
          <header className="space-y-2 border-b border-slate-200/80 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-mono text-xs font-semibold border border-emerald-200/60">
                {weekIcons[idx]}
                {item.themeTag}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 font-sans">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {item.date}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-slate-950 font-normal tracking-tight pt-1">
              {item.title}
            </h2>
          </header>

          {/* NARRATIVE ESSAY */}
          <div className="space-y-4 text-[16px] sm:text-[17px] text-slate-700 leading-[1.85]">
            <p className={idx === 0 ? "drop-cap" : ""}>
              {item.summary}
            </p>
            <p className="font-serif italic text-slate-800 bg-slate-50/70 p-4 rounded-xl border border-slate-200/60 leading-relaxed text-[15px] sm:text-[16px]">
              “{item.keyStory}”
            </p>
          </div>

          {/* INLINE AUTHENTIC DOCX PHOTOS FOR THIS WEEK */}
          {item.photos && item.photos.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                Dokumentasi Logbook Lapangan — Minggu {item.week}
              </div>

              <div className={`grid gap-4 ${item.photos.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                {item.photos.map((p, pIdx) => (
                  <div
                    key={pIdx}
                    onClick={() => setSelectedPhoto(p)}
                    className="group/photo relative bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src={p.src || "/photobooth/photo_1.webp"}
                        alt={p.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover/photo:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2 rounded-full bg-white/95 text-slate-900 shadow">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 px-1 space-y-0.5">
                      <div className="text-[10px] font-mono font-semibold text-emerald-800 uppercase tracking-wider">
                        Catatan: {p.author}
                      </div>
                      <p className="text-xs text-slate-600 font-serif leading-snug">
                        {p.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* HIGHLIGHTS BULLETS */}
          <div className="p-4 bg-white rounded-xl border border-slate-200/70 shadow-2xs space-y-2">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Pencapaian & Poin Penting Minggu ke-{item.week}:
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {item.highlights.map((h, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

        </article>
      ))}

      {/* FULLSCREEN LIGHTBOX MODAL FOR STORYLINE PHOTOS */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="relative w-full h-[65vh] bg-slate-900">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="p-5 bg-white border-t border-slate-100 space-y-1">
              <div className="text-[11px] font-mono text-emerald-800 font-bold uppercase tracking-wider">
                Dokumentasi Logbook — {selectedPhoto.author}
              </div>
              <div className="font-serif font-medium text-slate-900 text-base sm:text-lg">
                {selectedPhoto.caption}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
