const users = require('../models/users_sql')

const createUser = async (req, res) => {
    let newUser = req.body
    const response = await users.createUser(newUser);
    res.status(201).json({
        user_created: response,
        data: newUser
    })
}

const validatedUser = async (req, res) => {
    let credentials = req.body;
    console.log(req.body)
    const response = await users.login(credentials);
    if (response !== null) {

        res.status(201).json({
            user_validated: response,
        })
    } else {
        res.status(400).json({
            msj: "User not found, check if you write your user correctly"
        })
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
    res.status(200).render("moviesUser", {favMovies: userMovies});
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