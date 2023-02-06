import { updateMovie } from './utils/data.js';

if (document.title === "updateMovie") {
    console.log("hola")

    document.getElementById("updateMovie").addEventListener("click", async (e) => {
        console.log("Validacion arrancando");
        e.preventDefault();
        const form = document.querySelector(".updateMovie").elements
        const data = {}
        for (let input of form) {
            data[input.name] = input.value
        }
        console.log("data recogida del formulario", data)
        //const postResponse = await editMovies(data);
        await updateMovie(data);

    })
}