import React, { useState } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';
import { addBook } from '../../Services/BookService';

const KitapEkle = () => {
  const [kitapData, setKitapData] = useState({
    ad: '',
    isbn: '',
    baskiYili: '',
    durum: 'MUSAIT',
    dil: '',
    authorAd: '',
    authorSoyad: '',
    publisherAd: '',
    categoryAd: '',
    file: null,
  });

  const [mesaj, setMesaj] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKitapData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setKitapData((prev) => ({ ...prev, file }));
  };

  const handleReset = () => {
    setKitapData({
      ad: '',
      isbn: '',
      baskiYili: '',
      durum: 'MUSAIT',
      dil: '',
      authorAd: '',
      authorSoyad: '',
      publisherAd: '',
      categoryAd: '',
      file: null,
    });
    setMesaj('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!kitapData.file) {
      setMesaj('Lütfen bir kapak fotoğrafı yükleyin.');
      return;
    }

    setLoading(true);

    try {
      await addBook(kitapData);
      setMesaj('✅ Kitap başarıyla kaydedildi!');
      handleReset();
    } catch (error) {
      console.error('Hata:', error);
      setMesaj(error.response?.data?.message || '❌ Kitap eklenirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
      setTimeout(() => setMesaj(''), 4000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-[#463C74] text-center"> Kitap Ekle</h2>

      {mesaj && (
        <div
          className={`mb-6 px-4 py-3 rounded-md text-sm font-medium shadow transition-all duration-300 ${
            mesaj.includes('✅')
              ? 'bg-green-100 text-green-800 border border-green-300'
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}
        >
          {mesaj}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: 'ad', label: 'Ad' },
          { name: 'isbn', label: 'ISBN' },
          { name: 'baskiYili', label: 'Baskı Yılı', type: 'number' },
          { name: 'dil', label: 'Dil' },
          { name: 'authorAd', label: 'Yazar Adı' },
          { name: 'authorSoyad', label: 'Yazar Soyadı' },
          { name: 'publisherAd', label: 'Yayıncı' },
          { name: 'categoryAd', label: 'Kategori' },
        ].map(({ name, label, type = 'text' }) => (
          <div key={name}>
            <label className="block text-sm font-semibold mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={kitapData[name]}
              onChange={handleInputChange}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-semibold mb-1">Durum</label>
          <select
            name="durum"
            value={kitapData.durum}
            onChange={handleInputChange}
            className="w-full border p-2 rounded-md"
          >
            <option value="MUSAIT">MUSAIT</option>
            <option value="ODUNC">ODUNC</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Kapak Fotoğrafı</label>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border p-2 rounded-md"
            required
          />
        </div>

        <div className="md:col-span-2 flex justify-end gap-4 mt-4">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#fdd9a0] text-black px-5 py-2 rounded-lg hover:bg-[#fcb96e] border border-[#e0a35c]"
            disabled={loading}
          >
            {loading ? 'Yükleniyor...' : (<><FaSave /><span>Kaydet</span></>)}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-400"
          >
            <FaTimes />
            <span>İptal</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default KitapEkle;
