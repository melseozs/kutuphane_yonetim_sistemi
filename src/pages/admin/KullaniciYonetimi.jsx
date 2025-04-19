import React, { useState } from 'react';

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
    <div>
      <h2 className="text-2xl font-bold mb-6">Kullanıcı Yönetimi</h2>

      {/* Ekleme Formu */}
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Ad Soyad"
          value={yeniAd}
          onChange={(e) => setYeniAd(e.target.value)}
          className="border px-3 py-2 rounded w-1/3"
        />
        <input
          type="email"
          placeholder="Email"
          value={yeniEmail}
          onChange={(e) => setYeniEmail(e.target.value)}
          className="border px-3 py-2 rounded w-1/3"
        />
        <button onClick={handleEkle} className="bg-[#fdd9a0] px-4 py-2 rounded hover:bg-[#fcb96e]">
          Ekle
        </button>
      </div>

      {/* Kullanıcı Listesi */}
      <ul className="space-y-3">
        {kullanicilar.map((kullanici) => (
          <li key={kullanici.id} className="flex justify-between items-center border-b py-2">
            <div>
              <p className="font-semibold">{kullanici.ad}</p>
              <p className="text-gray-600 text-sm">{kullanici.email}</p>
            </div>
            <button
              onClick={() => handleSil(kullanici.id)}
              className="text-red-600 hover:underline"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KullaniciYonetimi;
