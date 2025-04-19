import React from "react";
import Header from '../Components/Header'; 
import {
  HiHome,
  HiBookOpen,
  HiInformationCircle,
  HiClipboardList,
  HiClock,
  HiCamera
} from "react-icons/hi";

export default function About() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-[#f5eded] pt-24">
        <div className="w-64 h-screen bg-gradient-to-b from-gray-50 via-orange-50 to-yellow-50 p-6 shadow-md pt-12">
          <h2 className="text-2xl font-semibold text-[#633914] mb-8">Kütüphane Hakkında</h2>
          <nav className="space-y-4 pt-4">
            <a href="/kitaplar" className="flex items-center gap-3 text-[#615d57] hover:text-gray-700 transition">
              <HiBookOpen size={20} /> Vizyon & Misyon
            </a>
            <a href="/kurallar" className="flex items-center gap-3 text-[#615d57] hover:text-gray-700 transition">
              <HiClipboardList size={20} /> Kütüphane Kuralları
            </a>
            <a href="/saatler" className="flex items-center gap-3 text-[#615d57] hover:text-gray-700 transition">
              <HiClock size={20} /> Çalışma Saatleri
            </a>
            <a href="/galeri" className="flex items-center gap-3 text-[#615d57] hover:text-gray-700 transition">
              <HiCamera size={20} /> Fotoğraflar
            </a>
            <a href="/" className="flex items-center gap-3 text-[#615d57] hover:text-gray-700 transition">
              <HiHome size={20} /> Anasayfa
            </a>
          </nav>
        </div>
        <main className="flex-1 p-10 bg-white rounded-lg shadow-sm m-4">
          <h1 className="text-3xl font-semibold text-[#633914] mb-4">Hakkımızda</h1>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
           İstanbul Sabahattin Zaim Üniversitesi (İZÜ) Kütüphanesi, Halkalı Kampüsü'nde merkezi bir konumda yer alır ve öğrencilere modern bir çalışma ortamı sunar. Kütüphane, basılı ve dijital kaynakların yanı sıra sessiz çalışma alanları, grup çalışma odaları ve bilgisayar erişimi gibi olanaklarla donatılmıştır. 
          </p>
        </main>
      </div>
    </>
  );
}
