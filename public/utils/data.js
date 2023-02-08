export const addFavorite = async (product) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }
        console.log(options)
        const BASE_URL = 'http://localhost:3000/favMovies'
        console.log(BASE_URL)
        const response = await fetch(BASE_URL, options)
        console.log(response)

    } catch (error) {
        alert(error)
    }
}


export const deleteFavorite = async (title) => {
    try {
        const method = {
            method: 'DELETE'
        }
        console.log("Este es el parametro product:", title)
        const BASE_URL = 'http://localhost:3000/movies/deleteMovie?title=' + title
        const response = await fetch(BASE_URL, method)

        console.log(response)
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

export const updateMovie = async (data) => {
    try {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        console.log("options");
        console.log(options);
        console.log("BODY:");
        console.log(options.body)

        const BASE_URL = 'http://localhost:3000/movies/updateMovie'
        console.log(BASE_URL)
        const response = await fetch(BASE_URL, options)
        console.log(response)
        if (response.status === 201) {
            alert("La pelicula " + data.title + " ha sido actualizada");
        } else {
            alert("La pelicula " + data.title + " no ha podido ser actualizada. Comprueba que hayas escrito bien el titulo.");
        }
        // let result = await response.json();
        // console.log(response)
        // return result

    } catch (error) {
        alert(error)
        console.log(error)
    }

}