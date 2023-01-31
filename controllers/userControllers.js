const users = require('../models/users_sql')

const createUser = async (req, res) => {
    let newUser = req.body
    const response = await users.createUser(newUser);
    res.status(201).json({
        user_created: response,
        data: newUser
    })
}

const validatedUser = async (req, res) => {
    let credentials = req.body;
    console.log(req.body)
    const response = await users.validatedUser(credentials);
    if (response === 1) {
        
        res.status(201).json({
            user_validated: response,
        })
    } else {
        res.status(400).json({
            msj: "User not found, check if you write your user correctly"
        })
    }

}

const getLogin = (req, res) => {
    res.render('login');
}

const getSingup = (req, res) => {
    res.render('signup');
}





module.exports = {
    createUser,
    validatedUser,
    getLogin,
    getSingup
}