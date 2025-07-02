import React, { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../services/userService';
import type { IUser } from '../services/userService';

const UserForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form, setForm] = useState<IUser>({
    name: '',
    email: ''
  });

  useEffect(() => {
    if (id) {
      API.getUser(Number(id)).then(r => setForm(r.data));
    }
  }, [id]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (id) {
      await API.updateUser(Number(id), form);
    } else {
      await API.createUser(form);
    }
    navigate('/users');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">
        {id ? 'Editar Usuário' : 'Novo Usuário'}
      </h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Nome</label>
          <input
            name="name"
            value={form.name}
            onChange={e =>
              setForm({ ...form, name: e.target.value })
            }
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={e =>
              setForm({ ...form, email: e.target.value })
            }
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {id ? 'Atualizar' : 'Criar'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
