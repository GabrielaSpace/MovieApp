const express = require('express');
const logoutCrontrolers = require('../controllers/logoutControllers');
const userLogoutRouter = express.Router();


userLogoutRouter.get('/', logoutCrontrolers.logout);



module.exports = userLogoutRouter