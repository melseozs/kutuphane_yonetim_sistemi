import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-pink-50 p-8 rounded-lg shadow-lg w-120 h-86">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Girişi</h2>
        <input 
          type="text" 
          placeholder="Ad" 
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input 
          type="password" 
          placeholder="Şifre" 
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        
        <button 
          className="w-full bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300 pb-7"
          onClick={() => navigate('/dashboard')}
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
}

export default AdminPage;