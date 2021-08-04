import { getKidneyDisease, addKidneyDiseaseReading } from '../../Services/KidneyDiseaseService';

describe('Fetch Kidney Disease', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Call Kidney Disease endpoint and return data', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [
            { id: 0, eGFR: 65, atDate: '2018/10/31'},
            { id: 1, eGFR: 70, atDate: '2018/10/20'}
        ] }));

        getKidneyDisease()
        .then((response) => {
            expect(response.data).toEqual([
                { id: 0, eGFR: 65, atDate: '2018/10/31'},
                { id: 1, eGFR: 70, atDate: '2018/10/20'}
            ]);
        });

        expect(fetch.mock.calls[0][0]).toEqual('/api/kidneyDisease');
    });
});

describe('POST Kidney Disease', () => {
    const newReading = {
        id: 2,
        eGFR: 80,
        atDate: '2018/11/11'
    };

    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Add Kidney Disease record and return data', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: {
            id: 2, eGFR: 80, atDate: '2018/11/11'
        } }));

        addKidneyDiseaseReading(newReading)
        .then((response) => {
            console.log('+VESFLIPThanks+', response);
            expect(response.data).toEqual({
                id: 2, eGFR: 80, atDate: '2018/11/11'
            });
        });

        expect(fetch.mock.calls[0][0]).toEqual('/api/kidneyDisease/add');
    });
});