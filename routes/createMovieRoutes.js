const express = require('express');
const createMovieCrontrolers = require('../controllers/createMovieControllers');
const createMovieRouter = express.Router();

createMovieRouter.get('/', createMovieCrontrolers.createMovie);


module.exports = createMovieRouter