import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';

const KitapYonet = () => {
  const [kitaplar, setKitaplar] = useState([]);
  const [guncellenenKitap, setGuncellenenKitap] = useState(null);
  const [form, setForm] = useState({
    isbn: "",
    ad: "",
    baskiYili: "",
    durum: "",
    dil: "",
    authorAd: "",
    authorSoyad: "",
    publisherAd: "",
    categoryAd: "",
  });
  const [kapakDosyasi, setKapakDosyasi] = useState(null);

  useEffect(() => {
    const fetchKitaplar = async () => {
      try {
        const res = await axios.get('http://localhost:8080/rest/api/Book/listAll');
        if (res.data?.data) {
          setKitaplar(res.data.data);
        }
      } catch (err) {
        console.error("Kitaplar alınamadı:", err);
      }
    };
    fetchKitaplar();
  }, []);

  const handleSil = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/rest/api/Book/delete/${id}`);
      setKitaplar(kitaplar.filter(k => k.id !== id));
    } catch (err) {
      console.error("Silme hatası:", err);
    }
  };

  const handleEditClick = (kitap) => {
    setGuncellenenKitap(kitap);
    setForm({
      isbn: kitap.isbn || "",
      ad: kitap.ad || "",
      baskiYili: kitap.baskiYili || "",
      durum: kitap.durum || "",
      dil: kitap.dil || "",
      authorAd: kitap.authorAd || "",
      authorSoyad: kitap.authorSoyad || "",
      publisherAd: kitap.publisherAd || "",
      categoryAd: kitap.categoryAd || "",
    });
    setKapakDosyasi(null); // sıfırla
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleDosyaSec = (e) => {
    setKapakDosyasi(e.target.files[0]);
  };

  const handleGuncelle = async () => {
    if (!guncellenenKitap) return;

    const id = guncellenenKitap.id;
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (kapakDosyasi) {
      formData.append("kapakDosyasi", kapakDosyasi);
    }

    try {
      await axios.put(`http://localhost:8080/rest/api/Book/update/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      // Backend dosyayı başarıyla alırsa:
      setKitaplar(kitaplar.map(k => k.id === id ? { ...k, ...form } : k));
      setGuncellenenKitap(null);
      setForm({
        isbn: "",
        ad: "",
        baskiYili: "",
        durum: "",
        dil: "",
        authorAd: "",
        authorSoyad: "",
        publisherAd: "",
        categoryAd: "",
      });
      setKapakDosyasi(null);
    } catch (err) {
      console.error("Güncelleme hatası:", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 mt-10 bg-[#fffaf4] rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-[#463C74] mb-8">📚 Kitap Yönetimi</h2>

      <ul className="space-y-6">
        {kitaplar.map((kitap) => (
          <li key={kitap.id} className="flex items-center bg-white p-4 rounded-lg shadow border border-[#f3eadb]">
            <div className="flex-1">
              <p className="font-semibold text-[#463C74] text-lg">{kitap.ad}</p>
              <p className="text-sm text-gray-600">{kitap.isbn}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => handleSil(kitap.id)} className="text-red-600 hover:text-red-800 flex items-center gap-1">
                <FaTrash />
                <span>Sil</span>
              </button>
              <button onClick={() => handleEditClick(kitap)} className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                <FaEdit />
                <span>Düzenle</span>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {guncellenenKitap && (
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold text-[#463C74] mb-4 text-center">📘 Kitap Güncelle</h3>

          {[
            { label: "ISBN", name: "isbn" },
            { label: "Kitap Adı", name: "ad" },
            { label: "Baskı Yılı", name: "baskiYili" },
            { label: "Durum", name: "durum" },
            { label: "Dil", name: "dil" },
            { label: "Yazar Adı", name: "authorAd" },
            { label: "Yazar Soyadı", name: "authorSoyad" },
            { label: "Yayınevi Adı", name: "publisherAd" },
            { label: "Kategori", name: "categoryAd" },
          ].map(({ label, name }) => (
            <input
              key={name}
              name={name}
              value={form[name]}
              onChange={handleInputChange}
              placeholder={label}
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg"
            />
          ))}

          <input
            type="file"
            accept="image/*"
            onChange={handleDosyaSec}
            className="w-full mb-4"
          />

          <button
            onClick={handleGuncelle}
            className="bg-[#fcb96e] hover:bg-[#fdd9a0] text-black font-semibold px-5 py-2 rounded-lg mt-2"
          >
            Kaydet
          </button>
        </div>
      )}
    </div>
  );
};

export default KitapYonet;


