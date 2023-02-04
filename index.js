require('dotenv').config()
const { API_KEY, CONFIG } = process.env
const express = require('express');
const { auth } = require('express-openid-connect');
const request = require('request');
const morgan = require('morgan');
const mongoose = require("mongoose");
const path = require('path')
const checkToken = require('./middleware/checkToken')
require('./utils/mongoBase');
require('./utils/pg_pool');
const usersRoutes = require('./routes/userRoutes')
const adminRoutes =require('./routes/moviesAdminRoutes')

const app = express();
const port = 3000;

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'nd6pT5UriHxd_K4iJYWh3JpLrsdhyWtatbC3UcG5tkMW67AknzA_Ht1w_s92i0M5',
    baseURL: 'http://localhost:3000',
    clientID: 'N281HJug6yrYL0sD7rIXAli4HEmRCU2s',
    issuerBaseURL: 'https://dev-822wdkmq14eefdle.eu.auth0.com'
  };

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('combined'));
// auth router attaches /login, /logout, and / routes to the baseURL
app.use(auth(config));

//Rutas // Rutas users
app.use('/signup', usersRoutes)
app.use('/',usersRoutes)
app.use('/movies', adminRoutes)
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });


// const key = app.set('llave', CONFIG);
// module.exports = {
//     key
// }

// app.post('/', (req, res) => {
//     if(req.body.usuario === "alex") {
// 		const payload = {
// 			check:  true,
//             user:"alex"
// 		};
// 		const token = jwt.sign(payload, app.get('llave'), {
// 			expiresIn: "1200000ms" // 1200 segundos para que expire
// 		});
// 		res.status(200).json({
// 			mensaje: 'Autenticación correcta',
// 			token: token
// 		});
//     } else {
//         res.status(401).json({ mensaje: "Usuario o contraseña incorrectos"})
//     }
// })


app.get('/', (req, res) => {
    res.render('login');
})




app.get('/signup', (req, res) => {
    res.render('signup');
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

app.get('/search', (req, res) => {
    res.render('search');
})

app.get('/search/:title', async (req, res) => {
    if (req.params.title) {
        let resp = await fetch(`http://www.omdbapi.com/?t=${req.params.title}&apikey=` + API_KEY);
        let param = await resp.json();
        console.log("*********************")
        console.log(param.Title)
        console.log("*********************")
        res.render("searchTitle", { param }); // Pinta datos en el pug   
    }
})


app.get('/movies', (req, res) => {
    //if (authenticated) {
    res.render('moviesAdmin');
    /*} else {
        res.render('moviesUser')*/
})


app.get('/createmovie', (req, res) => {
    //if (authenticated) {
    res.render('createMovie');
    /*} else {
        res.render('moviesUser')*/
})



app.post('/search', (req, res) => {
    const title = "/search/" + req.body.title
    console.log("Respuesta a la ruta POST SEARCH")
    res.redirect(title)
})

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})



