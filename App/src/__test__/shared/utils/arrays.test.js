import { sortObjectArrayByAscendingDate, getTwoConsecutiveItems } from '../../../Shared/Utils/arrays';

describe('Arrays utils', () => {

    test('Sort object array by Ascending Date', () => {
        const objectArray = [
            { id: 0, SysBP: 120, DiaBP: 90, atDate: '2018/10/31' },
            { id: 1, SysBP: 115, DiaBP: 100, atDate: '2018/10/20' }
        ];

        expect(sortObjectArrayByAscendingDate(objectArray)).toEqual([
            { id: 1, SysBP: 115, DiaBP: 100, atDate: '2018/10/20' },
            { id: 0, SysBP: 120, DiaBP: 90, atDate: '2018/10/31' }
        ]);
    });

    test('Get two consecutives items of an Array', () => {
        const currentItem = 0;
        const array = [
            { id: 0, eGFR: 65, atDate: '2018/10/31' },
            { id: 1, eGFR: 70, atDate: '2018/10/20' },
            { id: 2, eGFR: 80, atDate: '2018/11/11' },
        ];
        const sortedArray = sortObjectArrayByAscendingDate(array);

        expect(getTwoConsecutiveItems(currentItem, sortedArray)).toEqual([
            { id: 0, eGFR: 65, atDate: '2018/10/31' },
            { id: 2, eGFR: 80, atDate: '2018/11/11' }
        ]);
    });
});