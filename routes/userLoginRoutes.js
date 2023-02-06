const express = require('express');
const userCrontrolers = require('../controllers/userControllers');
const userLoginRouter = express.Router();


userLoginRouter.get('/', userCrontrolers.getLogin);
userLoginRouter.post('/', userCrontrolers.validatedUser);


module.exports = userLoginRouter