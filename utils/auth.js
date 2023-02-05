const { auth } = require('express-openid-connect');
require('dotenv').config();
const {SECRET} = process.env;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: 'http://localhost:3000',
  clientID: 'N281HJug6yrYL0sD7rIXAli4HEmRCU2s',
  issuerBaseURL: 'https://dev-822wdkmq14eefdle.eu.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// req.isAuthenticated is provided from the auth router
/* app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
}); */

module.exports = config