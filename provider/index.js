const express = require('express');
const fs = require('fs');
var cors = require('cors')

const app = express();
app.use(cors());

app.listen(3000, () => console.log("provider is running!"));

app.get('/data-service/dogs', (req, res) => {
    console.log(req.headers);
    fs.readFile('./dogs.json', (err, json) => {
        let obj = JSON.parse(json);
        res.statusCode = 200;
        res.json(obj);
    });

});