import KidneyDiseaseDomain from '../Domain/KidneyDisease';

describe('Kidney Disease cases', () => {
    let { kidneyDisease, idKidneyDisease } = KidneyDiseaseDomain;

    test('KidneyDiseaseDomain should exist', () => {
        expect(KidneyDiseaseDomain).toBeDefined();
    });

    test('KidneyDiseaseDomain should be an object', () => {
        expect(typeof KidneyDiseaseDomain).toBe('object');
    });

    test('kidneyDisease should be an instance of Array', () => {
        expect(kidneyDisease).toBeInstanceOf(Array);
    });

    test('idKidneyDisease should be an number', () => {
        expect(typeof idKidneyDisease).toBe('number');
    });
});