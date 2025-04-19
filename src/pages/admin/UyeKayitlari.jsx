import React from 'react';

const UyeKayitlari = () => {
  const uyeler = [
    { id: 1, ad: "Ayşe Yılmaz", email: "ayse@example.com", tarih: "2024-05-01" },
    { id: 2, ad: "Mehmet Kara", email: "mehmet@example.com", tarih: "2024-05-03" },
  ];

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold text-[#463C74] mb-4">Üye Kayıtları</h2>
      <table className="w-full table-auto border-collapse">
        <thead className="bg-[#fdd9a0]">
          <tr>
            <th className="p-2 text-left">Ad Soyad</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Kayıt Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {uyeler.map((uye) => (
            <tr key={uye.id} className="border-t">
              <td className="p-2">{uye.ad}</td>
              <td className="p-2">{uye.email}</td>
              <td className="p-2">{uye.tarih}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UyeKayitlari;
