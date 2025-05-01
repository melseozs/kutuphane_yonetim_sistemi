import React from 'react';
import { useNavigate } from 'react-router-dom';

const KullaniciLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === 'kullanici@example.com' && password === '1234') {
      navigate('/kullanici-islemleri');
    } else {
      alert('E-posta veya şifre yanlış!');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/kullanici-register');  
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/loginFoto.jpg')",
      }}
    >
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96 h-80 space-y-4 flex flex-col justify-between items-center">
        <h2 className="text-2xl font-bold text-center mb-4">Kullanıcı Girişi</h2>

        <input
          type="email"
          name="email"
          placeholder="E-posta"
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

        <button
          type="submit"
          className="w-full bg-[#fdd9a0] text-black py-2 rounded hover:bg-[#fcb96e]">
          Giriş Yap
        </button>

        <div className="text-sm mt-4">
          <p className="text-center">
            Henüz hesabınız yok mu? 
            <button 
              type="button" 
              onClick={handleRegisterRedirect} 
              className="text-blue-500 hover:underline ml-1"
            >
              Üye Ol
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default KullaniciLogin;
