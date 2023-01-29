const users = require('../models/users_sql');

const createUser = async (req, res) => {
    let newUser = req.body
    const response = await users.createUser(newUser);
    res.status(201).json({
        user_created: response,
        data: newUser
    });
}

module.exports = {
    createUser
}