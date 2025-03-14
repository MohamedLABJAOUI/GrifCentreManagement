// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Update with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for JWT tokens
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api; // 👈 Critical export