import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Grif Centre</div>
      <div className="links">
        <Link to="/student-login">Espace Étudiant</Link>
        <Link to="/instructor-login">Espace Formateur</Link>
      </div>
    </nav>
  );
};

export default Navbar;