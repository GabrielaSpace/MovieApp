const Movies = require('../models/moviesMongo')

const formUpdateMovie = (req, res) => {
    res.render('updateMovie');
}

const updateMovie = async (req, res) => {

    const { img, title, year, director, genre, runtime, plot, actors, language } = req.body
    console.log(req.body)


    try {
        const movieUpdate = await Movies.findOneAndUpdate({ title }, { img, year, director, genre, runtime, plot, actors, language })
        console.log(req.body)
        // await movieUpdate.save()
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

module.exports = {
    formUpdateMovie,
    updateMovie
}