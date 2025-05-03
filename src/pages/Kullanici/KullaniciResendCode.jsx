import React, { useState } from 'react';
import { resendVerificationEmail } from '../../Services/authService.js';

const KullaniciResendCode = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResend = async (e) => {
    e.preventDefault();
    try {
      await resendVerificationEmail(email);
      setMessage('Doğrulama kodu e-posta adresinize tekrar gönderildi.');
    } catch (error) {
      console.error('Kod gönderme hatası:', error);
      setMessage('Kod gönderilemedi. E-posta adresini kontrol edin.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleResend} className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">Kod Tekrar Gönder</h2>
        {message && <p className="text-center text-sm text-green-600">{message}</p>}

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-posta adresiniz" className="border p-2 rounded w-full" required />

        <button type="submit" className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
          Kodu Tekrar Gönder
        </button>
      </form>
    </div>
  );
};

export default KullaniciResendCode;

