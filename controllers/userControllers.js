/**
 * @author Javier Fuertes, Gabriela García y Pablo Mateos 
 * @exports userControllers
 * @namespace userControllers
 */
const process = require('process');
const users = require('../models/users_sql')


/**
 * Description: This function save a favorite movie of user in the database.
 * @memberof userControllers
 * @method addFavorite
 * @async  
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @return {Object} - an object containing the scraped info.
 * @throws {Error} message with the error during save process.
 */
 const addFavorite = async (req, res) => {
    let fav = req.body;
    const response = await users.addFavorite(fav);
    res.status(201).json({
        msg: response
    });
};



/**
 * Description: This function get all favorites movies of user in the database.
 * @memberof userControllers
 * @method getFavorites
 * @async  
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @desc {Error} Obtain a user's favorites movies from both the API and MongoDB
 */

const getFavorites = async (req, res) => {
    let userData = req.oidc.user
    let userId = userData.sub
    const padding = "        "
    const padding2 = "    "
    console.log("Este es el console.log de userId:"+userId)
    const userMoviesApi = await users.getFavorites(userId+padding);
    const userMoviesMongo = await users.getFavorites(userId+padding2);
    res.status(200).render("moviesUser", { favMoviesApi: userMoviesApi, favMongoMovies: userMoviesMongo });
};

module.exports = {
    addFavorite,
    getFavorites
}