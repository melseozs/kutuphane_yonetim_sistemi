import React from 'react';

const KitapYonetimi = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white border p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Kitap Ekle</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <label className="block font-semibold">Ad</label>
          <input name="ad" type="text" className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">ISBN</label>
          <input name="isbn" type="text" className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Baskı Yılı</label>
          <input name="baskiYili" type="number" className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Durum</label>
          <select name="durum" className="w-full border rounded p-2">
            <option>Müsait</option>
            <option>Ödünçte</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Yazar Adı</label>
          <input name="yazarAdi" type="text" className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Yazar Soyadı</label>
          <input name="yazarSoyadi" type="text" className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Yayıncı</label>
          <input name="yayinci" type="text" className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Kategori Adı</label>
          <input name="kategori" type="text" className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Dosya No</label>
          <input name="dosyaNo" type="text" className="w-full border rounded p-2" />
        </div>

        {/* Butonlar tam alta toplu şekilde */}
        <div className="md:col-span-2 flex justify-end gap-4 pt-2">
          <button
            type="submit"
            className="bg-[#fdd9a0] text-black px-4 py-2 rounded hover:bg-[#fcb96e]"
          >
            Kaydet
          </button>
          <button
            type="button"
            className="bg-gray-100 border border-gray-400 px-4 py-2 rounded hover:bg-gray-200"
          >
            İptal
          </button>
        </div>
      </form>
    </div>
  );
};

export default KitapYonetimi;
