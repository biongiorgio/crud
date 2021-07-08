// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('users.db');

// const initDb = `CREATE TABLE IF NOT EXISTS users(
//     ID INTEGER PRIMARY KEY AUTOINCREMENT,
//     NAME        CHAR(255)       NOT NULL,
//     AGE         INT             NOT NULL,
//     SURNAME     CHAR(255),
//     EMAIL       CHAR(255)
//  );`

// db.run(initDb);

// const users = [
//     {
//         name: "Pippo",
//         surname: "Baudo",
//         age: 25,
//         email: "pippobaudo@example.com"
//     },
//     {
//         name: "Francesco",
//         surname: "Sole",
//         age: 30,
//         email: "franci@example.com"
//     },
//     {
//         name: "Luca",
//         surname: "Abete",
//         age: 45,
//         email: "albero77@example.com"
//     },
//     {
//         name: "Pino",
//         surname: "Rospo",
//         age: 13,
//         email: "pinopino@example.com"
//     }
// ];

// const stmt = db.prepare(`INSERT INTO users 
//     (NAME,SURNAME,EMAIL,AGE) 
//     VALUES
//     (?, ?, ?, ?)
// `)

// users.forEach(el => stmt.run(el.name, el.surname, el.email, el.age))

// //db.close();


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('persone.db');

const initDb = `CREATE TABLE IF NOT EXISTS persone(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME        CHAR(255)       NOT NULL,
    IDP         INT             
 );`

db.run(initDb);

const users = [
    {
        name: "Giorgio",
    },
    {
        name: "Paolo",
        idp: 1
    },
    {
        name: "Luca",
        idp: 5
    },
    {
        name: "Pippo",
        idp: 1
    },
    {
        name: "Pluto",
    },
    {
        name: "Beppe",
        idp: 5
    },
    {
        name: "Franco",
        idp: 5
    },
    {
        name: "Lorenzo",
        idp: 1
    },
    {
        name: "Checco",
        idp: 5
    },
    {
        name: "Lino",
        idp: 1
    }
    // {
    //     name: "Pippo",
    //     surname: "Baudo",
    //     age: 25,
    //     email: "pippobaudo@example.com"
    // },
    // {
    //     name: "Francesco",
    //     surname: "Sole",
    //     age: 30,
    //     email: "franci@example.com"
    // },
    // {
    //     name: "Luca",
    //     surname: "Abete",
    //     age: 45,
    //     email: "albero77@example.com"
    // },
    // {
    //     name: "Pino",
    //     surname: "Rospo",
    //     age: 13,
    //     email: "pinopino@example.com"
    // }
];

const stmt = db.prepare(`INSERT INTO persone 
    (NAME,IDP) 
    VALUES
    (?, ?)`)

users.forEach(el => stmt.run(el.name, el.idp))

//db.close();