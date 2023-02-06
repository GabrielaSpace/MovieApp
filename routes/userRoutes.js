const { response } = require('express');
const express = require('express');
// Rutas de productos
const userCrontrolers = require("../controllers/userControllers");
const userRouter = express.Router();

// entriesApiRouter.get('/', entriesApiController.getEntries);
//userRouter.post('/', userCrontrolers.validatedUser);
//userRouter.post('/', userCrontrolers.createUser);
//userRouter.post('/signup', userCrontrolers.createUser);
/* entriesApiRouter.delete('/', entriesApiController.deleteEntry);
entriesApiRouter.put('/', entriesApiController.updateEntry); */
userRouter.post('/search/:title', userCrontrolers.addFavorite)
userRouter.get('/', (req, res) => {
    let response = req.oidc.isAuthenticated()
    console.log(response)
    let userData = req.oidc.user
    console.log(userData)
    res.render('index', {isAuthenticated: req.oidc.isAuthenticated()})
})
userRouter.get('/dashboard', (req, res) => {
    let response = req.oidc.isAuthenticated()
    console.log(response)
    let userData = req.oidc.user
    console.log(userData.sub)
    res.render('dashboard', { isAuthenticated: req.oidc.isAuthenticated() })
})
// entriesApiRouter.get('/', entriesApiController.getAllAuthors);

module.exports = userRouter