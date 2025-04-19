import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaHome,FaBook, FaUsersCog, FaChartBar } from "react-icons/fa";





const AdminPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();

  

  const menuItems = [
    { label: ' Ana Sayfa', path: '/', icon: <FaHome />, external: true },
    { label: 'Kitap Yönetimi', path: 'kitap-yonetimi', icon: <FaBook className="inline-block mr-2" /> },
    { label: 'Kullanıcı Yönetimi', path: 'kullanici-yonetimi', icon: <FaUsersCog className="inline-block mr-2" /> },
    { label: 'İstatistikler', path: 'istatistikler', icon: <FaChartBar className="inline-block mr-2" /> },
  ];
  

  return (
    <div className="flex min-h-screen bg-[#FAEEE7]">
      {/* SOL MENÜ */}
      <div className="w-64 bg-[#fffaf3] border-r p-6">
        <h2 className="text-xl font-bold mb-6">Admin Paneli</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-4 py-2 rounded-md hover:bg-[#fde2bc] transition ${
                  location.pathname.includes(item.path)
                    ? 'bg-[#fde2bc] font-semibold'
                    : ''
                }`}
              >
                <span className="flex items-center gap-2">
  {item.icon}
  {item.label}
</span>

              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* SAĞ İÇERİK */}
      <div className="flex-grow p-10 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
