require('dotenv').config();
const Movies = require('../models/moviesMongo');
const { API_KEY } = process.env


const getSearch = (req, res) => {
    res.render('search');
}


const getSearchForTitleInMongo = async (req, res) => {
    const title = req.params.title
    let param = await Movies.find({ title }, { _id: 0, __v: 0 });
    param = param[0]
    console.log("***********")
    console.log(param)
    console.log("***********")
    if (param !== undefined) {
        res.status(200).render("searchInMongoForTitle", { param })
    } else {
        const title = "/search/" + req.params.title
        res.redirect(title)
    }
}

const getSearchForTitle = async (req, res) => {


    const resp = await fetch(`http://www.omdbapi.com/?t=${req.params.title}&apikey=` + API_KEY);
    let param = await resp.json();
    if (param.Response !== 'False') {
        res.render("searchTitle", { param });
    } else {
        console.log("ENTRE EN EL ELSE")
        res.render("noMovie")
    }
}

const postFilmForm = async (req, res) => {

    const title = "/search/local/" + req.body.title.toLowerCase()
    res.redirect(title)



}


module.exports = {
    getSearch,
    getSearchForTitle,
    postFilmForm,
    getSearchForTitleInMongo


}