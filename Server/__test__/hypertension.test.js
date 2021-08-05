import HypertensionDomain from '../Domain/Hypertension';

describe('Hypertension cases', () => {
    let { hypertension, idHypertension } = HypertensionDomain;

    test('HypertensionDomain should exist', () => {
        expect(HypertensionDomain).toBeDefined();
    });

    test('HypertensionDomain should be an object', () => {
        expect(typeof HypertensionDomain).toBe('object');
    });

    test('hypertension should be an instance of Array', () => {
        expect(hypertension).toBeInstanceOf(Array);
    });

    test('idHypertension should be an number', () => {
        expect(typeof idHypertension).toBe('number');
    });
});