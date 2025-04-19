import React from 'react';
import duyuru1 from '../assets/1.duyuru.jpeg';
import duyuru2 from '../assets/2.duyuru.jpeg';
import duyuru3 from '../assets/3.duyuru.jpeg';


const duyurular = [
  {
    id: 1,
    baslik: "Yazılım Kulübü Etkinliği Başladı",
    aciklama: "Yazılım Kulübü'nün düzenlediği etkinlik büyük ilgi gördü. Öğrenciler hem öğrendi hem eğlendi.",
    resim: duyuru1,
  },
  {
    id: 2,
    baslik: "Kütüphane Haftası Kutlaması",
    aciklama: "Kütüphane personeli tarafından organize edilen etkinlikte kitap okuma alışkanlığı vurgulandı.",
    resim:  duyuru2,
  },
  {
    id: 3,
    baslik: "TÜBİTAK Projeleri Tanıtıldı",
    aciklama: "Öğrencilerin geliştirdiği projeler fakülte binasında sergilendi.",
    resim: duyuru3,
  },
];

const Duyurular = () => {
  return (
    <section className="bg-[#fffded] py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-[#463C74] mb-8">Duyurular</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {duyurular.map((duyuru) => (
          <div key={duyuru.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] transition duration-300">
            <img src={duyuru.resim} alt={duyuru.baslik} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#463C74] mb-2">{duyuru.baslik}</h3>
              <p className="text-sm text-gray-600 mb-4">{duyuru.aciklama}</p>
              <button className="text-[#7858A6] font-semibold hover:underline">Detay</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Duyurular;
