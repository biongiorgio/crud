const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const users = [
    {
        id: 1,
        name: "Pippo",
        age: 25,
        email: "pippobaudo@example.com"
    },
    {
        id: 2,
        name: "Francesco",
        age: 30,
        email: "franci@example.com"
    },
    {
        id: 3,
        name: "Luca",
        age: 45,
        email: "albero77@example.com"
    },
    {
        id: 4,
        name: "Pino",
        age: 13,
        email: "pinopino@example.com"
    }
];

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users/:id', (req, res) => {
    res.send(users.find(el => el.id == req.params.id))
})

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.put('/users/:id', (req,res) => {
    let changeUser = users.find(el => el.id == req.params.id);
    //console.log(req.body.id);
    if(!changeUser){
        let newUsers = req.body;
        users.push(newUsers);
        res.send(users);
    } else {
        res.send("User " + changeUser.name + " already exist")
    }    
})

app.delete('/users/:id', (req,res) => {
    let deleteUser = users.find(el => el.id == req.params.id);
    //console.log(req.body.id);
    if(deleteUser){
        users.splice((deleteUser.id - 1), 1);
        res.send(users);
    } else {
        res.send("User not found");
    }    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
