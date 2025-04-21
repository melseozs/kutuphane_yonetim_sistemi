import React, { useState } from 'react';
import { FaTrash, FaUserPlus } from 'react-icons/fa';

const KullaniciYonetimi = () => {
  const [kullanicilar, setKullanicilar] = useState([
    { id: 1, ad: "Ayşe Yılmaz", email: "ayse@example.com" },
    { id: 2, ad: "Mehmet Kara", email: "mehmet@example.com" }
  ]);

  const [yeniAd, setYeniAd] = useState("");
  const [yeniEmail, setYeniEmail] = useState("");

  const handleEkle = () => {
    if (!yeniAd || !yeniEmail) return;
    const yeniKullanici = {
      id: Date.now(),
      ad: yeniAd,
      email: yeniEmail
    };
    setKullanicilar([...kullanicilar, yeniKullanici]);
    setYeniAd("");
    setYeniEmail("");
  };

  const handleSil = (id) => {
    setKullanicilar(kullanicilar.filter(k => k.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#fffaf4] to-[#fef3e4] p-8 rounded-xl shadow-lg mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold text-[#463C74] text-center mb-8 border-b pb-4">👥 Kullanıcı Yönetimi</h2>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Ad Soyad"
          value={yeniAd}
          onChange={(e) => setYeniAd(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg focus:ring focus:ring-[#fdd9a0] bg-white"
        />
        <input
          type="email"
          placeholder="Email"
          value={yeniEmail}
          onChange={(e) => setYeniEmail(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg focus:ring focus:ring-[#fdd9a0] bg-white"
        />
        <button
          onClick={handleEkle}
          className="flex items-center justify-center gap-2 bg-[#fdd9a0] hover:bg-[#fcb96e] text-black px-5 py-2 rounded-lg font-semibold shadow transition"
        >
          <FaUserPlus />
          Ekle
        </button>
      </div>
      <ul className="space-y-4">
        {kullanicilar.map((kullanici) => (
          <li
            key={kullanici.id}
            className="flex justify-between items-center bg-white px-5 py-4 rounded-lg shadow-md border border-[#f3eadb] hover:shadow-lg transition"
          >
            <div>
              <p className="font-semibold text-[#463C74]">{kullanici.ad}</p>
              <p className="text-gray-600 text-sm">{kullanici.email}</p>
            </div>
            <button
              onClick={() => handleSil(kullanici.id)}
              className="text-red-600 hover:text-red-800 hover:scale-105 transition flex items-center gap-2"
            >
              <FaTrash />
              <span>Sil</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KullaniciYonetimi;
