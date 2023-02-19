/**
 * @author Javier Fuertes, Gabriela García y Pablo Mateos 
 * @exports moviesAdmin
 * @namespace MongoControllers
 */

const Movies = require('../models/moviesMongo')
/**
 * Description: This function gets all the movies in the database.
 * @memberof MongoControllers
 * @method getMovies
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @return {Object} movies in the database
 * @throws {Error} message with the error.
 */

const getMovies = async (req, res) => {
    try {
        let movies = await Movies.find({Movies}, { _id: 0, __v: 0});
        res.status(200).render("moviesAdmin", {allMovies: movies})

    }
    catch (err) {
        res.status(400).json({ msj: err.message });
    }
}

/**
 * Description: This function renders the create movie view
 * @memberof Renders
 * @method  createMovie
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */

const getFormMovie = (req, res) => {
    res.render('createMovie');
  
}

/**
 * Description: This function creates a movie in the database.
 * @memberof MongoControllers
 * @method createMovie
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @return {Object} JSON, message indicating that the movie was successfully added to the database.
 * @throws {Error} message with the error.
 */

const createMovie = async (req, res) => {
    const newMovie = req.body;
    try {
        let response = await new Movies(newMovie);
        let answer = await response.save();
        console.log("Respondiendo a la ruta POST MOVIES")
        res.status(201).json({
            msj: `New movie added to DB.`,
            movie: answer
        });
    } catch (err) {
        res.status(400).json({ msj: err.message })
    }
}
/**
 * Description: This function deletes a movie in the database.
 * @memberof MongoControllers
 * @method deleteMovie
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @return {Object} JSON, message indicating that the movie was successfully deleted to the database.
 * @throws {Error} message with the error.
 */
const deleteMovie = async (req,res)=>{
    try {
        let {title} = req.query
        let answer = await Movies.findOneAndDelete({title})

        const msj = `Has eliminado la pelicula: ${answer.title}, de la base de datos` ;
        console.log("Respondiendo a la ruta DELETE MOVIES")
        res.status(200).json({"message":msj})
    } catch (err) {
        res.status(400).json({msj: err.message});
    }
}

/**
 * Description: This function renders the update movie view
 * @memberof Renders
 * @method  updateMovie
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */


const formUpdateMovie = (req, res) => {
    res.render('updateMovie');
}
/**
 * Description: This function updates a movie in the database.
 * @memberof MongoControllers
 * @method updateMovie
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @return {Object} JSON, message indicating that the movie was successfully updated to the database.
 * @throws {Error} message with the error.
 */
const updateMovie = async (req, res) => {

    const { img, title, year, director, genre, runtime, plot, actors, language } = req.body
    console.log(req.body)


    try {
        const movieUpdate = await Movies.findOneAndUpdate({ title }, { img, year, director, genre, runtime, plot, actors, language })
        console.log(req.body)
        await movieUpdate.save()
        console.log("Respondiendo a la ruta PUT MOVIES")
        res.status(201).json({
            msj: `La pelicula ${title} ha sido actualizado.`,
            movie: movieUpdate
        })

    } catch (err) {
        console.log(err)

        res.status(400).json({ msj: err.message })

    }

}

//ruta put en updatemovieControllers

module.exports = {
    getMovies,
    createMovie,
    deleteMovie,
    formUpdateMovie,
    updateMovie,
    getFormMovie
}