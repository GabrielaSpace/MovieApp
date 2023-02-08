const express = require('express');

const moviesAdminControllers = require("../controllers/moviesMongoController");
const adminRouter = express.Router();

//Ruta para que el admin pueda crear una pelicula en la base de mongodb:
adminRouter.post('/createMovie', moviesAdminControllers.createMovie);
//Ruta para que el admin pueda pedir las peliculas de la base de mongo:
adminRouter.get('/', moviesAdminControllers.getMovies);
//Ruta para que el admin pueda eliminar una pelicula de la base de mongo:
adminRouter.delete('/deleteMovie?', moviesAdminControllers.deleteMovie);
//Ruta para que el admin pueda pedir el formulario para actualizar una pelicula de la base de mongo:
adminRouter.get('/updatemovie', moviesAdminControllers.formUpdateMovie);
//Ruta para que el admin pueda actualizar una pelicula de la base de mongo:
adminRouter.put('/updatemovie', moviesAdminControllers.updateMovie);


module.exports = adminRouter