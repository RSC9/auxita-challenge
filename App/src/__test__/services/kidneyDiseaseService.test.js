import { getKidneyDisease } from '../../Services/KidneyDiseaseService';

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