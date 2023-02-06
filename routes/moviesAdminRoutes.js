const express = require('express');
// Rutas de productos
const moviesAdminControllers = require("../controllers/moviesMongoController");
const adminRouter = express.Router();

adminRouter.post('/createMovie', moviesAdminControllers.createMovie);
adminRouter.get('/', moviesAdminControllers.getMovies);
adminRouter.delete('/deleteMovie?', moviesAdminControllers.deleteMovie);


module.exports = adminRouter