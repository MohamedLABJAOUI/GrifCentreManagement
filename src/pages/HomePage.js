import React from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="content">
        <h1>Bienvenue au Centre Grif</h1>
        <p>Le centre de formation pour les étudiants et les formateurs.</p>
      </div>
    </div>
  );
};

export default HomePage;