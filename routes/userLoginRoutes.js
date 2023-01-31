const express = require('express');
const userCrontrolers = require('../controllers/userControllers');
const userLoginRouter = express.Router();

userLoginRouter.post('/', userCrontrolers.validatedUser);
userLoginRouter.get('/', userCrontrolers.getLogin);


module.exports = userLoginRouter