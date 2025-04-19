import React, { useState } from 'react';
import { FaSync } from 'react-icons/fa';

const OduncYonetimi = () => {
  const [kitaplar, setKitaplar] = useState([
    { id: 1, ad: "Sefiller", yazar: "Victor Hugo", durum: "Müsait" },
    { id: 2, ad: "Kürk Mantolu Madonna", yazar: "Sabahattin Ali", durum: "Ödünçte" },
    { id: 3, ad: "Suç ve Ceza", yazar: "Dostoyevski", durum: "Müsait" }
  ]);

  const handleDurumDegistir = (id, yeniDurum) => {
    const guncellenmis = kitaplar.map(kitap =>
      kitap.id === id ? { ...kitap, durum: yeniDurum } : kitap
    );
    setKitaplar(guncellenmis);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-[#463C74] border-b pb-4 mb-8">📖 Ödünç Durumu Yönetimi</h2>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-[#fdd9a0] text-left">
            <th className="p-3">Kitap Adı</th>
            <th className="p-3">Yazar</th>
            <th className="p-3">Durum</th>
            <th className="p-3">Güncelle</th>
          </tr>
        </thead>
        <tbody>
          {kitaplar.map((kitap) => (
            <tr key={kitap.id} className="border-t hover:bg-[#fff9f2]">
              <td className="p-3">{kitap.ad}</td>
              <td className="p-3">{kitap.yazar}</td>
              <td className="p-3 font-medium text-[#7858A6]">{kitap.durum}</td>
              <td className="p-3">
                <select
                  value={kitap.durum}
                  onChange={(e) => handleDurumDegistir(kitap.id, e.target.value)}
                  className="border rounded px-3 py-1"
                >
                  <option>Müsait</option>
                  <option>Ödünçte</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OduncYonetimi;
