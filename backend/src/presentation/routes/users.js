const express = require('express');
const {
  authenticateToken
} = require('../../infrastructure/auth/authMiddleware');
const ListUsers   = require('../../application/usecases/ListUsers');
const GetUser     = require('../../application/usecases/GetUser');
const CreateUser  = require('../../application/usecases/CreateUser');
const UpdateUser  = require('../../application/usecases/UpdateUser');
const DeleteUser  = require('../../application/usecases/DeleteUser');

module.exports = (userRepository) => {
  const router = express.Router();
  router.use(authenticateToken);

  router.get('/',    async (req, res) => {
    const users = await new ListUsers(userRepository).execute();
    res.json(users);
  });

  router.get('/:id', async (req, res) => {
    const user = await new GetUser(userRepository).execute(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  });

  router.post('/',   async (req, res) => {
    const { name, email } = req.body;
    const user = await new CreateUser(userRepository).execute(name, email);
    res.status(201).json(user);
  });

  router.put('/:id', async (req, res) => {
    const changes = await new UpdateUser(userRepository)
      .execute(req.params.id, req.body);
    if (!changes) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User updated' });
  });

  router.delete('/:id', async (req, res) => {
    const changes = await new DeleteUser(userRepository)
      .execute(req.params.id);
    if (!changes) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  });

  return router;
};
