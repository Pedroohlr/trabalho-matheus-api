import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import axios from 'axios';

import Login from './pages/Login';
import UserList from './pages/UserList';
import UserForm from './pages/UserForm';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  );

  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.headers.common['Authorization'] = token
      ? `Bearer ${token}`
      : '';
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login setToken={setToken} />}
        />
        <Route
          path="/users"
          element={
            token ? <UserList /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/users/new"
          element={
            token ? <UserForm /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/users/:id/edit"
          element={
            token ? <UserForm /> : <Navigate to="/login" />
          }
        />
        <Route
          path="*"
          element={
            <Navigate to={token ? '/users' : '/login'} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
