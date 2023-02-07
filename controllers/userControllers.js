const process = require('process');
const users = require('../models/users_sql')

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

module.exports = {
    addFavorite,
    getFavorites
}