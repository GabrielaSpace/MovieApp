//search controllers

/**
 * @author Javier Fuertes, Gabriela García y Pablo Mateos 
 * @exports search
 * @namespace searchControllers
 */
require('dotenv').config();
const Movies = require('../models/moviesMongo');
const scraper = require('../utils/scraper');
const { API_KEY } = process.env

/**
 * Description: This function renders the search view
 * @memberof  Renders
 * @method  getSearch
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */

const getSearch = (req, res) => {
    res.render('search');
}

/**
 * Description: This function gets all the movies in the database.
 * @memberof searchControllers
 * @method startScraping
 * @async 
 * @param {string} title - The title to search for.
 * @return {Object} - an object containing the scraped info.
 * @throws {Error} message with the error during the scraping process.
 */

const startScraping = async (title) => {
    try {
        const movies = await scraper.scrap("https://www.filmaffinity.com/en/search.php?stype=title&stext=" + title);
        return movies 
    } catch (error) {
        console.log("Error Scraping")
    }

}
/**
 * Description: This function gets all the movies in the database.
 * @memberof searchControllers
 * @method getSearchForTitleInMongo 
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @return {Object} - an object containing the scraped info.
 * @throws {Error} message with the error during the search process.
 */

const getSearchForTitleInMongo = async (req, res) => {

    try {
        const title = req.params.title;
        let param = await Movies.find({ title }, { _id: 0, __v: 0 });
        param = param[0];
        console.log(param);
        if (param !== undefined) {
            const critics = await startScraping(title);
            console.log("ENTRE EN SEARCH SEARCH MONGO");
            console.log(critics);
            let userData = req.oidc.user;
            let userId = userData.sub;
            if (userId.startsWith('auth0|')) {
                console.log(userId.slice(userId.indexOf('|') + 1));
                userId = userId.slice(userId.indexOf('|') + 1).trim();

            }

            res.status(200).render("searchInMongoForTitle", { param, critics: critics, userId });

        } else {
            const title = "/search/" + req.params.title;
            res.redirect(title);
        }
    } catch (error) {
        res.status(500).send({ error: "An error occurred while searching in MongoDB: " + error.message });
    }
};

/**
 * Description: This function gets all the movies in the database.
 * @memberof searchControllers
 * @method getSearchForTitle
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @return {Object} - an object containing the scraped info.
 * @throws {Error} message with the error during the search process.
 */
const getSearchForTitle = async (req, res) => {
    try {
        const resp = await fetch(`http://www.omdbapi.com/?t=${req.params.title}&apikey=` + API_KEY);
        let param = await resp.json();
        console.log(param);
        const title = req.params.title;
        if (param.Response !== 'False') {
            const critics = await startScraping(title);
            console.log("ENTRE EN SEARCH SEARCH TITLE");
            console.log(critics);
            let userData = req.oidc.user;
            let userId = userData.sub;
            if (userId.startsWith('auth0|')) {
                console.log(userId.slice(userId.indexOf('|') + 1));
                userId = userId.slice(userId.indexOf('|') + 1).trim();

            }
            res.status(200).render("searchTitle", { param, critics: critics, userId });

        } else {
            console.log("ENTRE EN EL ELSE");
            res.render("noMovie");

        }
    } catch (error) {
        res.status(500).send({ error: "An error occurred while searching in OMDB API: " + error.message });
    }
};

/**
 * Description: This function gets all the movies in the database.
 * @memberof searchControllers
 * @method postFilmForm
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @param {string} title - The title to search for.
 * @return {void} The function does not return any value.
 */
const postFilmForm = async (req, res) => {

    const title = "/search/local/" + req.body.title
    res.redirect(title)
}



module.exports = {
    getSearch,
    getSearchForTitle,
    postFilmForm,
    getSearchForTitleInMongo,
    startScraping
}