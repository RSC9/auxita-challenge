import { getHypertension } from '../../Services/HypertensionService';

describe('Fetch Hypertension', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Call Hypertension endpoint and return data', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: [] }));

        getHypertension()
        .then((response) => {
            expect(response.data).toEqual([]);
        });
    });
});