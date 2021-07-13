const Universe = require('./Universe');

class Game {
    constructor(width, height, grid = []) {
        this.universe = new Universe(width, height, grid);
        this.cellStatuses = [];
    }

    getLogicUniverse() {
        const width = this.universe.getWidth();
        const height = this.universe.getHeight();
        const logicUniverse = [];

        for (let i = 0; i < height; i++) {
            const row = [];
            for (let j = 0; j < width; j++) {
                if (this.universe.getCell(i, j).isAlive()) {
                    row.push(1);
                } else {
                    row.push(0);
                } 
            }
            logicUniverse.push(row);
        }

        return logicUniverse;
    }

    checkRules() {
        const width = this.universe.getWidth();
        const height = this.universe.getHeight();

        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                this.deadCase(i, j);
                this.livingCases(i, j);
            }          
        }

        this.getNextGeneration();
    }

    deadCase(yCoord, xCoord) {
        const neighbours = this.getNeighbours(yCoord, xCoord);

        // Any dead cell with exactly three live neighbours becomes a live cell.
        if (neighbours === 3) {
            this.cellStatuses.unshift([yCoord, xCoord, true]);
        }
    }

    livingCases(yCoord, xCoord) {
        if (this.universe.getCell(yCoord, xCoord).isAlive()) {
            const neighbours = this.getNeighbours(yCoord, xCoord);

            // Any living cell with two or three live neighbours lives on to the next generation.
            if (neighbours === 2 || neighbours === 3) {
                this.cellStatuses.unshift([yCoord, xCoord, true]);
            } else {
                /*
                Any living cell with more than three live neighbours; overcrowding.
                Any living cell with fewer than two live neighbours dies; underpopulation.
                */
                this.cellStatuses.unshift([yCoord, xCoord, false]);
            }
        }
    }

    getNeighbours(yCoord, xCoord) {
        const width = this.universe.getWidth();
        const height = this.universe.getHeight();
        let neighbours = 0;

        neighbours += this.goUp(yCoord, xCoord, height);
        neighbours += this.goUpRight(yCoord, xCoord, height, width);
        neighbours += this.goRight(yCoord, xCoord, width);
        neighbours += this.goDownRight(yCoord, xCoord, height, width);
        neighbours += this.goDown(yCoord, xCoord, height);
        neighbours += this.goDownLeft(yCoord, xCoord, height, width);
        neighbours += this.goLeft(yCoord, xCoord, width);
        neighbours += this.goUpLeft(yCoord, xCoord, height, width);

        return neighbours;
    }

    getNextGeneration() {
        for (let index = 0; index < this.cellStatuses.length; index++) {
            this.universe.updateCell(...this.cellStatuses[index]);
        }

        this.cellStatuses = [];
    }
    
    goUp(yCoord, xCoord, height) {
        let neighbour = 0;

        if ((yCoord - 1) >= 0) {
            neighbour = this.universe.getCell(yCoord - 1, xCoord).isAlive() ? 1 : 0;
        } else {
            neighbour = this.universe.getCell(height - 1, xCoord).isAlive() ? 1 : 0;
        }

        return neighbour;
    }

    goUpRight(yCoord, xCoord, height, width) {
        let neighbour = 0;

        if ((yCoord - 1) >= 0 && (xCoord + 1) < width) {
            neighbour = this.universe.getCell(yCoord - 1, xCoord + 1).isAlive() ? 1 : 0;
        } else {
            neighbour = this.universe.getCell(height - 1, 0).isAlive() ? 1 : 0;
        }

        return neighbour;
    }

    goRight(yCoord, xCoord, width) {
        let neighbour = 0;

        if ((xCoord + 1) < width) {
            neighbour = this.universe.getCell(yCoord, xCoord + 1).isAlive() ? 1 : 0;
        } else {
            neighbour = this.universe.getCell(yCoord, 0).isAlive() ? 1 : 0;
        }

        return neighbour;
    }

    goDownRight(yCoord, xCoord, height, width) {
        let neighbour = 0;

        if ((yCoord + 1) < height && (xCoord + 1) < width) {
            neighbour = this.universe.getCell(yCoord + 1, xCoord + 1).isAlive() ? 1 : 0;
        } else {
            neighbour = this.universe.getCell(0, 0).isAlive() ? 1 : 0;
        }

        return neighbour;
    }

    goDown(yCoord, xCoord, height) {
        let neighbour = 0;

        if ((yCoord + 1) < height) {
            neighbour = this.universe.getCell(yCoord + 1, xCoord).isAlive() ? 1 : 0;
        } else {
            neighbour = this.universe.getCell(0, xCoord).isAlive() ? 1 : 0;
        }

        return neighbour;
    }

    goDownLeft(yCoord, xCoord, height, width) {
        let neighbour = 0;

        if ((yCoord + 1) < height && (xCoord - 1) >= 0) {
            neighbour = this.universe.getCell(yCoord + 1, xCoord - 1).isAlive() ? 1 : 0;
        } else {
            neighbour = this.universe.getCell(0, width - 1).isAlive() ? 1 : 0;
        }

        return neighbour;
    }

    goLeft(yCoord, xCoord, width) {
        let neighbour = 0;

        if ((xCoord - 1) >= 0) {
            neighbour = this.universe.getCell(yCoord, xCoord - 1).isAlive() ? 1 : 0;
        } else {
            neighbour = this.universe.getCell(yCoord, width - 1).isAlive() ? 1 : 0;
        }

        return neighbour;
    }

    goUpLeft(yCoord, xCoord, height, width) {
        let neighbour = 0;

        if ((yCoord -1) >= 0 && (xCoord - 1) >= 0) {
            neighbour = this.universe.getCell(yCoord - 1, xCoord - 1).isAlive() ? 1 : 0;
        } else {
            neighbour = this.universe.getCell(height - 1, width - 1).isAlive() ? 1 : 0;
        }

        return neighbour;
    }
}

module.exports = Game;