const express = require('express');
const query = require('../models/users_sql');
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

const adminRoutes = express.Router()

const isAdmin = adminRoutes.use((req, res, next) => {

    const auth = req.oidc.isAuthenticated();
    if (auth) {
    let user = req.oidc.user;
    let email = user.email
    console.log(email)
    const admin = query.isAdmin(email);

    if (admin !== 1){
        next()
    } else {
        res.status(200).redirect('http://localhost:3000/movies') 
    };
    }
})

module.exports = {
    isAdmin
}