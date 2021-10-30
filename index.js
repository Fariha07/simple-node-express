const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());


const port = 3000;


app.get('/', (req, res) => {
    res.send('wow i am excited i am learning second node server')
});

const users = [
    { id: 1, name: "shabana", email: 'shabana123@gmail.com', phn: "01783744223" },
    { id: 2, name: "sushmita", email: 'sushmita123@gmail.com', phn: "01783744223" },
    { id: 3, name: "shuchorita", phn: "01783744223" },
    { id: 4, name: "tina", email: 'tina123@gmail.com', phn: "01783744223" },
    { id: 5, name: "mina", email: 'mina123@gmail.com', phn: "01783744223" },
    { id: 6, name: "inti", email: 'inti123@gmail.com', phn: "01783744223" },
    { id: 7, name: "tinti", email: 'tinti123@gmail.com', phn: "01783744223" },
    { id: 8, name: "minti", email: 'minti123@gmail.com', phn: "01783744223" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }

    else {
        res.send(users)
    }

});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send('inside post')
    res.json(newUser)

})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});


app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'apple'])
})


app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy yummy')
})

app.listen(port, () => {
    console.log('listening to port', port);
})