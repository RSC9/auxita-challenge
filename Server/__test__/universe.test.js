import Universe from '../Domain/Universe';
import Cell from '../Domain/Cell';

describe('Should exist', () => {
    const universe = new Universe(5, 5);

    test('Universe should exist', () => {
        expect(Universe).toBeDefined();
    });
    test('Universe should be a function', () => {
        expect(typeof Universe).toBe('function');
    });
    test('universe should be an instance of Universe', () => {
        expect(universe).toBeInstanceOf(Universe);
    });
});

describe('Has width getter', () => {
    const universe = new Universe(5, 5);

    test('Should exist', ()=> {
        expect(universe.getWidth).toBeDefined();
    });
});

describe('Has width setter', () => {
    const universe = new Universe(5, 5);

    test('Should exist', ()=> {
        expect(universe.setWidth).toBeDefined();
    });
});

describe('Has height getter', () => {
    const universe = new Universe(5, 5);

    test('Should exist', ()=> {
        expect(universe.getHeight).toBeDefined();
    });
});

describe('Has height setter', () => {
    const universe = new Universe(5, 5);

    test('Should exist', ()=> {
        expect(universe.setHeight).toBeDefined();
    });
});

describe('Has grid getter', () => {
    const universe = new Universe(5, 5);

    test('Should exist', () => {
        expect(universe.getGrid).toBeDefined();
    });
    test('Getter returns grid', () => {
        expect(universe.getGrid().length).toBe(5);
    });
});

describe('Has grid setter', () => {
    const universe = new Universe(5, 5);

    test('Should exist', ()=> {
        expect(universe.setGrid).toBeDefined();
    });
});

describe('Has cell getter', () => {
    const universe = new Universe(5, 5);

    test('Should exist', () => {
        expect(universe.getCell).toBeDefined();
    });
    test('Getter returns a cell', () => {
        expect(universe.getCell(1, 1)).toBeInstanceOf(Cell)
    });
});

describe('Has cell setter', () => {
    const universe = new Universe(5, 5);
    const cell = universe.getCell(1, 1);

    test('Should exist', () => {
        expect(universe.updateCell).toBeDefined();
    });
    test('Setter updates the cell: not equal', () => {
        expect(cell.isAlive()).not.toBe(universe.updateCell(1, 1, !cell.isAlive()));
    });
});