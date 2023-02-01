const express = require('express');
const dashboardCrontrolers = require('../controllers/dashboardControllers');
const dashboardRouter = express.Router();

dashboardRouter.get('/', dashboardCrontrolers.getDashboard);


module.exports = dashboardRouter