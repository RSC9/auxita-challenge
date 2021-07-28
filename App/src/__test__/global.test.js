const text = "Hola Mundo";
const fruits = ['Manzan', 'Banana', 'Melon'];

test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/);
});

test('Tenemos una banana?', () => {
    expect(fruits).toContain('Banana');
});

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

test('Verdadero', () => {
    expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};

test('Probar un callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    });
});