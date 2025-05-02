import axios from 'axios';

const API_URL = 'http://localhost:8080/rest/api/Book/save'; 

export const addBook = async (bookData) => {
  try {
    const token = localStorage.getItem('token');

    const formData = new FormData();
    Object.entries(bookData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await axios.post(API_URL, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Kitap eklenirken hata:', error.response?.data || error.message);
    throw error;
  }
};
