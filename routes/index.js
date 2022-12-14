const express = require('express');

const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('', router);
  router.use('/users', usersRouter);
}

module.exports = routerApi;