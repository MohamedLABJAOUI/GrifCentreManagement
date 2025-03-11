import React from 'react';
import LoginForm from '../components/LoginForm';
import './StudentLogin.css';

const StudentLogin = () => {
  return (
    <div className="student-login">
      <h2>Connexion Étudiant</h2>
      <LoginForm type="student" />
    </div>
  );
};

export default StudentLogin;