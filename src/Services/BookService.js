import axios from 'axios';

const API_URL = 'http://localhost:8080/rest/api/Book/save';

export const addBook = async (kitapData) => {
  try {
    const formData = new FormData();

    for (const key in kitapData) {
      if (key !== 'file') {
        formData.append(key, kitapData[key]);
      }
    }

    formData.append("file", kitapData.file);

    console.log("📦 FormData Gönderiliyor:");
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    // ❌ headers kısmını tamamen kaldır
    const response = await axios.post(API_URL, formData);

    return response.data;
  } catch (error) {
    console.error("Kitap eklenirken hata:", error);
    throw error;
  }
};