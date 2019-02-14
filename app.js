const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Tacho (the womanizer)'));


//localhost:3000/hello?name=david
app.get('/hello', (req, res) => {
    console.log(req.query);
    res.send('world')
});


//network
app.get('/network', (req, res) => {
    axios.get('http://localhost:3001/world')
    .then((networkResponse) => {
        res.send(networkResponse.data);
    })
    .catch (() => {
        res.send('did not work.')
    });
});



//other stuff
app.get('/add', (req, res) => res.send('hotDogs'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));