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

      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-15 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-6 pt-48">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.path)}
              className="bg-orange-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center flex flex-col justify-center items-center mb-4"
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

      {/*  Duyurular bileşeni burada */}
      <Duyurular />
    </>
  );
}

export default Anasayfa;
