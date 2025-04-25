import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import bg from '../assets/bg.jpg';

function Anasayfa() {
  const [showMenu, setShowMenu] = useState(false);

  const services = [
    { title: 'Kullanıcı İşlemleri', image: 'src/assets/service1.jpeg', link: '/kullanici-islemleri' },
    { title: 'Ödünç Geciktirme Ücretleri', image: 'src/assets/service2.jpeg', link: '/odunc-geciktirme' },
    { title: 'Online Katalog', image: 'src/assets/service3.jpeg', link: '/online-katalog' },
    { title: 'Yönetici İşlemleri', image: 'src/assets/service4.jpeg', link: '/admin' },
    { title: 'Bilgi Kütüphane', image: 'src/assets/service5.jpeg', link: '/faq' },
    { title: 'Nadide Eserler', image: 'src/assets/service6.jpeg', link: '/nadide-eserler' },
  ];

  return (
    <>
      <Header showSearch={true} />

      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Giriş Düğmeleri */}
        {!showMenu && (
          <div className="flex flex-col items-center justify-center space-y-4 z-20 mt-90">
            <button
              onClick={() => setShowMenu(true)}
              className="w-64 px-12 py-4 text-[#463C74] bg-white/20 hover:bg-white/30 backdrop-blur-md shadow-xl transition-all duration-300 font-semibold text-lg rounded-full"
            >
              Menü
            </button>
            <Link
              to="/admin"
              className="w-64 px-12 py-4 text-[#463C74] bg-white/20 hover:bg-white/30 backdrop-blur-md shadow-xl transition-all duration-300 font-semibold text-lg text-center rounded-full"
            >
              Yönetici Giriş
            </Link>
            <Link
              to="/kullanici-islemleri"
              className="w-64 px-12 py-4 text-[#463C74] bg-white/20 hover:bg-white/30 backdrop-blur-md shadow-xl transition-all duration-300 font-semibold text-lg text-center rounded-full"
            >
              Kullanıcı Giriş
            </Link>
          </div>
        )}

        {/* 6'lı Kutular */}
        <div
          className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-6 transform transition-all duration-700 ease-in-out
          ${showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 shadow-md rounded-xl hover:shadow-2xl transition duration-300 text-center flex flex-col justify-center items-center"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
            >
              <Link to={service.link}>
                <div className="flex justify-center mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-24 h-24 rounded-lg border-3 border-[#54514b]"
                  />
                </div>
                <p className="text-gray-800 hover:text-[#35312e] font-semibold text-lg">
                  {service.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Anasayfa;  