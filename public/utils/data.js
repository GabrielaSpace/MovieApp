
/**
 * @author Javier Fuertes, Gabriela García y Pablo Mateos 
 * @exports utils/data
 * @namespace data.handlers
 */

/**
 * Description: This function adds a new favorite movie to the database.
 * @memberof data.handlers
 * @method addFavorite
 * @function
 * @param {Object} product - The movie to add as a favorite.
 * @throws {Error} message with the error during add process.
 */


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

/**
 * Description: This function delete a favorite movie to the database.
 * @memberof data.handlers
 * @method deleteFavorite
 * @function
 * @param {Object} product - The movie to delete of favorites.
 * @throws {Error} message with the error during delete process.
 */

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
/**
 * Description: This function update a favorite movie to the database.
 * @memberof data.handlers
 * @method updateFavorite
 * @function
 * @param {Object} data - The movie to update of favorites.
 * @throws {Error} message with the error during update process.
 */
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