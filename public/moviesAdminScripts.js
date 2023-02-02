import { deleteFavorite } from './utils/data.js';





// for (let i = 0; i < buttons.length; i++) {

    document.getElementById(`delete0`).addEventListener('click', async (e) => {
        e.preventDefault;
        let movie = document.getElementById(`title0`).innerHTML;
        console.log("este es valor de h3:"+movie)
        const cleanTitle = movie.slice(7,)
        const titleMovie = cleanTitle.trim()
        console.log(titleMovie)
        console.log("Este es el valor que se le pasa a la query", titleMovie)
        if (movie) {
            const deleteResponse = await deleteFavorite(titleMovie);
            console.log(deleteResponse)
        }
    })
// }