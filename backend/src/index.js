require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { initDB, saveDB } = require('./infrastructure/database/db');
const UserRepositorySQLite = require('./infrastructure/database/UserRepositorySQLite');
const authRoutes = require('./infrastructure/auth/authRoutes');
const userRoutes = require('./presentation/routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
app.use(express.json());

initDB().then(db => {
  const userRepository = new UserRepositorySQLite(db, saveDB);

  // rota de login (retorna JWT)
  app.use('/auth', authRoutes());

  // todas as rotas /api/users precisam de token
  app.use('/api/users', userRoutes(userRepository));

  app.listen(PORT, () =>
    console.log(`🚀 Backend rodando em http://localhost:${PORT}`)
  );
}).catch(err => {
  console.error('Erro ao inicializar o DB:', err);
});
