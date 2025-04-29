import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

function Header() {
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[92%] h-[70px] bg-[rgba(255,255,255,0.15)] backdrop-blur-xl shadow-lg rounded-[20px] px-10 border border-black border-opacity-20">
      <div className="relative h-full flex items-center justify-between">
        
        <div className="absolute left-8 flex items-center">
          <img src={logo} alt="Logo" className="h-22 w-22 rounded-xl" />
          <span className="text-black font-bold text-3xl tracking-wide drop-shadow">
            BOOKSY
          </span>
        </div>
        <nav className="flex space-x-10 text-center relative w-full justify-center items-center">
          <Link to="/about" className="text-black hover:text-gray-700 font-medium transition nav-link mx-3 text-xl">Hakkımızda</Link>
          <Link to="/" className="text-black hover:text-gray-700 font-medium transition nav-link mx-3 text-xl">Anasayfa</Link>
          <div 
            className="relative group text-center p-4 hover:bg-[rgba(255,255,255,0.15)] hover:rounded-lg transition duration-300 m-2"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <span className="text-black hover:text-gray-700 font-medium transition nav-link cursor-pointer mx-3 text-xl">
              Hizmetler
            </span>
            <div className={`absolute left-0 ${showServices ? 'block' : 'hidden'} bg-[rgba(255,255,255,0.60)] shadow-lg rounded-lg mt-4 w-48 z-20`}>
              <div className="p-2 hover:bg-neutral-100 transition duration-300 rounded-lg">
                <Link to="/odunc-geciktirme" className="text-black text-lg">Ödünç Geciktirme Ücretleri</Link>
              </div>
              <div className="p-2 hover:bg-neutral-100 transition duration-300 rounded-lg">
                <Link to="/nadide-eserler" className="text-black text-lg">Nadide Eserler</Link>
              </div>
              <div className="p-2 hover:bg-neutral-100 transition duration-300 rounded-lg">
                <Link to="/online-katalog" className="text-black text-lg">Online Katalog</Link>
              </div>
              <div className="p-2 hover:bg-neutral-100 transition duration-300 rounded-lg">
                <Link to="/calisma-alanlari" className="text-black text-lg">Salonlar ve Çalışma Alanları</Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className="text-black hover:text-gray-700 font-medium transition nav-link text-xl">İletişim</Link>
          <Link to="/duyurular" className="text-black hover:text-gray-700 font-medium transition nav-link text-xl">Duyurular</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
