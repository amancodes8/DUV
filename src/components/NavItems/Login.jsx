import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: 'aman', password: '1111' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication (replace with actual logic)
    if (formData.username === 'aman' && formData.password === '1111') {
      navigate('/studenterp'); // Redirect to Student ERP page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="bg-slate-800 p-5 mt-20">
      <h1 className="text-4xl text-center text-white mb-8">Login</h1>
      <div className="max-w-md mx-auto bg-slate-900 p-6 rounded-lg shadow-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username/enrollment number"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded-md"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
