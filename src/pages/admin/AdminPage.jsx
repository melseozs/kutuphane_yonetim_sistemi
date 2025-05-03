import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'admin' && password === '1234') {
      navigate('/admin-panel/kitap-ekle');
    } else {
      alert('Kullanıcı adı veya şifre yanlış!');
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/loginFoto.jpg')",
      }}
    >
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96 h-80 space-y-4 flex flex-col justify-between items-center">
        <h2 className="text-2xl font-bold text-center mb-4">Admin Girişi</h2>
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-[#fdd9a0] text-black py-2 rounded hover:bg-[#fcb96e]"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
