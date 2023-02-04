require('dotenv').config();
const {SECRET} = process.env
// const {auth} = require('express-openid-connect');

const express = require('express');
const request = require('request');//¿Que ez ezto?
const morgan = require('morgan');
const mongoose = require("mongoose");
const path = require('path');
const cors = require('cors');
const jwt = require('express-jwt');
const cookieParser = require('cookie-parser');
require('./utils/mongoBase');
require('./utils/pg_pool');

//Exportacion de las rutas
const userSingupRoutes = require('./routes/userSingupRoutes');
const userLoginRoutes = require('./routes/userLoginRoutes');
const adminRoutes = require('./routes/moviesAdminRoutes');
const homeRoutes = require('./routes/homeRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const searchRoutes = require('./routes/searchRoutes');
const createMovieRoutes = require('./routes/createMovieRoutes');
const updateMovieRoutes = require('./routes/updateMovieRoutes');
const favMoviesRoutes = require('./routes/favMoviesRoutes');
const logoutRoutes = require('./routes/logoutRoutes');

// const config = require('./utils/auth')

const app = express();
const port = 3000;

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('combined'));
app.use(cors());
app.use(cookieParser());
const checkToken = require('./middleware/checkToken');



//Rutas // Rutas users
app.use('/signup', userSingupRoutes)
app.use('/login', userLoginRoutes)
app.use('/movies',checkToken.token, adminRoutes)
app.use('/', homeRoutes)
app.use('/dashboard',checkToken.token, dashboardRoutes)
app.use('/search',checkToken.token, searchRoutes)
app.use('/createmovie',checkToken.token, createMovieRoutes)
app.use('/favmovies',checkToken.token, favMoviesRoutes)
app.use('/updatemovie',checkToken.token, updateMovieRoutes)
app.use('/logout', logoutRoutes)

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})