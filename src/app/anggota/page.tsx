import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MEMBERS } from "@/data/kkn-data";
import { ArrowLeft } from "lucide-react";

export default function AnggotaPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24 w-full space-y-12">
        <header className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Tim Pengabdian Mahasiswa Undip
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-slate-950 tracking-tight">
            Sebelas Mahasiswa, Sebelas Disiplin Ilmu
          </h1>
          <p className="text-sm font-serif italic text-slate-500">
            Dosen Pembimbing Lapangan (DPL): <strong>Audiyati Ishmata Hani&apos;a, S.T., M.T.</strong> (NIP. 199711202024062001)
          </p>
        </header>

        <div className="space-y-8 text-[15px] sm:text-[16px] text-slate-700 leading-relaxed">
          {MEMBERS.map((m) => (
            <div key={m.id} className="pb-8 border-b border-slate-200 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                <h2 className="text-xl font-serif text-slate-950 font-semibold">
                  {m.name}
                </h2>
                <span className="text-xs text-slate-400 font-mono">
                  NIM. {m.nim}
                </span>
              </div>

              <div className="text-xs text-emerald-800 font-semibold uppercase tracking-wider">
                {m.faculty} • {m.major}
              </div>

              <div className="pt-2 space-y-1.5 text-xs sm:text-sm">
                <div>
                  <strong className="text-slate-900">Program Utama:</strong>{" "}
                  <span className="text-slate-600">{m.program}</span>
                </div>
                <div>
                  <strong className="text-slate-900">Peran & Tanggung Jawab:</strong>{" "}
                  <span className="text-slate-600">{m.additionalRole}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 text-center">
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
