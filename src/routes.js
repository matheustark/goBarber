import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const users = await User.create({
    name: 'Matheus Gonçalves',
    email: 'matheusgoncalves@gmail.com',
    password_hash: '123456'
  });

  res.json(users);
});

module.exports = routes;
