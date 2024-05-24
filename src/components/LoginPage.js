// LoginPage.js

import React, { useState } from 'react';

function LoginPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    // Example: Call API to authenticate user
    // If successful, set the user state
    setUser({ email, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
