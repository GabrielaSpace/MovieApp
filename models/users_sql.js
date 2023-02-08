/**
 * @author Javier Fuertes, Gabriela García y Pablo Mateos 
 * @exports usersSQL
 * @namespace SQLQueries 
 */
const pool = require('../utils/pg_pool');
const queries = require('../queries/queriesUser');

/**
 * Description: This function adds the user's favorite movies to the database.
 * @memberof SQLQueries 
 * @method addFavorite
 * @async 
 * @param {Object} fav - Object representing a favorite film
 * @param {string} fav.user - User ID
 * @param {string} fav.title - Film title
 * @param {string} fav.year - Film release year
 * @param {string} fav.director - Film director
 * @param {string} fav.genre - Film genre
 * @param {string} fav.runtime - Film runtime
 * @param {string} fav.img - URL of the film's poster image
 * @return {Object} save movie in database
 * @throws {Error} error saving the movie in the database, message with the error
 */
const addFavorite = async (fav) => {
    const { user, title, year, director, genre, runtime, img } = fav;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.addFavorite, [user, title, year, director, genre, runtime, img]);
        result = data.rowCount;
        console.log("POST FAVS");
    }
    catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release()
    }
    return result
}
/**
 * Description: This function returns the user's favorites to the database
 * @memberof SQLQueries 
 * @method getFavorites
 * @async 
 * @return {Object}  all the user's favorite movies
 * @throws {Error} message with the error
 */
const getFavorites = async (user) => {
    console.log(user);
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getFavorites, [user]);
        result = data.rows;
        console.log(result);
    }
    catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release()
    }
    return result
}

const deleteFavorite = async (userId, title) => {
    console.log(userId, title);
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteFavorite, [userId, title]);
        result = data.rows;
        console.log(result);
    }
    catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release()
    }
    return result
}

const users = {
    addFavorite,
    getFavorites,
    deleteFavorite
}

module.exports = users;