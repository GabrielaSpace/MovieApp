/**
 * Description: This function renders the update movie view
 * @memberof Renders
 * @method  updateMovie
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */

const updateMovie = (req, res) => {
    res.render('updateMovie');
}

module.exports = {
    updateMovie
}