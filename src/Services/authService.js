import axios from 'axios';

const API_URL = 'http://localhost:8080/auth'; 

// Kayıt olma işlemi
export const signup = async (userData) => {
  try {
    const { email, username, password } = userData;  // userData'dan email, username ve password alıyoruz
    const response = await axios.post(`${API_URL}/signup`, {
      email,
      username,
      password
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Giriş yapma işlemi
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// E-posta doğrulama işlemi
export const verify = async (verificationCode) => {
  try {
    const response = await axios.post(`${API_URL}/verify`, { code: verificationCode });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// E-posta doğrulama e-postasını yeniden gönderme
export const resendVerificationEmail = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/resend`, { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};
