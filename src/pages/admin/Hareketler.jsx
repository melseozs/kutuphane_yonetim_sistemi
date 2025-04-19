import React from 'react';

const Hareketler = () => {
  const hareketler = [
    { id: 1, uye: "Ayşe Yılmaz", kitap: "Sefiller", tarih: "2024-05-01", islem: "Ödünç Alındı" },
    { id: 2, uye: "Mehmet Kara", kitap: "Kürk Mantolu Madonna", tarih: "2024-05-03", islem: "İade Edildi" },
  ];

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold text-[#463C74] mb-4">Kitap Hareketleri</h2>
      <table className="w-full table-auto border-collapse">
        <thead className="bg-[#fdd9a0]">
          <tr>
            <th className="p-2">Üye</th>
            <th className="p-2">Kitap</th>
            <th className="p-2">Tarih</th>
            <th className="p-2">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {hareketler.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-2">{item.uye}</td>
              <td className="p-2">{item.kitap}</td>
              <td className="p-2">{item.tarih}</td>
              <td className="p-2">{item.islem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hareketler;
