import React from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';

const KitapYonetimi = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-8 text-[#463C74] text-center border-b pb-4">📚 Kitap Ekle</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block font-semibold text-sm mb-1 text-gray-700">Ad</label>
          <input name="ad" type="text" placeholder="Kitap Adı"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#fdd9a0]" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 text-gray-700">ISBN</label>
          <input name="isbn" type="text" placeholder="978-..." 
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#fdd9a0]" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 text-gray-700">Baskı Yılı</label>
          <input name="baskiYili" type="number" placeholder="2024"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#fdd9a0]" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 text-gray-700">Durum</label>
          <select name="durum" className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#fdd9a0]">
            <option>Müsait</option>
            <option>Ödünçte</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 text-gray-700">Yazar Adı</label>
          <input name="yazarAdi" type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#fdd9a0]" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 text-gray-700">Yazar Soyadı</label>
          <input name="yazarSoyadi" type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#fdd9a0]" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 text-gray-700">Yayıncı</label>
          <input name="yayinci" type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#fdd9a0]" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 text-gray-700">Kategori Adı</label>
          <input name="kategori" type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#fdd9a0]" />
        </div>

        <div>
          <label className="block font-semibold text-sm mb-1 text-gray-700">Dosya No</label>
          <input name="dosyaNo" type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#fdd9a0]" />
        </div>

        {/* Butonlar */}
        <div className="md:col-span-2 flex justify-end gap-4 pt-6">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#fdd9a0] text-black px-5 py-2 rounded-lg hover:bg-[#fcb96e] transition shadow"
          >
            <FaSave /> Kaydet
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-gray-100 border border-gray-400 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            <FaTimes /> İptal
          </button>
        </div>

      </form>
    </div>
  );
};

export default KitapYonetimi;
