import React from 'react';
import { FaBook, FaUserFriends, FaBookOpen, FaCheckCircle } from 'react-icons/fa';

const Istatistikler = () => {
  const toplamKitap = 120;
  const toplamKullanici = 48;
  const oduncVerilen = 35;
  const mevcuttaMusait = toplamKitap - oduncVerilen;

  const stats = [
    {
      title: 'Toplam Kitap',
      value: toplamKitap,
      icon: <FaBook className="text-4xl text-[#6b5ca5]" />,
      bg: 'from-[#f4efff] to-[#e4dafb]'
    },
    {
      title: 'Toplam Kullanıcı',
      value: toplamKullanici,
      icon: <FaUserFriends className="text-4xl text-[#a25c92]" />,
      bg: 'from-[#ffeef7] to-[#fbd8e9]'
    },
    {
      title: 'Ödünç Verilen',
      value: oduncVerilen,
      icon: <FaBookOpen className="text-4xl text-[#f59e0b]" />,
      bg: 'from-[#fff7e8] to-[#ffeccc]'
    },
    {
      title: 'Müsait Kitap',
      value: mevcuttaMusait,
      icon: <FaCheckCircle className="text-4xl text-[#10b981]" />,
      bg: 'from-[#e8fff5] to-[#ccf0e6]'
    },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-[#463C74] text-center border-b pb-4">📊 Kütüphane İstatistikleri</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.bg} p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-md font-semibold text-gray-700">{stat.title}</h3>
                <p className="text-4xl font-bold text-[#463C74] mt-2">{stat.value}</p>
              </div>
              <div className="opacity-90">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Istatistikler;
