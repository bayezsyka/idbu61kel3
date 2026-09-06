import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-12 text-xs text-slate-500">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-serif font-semibold text-slate-900 text-sm">
            KKN-T IDBU 61 Kelompok 3
          </div>
          <div>Pondok Pesantren Asshodiqiyah, Kaligawe, Gayamsari, Kota Semarang</div>
          <div className="text-[11px] text-slate-400">Universitas Diponegoro • Tim II Periode 2025/2026</div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[13px] font-medium text-slate-600">
          <Link href="/" className="hover:text-emerald-800 transition">
            Storyline
          </Link>
          <Link href="/profil-pesantren" className="hover:text-emerald-800 transition">
            Pesantren
          </Link>
          <Link href="/program-kerja" className="hover:text-emerald-800 transition">
            Luaran TTG
          </Link>
          <Link href="/anggota" className="hover:text-emerald-800 transition">
            11 Anggota
          </Link>
        </div>
      </div>
    </footer>
  );
}
