// src/context/AuthContext.js
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const response = await api.post('/login', credentials);
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      navigate('/student-dashboard'); // Redirect after login
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed! Check credentials.');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);