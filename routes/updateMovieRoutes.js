const express = require('express');
const updateMovieCrontrolers = require('../controllers/updateMovieControllers');
const updateMovieRouter = express.Router();

updateMovieRouter.get('/', updateMovieCrontrolers.formUpdateMovie);
updateMovieRouter.put('/', updateMovieCrontrolers.updateMovie);



module.exports = updateMovieRouter