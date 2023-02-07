/**
 * Description: This function renders the home view
 * @memberof Renders
 * @method  getHome
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */

const getHome = (req, res) => {

    res.render('home');
}

module.exports = {
    getHome
}