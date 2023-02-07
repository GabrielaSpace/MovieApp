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


const authRoutes = express.Router();




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