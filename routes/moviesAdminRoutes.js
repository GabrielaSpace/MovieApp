const express = require('express');
// Rutas de productos
const moviesAdminControllers = require("../controllers/moviesMongoController");
const adminRouter = express.Router();

// entriesApiRouter.get('/', entriesApiController.getEntries);
adminRouter.post('/', moviesAdminControllers.createMovie);
adminRouter.get('/', moviesAdminControllers.getMovies);
adminRouter.delete('/', moviesAdminControllers.deleteMovie);
adminRouter.put('/', moviesAdminControllers.updateMovie);


// entriesApiRouter.get('/', entriesApiController.getAllAuthors);

module.exports = adminRouter