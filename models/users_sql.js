const pool = require('../utils/pg_pool');
const queries = require('../queries/queriesUser');

const addFavorite = async (fav) => {
    const { id, title, year, director, genre, runtime, img } = fav;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.addFavorite, [id, title, year, director, genre, runtime, img]);
        result = data.rowCount;
        console.log("POST FAVS");
    }
    catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release()
    }
    return result
}

const getFavorites = async (user) => {
    console.log(user);
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getFavorites, [user]);
        result = data.rows;
        console.log(result);
    }
    catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release()
    }
    return result
}

const users = {
    addFavorite,
    getFavorites
}

module.exports = users;