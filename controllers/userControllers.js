const process = require('process');
const users = require('../models/users_sql')
jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET } = process.env

const createUser = async (req, res) => {
    let newUser = req.body
    const user = req.body.emailSignup
    const response = await users.createUser(newUser);
    // const response = await users.validatedUser(newUser);
    if (response !== 0) {

        const payload = {
            check: true,
            user: user
        };
        const token = jwt.sign(payload, SECRET, {
            expiresIn: "12000000ms" // 1200 segundos para que expire
        });
        //Almacenamos el token en las cookies
        res.cookie('token', token).status(200).redirect("/")


    }

}

const validatedUser = async (req, res) => {
    let credentials = req.body;
    const user = req.body.email
    const response = await users.validatedUser(credentials);
    if (response !== 0) {

        const payload = {
            check: true,
            user: user
        };
        const token = jwt.sign(payload, SECRET, {
            expiresIn: "12000000ms" // 1200 segundos para que expire
        });
        //Almacenamos el token en las cookies
        res.cookie('token', token).status(200).redirect("/")


    } else {
        res.status(401).json({ msj: "User not found, check if you write your user correctly" })
    }
}

const addFavorite = async (req, res) => {
    let fav = req.body;
    const response = await users.addFavorite(fav);
    res.status(201).json({
        msg: response
    });
};

const getFavorites = async (req, res) => {
    let user = 6;
    const userMovies = await users.getFavorites(6);
    res.status(200).render("moviesUser", { favMovies: userMovies });
};


const getLogin = (req, res) => {
    res.render('login');
}

const getSingup = (req, res) => {
    res.render('signup');
}

module.exports = {
    createUser,
    validatedUser,
    addFavorite,
    getFavorites,
    getLogin,
    getSingup
}