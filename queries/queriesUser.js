const queries = {
    createUser:`
    INSERT INTO users(email, password)
    VALUES ($1,$2);
    `,
    validatedUser:`
    SELECT *
    FROM users
    WHERE email = $1 AND password = $2;
    `,
    addFavorite:`
    INSERT INTO favorites
    (id, title, year, director, genre, runtime, img)
    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `,
    getFavorites:`
    SELECT title, img, director, year, genre, runtime
    FROM favorites
    WHERE id = $1;
    `

}
module.exports = queries;