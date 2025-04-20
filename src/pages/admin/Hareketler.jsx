import React from 'react';

const Hareketler = () => {
  const hareketler = [
    { id: 1, uye: "Ayşe Yılmaz", kitap: "Sefiller", tarih: "2024-05-01", islem: "📥 Ödünç Alındı" },
    { id: 2, uye: "Mehmet Kara", kitap: "Kürk Mantolu Madonna", tarih: "2024-05-03", islem: "📤 İade Edildi" },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#fdfbfa] to-[#f9f7f6] p-8 rounded-xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-[#463C74] text-center mb-6 tracking-wide">🔄 Kitap Hareketleri</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700 border border-gray-200 shadow-sm rounded-xl overflow-hidden">
          <thead className="bg-[#fdd9a0] text-[#463C74] text-base font-semibold uppercase">
            <tr>
              <th className="px-6 py-4">Üye</th>
              <th className="px-6 py-4">Kitap</th>
              <th className="px-6 py-4">Tarih</th>
              <th className="px-6 py-4">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {hareketler.map((item) => (
              <tr key={item.id} className="hover:bg-[#fff5eb] transition">
                <td className="px-6 py-4 font-medium">{item.uye}</td>
                <td className="px-6 py-4">{item.kitap}</td>
                <td className="px-6 py-4">{item.tarih}</td>
                <td className="px-6 py-4">{item.islem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hareketler;
