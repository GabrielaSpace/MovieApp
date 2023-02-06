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

const getDashboard = (req, res) => {
    if (req.oidc.isAuthenticated()) {
        res.render('dashboard');
    } else {
        res.send("Log In First")
    }
}
module.exports = {
    getDashboard
}