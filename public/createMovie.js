import { createMovie } from './utils/data.js';


if (document.title === "CreateMovie" ) {



    console.log("hola")
  
    document.getElementById("createMovie").addEventListener("click", async (e) => {
        console.log("Validacion arrancando");
        e.preventDefault();
        const form = document.querySelector(".createMovie").elements
        const data = {}
        for (let input of form) {
            data[input.name] = input.value
        }
        console.log("data recogida del formulario", data)
        //const postResponse = await editMovies(data);
        await createMovie(data);
  
    })
  
    // document.getElementById("createMovie").addEventListener("click", async (req, res) => {
    //   const newMovie = req.body;
    //   try {
    //     let response = await new Movies(newMovie);
    //     let answer = await response.save();
    //     console.log("Respondiendo a la ruta POST MOVIES")
    //     res.status(201).json({
    //       msj: `New movie added to DB.`,
    //       movie: answer
    //     });
    //   } catch (err) {
    //     res.status(400).json({ msj: err.message })
    //   }
    // })
  }