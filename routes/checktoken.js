const express = require('express');
jwt = require('jsonwebtoken');
require('dotenv').config();
const {SECRET} = process.env
const keepToken = require('../controllers/userControllers')

const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
    const token = keepToken()
    console.log(token)

    if (token) {
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                return res.status(400).json({ mensaje: 'Token inválida' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(401).send({
            mensaje: 'Token no proveída.'
        });
    }
});
//Esto es el token que valida en cada ruta que es un usuario o un administrador el que accede
module.exports = {
    token
}