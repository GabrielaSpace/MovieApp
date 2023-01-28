require('dotenv').config();
// const queries = require('./queries')
// const {DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD} = process.env
const { Pool } = require('pg');

const pool = new Pool({
    host: "trumpet.db.elephantsql.com", 
    user: "qebgidaw",
    database: "qebgidaw",
    password: "5DtcQ_d7y5eMW84qIZW8whyHgSA6TGk6"
  })  
  
  
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
      release();
      console.log("Super conectados a elephantSQL")
      if (err) {
        return console.error('Error executing query', err.stack);
      }
      console.log(result.rows);
    })
});
 
module.exports = pool;