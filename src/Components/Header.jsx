import React from 'react';
import { Link } from 'react-router-dom';

function Header({ showSearch = false }) {
  return (
    <header className="bg-orange-50 w-full fixed top-0 left-0 z-10 p-4 shadow-md">
      <div className="flex justify-between items-start">
        <div className="text-black text-xl font-bold">
          <div className="flex items-center space-x-3">
            <img
              src="src/assets/logo.jpeg"
              alt="Logo"
              className="h-16 w-16 rounded-lg ml-2.5"
            />
            <span className="text-stone-600 text-xl font-semibold font-sans">
              KÜTÜPHANE YÖNETİM SİSTEMİ
            </span>
          </div>
        </div>
        <nav className="flex justify-end space-x-8">
          <div className="text-center p-4 hover:bg-white hover:rounded-lg transition duration-300 m-2">
            <Link to="/about" className="text-black hover:text-amber-900 text-xl font-sans">
              Hakkımızda
            </Link>
          </div>
          <div className="text-center p-4 hover:bg-white hover:rounded-lg transition duration-300 m-2">
            <Link to="/" className="text-black hover:text-amber-900 text-xl font-sans">
              Anasayfa
            </Link>
          </div>
          <div className="relative group text-center p-4 hover:bg-white hover:rounded-lg transition duration-300 m-2">
            <Link to="/hizmetler" className="text-black hover:text-amber-900 text-xl font-sans">
              Hizmetler
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-48 z-20">
              <div className="p-4 hover:bg-orange-50 transition duration-300">
                <Link to="/login" className="text-black text-lg">Kullanıcı İşlemleri</Link>
              </div>
              <div className="p-4 hover:bg-orange-50 transition duration-300">
                <Link to="/admin" className="text-black text-lg">Yönetici İşlemleri</Link>
              </div>
              <div className="p-4 hover:bg-orange-50 transition duration-300">
                <Link to="/odunc-ve-iade" className="text-black text-lg">Ödünç ve İade</Link>
              </div>
              <div className="p-4 hover:bg-orange-50 transition duration-300">
                <Link to="/nadide-eserler" className="text-black text-lg">Nadide Eserler</Link>
              </div>
              <div className="p-4 hover:bg-orange-50 transition duration-300">
                <Link to="/katalog" className="text-black text-lg">Online Katalog</Link>
              </div>
            </div>
          </div>
          <div className="text-center p-4 hover:bg-white hover:rounded-lg transition duration-300 m-2">
            <Link to="/contact" className="text-black hover:text-amber-900 text-xl font-sans">
              İletişim
            </Link>
          </div>
          <div className="text-center p-4 hover:bg-white hover:rounded-lg transition duration-300 m-2">
            <Link to="/duyurular" className="text-black hover:text-amber-900 text-xl font-sans">
              Duyurular
            </Link>
          </div>
        </nav>
      </div>
      {showSearch && (
        <div className="w-full bg-[#FAEEE7] py-4 mt-4">
          <div className="max-w-4xl mx-auto flex items-center space-x-2">
            <input
              type="text"
              placeholder="Arama yap..."
              className="w-full p-3 text-lg rounded-l-lg border-2 rounded-2xl border-stone-700 focus:outline-none"
            />
            <button className="text-black px-4 py-3 rounded-r-lg bg-orange-50 hover:bg-orange-100 transition duration-300 border-stone-700 h-13 w-20">
              Ara
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
