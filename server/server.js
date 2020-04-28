const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');

const port = 80;
const app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.post('/list', (req, res)=>{
    var lista = [];
    for (let i = 0; i < 117; i++) {
        lista.push(faker.fake(faker.name.findName()))
    }
    res.status(200).send(lista);
})

app.listen(port, () => console.log('up'))