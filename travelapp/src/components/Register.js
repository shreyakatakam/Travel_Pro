import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import indiaImage from './india1.webp';
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch the registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Check if the username is already registered
    const userExists = registeredUsers.some(user => user.username === username);
    if (userExists) {
      setError('Username is already registered. Please choose another one.');
      return;
    }

    // Save the new user to localStorage
    registeredUsers.push({ username, password });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${indiaImage})` }}>
      <div className="login">
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        <p style={{ textAlign:"center",marginLeft:"70px" }}>Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
    </div>
  );
}

export default Register;
