require('dotenv').config()
const { API_KEY } = process.env
const express = require('express');
const request = require('request');
const morgan = require('morgan');
const mongoose = require("mongoose");
require('./utils/mongoBase');
require('./utils/pg_pool');

const app = express();
const port = 3000;

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('combined'));

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
        let resp = await fetch(`http://www.omdbapi.com/?t=${req.params.title}&apikey=`+API_KEY);
        let param = await resp.json();
        console.log("*********************")
        console.log(param.Title)
        console.log("*********************")
        res.render("searchTitle",{param}); // Pinta datos en el pug   
}})


app.get('/movies', (req, res) => {
    //if (authenticated) {
        res.render('moviesAdmin');
    /*} else {
        res.render('moviesUser')*/
    })

// app.post('/search', (req, res) =>
//     res.redirect(`/search/${req.body.title}`))


// app.post('/search', function (req, res) {
//     const title = '/prueba/search/' + req.body.title
//     console.log("HOLA SOY UN POST")
//     console.log(req.body.title)
//     res.redirect(title)
// })

app.post('/search', function (req, res) {
    const title = "/search/" + req.body.title
    console.log("Hola SOY un POST")
    res.redirect(title)
})

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})



