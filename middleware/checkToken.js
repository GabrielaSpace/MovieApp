const express = require('express');
const key = require('../index')

const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, key, (err, decoded) => {
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
    rutasProtegidas
}