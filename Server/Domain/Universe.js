const Cell = require('./Cell');

class Universe {
    constructor(width = 50, height = 50, grid = []) {
        this.width = width;
        this.height = height;
        this.grid = grid;

        if (this.grid.length === 0) {
            this.initGrid();            
        }
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;
    }

    getGrid() {
        return this.grid;        
    }

    setGrid(grid) {
        this.grid = grid;
    }

    initGrid() {
        for (let i = 0; i < this.height; i++) {
            const row = [];
            for (let j = 0; j < this.width; j++) {
                const cell = new Cell(!Math.round(Math.random()));
                row.push(cell);
            }
            this.grid.push(row);
        }
    }

    getCell(i, j) {
        return this.grid[i][j];
    }

    updateCell(i, j, alive) {
        this.grid[i][j].setAlive(alive);
    }
}

module.exports = Universe;