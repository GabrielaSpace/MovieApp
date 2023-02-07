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
    let userData = req.oidc.user
    let userId = userData.sub
    // console.log("Este es el console.log de userData:"+userData)
    console.log("Este es el console.log de userId:"+userId)
    const userMovies = await users.getFavorites(userId);
    res.status(200).render("moviesUser", { favMovies: userMovies });
};

module.exports = {
    addFavorite,
    getFavorites
}