import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Duyurular from '../Components/Duyurular';

function Anasayfa() {
  const services = [
    { title: 'Kullanıcı İşlemleri', image: 'src/assets/service1.jpeg', link: '/login' },
    { title: 'Ödünç ve İade İşlemleri', image: 'src/assets/service2.jpeg', link: '/odunc-ve-iade' },
    { title: 'Online Katalog', image: 'src/assets/service3.jpeg', link: '/katalog' },
    { title: 'Yönetici İşlemleri', image: 'src/assets/service4.jpeg', link: '/admin' },
    { title: 'Bilgi Kütüphane', image: 'src/assets/service5.jpeg', link: '/faq' },
    { title: 'Nadide Eserler', image: 'src/assets/service6.jpeg', link: '/nadide-eserler' },
  ];

  const handleServiceClick = (path) => {
    navigate(path); 
  };

  return (
    <>
      <Header showSearch={true} />

      <div className="min-h-screen bg-[#ffff] flex flex-col items-center justify-center pt-48 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6 pt-12">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.path)}
              className="bg-gradient-to-r from-gray-50 via-amber-50 to-yellow-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center flex flex-col justify-center items-center mb-6 border border-gray-300"
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
      <Duyurular />
    </>
  );
}

export default Anasayfa;
