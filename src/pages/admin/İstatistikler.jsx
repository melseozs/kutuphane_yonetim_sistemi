import React from 'react';
import { FaBook, FaUserFriends, FaBookOpen, FaCheckCircle, FaBookReader } from 'react-icons/fa';

const Istatistikler = () => {
  const toplamKitap = 120;
  const oduncVerilen = 35;
  const mevcuttaMusait = toplamKitap - oduncVerilen;
  const toplamUye = 48;

  const stats = [
    {
      title: '📚 Toplam Kitap',
      value: toplamKitap,
      icon: <FaBook className="text-4xl text-white" />,
      position: 'top-0 left-1/2 -translate-x-1/2',
      bgColor: 'bg-gradient-to-br from-[#9C27B0] to-[#E1BEE7]'
    },
    {
      title: '👥 Toplam Üye',
      value: toplamUye,
      icon: <FaUserFriends className="text-4xl text-white" />,
      position: 'top-1/2 left-0 -translate-y-1/2',
      bgColor: 'bg-gradient-to-br from-[#FF7043] to-[#FFCCBC]'
    },
    {
      title: '📖 Ödünç Verilen',
      value: oduncVerilen,
      icon: <FaBookOpen className="text-4xl text-white" />,
      position: 'bottom-0 left-1/2 -translate-x-1/2',
      bgColor: 'bg-gradient-to-br from-[#4DB6AC] to-[#B2DFDB]'
    },
    {
      title: '✅ Müsait Kitap',
      value: mevcuttaMusait,
      icon: <FaCheckCircle className="text-4xl text-white" />,
      position: 'top-1/2 right-0 -translate-y-1/2',
      bgColor: 'bg-gradient-to-br from-[#42A5F5] to-[#BBDEFB]'
    },
  ];

  return (
    <div className="relative w-[550px] h-[550px] mx-auto my-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fdd9a0] p-8 rounded-full shadow-lg border-4 border-white z-10">
        <FaBookReader className="text-5xl text-[#463C74]" />
      </div>
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`absolute ${stat.position} w-56 h-36 ${stat.bgColor} text-white rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4 hover:scale-105 transition-all duration-300`}
        >
          <div className="mb-2 font-semibold text-lg">{stat.title}</div>
          <div className="text-4xl font-bold">{stat.value}</div>
          <div className="mt-2">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Istatistikler;
