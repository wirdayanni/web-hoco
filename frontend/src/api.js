// api.js
import axios from "axios";

// 1) Bikin "instance" axios (ibaratnya salinan axios yang sudah di-set base URL)
const api = axios.create({
  baseURL: "http://localhost:5000", // alamat backend
});

// 2) Tambahkan "interceptor" → ini kayak penjaga sebelum request dikirim
api.interceptors.request.use((config) => {
  // Ambil token dari localStorage (disimpan setelah login)
  const token = localStorage.getItem("token");

  // Kalau ada token → tambahin ke header "Authorization"
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config; // lanjut kirim request
});

export default api;