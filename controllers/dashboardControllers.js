/**
 * Description: This function renders the dashboard view
 * @memberof Renders
 * @method  getDashboard
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
const getDashboard = (req, res) => {
    if (req.oidc.isAuthenticated()) {
        res.render('dashboard');
    } else {
        res.send("Log In First")
    }
}
module.exports = {
    getDashboard
}