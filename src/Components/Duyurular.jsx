import React from 'react';
import duyuru1 from '../assets/1.duyuru.jpeg';
import duyuru2 from '../assets/2.duyuru.jpeg';
import duyuru3 from '../assets/3.duyuru.jpeg';

const duyurular = [
  {
    id: 1,
    baslik: "Yazılım Kulübü Etkinliği Başladı",
    aciklama: "Yazılım Kulübü’nün etkinliği büyük ilgi gördü.",
    resim: duyuru1,
  },
  {
    id: 2,
    baslik: "Kütüphane Haftası Kutlaması",
    aciklama: "Kitap okuma alışkanlığı vurgulandı.",
    resim: duyuru2,
  },
  {
    id: 3,
    baslik: "TÜBİTAK Projeleri Tanıtıldı",
    aciklama: "Projeler fakülte binasında sergilendi.",
    resim: duyuru3,
  },
];

const Duyurular = () => {
  return (
    <section className="bg-[#fffbf2] py-10 px-4">
      <h2 className="text-2xl font-bold text-center text-[#463C74] mb-6 tracking-wide">Duyurular</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {duyurular.map((duyuru) => (
          <div key={duyuru.id} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
            <img src={duyuru.resim} alt={duyuru.baslik} className="w-full h-40 object-cover" />
            <div className="px-4 py-3">
              <h3 className="text-base font-semibold text-[#5a4c82] mb-1">{duyuru.baslik}</h3>
              <p className="text-xs text-gray-600 mb-2">{duyuru.aciklama}</p>
              <button className="text-xs text-[#7858A6] font-medium hover:underline">Detay</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Duyurular;
