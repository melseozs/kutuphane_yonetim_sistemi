import React from 'react';
import { Link } from 'react-router-dom'; 
import Header from '../Components/Header'; 
import duyurular from '../data/duyurular.json';

function Anasayfa() {
  const services = [
    { title: 'Kullanıcı İşlemleri', image: 'src/assets/service1.jpeg', link: '/login' },
    { title: 'Ödünç Geciktirme Ücretleri', image: 'src/assets/service2.jpeg', link: '/odunc-geciktirme' },
    { title: 'Online Katalog', image: 'src/assets/service3.jpeg', link: '/katalog' },
    { title: 'Yönetici İşlemleri', image: 'src/assets/service4.jpeg', link: '/admin' },
    { title: 'Bilgi Kütüphane', image: 'src/assets/service5.jpeg', link: '/faq' },
    { title: 'Nadide Eserler', image: 'src/assets/service6.jpeg', link: '/nadide-eserler' },
  ];

  return (
    <>
      <Header showSearch={true} />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-15 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-6 pt-48">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-50 via-orange-50 to-yellow-50 p-6 shadow-md rounded-xl hover:shadow-2xl transition duration-300 text-center flex flex-col justify-center items-center mb-6 "
            >
              <Link to={service.link}>
                <div className="flex justify-center mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-24 h-24 rounded-lg border-3 border-[#54514b]"
                  />
                </div>
                <p className="text-gray-800 hover:text-[#35312e] font-semibold font-sans p-3 text-lg">
                  {service.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <section className="p-10 bg-white min-h-screen">
        <h2 className="text-3xl font-bold text-center text-[#463C74] mb-12">Duyurular</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {duyurular.slice(0, 3).map((duyuru) => (
            <div key={duyuru.id} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={new URL(`../assets/${duyuru.resim}`, import.meta.url).href}
                alt={duyuru.baslik}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-[#463C74]">{duyuru.baslik}</h3>
              <p className="text-sm text-gray-700 mt-2">{duyuru.icerik}</p>
              <Link
                to={`/duyurular/${duyuru.id}`}
                className="text-[#7858A6] font-semibold hover:underline block mt-4"
              >
                Detay
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/duyurular"
            className="inline-block bg-[#7858A6] text-white px-6 py-2 rounded-full hover:bg-[#5e3c9d] transition"
          >
            Tüm Duyuruları Gör
          </Link>
        </div>
      </section>
    </>
  );
}

export default Anasayfa;
