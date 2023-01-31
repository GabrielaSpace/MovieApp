const express = require('express');
const userCrontrolers = require('../controllers/userControllers');
const userSingupRouter = express.Router();


userSingupRouter.post('/', userCrontrolers.createUser);
userSingupRouter.get('/', userCrontrolers.getSingup);

module.exports = userSingupRouter