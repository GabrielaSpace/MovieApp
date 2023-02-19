/**
 * Description: This function renders the home view
 * @memberof Renders
 * @method  getHome
 * @async 
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */


const getHome = (req, res) => {
    try {
        let response = req.oidc.isAuthenticated();
        console.log(response);
        let userData = req.oidc.user;
        console.log(userData);
        if (userData !== undefined) {
            let userEmail = userData.email;
            res.render('home', { isAuthenticated: req.oidc.isAuthenticated(), email: userEmail });
        } else {
            res.render('home', { isAuthenticated: req.oidc.isAuthenticated() });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};


module.exports = {
    getHome
}