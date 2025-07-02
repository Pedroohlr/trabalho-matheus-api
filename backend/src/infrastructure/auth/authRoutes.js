const express = require('express');
const jwt = require('jsonwebtoken');

module.exports = () => {
  const router = express.Router();

  // POST /auth/login
  router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // exemplo fixo: admin/admin
    if (username === 'admin' && password === 'admin') {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });
      return res.json({ token });
    }
    res.status(401).json({ error: 'Credenciais inválidas' });
  });

  return router;
};
