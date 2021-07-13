import Cell from '../Domain/Cell';

describe('Should exist', () => {
    const cell = new Cell(false);

    test('Cell should exist', ()=> {
        expect(Cell).toBeDefined();
    });
    test('Cell should be a function', () => {
        expect(typeof Cell).toBe('function');
    });
    test('cell should be an instance of Cell', () => {
        expect(cell).toBeInstanceOf(Cell);
    });
});

describe('Has alive getter', () => {
    const cell = new Cell(false);

    test('Should exist', ()=> {
        expect(cell.isAlive).toBeDefined();
    });
});

describe('Has alive setter', () => {
    const cell = new Cell(false);

    test('Should exist', ()=> {
        expect(cell.setAlive).toBeDefined();
    });
});