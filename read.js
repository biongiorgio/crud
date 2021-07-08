const sqlite3 = require('sqlite3').verbose();
const { raw } = require('express');
const express = require('express')
const app = express()
const port = 3000

let db = new sqlite3.Database('./users.db');

// let sql = `SELECT Name name,
//                 Surname surname,
//                 Email email,
//                 Age age
//             FROM users
//             ORDER BY age`;

            
// app.get('/', (req, res) => {
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             throw err;
//         }

//         res.json(rows);

//         // rows.forEach((row) => {
//         //     //console.log("NOME: " + row.name + "\nCOGNOME: " + row.surname + "\nETA: " + row.age + "\nEMAIL: " + row.email);
//         // });

//     });
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

// let sql = `SELECT Name name,
//                 ID id,
//                 Email email
//             FROM users
//             WHERE Id = ?`;

// let usersId = 7;

// app.get('/', (req, res) => {
//     db.get(sql, [usersId], (err, row) => {
//         if (err) {
//             return console.error(err.message);
//         }

//         res.json(row)
        
//         // return row
//             // ? console.log(row.id, row.name, row.email)
//             // : console.log(`No usesr found with the id ${usersId}`);
//     });
    
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


let sql = `SELECT Name name,
                Surname surname,
                Email email
            FROM users
            WHERE Age = ?`;

let usersAge = 40;


app.get('/', (req, res) => {
    db.each(sql, [usersAge], (err, row) => {
    if (err) {
        throw err;
    }

    res.json(row)
});
    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



// close the database connection
//db.close();
