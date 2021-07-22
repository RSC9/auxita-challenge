const columns = [
    {
        title: 'Estimated Glomerular Filtration Rate (eGFR)',
        dataIndex: 'eGFR',
        key: 'eGFR'
    },
    {
        title: 'Date',
        dataIndex: 'atDate',
        key: 'atDate'
    }
];

export const consecutiveseGFRColumns = [
    {
        title: 'Two consecutives eGFR readings',
        dataIndex: 'eGFR',
        key: 'eGFR'
    },
    {
        title: 'Date',
        dataIndex: 'atDate',
        key: 'atDate'
    }
];

export const consecutiveseGFRColumnsVesflip = {
    twoConsecutiveReadings: {
        title: 'Two consecutives eGFR readings',
        dataIndex: 'eGFR',
        key: 'eGFR'
    },
    atDate: {
        title: 'Date',
        dataIndex: 'atDate',
        key: 'atDate'
    },
    eGFRClassification: {
        title: 'eGFR Classification',
        key: 'eGFRClassification'
    }
};

export default columns;