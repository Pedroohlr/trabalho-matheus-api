import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/userService';
import type { IUser } from '../services/userService';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    API.listUsers().then(r => setUsers(r.data));
  }, []);

  const onDelete = async (id: number) => {
    if (window.confirm('Deseja realmente excluir?')) {
      await API.deleteUser(id);
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl">Usuários</h1>
        <Link
          to="/users/new"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Novo
        </Link>
      </div>

      <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Nome</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-t">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3 space-x-2 text-center">
                <Link
                  to={`/users/${u.id}/edit`}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </Link>
                <button
                  onClick={() => u.id && onDelete(u.id)}
                  className="text-red-600 hover:underline"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
