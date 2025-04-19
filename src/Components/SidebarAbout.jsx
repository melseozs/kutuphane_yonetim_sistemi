import React from "react";
import {
  HiHome,
  HiBookOpen,
  HiClipboardList,
  HiClock,
  HiCamera
} from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-50 via-orange-50 to-yellow-50 p-6 shadow-md pt-12">
      <h2 className="text-2xl font-semibold text-[#633914] mb-8">Kütüphane Hakkında</h2>
      <nav className="space-y-4 pt-4">
        <a href="/about/vizyon" className="flex items-center gap-3 text-[#615d57] hover:text-gray-700 transition">
          <HiBookOpen size={20} /> Vizyon & Misyon
        </a>
        <a href="/about/kurallar" className="flex items-center gap-3 text-[#615d57] hover:text-gray-700 transition">
          <HiClipboardList size={20} /> Kütüphane Kuralları
        </a>
        <a href="/about/saatler" className="flex items-center gap-3 text-[#615d57] hover:text-gray-700 transition">
          <HiClock size={20} /> Çalışma Saatleri
        </a>
        <a href="/about/foto" className="flex items-center gap-3 text-[#615d57] hover:text-gray-700 transition">
          <HiCamera size={20} /> Fotoğraflar
        </a>
        <a href="/" className="flex items-center gap-3 text-[#615d57] hover:text-gray-700 transition">
          <HiHome size={20} /> Anasayfa
        </a>
      </nav>
    </div>
  );
}
