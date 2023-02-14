const express = require('express');
const app = express();

const { auth } = require('express-openid-connect');
const { SECRET, BASE_URL, CLIENT_ID, ISSUER } = process.env
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: SECRET,
    baseURL: BASE_URL,
    clientID: CLIENT_ID,
    issuerBaseURL: ISSUER
};

app.use(auth(config))

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