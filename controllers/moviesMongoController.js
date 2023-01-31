const Movies = require('../models/moviesMongo')

const getMovies = async (req, res) => {
    try {
        let movies = await Movies.find({Movies}, { _id: 0, __v: 0});
        
        console.log(movies)
        //Al renderizarlo el objeto movies se pasa con un valor de la propiedad allMovies, esta propiedad en pug funciona como un objeto.
        res.status(200).render("moviesAdmin", {allMovies: movies})   
        
        //- h1 Title: #{param.Title}
                //- img(src=param.Poster)
                //- p Year: #{param.Year}
                //- p Director: #{param.Director}
                //- p Genre: #{param.Genre}
                //- p Runtime: #{param.Runtime}
                //- p Plot : #{param.Plot}
                //- p Actors : #{param.Actors}
                //- p Ratings: #{param.Ratings} 
                //- p Language : #{param.Language}
                // title: { 
                //     type: String, 
                //     required: true,
                //     unique: true 
                // },
                // img: {
                //     type: String,
                //     required: true
                // },
                // year:{ 
                //     type: Number, 
                //     required: true
                // },
                // director: { 
                //     type: String, 
                //     required: true 
                // },
                // genre:{
                //     type: String, 
                //     required: true
                // },
                // runtime:{
                //     type: String, 
                //     required: true
                // },
                // plot:{
                //     type: String, 
                //     required: true
                // },
                // actors:{
                //     type: String,
                //     required: true
                  
                // },
                // /* ratings:{
                //     type: Object, 
                //     required: true
                // }, */
                // language:{
                //     type: String, 
                //     required: true
                // }
    }
    catch (err) {
        res.status(400).json({ msj: err.message });
        
    }
}

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

const deleteMovie = async (req,res)=>{
    try {
        let {title} = req.body
        let answer = await Movies.findOneAndDelete({title})

        const msj = `Has eliminado la pelicula: ${answer.title}, de la base de datos` ;
        console.log("Respondiendo a la ruta DELETE MOVIES")
        res.status(200).json({"message":msj})
    } catch (err) {
        res.status(400).json({msj: err.message});
    }
}

const updateMovie = async (req, res) => {

    const { title, year, director, genre, runtime, plot, actors, ratings, language  } = req.body


    try {
        const movieUpdate = await Movies.findOneAndUpdate({ title }, { year, director, genre, runtime, plot, actors, ratings, language })
        console.log("Respondiendo a la ruta PUT MOVIES")
        res.status(201).json({
            msj: `La pelicula ${title} ha sido actualizado.`,
            movie: movieUpdate
        })

    } catch (err) {

        res.status(400).json({ msj: err.message })

    }

}



module.exports = {
    getMovies,
    createMovie,
    deleteMovie,
    updateMovie
}
