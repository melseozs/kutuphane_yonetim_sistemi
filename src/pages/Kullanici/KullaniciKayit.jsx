import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../Services/authService.js';

const KullaniciKayit = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
  
    const email = e.target.email.value.trim();
    const username = e.target.username.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
  
    if (password !== confirmPassword) {
      setErrorMessage('Şifreler uyuşmuyor!');
      return;
    }
  
    try {
      await signup({ email, username, password });
      setSuccessMessage('Kayıt başarılı! Doğrulama sayfasına yönlendiriliyorsunuz...');
      setErrorMessage('');
  
      navigate('/kullanici-verify');
  
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(
        error.response?.data?.message || 'Kayıt sırasında bir hata oluştu.'
      );
    }
  };
  

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center"
         style={{ backgroundImage: "url('/loginFoto.jpg')" }}>
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center mb-4">Kayıt Ol</h2>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

        <input type="email" name="email" placeholder="E-posta" className="w-full border p-2 rounded" required />
        <input type="text" name="username" placeholder="Kullanıcı Adı" className="w-full border p-2 rounded" required />
        <input type="password" name="password" placeholder="Şifre" className="w-full border p-2 rounded" required />
        <input type="password" name="confirmPassword" placeholder="Şifreyi Tekrarla" className="w-full border p-2 rounded" required />

        <button type="submit" className="w-full bg-[#fdd9a0] text-black py-2 rounded hover:bg-[#fcb96e]">
          Kayıt Ol
        </button>

        <div className="text-sm text-center">
          <p>
            Zaten hesabınız var mı?{' '}
            <a href="/kullanici-login" className="text-blue-500 hover:underline">Giriş yap</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default KullaniciKayit;
