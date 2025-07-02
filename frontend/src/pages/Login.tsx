import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/userService';  

interface LoginProps {
  setToken: (t: string | null) => void;
}

const Login: React.FC<LoginProps> = ({ setToken }) => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const nav = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.login(form);
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      nav('/users');
    } catch {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl mb-4 text-center">Login</h1>
        <input
          name="username"
          placeholder="Usuário"
          value={form.username}
          onChange={e =>
            setForm({ ...form, username: e.target.value })
          }
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={form.password}
          onChange={e =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
