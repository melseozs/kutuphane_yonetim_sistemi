import React from 'react';
import { Link } from 'react-router-dom';
import duyurular from '../../data/duyurular.json';

const Duyurular = () => {
  return (
    <section className="p-10 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center text-[#463C74] mb-8">Tüm Duyurular</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {duyurular.map((duyuru) => {
          // 🔧 Asset klasöründeki görsel yolunu çöz
          const resimYolu = new URL(`../../assets/${duyuru.resim}`, import.meta.url).href;

          return (
            <div key={duyuru.id} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={resimYolu}
                alt={duyuru.baslik}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-[#463C74]">{duyuru.baslik}</h3>
              <Link
                to={`/duyurular/${duyuru.id}`}
                className="text-[#7858A6] font-semibold hover:underline block mt-4"
              >
                Detay
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Duyurular;
