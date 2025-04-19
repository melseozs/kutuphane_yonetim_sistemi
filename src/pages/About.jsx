import React from "react";
import Header from '../Components/Header';
import Sidebar from '../Components/SidebarAbout';

export default function About() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-[#fffded] pt-24">
        <Sidebar />
        <main className="flex-1 p-10 bg-white rounded-lg shadow-sm m-4">
          <h1 className="text-3xl font-semibold text-[#633914] mb-4">Hakkımızda</h1>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
          Kütüphane,merkezi bir konumda yer alır ve öğrencilere modern bir çalışma ortamı sunar. Basılı ve dijital kaynakların yanı sıra sessiz çalışma alanları, grup çalışma odaları ve bilgisayar erişimi gibi çeşitli olanaklara sahiptir. Ayrıca, akademik çıktıları dijital ortamda toplayan ve açık erişime sunan bir kurumsal arşiv sistemi de bulunmaktadır.
          </p>
        </main>
      </div>
    </>
  );
}
