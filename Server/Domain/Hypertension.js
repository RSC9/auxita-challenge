let id = 0;

let hypertensionReadings = [
    { id: id++, SysBP: 120, DiaBP: 90, atDate: '2018/10/31' },
    { id: id++, SysBP: 115, DiaBP: 100, atDate: '2018/10/20' }
];

module.exports = {
    hypertension: hypertensionReadings,
    idHypertension: id
};