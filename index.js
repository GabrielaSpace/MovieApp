const express = require('express')
const request = require('request')
const morgan = require('morgan')

const app = express()
const port = 3000

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.render('login')
})

app.post('/', function (req, res) {
    let email = req.body;
    console.log(email)
    res.send(email)
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})