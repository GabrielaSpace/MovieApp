import { deleteFavorite } from './utils/data.js';





const buttons = document.getElementsByClassName("delete")
console.log(buttons)
for (let i = 0; i < buttons.length; i++) {

    document.getElementById(`delete${i}`).addEventListener('click', async (e) => {
        e.preventDefault;
        let movie = document.getElementById(`title${i}`).innerHTML;
        console.log("Este es valor de h3:"+movie)
        const cleanTitle = movie.slice(7,)
        const titleMovie = cleanTitle.trim()
        console.log("Este es el valor que se le pasa a la query", titleMovie)
        if (movie) {
            const deleteResponse = await deleteFavorite(titleMovie);
            console.log(deleteResponse)
        }
    })
}

