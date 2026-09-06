import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProfilPesantrenPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24 w-full space-y-12">
        <header className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Mengenal Lokasi Pengabdian
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-slate-950 tracking-tight">
            Pondok Pesantren Asshodiqiyah di Antara Rob dan Riuhnya Santri
          </h1>
          <p className="text-sm font-serif italic text-slate-500">
            Jl. Sawah Besar Timur No. 99, RT. 09 / RW. 02, Kelurahan Kaligawe, Kecamatan Gayamsari, Kota Semarang (50164)
          </p>
        </header>

        <article className="space-y-8 text-[16px] sm:text-[17px] text-slate-700 leading-[1.85]">
          <p>
            Siapa pun yang pernah tinggal di kawasan Kaligawe pasti tahu bagaimana air memperlakukan tanah ini. Terletak di pesisir utara Semarang dengan kontur tanah cekungan yang lunak, wilayah ini selalu menjadi muara bagi air hujan dari hulu dan pasang air laut (rob) dari pesisir utara.
          </p>
          <p>
            Di tengah lingkungan inilah Pondok Pesantren Asshodiqiyah berdiri kokoh. Kompleks pesantren ini bukan hanya tempat santri mengaji kitab kuning, tetapi juga rumah bagi ratusan santri mukim, santri kalong, serta unit pendidikan formal tingkat MTs dan SMK Asshodiqiyah. Aktivitas di sini tidak pernah berhenti sejak subuh hingga larut malam.
          </p>

          <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <h2 className="text-xl font-serif text-slate-950 font-medium">
              Kisah Kolam Retensi di Belakang Asrama
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Untuk mengatasi air yang kerap mengepung halaman asrama saat musim hujan, pesantren memiliki sebuah kolam retensi di bagian belakang. Kolam ini berfungsi sebagai tandon penampung sementara agar air tidak langsung merendam ruang kelas dan kamar santri, sebelum akhirnya dibuang menggunakan pompa ke saluran drainase kota.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Namun, kolam retensi bukanlah solusi yang selesai begitu saja. Selama ini, pengurus pondok menghadapi dua kendala utama:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li><strong>Sedimen Lumpur dan Sampah Plastik:</strong> Aliran air membawa sedimen tebal dan sampah yang menyumbat kisi-kisi saringan <em>trashrack</em>, membuat pompa bekerja ekstra keras dan rawan rusak.</li>
              <li><strong>Ketiadaan Monitoring Otomatis:</strong> Ketinggian air kolam harus dicek secara manual dengan melihat langsung ke lokasi, bahkan saat hujan deras tengah malam, sehingga penyalaan pompa sering terlambat.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-serif text-slate-950 font-normal">
              Denyut Koperasi Santri
            </h2>
            <p>
              Selain tantangan air, Ponpes Asshodiqiyah memiliki aset berharga berupa koperasi pondok pesantren yang melayani kebutuhan konsumsi harian santri, alat tulis, dan kitab. Koperasi ini memiliki potensi ekonomi yang sangat besar untuk mendukung kemandirian operasional pesantren bila dikelola dengan sistem pembukuan yang rapi dan transparan.
            </p>
            <p>
              Kedua titik inilah—mitigasi kolam retensi dan penguatan koperasi santri—yang menjadi fokus utama kehadiran tim KKN-T IDBU 61 Kelompok 3 selama 45 hari di lapangan.
            </p>
          </div>
        </article>

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
