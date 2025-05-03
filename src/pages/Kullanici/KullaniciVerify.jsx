import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verify } from '../../Services/authService.js';

const KullaniciVerify = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await verify(code);
      setMessage('Doğrulama başarılı! Giriş sayfasına yönlendiriliyorsunuz...');
      setTimeout(() => navigate('/kullanici-login'), 2000);
    } catch (error) {
      setMessage('Doğrulama kodu geçersiz veya süresi dolmuş.');
      console.error('Doğrulama hatası:', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleVerify} className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">E-Posta Doğrulama</h2>
        {message && <p className="text-center text-sm text-red-600">{message}</p>}

        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Doğrulama Kodu" className="border p-2 rounded w-full" required />

        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Doğrula
        </button>
      </form>
    </div>
  );
};

export default KullaniciVerify;
