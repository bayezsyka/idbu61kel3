"use client";

import React, { useState } from "react";
import Image from "next/image";
import photos from "@/data/photobooth.json";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function PhotoboothGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % photos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section className="my-16 space-y-8">
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 font-mono">
            <Camera className="w-3.5 h-3.5" />
            Galeri Kenangan Photobooth
          </div>
          <h2 className="text-3xl font-serif text-slate-950 font-normal">
            Potret 11 Orang di Akhir Pengabdian
          </h2>
        </div>
        <p className="text-xs text-slate-500 max-w-xs sm:text-right font-serif italic">
          10 potret pilihan kebersamaan tim KKN-T IDBU 61 di hari penarikan dan expo gelar karya.
        </p>
      </div>

      {/* PHOTO GRID (EDITORIAL POLAROID / MASONRY INSPIRED) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {photos.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedIdx(idx)}
            className="group relative bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100">
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-1.5 rounded-full bg-white/90 text-slate-900 shadow">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Caption Strip */}
            <div className="pt-2 px-1 flex items-center justify-between gap-2 text-[11px]">
              <span className="text-slate-600 font-medium truncate font-serif italic">
                #{item.id} Frame
              </span>
              <button
                onClick={(e) => toggleLike(item.id, e)}
                className="text-slate-400 hover:text-rose-500 transition p-1"
                aria-label="Like photo"
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    liked[item.id] ? "fill-rose-500 text-rose-500" : ""
                  }`}
                />
              </button>
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
          {/* Close button */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav Prev */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50 hidden sm:flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Nav Next */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition z-50 hidden sm:flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="relative w-full h-[65vh] bg-slate-900">
              <Image
                src={photos[selectedIdx].src}
                alt={photos[selectedIdx].caption}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Modal Footer info */}
            <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono text-emerald-800 font-bold uppercase tracking-wider">
                  Foto {selectedIdx + 1} dari {photos.length}
                </div>
                <div className="font-serif font-medium text-slate-900 text-base sm:text-lg mt-0.5">
                  {photos[selectedIdx].caption}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={(e) => toggleLike(photos[selectedIdx].id, e)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                    liked[photos[selectedIdx].id]
                      ? "bg-rose-50 border-rose-200 text-rose-600"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      liked[photos[selectedIdx].id] ? "fill-rose-500 text-rose-500" : ""
                    }`}
                  />
                  <span>{liked[photos[selectedIdx].id] ? "Disukai" : "Suka"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
