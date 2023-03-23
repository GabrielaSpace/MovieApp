const query = require('../models/users_sql');


const isAdmin = async (req, res, next) => {

    const auth = req.oidc.isAuthenticated();
    if (auth) {
    let user = req.oidc.user;
    let email = user.email
    console.log(email)
    const admin = await query.isAdmin(email);
    console.log(admin)

    if (admin !== 1){
        next()
        console.log('No admin');
    } else {
        res.status(200).redirect('http://localhost:3000/movies') 
    };
    }
}

module.exports = {
    isAdmin
}