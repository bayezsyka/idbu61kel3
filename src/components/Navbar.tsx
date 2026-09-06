"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FolderGit2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Cerita Perjalanan" },
    { href: "/profil-pesantren", label: "Tentang Pesantren" },
    { href: "/program-kerja", label: "Program & TTG" },
    { href: "/anggota", label: "11 Orang Tim" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FCFCFC]/90 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-serif font-semibold text-lg text-slate-900 tracking-tight">Kaligawe 61</span>
          <span className="text-xs text-emerald-800 font-medium">/ Kelompok 3</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-7 text-[13px] font-medium text-slate-600">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  isActive
                    ? "text-slate-950 font-semibold border-b border-emerald-700 pb-0.5"
                    : "hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://drive.google.com/drive/folders/18Yl_dirvs0ZSCIHHNIpeUl0QGNDcFr0K"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 text-xs font-medium transition"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Drive K3</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 text-slate-700 hover:text-slate-950"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-[#FCFCFC] border-b border-slate-200 px-6 py-4 space-y-3 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block py-1 ${
                pathname === item.href
                  ? "text-emerald-800 font-bold"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/drive/folders/18Yl_dirvs0ZSCIHHNIpeUl0QGNDcFr0K"
            target="_blank"
            rel="noopener noreferrer"
            className="block pt-2 text-xs font-semibold text-emerald-700"
          >
            Buka Google Drive Lengkap →
          </a>
        </div>
      )}
    </header>
  );
}
