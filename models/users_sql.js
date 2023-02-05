const pool = require('../utils/pg_pool');
const queries = require('../queries/queriesUser');

const createUser = async (user) => {
    const { emailSignup, passwordSignup } = user;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createUser, [emailSignup, passwordSignup])
        result = data.rowCount
        console.log("Respuesta a POST SIGN UP")
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release()
    }
    return result
}

const validatedUser = async (user) => {
    const { email, password } = user;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.validatedUser,[email, password])
        result = data.rowCount
        console.log("Respuesta a POST LOGIN")
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release()
    }
    return result
} 

// function login(user, callback) {
//     //this example uses the "pg" library
//     //more info here: https://github.com/brianc/node-postgres

//     const { email } = user

//     const bcrypt = require('bcrypt');
//     const pool = require('../utils/pg_pool');

//     pool.connect((err, client, done) => {
//         if (err) return callback(err);

//         const query = 'SELECT user_id, email, password FROM users WHERE email = $1';
//         client.query(query, [email], (err, result) => {
//             // NOTE: always call `done()` here to close
//             // the connection to the database
//             done();

//             if (err || result.rows.length === 0) return callback(err || new WrongUsernameOrPasswordError(email));

//             const user = result.rows[0];

//             bcrypt.compare(password, user.password, function (err, isValid) {
//                 if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));

//                 return callback(null, {
//                     user_id: user.id,
//                     email: user.email
//                 });
//             });
//         });
//     });
// }

const addFavorite = async (fav) => {
    const { user, title, year, director, genre, runtime, img } = fav;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.addFavorite, [user, title, year, director, genre, runtime, img]);
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
    createUser,
    validatedUser,
    addFavorite,
    getFavorites
}

module.exports = users;