const express = require('express');
const userCrontrolers = require("../controllers/userControllers");
const userRouter = express.Router();



userRouter.post('/', userCrontrolers.addFavorite);
userRouter.get('/', userCrontrolers.getFavorites);
userRouter.delete('/', userCrontrolers.deleteFavoriteMovie);

module.exports = userRouter

