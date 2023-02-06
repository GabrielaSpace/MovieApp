// require('dotenv').config()
// const { API_KEY, CONFIG } = process.env
const express = require('express');
const request = require('request');//¿Que ez ezto?
const morgan = require('morgan');
const mongoose = require("mongoose");
const path = require('path')
const checkToken = require('./middleware/checkToken')
require('./utils/mongoBase');
require('./utils/pg_pool');
const userSingupRoutes = require('./routes/userSingupRoutes')
const userLoginRoutes = require('./routes/userLoginRoutes')
const adminRoutes = require('./routes/moviesAdminRoutes')
const homeRoutes = require('./routes/homeRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
const searchRoutes = require('./routes/searchRoutes')
const createMovie = require('./routes/createMovieRoutes')
const updateMovie = require('./routes/updateMovieRoutes')
const favmovies = require('./routes/userRoutes')

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

//Rutas // Rutas users
app.use('/signup', userSingupRoutes)
app.use('/login', userLoginRoutes)
app.use('/movies', adminRoutes)
app.use('/', homeRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/search', searchRoutes)
app.use('/createmovie',createMovie)
app.use('/favmovies', favmovies)
app.use('/updateMovie',updateMovie)

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})



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
