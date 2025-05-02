import React, { useState } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';
import { addBook } from '../../Services/BookService';

const KitapYonetimi = () => {
  const [kitapData, setKitapData] = useState({
    ad: '',
    isbn: '',
    baskiYili: '',
    durum: 'MEVCUT',
    dil: '',
    yazarAdi: '',
    yazarSoyadi: '',
    yayinci: '',
    kategori: '',
    dosyaNo: '',
    foto: null,  
  });

  const [mesaj, setMesaj] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKitapData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    setKitapData(prev => ({ ...prev, foto: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();  
    for (const key in kitapData) {
      formData.append(key, kitapData[key]);
    }

    try {
      await addBook(formData);  
      setMesaj('Kitap başarıyla kaydedildi!');
      console.log('Kitap başarıyla kaydedildi!'); 

      setKitapData({
        ad: '',
        isbn: '',
        baskiYili: '',
        durum: 'MEVCUT',
        dil: '',
        yazarAdi: '',
        yazarSoyadi: '',
        yayinci: '',
        kategori: '',
        dosyaNo: '',
        foto: null,
      });

      setTimeout(() => setMesaj(''), 4000);
    } catch (error) {
      setMesaj('Kitap eklenirken hata oluştu. Lütfen tekrar deneyin.');
      console.log('Hata:', error); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-[#463C74] text-center">📚 Kitap Ekle</h2>

      {mesaj && (
        <div className={`mb-4 p-4 rounded-lg ${mesaj.includes('başarı') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {mesaj}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[ 
          { name: 'ad', label: 'Ad' },
          { name: 'isbn', label: 'ISBN' },
          { name: 'baskiYili', label: 'Baskı Yılı', type: 'number' },
          { name: 'dil', label: 'Dil' },
          { name: 'yazarAdi', label: 'Yazar Adı' },
          { name: 'yazarSoyadi', label: 'Yazar Soyadı' },
          { name: 'yayinci', label: 'Yayıncı' },
          { name: 'kategori', label: 'Kategori' },
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
          <select name="durum" value={kitapData.durum} onChange={handleInputChange} className="w-full border p-2 rounded-md">
            <option value="MEVCUT">MUSAIT</option>
            <option value="Ödünçte">Ödünçte</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Kapak Fotoğrafı</label>
          <input
            type="file"
            name="foto"
            onChange={handleFileChange}
            className="w-full border p-2 rounded-md"
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
          <button type="reset" className="flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-400">
            <FaTimes />
            <span>İptal</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default KitapYonetimi;
