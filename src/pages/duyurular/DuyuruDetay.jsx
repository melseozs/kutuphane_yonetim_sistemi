import React from 'react';
import { useParams } from 'react-router-dom';
import duyurular from '../../data/duyurular.json';

const DuyuruDetay = () => {
  const { id } = useParams();
  const duyuru = duyurular.find(d => d.id === parseInt(id));

  if (!duyuru) {
    return <div className="p-10">Duyuru bulunamadı</div>;
  }

  const resimYolu = new URL(`../../assets/${duyuru.resim}`, import.meta.url).href;

  return (
    <div className="p-10 bg-[#FAEEE7] min-h-screen">
      <h2 className="text-4xl font-bold text-[#463C74] mb-10">{duyuru.baslik}</h2>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Görsel - sola yaslanmış */}
        <img
          src={resimYolu}
          alt={duyuru.baslik}
          className="w-full md:w-[40%] max-h-[400px] object-contain rounded-lg shadow-lg"
        />

        {/* Açıklamalar - beyaz kutu içinde */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-[60%]">
          <p className="text-gray-700 text-lg mb-4">{duyuru.icerik}</p>
          {duyuru.detay && (
            <p className="text-gray-700 text-base">{duyuru.detay}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DuyuruDetay;
