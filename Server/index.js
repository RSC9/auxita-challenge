const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3080;
const HypertensionDomain = require('./Domain/Hypertension');
const KidneyDiseaseDomain = require('./Domain/KidneyDisease');

let { hypertension, idHypertension } = HypertensionDomain;
let { kidneyDisease, idKidneyDisease } =  KidneyDiseaseDomain;

app.use(bodyParser.json());

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

app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`);
});