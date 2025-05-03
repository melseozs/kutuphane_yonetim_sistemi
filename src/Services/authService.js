import axios from 'axios';

const API_URL = 'http://localhost:8080/auth'; 

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const verify = async (verificationCode) => {
  const response = await axios.post(`${API_URL}/verify`, { code: verificationCode });
  return response.data;
};

export const resendVerificationEmail = async (email) => {
  const response = await axios.post(`${API_URL}/resend`, { email });
  return response.data;
};
