import axios from 'axios';

const API_URL = 'http://localhost:8080/auth';

// Signup işlemi
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Signup işlemi sırasında hata:', error);
    throw error;  // Hata ile ilgili bilgi ver
  }
};

// Login işlemi
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);

    // Token ve role bilgisi varsa localStorage'a kaydet
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);

      // Backend'den gelen role bilgisini kontrol et, yoksa varsayılan 'USER' olarak kaydet
      const role = response.data.role ? response.data.role : 'USER';
      localStorage.setItem('role', role);
    }

    return response.data;
  } catch (err) {
    console.error('Login işlemi sırasında hata:', err);
    throw err;  // Hata ile ilgili bilgi ver
  }
};

// Email doğrulama işlemi
export const verify = async (verificationCode) => {
  try {
    const token = localStorage.getItem('token');  // Token'ı localStorage'dan al

    if (!token) {
      throw new Error('Token bulunamadı, lütfen giriş yapın.');
    }

    const response = await axios.post(
      `${API_URL}/verify`,
      { code: verificationCode },
      {
        headers: {
          Authorization: `Bearer ${token}`, // JWT token'ı Authorization header'ına ekliyoruz
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Email doğrulama işlemi sırasında hata:', error);
    throw error;  // Hata ile ilgili bilgi ver
  }
};

// Yeniden doğrulama emaili gönderme
export const resendVerificationEmail = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/resend?email=${email}`);
    return response.data;
  } catch (error) {
    console.error('Doğrulama emaili gönderme işlemi sırasında hata:', error);
    throw error;  // Hata ile ilgili bilgi ver
  }
};
