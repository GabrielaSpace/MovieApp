require('dotenv').config();
const { API_KEY } = process.env

const getSearch = (req, res) => {
    res.render('search');
}


const getSearchForTitle = async (req, res) => {
    if (req.params.title) {
        let resp = await fetch(`http://www.omdbapi.com/?t=${req.params.title}&apikey=` + API_KEY);
        let param = await resp.json();
        console.log("*********************")
        console.log(param.Title)
        console.log("*********************")
        res.render("searchTitle", { param }); // Pinta datos en el pug   
    }

}

const postFilmForm = async (req, res) => {
    const title = "/search/" + req.body.title
    console.log("Respuesta a la ruta POST SEARCH")
    res.redirect(title)
    

}





module.exports = {
    getSearch,
    getSearchForTitle,
    postFilmForm


}