import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Giriş başarısız');

      const data = await response.json();
      localStorage.setItem('token', data.token);

      const decoded = jwtDecode(data.token);
      if (decoded.role === 'ADMIN') {
        navigate('/admin-panel/kitap-ekle');
      } else {
        alert('Sadece admin kullanıcı girişi yapılabilir.');
        navigate('/');
      }
    } catch (error) {
      alert('Giriş bilgileri hatalı!');
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/loginFoto.jpg')" }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-96 h-80 space-y-4 flex flex-col justify-between items-center"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Admin Girişi</h2>
        <input
          type="text"
          name="email"
          placeholder="E-posta"
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