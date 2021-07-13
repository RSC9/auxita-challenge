import Game from '../Domain/Game';
import Cell from '../Domain/Cell';

describe('Should exist', () => {
    const game = new Game();

    test('Game should exist', ()=> {
        expect(Game).toBeDefined();
    });
    test('Game should be a function', () => {
        expect(typeof Game).toBe('function');
    });
    test('game should be an instance of Game', () => {
        expect(game).toBeInstanceOf(Game);
    });
});

describe('Has getLogicUniverse function', () => {
    const game = new Game();

    test('Should exist', ()=> {
        expect(game.getLogicUniverse).toBeDefined();
    });
});

describe('Get Logic Universe', () => {
    const grid = [
        [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
        [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
        [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
        [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
        [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
    ];
    const game = new Game(grid[0].length, grid.length, grid);
    const universe = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    expect(game.getLogicUniverse()).toEqual(universe);
});

describe('Play one game', () => {
    const grid = [
        [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
        [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
        [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
        [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
        [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
    ];
    const game = new Game(grid[0].length, grid.length, grid);
    const firstUniverse = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    const lastUniverse = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    expect(game.getLogicUniverse()).toEqual(firstUniverse);
    game.checkRules();
    expect(game.getLogicUniverse()).toEqual(lastUniverse);
});