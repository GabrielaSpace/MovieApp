const express = require('express');

/**
 * @author Javier Fuertes, Gabriela García y Pablo Mateos 
 * @exports createMovie
 * @namespace Middlewares
 */


const authRoutes = express.Router();
/**
 * Description: This function is used to verify if the user is authenticated.
 * @memberof Middlewares
 * @method  isAuth
 * @function

 */



const isAuth = authRoutes.use((req, res, next) => {

    const auth = req.oidc.isAuthenticated();

    if (auth){
        next()
    } else {
        res.status(403).send( 
            res.send("Forbidden") 
        );

    }
});

module.exports = {
    isAuth
}