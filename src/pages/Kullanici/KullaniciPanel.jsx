import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaBook, FaSignOutAlt } from 'react-icons/fa';

const KullaniciPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { label: 'Profilim', path: '/profilim', icon: <FaUser /> },
    { label: 'Kitaplarım', path: '/kitaplarim', icon: <FaBook /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-[#f9f9f9]">
      <div className="w-64 bg-white border-r shadow-md p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#463C74] mb-6">📘 Kullanıcı Paneli</h2>
          <ul className="space-y-4">
            {menu.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                    location.pathname === item.path
                      ? 'bg-[#fdd9a0] font-semibold text-[#463C74]'
                      : 'hover:bg-[#fef3d6] text-gray-700'
                  }`}
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
      <div className="flex-grow p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default KullaniciPanel;
