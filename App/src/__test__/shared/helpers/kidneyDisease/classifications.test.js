import { classificateGlomerularFiltration } from '../../../../Shared/Helpers/KidneyDisease/classifications';

describe('Kidney Disease classifications', () => {

    test('check Glomerular Filtration', () => {
        const eGFR = 65;

        expect(classificateGlomerularFiltration(eGFR)).toEqual({ text: 'Mildly Decreased', color: 'blue' });
    })

});