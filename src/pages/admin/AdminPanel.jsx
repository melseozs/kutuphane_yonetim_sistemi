import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBook, FaUsersCog, FaChartBar, FaSync, FaSignOutAlt, FaUsers } from "react-icons/fa";

const AdminPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Ana Sayfa', path: '/', icon: <FaHome /> },
    { label: 'Ödünç Yönetimi', path: '/admin-panel/odunc-yonetimi', icon: <FaSync /> },
    { label: 'Kitap Yönetimi', path: '/admin-panel/kitap-yonetimi', icon: <FaBook /> },
    { label: 'Kullanıcı Yönetimi', path: '/admin-panel/kullanici-yonetimi', icon: <FaUsersCog /> },
    { label: 'İstatistikler', path: '/admin-panel/istatistikler', icon: <FaChartBar /> },
    { label: 'Üye Kayıtları', path: '/admin-panel/uye-kayitlari', icon: <FaUsers /> },
    { label: 'Hareketler', path: '/admin-panel/hareketler', icon: <FaSync /> },

  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  return (
    <div className="flex min-h-screen font-sans bg-gradient-to-r from-[#fff8f1] to-[#ffece6]">
      <div className="w-64 bg-gradient-to-b from-gray-50 via-orange-50 to-yellow-50 border-r shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#463C74] mb-8">📚 Admin Paneli</h2>
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 
                    ${location.pathname === item.path
                      ? 'bg-[#fdd9a0] text-[#463C74] shadow-md font-semibold'
                      : 'hover:bg-[#fef3d6] text-gray-700'}
                  `}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleLogout}
          className="mt-10 flex items-center gap-2 text-red-500 hover:text-red-700 text-sm hover:scale-105 transition"
        >
          <FaSignOutAlt />
          Çıkış Yap
        </button>
      </div>
      <div className="flex-grow p-10 bg-white shadow-inner rounded-l-3xl">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
