const express = require('express');
// Rutas de productos
const moviesAdminControllers = require("../controllers/moviesMongoController");
const adminRouter = express.Router();

// entriesApiRouter.get('/', entriesApiController.getEntries);
adminRouter.post('/createMovie', moviesAdminControllers.createMovie);
adminRouter.get('/', moviesAdminControllers.getMovies);
adminRouter.delete('/deleteMovie?', moviesAdminControllers.deleteMovie);
adminRouter.put('/updateMovie', moviesAdminControllers.updateMovie);


// entriesApiRouter.get('/', entriesApiController.getAllAuthors);

module.exports = adminRouter