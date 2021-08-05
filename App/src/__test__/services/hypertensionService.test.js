import { getHypertension, addHypertensionReading } from '../../Services/HypertensionService';

describe('Fetch Hypertension', () => {
    
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Call Hypertension endpoint and return data', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [
            { id: 0, SysBP: 120, DiaBP: 90, atDate: '2018/10/31' },
            { id: 1, SysBP: 115, DiaBP: 100, atDate: '2018/10/20' }
        ]}));

        getHypertension()
        .then((response) => {
            expect(response.data).toEqual([
                { id: 0, SysBP: 120, DiaBP: 90, atDate: '2018/10/31' },
                { id: 1, SysBP: 115, DiaBP: 100, atDate: '2018/10/20' }
            ]);
        });

        expect(fetch.mock.calls[0][0]).toEqual('/api/hypertension');
    });
});

describe('POST Hypertension', () => {
    const newReading = {
        id: 2,
        SysBP: 125,
        DiaBP: 80,
        atDate: '2018/11/11'
    };

    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Add Hypertension record and return data', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: {
            id: 2, SysBP: 125, DiaBP: 80, atDate: '2018/11/11'
        }}));

        addHypertensionReading(newReading)
        .then((response) => {
            expect(response.data).toEqual({
                id: 2, SysBP: 125, DiaBP: 80, atDate: '2018/11/11'
            });
        });

        expect(fetch.mock.calls[0][0]).toEqual('/api/hypertension/add');
    });
});