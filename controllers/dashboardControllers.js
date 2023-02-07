
/**
 * Description: This function renders the dashboard view
 * @memberof Renders
 * @method  getDashboard
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
const getDashboard = (req, res) => {
    res.render('dashboard');
}

module.exports = {
    getDashboard
}