import { sortObjectArrayByDate } from '../../../Shared/Utils/arrays';

describe('Arrays utils', () => {

    test('Sort object array by Ascending Date', () => {
        const objectArray = [
            { id: 0, SysBP: 120, DiaBP: 90, atDate: '2018/10/31' },
            { id: 1, SysBP: 115, DiaBP: 100, atDate: '2018/10/20' }
        ];

        expect(sortObjectArrayByDate(objectArray)).toEqual([
            { id: 1, SysBP: 115, DiaBP: 100, atDate: '2018/10/20' },
            { id: 0, SysBP: 120, DiaBP: 90, atDate: '2018/10/31' }
        ]);
    });
});