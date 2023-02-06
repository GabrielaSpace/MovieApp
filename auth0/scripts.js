function login(email, password, callback) {
    //this example uses the "pg" library
    //more info here: https://github.com/brianc/node-postgres

    const bcrypt = require('bcrypt');
    const {Pool}= require('pg');

    const pool = new Pool({
      host: 'trumpet.db.elephantsql.com',
      user: 'qebgidaw',
      database: 'qebgidaw',
      password: "5DtcQ_d7y5eMW84qIZW8whyHgSA6TGk6"
    });

    pool.connect(function (err, client, done) {
      if (err) return callback(err);

      const query = 'SELECT id_user,email, password FROM users WHERE email = $1';
      client.query(query, [email], function (err, result) {
        // NOTE: always call `done()` here to close
        // the connection to the database
        done();

        if (err || result.rows.length === 0) return callback(err || new WrongUsernameOrPasswordError(email));

        const user = result.rows[0];

        bcrypt.compare(password, user.password, function (err, isValid) {
          if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));

          return callback(null, {
            user_id: user.id_user,
            email: user.email
          });
        });
      });
    });
  }


  function create(user, callback) {
    //this example uses the "pg" library
    //more info here: https://github.com/brianc/node-postgres

    const bcrypt = require('bcrypt');
    const postgres = require('pg');

    const {Pool}= require('pg');

    const pool = new Pool({
      host: 'trumpet.db.elephantsql.com',
      user: 'qebgidaw',
      database: 'qebgidaw',
      password: "5DtcQ_d7y5eMW84qIZW8whyHgSA6TGk6"
    });

    pool.connect(function (err, client, done) {
      if (err) return callback(err);

      bcrypt.hash(user.password, 10, function (err, hashedPassword) {
        if (err) return callback(err);

        const query = 'INSERT INTO users(email, password) VALUES ($1, $2)';
        client.query(query, [user.email, hashedPassword], function (err, result) {
          // NOTE: always call `done()` here to close
          // the connection to the database
          done();

          return callback(err);
        });
      });
    });
  }

  function loginByEmail(email, callback) {
    //this example uses the "pg" library
    //more info here: https://github.com/brianc/node-postgres

    const {Pool}= require('pg');

    const pool = new Pool({
      host: 'trumpet.db.elephantsql.com',
      user: 'qebgidaw',
      database: 'qebgidaw',
      password: "5DtcQ_d7y5eMW84qIZW8whyHgSA6TGk6"
    });

    pool.connect(function (err, client, release) {
      if (err) return callback(err);

      const query = 'SELECT * FROM users WHERE email = $1';
      client.query(query, [email], function (err, result) {

        // the connection to the database
        release();

        if (err || result.rows.length === 0) return callback(err);

        const user = result.rows[0];

        return callback(null, {
          user_id: user.id_user,
        });
      });
    });
  }

module.exports={
    login,
    create,
    loginByEmail
}