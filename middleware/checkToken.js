const express = require('express');
jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET } = process.env
const user = require('../controllers/userControllers')
// app.use(
//     jwt(
//         {
//             secret: SECRET,
//             algorithms: ['HS256'],
//             getToken: req => req.cookies.token
//         }));

const rutasProtegidas = express.Router();
const token = rutasProtegidas.use((req, res, next) => {
    // app.use(
    //     jwt(
    //     { 
    //       secret: SECRET, 
    //       algorithms: ['HS256'],
    //       getToken: req => req.cookies.token
    //     }));
    const token = req.cookies.token
    console.log("Soy el token:", token)

    if (token){
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                console.log(err, "TOKEN INVALIDO");
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(401).send({ 
            cliclk: 'https://www.youtube.com/watch?v=4MhzZsM-0kE' 
        });

    }
});
//Esto es el token que valida en cada ruta que es un usuario o un administrador el que accede
module.exports = {
    token
}