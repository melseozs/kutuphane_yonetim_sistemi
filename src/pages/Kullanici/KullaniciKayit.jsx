import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../Services/authService.js';

const KullaniciKayit = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage('Şifreler uyuşmuyor!');
      return;
    }

    const userData = {
      email,
      username,
      password
    };

    try {
      const response = await signup(userData);
      console.log('Kayıt başarılı:', response.data);
      navigate('/kullanici-login');
    } catch (error) {
      console.error('Kayıt hatası:', error);
      setErrorMessage(
        error.response?.data?.message || 'Kayıt sırasında bir hata oluştu.'
      );
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/loginFoto.jpg')" }}
    >
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-lg shadow-md w-96 h-auto space-y-4 flex flex-col justify-between items-center"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Kayıt Ol</h2>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <input
          type="email"
          name="email"
          placeholder="E-posta"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Şifreyi Tekrarla"
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#fdd9a0] text-black py-2 rounded hover:bg-[#fcb96e]"
        >
          Kayıt Ol
        </button>

        <div className="text-sm">
          <p className="text-center">
            Zaten hesabınız var mı?{' '}
            <a href="/kullanici-login" className="text-blue-500">
              Giriş yap
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default KullaniciKayit;
