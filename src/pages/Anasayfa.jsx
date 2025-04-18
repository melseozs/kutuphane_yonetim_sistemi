import React from 'react';
import { Link } from 'react-router-dom'; // Link'i import ettik

function Anasayfa() {
  const services = [
    { title: 'Kullanici İşlemleri', image: 'src/assets/service1.jpeg', link: '/login' },
    { title: 'Ödünç ve İade İşlemleri', image: 'src/assets/service2.jpeg', link: '/odunc-ve-iade' },
    { title: 'Online Katalog', image: 'src/assets/service3.jpeg', link: '/katalog' },
    { title: 'Yönetici İşlemleri', image: 'src/assets/service4.jpeg', link: '/admin' },
    { title: 'Bilgi Kütüphane', image: 'src/assets/service5.jpeg', link: '/faq' },
    { title: 'Nadide Eserler', image: 'src/assets/service6.jpeg', link: '/nadide-eserler' },
  ];
  const handleServiceClick = (path) => {
    navigate(path); // Kullanıcı tıkladığında belirtilen path'e yönlendir
  };

  return (
    <>
      {/* Header */}
      <header className="bg-orange-50 w-full fixed top-0 left-0 z-10 p-4">
        <div className="flex justify-between items-start">
          {/* Logo ve Site Adı */}
          <div className="text-black text-xl font-bold">
            <div className="flex items-center space-x-3">
              <img
                src="src/assets/logo.jpeg"
                alt="Logo"
                className="h-30 rounded-lg ml-2.5"
              />
              <span className="text-stone-600 text-xl font-semibold font-sans">
                KÜTÜPHANE YÖNETİM SİSTEMİ
              </span>
            </div>
          </div>

          {/* Navigasyon Menüsü */}
          <nav className="flex justify-end space-x-8">
            <div className="text-center p-4 hover:bg-white hover:rounded-lg transition duration-300 m-7">
              <Link to="/about" className="text-black hover:text-amber-900 text-xl font-sans">
                Hakkımızda
              </Link>
            </div>
            <div className="text-center p-4 hover:bg-white hover:rounded-lg transition duration-300 m-7">
              <Link to="/" className="text-black hover:text-amber-900 text-xl font-sans">
                Anasayfa
              </Link>
            </div>
            <div className="relative group text-center p-4 hover:bg-white hover:rounded-lg transition duration-300 m-7">
              <Link to="/hizmetler" className="text-black hover:text-amber-900 text-xl font-sans">
                Hizmetler
              </Link>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-48">
                <div className="p-4 hover:bg-orange-50 transition duration-300">
                  <Link to="/login" className="text-black text-lg">Kullanıcı İşlemleri</Link>
                </div>
                <div className="p-4 hover:bg-orange-50 transition duration-300">
                  <Link to="/admin" className="text-black text-lg">Yönetici İşlemleri</Link>
                </div>
                <div className="p-4 hover:bg-orange-50 transition duration-300">
                  <Link to="/hizmet3" className="text-black text-lg">Ödünç ve İade İşlemleri</Link>
                </div>
                <div className="p-4 hover:bg-orange-50 transition duration-300">
                  <Link to="/hizmet4" className="text-black text-lg">Nadide Eserler</Link>
                </div>
                <div className="p-4 hover:bg-orange-50 transition duration-300">
                  <Link to="/hizmet" className="text-black text-lg">Online Katalog</Link>
                </div>
              </div>
            </div>
            <div className="text-center p-4 hover:bg-white hover:rounded-lg transition duration-300 m-7">
              <Link to="/contact" className="text-black hover:text-amber-900 text-xl font-sans">
                İletişim
              </Link>
            </div>
            <div className="text-center p-4 hover:bg-white hover:rounded-lg transition duration-300 m-7">
              <Link to="/duyurular" className="text-black hover:text-amber-900 text-xl font-sans">
                Duyurular
              </Link>
            </div>
          </nav>
        </div>
        <div className="w-full bg-emerald-200/20 py-4 mt-4">
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
      </header>

      {/* ServicesGrid */}
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-6 pt-48">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.path)}
              className="bg-orange-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center flex flex-col justify-center items-center mb-4 "
            >
              <Link to={service.link}>
                <div className="flex justify-center mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-30 h-30 rounded-lg border-3 border-amber-950"
                  />
                </div>
                <p className="text-black hover:text-amber-900 font-semibold font-sans p-3 text-xl">
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
