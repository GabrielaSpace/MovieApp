const getHome = (req, res) => {
    console.log(req.oidc.isAuthenticated())

    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    // res.render('home');
}

module.exports = {
    getHome
}