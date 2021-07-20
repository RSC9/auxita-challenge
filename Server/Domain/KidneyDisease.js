let id = 0;

let kidneyDiseaseReadings = [
    { id: id++, eGFR: 65, atDate: '2018/10/31'},
    { id: id++, eGFR: 70, atDate: '2018/10/20'}
];

module.exports = {
    kidneyDisease: kidneyDiseaseReadings,
    idKidneyDisease: id
};