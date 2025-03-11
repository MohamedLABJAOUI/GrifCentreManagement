import React, { useState } from 'react';
import StudentDashboard from '../pages/StudentDashboard';

const LoginForm = ({ type }) => {
  const [cin, setCin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {type === 'student' && (
        <input
          type="text"
          placeholder="CIN"
          value={cin}
          onChange={(e) => setCin(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={StudentDashboard}>Se Connecter</button>
    </form>
  );
};

export default LoginForm;