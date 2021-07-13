const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3080;
const Game = require('./Domain/Game');
const game = new Game(50, 20);

let hypertension = require('./Domain/Hypertension');

let universe = [];

app.use(bodyParser.json());

app.get('/api/universe', (req, res) => {
    res.json(universe);
});

app.get('/api/hypertension', (req, res) => {
    res.json(hypertension)
});

app.get('/', (req,res) => {
    res.send('Game of life Server');
});

play = () => {
    universe = game.getLogicUniverse();
    game.checkRules();
};
setInterval(play, 1000);

app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`);
});