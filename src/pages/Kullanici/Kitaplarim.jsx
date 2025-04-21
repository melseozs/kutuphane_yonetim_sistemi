import React from 'react';

const kitaplarim = [
  {
    id: 1,
    ad: "Sefiller",
    yazar: "Victor Hugo",
    durum: "Teslim Edilmedi",
    oduncTarihi: "2025-04-15",
    iadeTarihi: "2025-04-22"
  },
  {
    id: 2,
    ad: "Kürk Mantolu Madonna",
    yazar: "Sabahattin Ali",
    durum: "İade Edildi",
    oduncTarihi: "2025-03-10",
    iadeTarihi: "2025-03-17"
  }
];

const Kitaplarim = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-[#463C74] mb-6 text-center">📚 Kitaplarım</h2>
      <table className="w-full table-auto border-collapse">
        <thead className="bg-[#fdd9a0]">
          <tr>
            <th className="p-3 text-left">Kitap Adı</th>
            <th className="p-3 text-left">Yazar</th>
            <th className="p-3 text-left">Ödünç Tarihi</th>
            <th className="p-3 text-left">İade Tarihi</th>
            <th className="p-3 text-left">Durum</th>
          </tr>
        </thead>
        <tbody>
          {kitaplarim.map((kitap) => (
            <tr key={kitap.id} className="border-t hover:bg-[#fffaf2]">
              <td className="p-3">{kitap.ad}</td>
              <td className="p-3">{kitap.yazar}</td>
              <td className="p-3">{kitap.oduncTarihi}</td>
              <td className="p-3">{kitap.iadeTarihi}</td>
              <td className={`p-3 font-semibold ${kitap.durum === "İade Edildi" ? "text-green-600" : "text-red-500"}`}>
                {kitap.durum}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Kitaplarim;
