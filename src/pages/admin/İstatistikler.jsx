import React from 'react';

const Istatistikler = () => {
  // Sahte veriler (ileride backend ile değiştirilebilir)
  const toplamKitap = 120;
  const toplamKullanici = 48;
  const oduncVerilen = 35;
  const mevcuttaMusait = toplamKitap - oduncVerilen;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#463C74]">İstatistikler</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold">Toplam Kitap</h3>
          <p className="text-3xl text-[#7858A6]">{toplamKitap}</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold">Toplam Kullanıcı</h3>
          <p className="text-3xl text-[#7858A6]">{toplamKullanici}</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold">Ödünç Verilen Kitap</h3>
          <p className="text-3xl text-[#7858A6]">{oduncVerilen}</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold">Müsait Kitap</h3>
          <p className="text-3xl text-[#7858A6]">{mevcuttaMusait}</p>
        </div>
      </div>
    </div>
  );
};

export default Istatistikler;
