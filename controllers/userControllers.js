const process = require('process');
const users = require('../models/users_sql')
jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET } = process.env

const createUser = async (req, res) => {
    let newUser = req.body
    const response = await users.createUser(newUser);
    res.status(201).json({
        user_created: response,
        data: newUser
    })
}

// const validatedUser = async (req, res) => {
//     let credentials = req.body;
//     console.log(req.body)
//     const response = await users.validatedUser(credentials);
//     if (response !== null) {

//         res.status(201).json({
//             user_validated: response,
//         })
//     } else {
//         res.status(400).json({
//             msj: "User not found, check if you write your user correctly"
//         })
//     }
// }

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
        res.cookie('token', token).status(200).json({
            user_validated: response,
            msj: 'Correctly autenticated',
            token: token
        });


    } else {
        res.status(401).json({ msj: "User not found, check if you write your user correctly" })
    }
}


const keepToken = (token) => {
    const getToken = token
    console.log("********************")
    console.log(getToken)

    return getToken
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


// const validatedUser = async (req, res) => {
//     let credentials = req.body;
//     const user = req.body.email
//     console.log(user)
//     console.log(req.body)
//     const response = await users.login(credentials);
//     if (response !== null) {

//         // const key = app.set('llave', CONFIG);
//         // module.exports = {
//         //     key
//         // }

//         // app.post('/', (req, res) => {
//         // if (req.body.usuario) {
//         const payload = {
//             check: true,
//             user: user
//         };
//         const token = jwt.sign(payload, SECRET, {
//             expiresIn: "12000000ms" // 1200 segundos para que expire
//         });
//         res.status(200).json({
//             user_validated: response,
//             msj: 'Correctly autenticated',
//             token: token
//         });
//     } else {
//         res.status(401).json({ msj: "User not found, check if you write your user correctly" })
//     }
// }