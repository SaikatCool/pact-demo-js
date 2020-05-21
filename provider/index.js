const express = require('express');
const fs = require('fs');
var cors = require('cors')

const app = express();
app.use(cors());

app.listen(3000, () => console.log("provider is running!"));

app.get('/dog', (req, res) => {
    fs.readFile('./dogs.json', (err, json) => {
        let obj = JSON.parse(json);
        res.statusCode = 200;
        res.json(obj);
    });

});