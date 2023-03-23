/**
 * @author Javier Fuertes, Gabriela García y Pablo Mateos 
 * @exports createMovie
 * @namespace Renders
 */

/**
 * Description: This function renders the create movie view
 * @memberof Renders
 * @method  createMovie
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */

const createMovie = (req, res) => {
    res.render('createMovie');
  
}

module.exports = {
    createMovie
}