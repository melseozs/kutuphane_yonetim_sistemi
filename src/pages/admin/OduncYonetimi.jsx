import React, { useState } from 'react';
import { FaBook, FaUser, FaPlusCircle } from 'react-icons/fa';

const OduncYonetimi = () => {
  const [kitaplar, setKitaplar] = useState([
    { id: 1, ad: "Sefiller", yazar: "Victor Hugo", durum: "Müsait", alan: "" },
    { id: 2, ad: "Kürk Mantolu Madonna", yazar: "Sabahattin Ali", durum: "Ödünçte", alan: "Zeynep" },
    { id: 3, ad: "Suç ve Ceza", yazar: "Dostoyevski", durum: "Müsait", alan: "" }
  ]);

  const [secilenKitapId, setSecilenKitapId] = useState("");
  const [ogrenciAdi, setOgrenciAdi] = useState("");

  const handleOduncVer = () => {
    if (!secilenKitapId || !ogrenciAdi) return;

    const guncellenmis = kitaplar.map(kitap => {
      if (kitap.id === parseInt(secilenKitapId) && kitap.durum === "Müsait") {
        return { ...kitap, durum: "Ödünçte", alan: ogrenciAdi };
      }
      return kitap;
    });

    setKitaplar(guncellenmis);
    setSecilenKitapId("");
    setOgrenciAdi("");
  };

  const handleIadeAl = (id) => {
    const guncellenmis = kitaplar.map(kitap =>
      kitap.id === id ? { ...kitap, durum: "Müsait", alan: "" } : kitap
    );
    setKitaplar(guncellenmis);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-[#463C74] border-b pb-4 mb-8">📚 Ödünç Verme Sayfası</h2>

      {/* Ödünç Formu */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
        <select
          value={secilenKitapId}
          onChange={(e) => setSecilenKitapId(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/3"
        >
          <option value="">📖 Müsait Kitap Seç</option>
          {kitaplar
            .filter((k) => k.durum === "Müsait")
            .map((k) => (
              <option key={k.id} value={k.id}>
                {k.ad} - {k.yazar}
              </option>
            ))}
        </select>
        <input
          type="text"
          placeholder="Öğrenci Adı"
          value={ogrenciAdi}
          onChange={(e) => setOgrenciAdi(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/3"
        />
        <button
          onClick={handleOduncVer}
          className="bg-[#fdd9a0] text-black px-4 py-2 rounded hover:bg-[#fcb96e] flex items-center gap-2"
        >
          <FaPlusCircle />
          Ödünç Ver
        </button>
      </div>

      {/* Kitap Listesi */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-[#fdd9a0] text-left">
            <th className="p-3">Kitap Adı</th>
            <th className="p-3">Yazar</th>
            <th className="p-3">Durum</th>
            <th className="p-3">Alan Kişi</th>
            <th className="p-3">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {kitaplar.map((kitap) => (
            <tr key={kitap.id} className="border-t hover:bg-[#fff9f2]">
              <td className="p-3">{kitap.ad}</td>
              <td className="p-3">{kitap.yazar}</td>
              <td className={`p-3 font-medium ${kitap.durum === "Müsait" ? "text-green-600" : "text-[#7858A6]"}`}>
                {kitap.durum}
              </td>
              <td className="p-3">{kitap.alan || "-"}</td>
              <td className="p-3">
                {kitap.durum === "Ödünçte" && (
                  <button
                    onClick={() => handleIadeAl(kitap.id)}
                    className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                  >
                    İade Al
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OduncYonetimi;
