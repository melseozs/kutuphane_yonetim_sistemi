import React from 'react';

const UyeKayitlari = () => {
  const uyeler = [
    { id: 1, ad: "Ayşe Yılmaz", email: "ayse@example.com", tarih: "2024-05-01" },
    { id: 2, ad: "Mehmet Kara", email: "mehmet@example.com", tarih: "2024-05-03" },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#fdfbfa] to-[#f9f7f6] p-8 rounded-xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-[#463C74] text-center mb-6 tracking-wide">👤 Üye Kayıtları</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700 border border-gray-200 shadow-sm rounded-xl overflow-hidden">
          <thead className="bg-[#fdd9a0] text-[#463C74] text-base font-semibold uppercase">
            <tr>
              <th className="px-6 py-4">Ad Soyad</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Kayıt Tarihi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {uyeler.map((uye) => (
              <tr key={uye.id} className="hover:bg-[#fff5eb] transition">
                <td className="px-6 py-4 font-medium">{uye.ad}</td>
                <td className="px-6 py-4">{uye.email}</td>
                <td className="px-6 py-4">{uye.tarih}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UyeKayitlari;
