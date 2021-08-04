import { classificateBloodPressure } from '../../../../Shared/Helpers/Hypertension/classification';

describe('Hypertension classification', () => {
    const hypertensionReading = {
        SysBP: 120,
        DiaBP: 90
    };

    test('check Blood Pressure', () => {
        expect(classificateBloodPressure(hypertensionReading)).toEqual({ text: 'Stage 1', color: 'green' });
    });
})