const express = require('express');
const userCrontrolers = require('../controllers/userControllers');
const loginmodel = require('../models/users_sql')
const userLoginRouter = express.Router();


userLoginRouter.get('/', userCrontrolers.getLogin);

module.exports = userLoginRouter