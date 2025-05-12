import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = () => {
    const { email, password } = loginData;
    if (!email || !password) {
      alert('Completează emailul și parola!');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/my-bookings');
  };

  return (
    <div className="loginPage">
      <h2>Autentificare</h2>
      <input
        type="email"
        placeholder="Email"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Parolă"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
