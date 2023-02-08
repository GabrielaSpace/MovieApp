export const addFavorite = async (movie) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }
        console.log(options)
        const BASE_URL = 'http://localhost:3000/favMovies'
        console.log(BASE_URL)
        const response = await fetch(BASE_URL, options)
        if (response.status === 201) {
            alert("La pelicula " + movie.title + " ha sido añadida a favoritos");
        } else {
            alert("La pelicula " + movie.title + " no ha podido ser añadida. Comprueba que el titulo no este ya en la coleccion de peliculas en /favmovies");
        }

    } catch (error) {
        alert(error)
    }
}


export const createMovie = async (movie) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }
        console.log(options)
        const BASE_URL = 'http://localhost:3000/movies/createMovie'
        const response = await fetch(BASE_URL, options)
        if (response.status === 201) {
            alert("La pelicula " + movie.title + " ha sido creada");
        } else {
            alert("La pelicula " + movie.title + " no ha podido ser creada. Comprueba que el titulo no este ya en la coleccion de peliculas en /movies");
        }


    } catch (error) {
        alert(error)
    }
}


export const deleteFavorite = async (title) => {
    try {
        const method = {
            method: 'DELETE'
        }
        const BASE_URL = 'http://localhost:3000/movies/deleteMovie?title=' + title
        const response = await fetch(BASE_URL, method)
        if (response.status === 200) {
            alert("La pelicula " + title + " ha sido eliminada");
        } else {
            alert("La pelicula " + title + " no ha podido ser eliminada. Comprueba que hayas escrito bien el titulo.");
        }

    } catch (error) {
        alert(error)
        console.log(error)
    }

}

export const updateMovie = async (movie) => {
    try {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }
        const BASE_URL = 'http://localhost:3000/movies/updateMovie'
        const response = await fetch(BASE_URL, options)
        if (response.status === 201) {
            alert("La pelicula " + movie.title + " ha sido actualizada");
        } else {
            alert("La pelicula " + movie.title + " no ha podido ser actualizada. Comprueba que hayas escrito bien el titulo.");
        }

    } catch (error) {
        alert(error)
        console.log(error)
    }

}