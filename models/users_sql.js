const pool = require('../utils/pg_pool')
const queries = require('../queries/queriesUser');

const createUser = async (user) => {
    const { email, password } = user;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createUser,[email, password])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
const users = {
    createUser

}

module.exports = users;