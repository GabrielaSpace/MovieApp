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

module.exports = config