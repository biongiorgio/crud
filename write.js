const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./users.db');

// db.run(`INSERT INTO users(name,surname,age,email) 
//         VALUES("Giorgio","Biondillo",20,"giobiondo@example.com")`, [], function (err) {
//     if (err) {
//         return console.log(err.message);
//     }
//     // get the last insert id
//     console.log(`A row has been inserted with rowid ${this.lastID}`);
// });

const newUser =
{
    name: "Giorgio",
    surname: "Biondillo",
    age: 20,
    email: "giobiondo@example.com"
}

db.run(`INSERT INTO users(name,surname,age,email) 
        VALUES("${newUser.name}","${newUser.surname}",${newUser.age},"${newUser.email}")`, [], function (err) {
    if (err) {
        return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// close the database connection
db.close();