const express = require('express');
// Rutas de productos
const userCrontrolers = require("../controllers/userControllers");
const userRouter = express.Router();



userRouter.post('/', userCrontrolers.addFavorite)
userRouter.get('/', userCrontrolers.getFavorites)

module.exports = userRouter

