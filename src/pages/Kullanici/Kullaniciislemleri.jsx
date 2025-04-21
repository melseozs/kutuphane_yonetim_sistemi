import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaBook,
  FaHome,
  FaSignOutAlt
} from "react-icons/fa";

const Kullaniciislemleri = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { label: "Profilim", path: "/profilim", icon: <FaUser /> },
    { label: "Kitaplarım", path: "/kitaplarim", icon: <FaBook /> },
    { label: "Ana Sayfa", path: "/", icon: <FaHome /> }
  ];

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-[#fff8f1] font-sans">
      <div className="w-64 bg-white border-r p-6 flex flex-col justify-between shadow-md">
        <div>
          <h2 className="text-2xl font-bold text-[#463C74] mb-8">👤Kullanıcı Paneli</h2>
          <ul className="space-y-3">
            {menu.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 
                    ${location.pathname === item.path
                      ? 'bg-[#fdd9a0] text-[#463C74] font-semibold shadow-md'
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
          className="flex items-center gap-2 text-red-600 hover:text-red-800 text-sm hover:scale-105 transition mt-10"
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

export default Kullaniciislemleri;
