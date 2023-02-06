

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
        const response = await fetch(window.location.href, options)
        const result = await response.json()
        return result

    } catch (error) {
        alert(error)
    }
    console.log(result)
}


export const deleteFavorite = async (product) => {
    try {
        const method = {
            method: 'DELETE'
        }
        console.log("Este es el parametro product:", product)
        const BASE_URL = 'http://localhost:3000/movies/deleteMovie?title=' + product
        const response = await fetch(BASE_URL, method)

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

        const BASE_URL = 'http://localhost:3000/updateMovie'
        console.log(BASE_URL)
        const response = await fetch(BASE_URL, options)
        // let result = await response.json();
        // console.log(response)
        // return result

    } catch (error) {
        alert(error)
        console.log(error)
    }

}