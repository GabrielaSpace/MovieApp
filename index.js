require('dotenv').config();
const {SECRET, BASE_URL, CLIENT_ID, ISSUER} = process.env

const express = require('express');
const request = require('request');//¿Que ez ezto?
const morgan = require('morgan');
const mongoose = require("mongoose");
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('./utils/mongoBase');
require('./utils/pg_pool');
const { auth } = require('express-openid-connect');


const Config = {
    authRequired: false,
    auth0Logout: true,
    secret: SECRET,
    baseURL: BASE_URL,
    clientID: CLIENT_ID,
    issuerBaseURL: ISSUER
};
//swagger
const swaggerUi = require('swagger-ui-express');//Requiere libreria de Swagger (La UI)
const swaggerDocument = require('./swagger.json'); //Requiere ruta relativa del json que contiene la documentación de la API

//jsdoc
//const jsdoc = require('express-jsdoc-swagger');


//Exportacion de las rutas
const adminRoutes = require('./routes/moviesAdminRoutes');
const homeRoutes = require('./routes/homeRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const searchRoutes = require('./routes/searchRoutes');
const createMovieRoutes = require('./routes/createMovieRoutes');
const updateMovieRoutes = require('./routes/updateMovieRoutes');
const favMoviesRoutes = require('./routes/favMoviesRoutes');
const config = require('./utils/auth')

const app = express();
const port = 3000;

// Template engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('combined'));
app.use(cors());
app.use(cookieParser());
app.use(auth(config));
app.use('/api-docs-swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));//Endpoint que servirá la documentación en el navegador, se le pasa la variable que apunta al .json que contiene la documentación
const check = require('./middleware/checkAuth')


// Rutas users
app.get('/', (req, res) => {
    let response = req.oidc.isAuthenticated()
    console.log(response)
    let userData = req.oidc.user
    console.log(userData)
    res.render('home', { isAuthenticated: req.oidc.isAuthenticated() })
})

app.use('/movies', check.isAuth, adminRoutes)
app.use('/dashboard', check.isAuth, dashboardRoutes)
app.use('/search', check.isAuth, searchRoutes)
app.use('/createmovie', check.isAuth, createMovieRoutes)
app.use('/favmovies', check.isAuth, favMoviesRoutes)
app.use('/updatemovie', check.isAuth, updateMovieRoutes)

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})