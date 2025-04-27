import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

function Header() {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[92%] h-[70px] bg-[rgba(255,255,255,0.15)] backdrop-blur-xl shadow-lg rounded-[20px] px-10 border border-black border-opacity-20">
      <div className="relative h-full flex items-center justify-center">

        {/* Logo - Sol Üstte */}
        <div className="absolute left-8 flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-xl" />
          <span className="text-black font-bold text-lg tracking-wide drop-shadow">
            BOOKSY
          </span>
        </div>

        {/* Navigasyon */}
        <nav className="flex space-x-10 text-center items-center">
          <Link to="/about" className="text-black hover:text-gray-800 font-medium transition nav-link">Hakkımızda</Link>
          <Link to="/" className="text-black hover:text-gray-800 font-medium transition nav-link">Anasayfa</Link>

          {/* Hizmetler Dropdown */}
          <div className="relative">
            <div className="group inline-block">
              <div className="text-black hover:text-gray-800 font-medium transition nav-link cursor-pointer">
                Hizmetler
              </div>

              {/* Açılır Menü */}
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white/80 backdrop-blur-md shadow-lg rounded-lg w-56 py-2 transition-all duration-300">
                <Link to="/kullanici-islemleri" className="block px-4 py-2 hover:bg-orange-50 text-black text-left">Kullanıcı İşlemleri</Link>
                <Link to="/admin" className="block px-4 py-2 hover:bg-orange-50 text-black text-left">Yönetici İşlemleri</Link>
                <Link to="/odunc-geciktirme" className="block px-4 py-2 hover:bg-orange-50 text-black text-left">Ödünç Geciktirme Ücretleri</Link>
                <Link to="/nadide-eserler" className="block px-4 py-2 hover:bg-orange-50 text-black text-left">Nadide Eserler</Link>
                <Link to="/katalog" className="block px-4 py-2 hover:bg-orange-50 text-black text-left">Online Katalog</Link>
                <Link to="/calisma-alanlari" className="block px-4 py-2 hover:bg-orange-50 text-black text-left">Salonlar ve Çalışma Alanları</Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className="text-black hover:text-gray-800 font-medium transition nav-link">İletişim</Link>
          <Link to="/duyurular" className="text-black hover:text-gray-800 font-medium transition nav-link">Duyurular.</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;
