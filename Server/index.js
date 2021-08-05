const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3080;
const Game = require('./Domain/Game');
const game = new Game(50, 20);

let { hypertension, idHypertension } = require('./Domain/Hypertension');
let { kidneyDisease, idKidneyDisease } = require('./Domain/KidneyDisease');

let universe = [];

app.use(bodyParser.json());

app.get('/api/universe', (req, res) => {
    res.json(universe);
});

app.get('/api/hypertension', (req, res) => {
    res.json(hypertension);
});

app.post('/api/hypertension/add', (req, res) => {
    const newRecord = {
        id: idHypertension++,
        ...req.body.hypertensionReading
    };
    
    hypertension.push(newRecord);
    res.json(newRecord);
});

app.get('/', (req,res) => {
    res.send('Auxita Server');
});

app.get('/api/kidneyDisease', (req, res) => {
    res.json(kidneyDisease);
});

app.post('/api/kidneyDisease/add', (req, res) => {
    const newRecord = {
        id: idKidneyDisease++,
        ...req.body.kidneyDiseaseReading
    };
    
    kidneyDisease.push(newRecord);
    res.json(newRecord);
});

play = () => {
    universe = game.getLogicUniverse();
    game.checkRules();
};
setInterval(play, 1000);

app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`);
});