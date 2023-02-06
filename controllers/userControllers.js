const users = require('../models/users_sql')

const addFavorite = async (req, res) => {
    let fav = req.body;
    const response = await users.addFavorite(fav);
    res.status(201).json({
        msg: response
    });
};

module.exports = {
    addFavorite
}