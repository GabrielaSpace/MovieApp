
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
    INSERT INTO favmovies
    (id_user, title, year, director, genre, runtime, img)
    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `
    // getEntriesByEmail: `
    // SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    // FROM entries AS e
    // INNER JOIN authors AS a
    // ON e.id_author=a.id_author
    // WHERE a.email=$1
    // ORDER BY e.title;`,
    // getAllEntries: `
    // SELECT e.title, e.content, e.date, e.category
    // FROM entries AS e;`,
    // createEntry: `INSERT INTO entries(title,content,id_author,category)
    // VALUES ($1,$2,
    // (SELECT id_author FROM authors WHERE email=$3),$4)`,
    // deleteEntry: `
    // DELETE
    // FROM entries AS e
    // WHERE e.title=$1`,
    // updateEntry: `
    // UPDATE entries
    // SET title=$1, content=$2, date=$3, category=$4
    // WHERE title=$5`,
    // getAllAuthors:`
    // SELECT *
    // FROM authors`,
    // getAuthorByEmail: `
    // SELECT a.name,a.surname,a.image
    // FROM authors AS a
    // WHERE a.email=$1
    // ORDER BY a.name;`,
    // createAuthor: `
    // INSERT INTO authors(id_author,name,surname,email,image)
    // VALUES ($1,$2,$3,$4,$5)`,
    // updateAuthor: `
    // UPDATE authors
    // SET name=$1, surname=$2, email=$3, image=$4
    // WHERE email=$5`,
    // deleteEntriesByAuthor:`
    // DELETE
    // FROM entries AS e
    // WHERE e.id_author = (SELECT id_author FROM authors where email=$1)
    // `,
    // deleteAuthor: `
    // DELETE
    // FROM authors AS a
    // WHERE a.email=$1`,

}
module.exports = queries;