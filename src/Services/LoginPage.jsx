import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50">
      <div className="bg-pink-50 p-8 rounded-lg shadow-lg w-120 h-96">
        <h2 className="text-2xl font-bold text-center mb-6">Giriş Yap</h2>
        <input 
          type="text" 
          placeholder="Email" 
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input 
          type="password" 
          placeholder="Şifre" 
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        
        <button 
          className="w-full bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300"
        >
          Giriş Yap
        </button>
        <button 
          onClick={() => navigate('/register')}
          className="w-full mt-4 text-black hover:underline"
        >
          Üye değil misiniz? Kayıt olun
        </button>
      </div>
    </div>
  );
}

export default LoginPage;