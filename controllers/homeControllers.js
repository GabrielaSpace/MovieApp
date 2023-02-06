const { auth } = require('express-openid-connect');


const getHome = (req, res) => {
        let response = req.oidc.isAuthenticated()
        console.log(response)
        let userData = req.oidc.user
        console.log(userData)
        res.render('home', { isAuthenticated: req.oidc.isAuthenticated() })
    }

module.exports = {
    getHome
}