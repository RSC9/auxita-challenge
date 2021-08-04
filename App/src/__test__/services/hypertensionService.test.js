import { getHypertension } from '../../Services/HypertensionService';

describe('Fetch Hypertension', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Call Hypertension endpoint and return data', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [
            { id: 0, SysBP: 120, DiaBP: 90, atDate: '2018/10/31' },
            { id: 1, SysBP: 115, DiaBP: 100, atDate: '2018/10/20' }
        ] }));

        getHypertension()
        .then((response) => {
            expect(response.data).toEqual([
                { id: 0, SysBP: 120, DiaBP: 90, atDate: '2018/10/31' },
                { id: 1, SysBP: 115, DiaBP: 100, atDate: '2018/10/20' }
            ]);
        });

        console.log('+AMEN+', fetch.mock.calls[0][0]);

        expect(fetch.mock.calls[0][0]).toEqual('/api/hypertension');
    });
});