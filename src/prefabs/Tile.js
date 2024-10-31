// https://github.com/CodingTrain/Wave-Function-Collapse/blob/main/tile.js

const adjacencies = {
    0: [
        { tile: 1, direction: 'right' },
        { tile: 3, direction: 'down' },
        { tile: 9, direction: 'left' },
        { tile: 9, direction: 'up' },
        { tile: 4, direction: 'down'}
    ],
    1: [
        { tile: 0, direction: 'left' },
        { tile: 2, direction: 'right' },
        { tile: 4, direction: 'down' },
        { tile: 9, direction: 'up' },
        { tile: 1, direction: 'right' },
        { tile: 1, direction: 'left' }
    ],
    2: [
        { tile: 1, direction: 'left' },
        { tile: 5, direction: 'down' },
        { tile: 9, direction: 'right' },
        { tile: 9, direction: 'up' },
        { tile: 4, direction: 'down'}
    ],
    3: [
        { tile: 0, direction: 'up' },
        { tile: 4, direction: 'right' },
        { tile: 6, direction: 'down' },
        { tile: 9, direction: 'left' },
        { tile: 3, direction: 'up' },
        { tile: 3, direction: 'down'}
    ],
    4: [
        { tile: 1, direction: 'up' },
        { tile: 3, direction: 'left' },
        { tile: 5, direction: 'right' },
        { tile: 7, direction: 'down' },
        { tile: 4, direction: 'up' },
        { tile: 4, direction: 'down'},
        { tile: 4, direction: 'left' },
        { tile: 4, direction: 'right'}
    ],
    5: [
        { tile: 2, direction: 'up' },
        { tile: 4, direction: 'left' },
        { tile: 8, direction: 'down' },
        { tile: 9, direction: 'right' },
        { tile: 5, direction: 'up' },
        { tile: 5, direction: 'down'}
    ],
    6: [
        { tile: 3, direction: 'up' },
        { tile: 7, direction: 'right' },
        { tile: 9, direction: 'left' },
        { tile: 9, direction: 'down' },
        { tile: 4, direction: 'up' }
    ],
    7: [
        { tile: 4, direction: 'up' },
        { tile: 6, direction: 'left' },
        { tile: 8, direction: 'right' },
        { tile: 9, direction: 'down' },
        { tile: 7, direction: 'right' },
        { tile: 7, direction: 'left' }
    ],
    8: [
        { tile: 5, direction: 'up' },
        { tile: 7, direction: 'left' },
        { tile: 9, direction: 'right' },
        { tile: 9, direction: 'down' },
        { tile: 4, direction: 'up' }
    ],
    9: [
        { tile: 0, direction: 'right' },
        { tile: 0, direction: 'down' },
        { tile: 1, direction: 'down' },
        { tile: 2, direction: 'left' },
        { tile: 2, direction: 'down' },
        { tile: 3, direction: 'right' },
        { tile: 5, direction: 'left' },
        { tile: 6, direction: 'right' },
        { tile: 6, direction: 'up' },
        { tile: 7, direction: 'up' },
        { tile: 8, direction: 'left' },
        { tile: 8, direction: 'up' },
    ]
};    

class Tile {
    constructor(tile, i) {
        this.tile = tile;
        this.up = [];
        this.right = [];
        this.down = [];
        this.left = [];

        if (i !== undefined) {
            this.index = i;
        }
    }

    analyze() {
        // look into adjacencies[this.index]
        let adj = adjacencies[this.index];

        for (let i = 0; i < adj.length; i++) {
            switch (adj[i].direction) {
                case 'up':
                    // push adj[i].tile into this.up if it's not already in there
                    if (!this.up.includes(adj[i].tile)) {
                        this.up.push(adj[i].tile);
                    }
                    break;
                case 'right':
                    if (!this.right.includes(adj[i].tile)) {
                        this.right.push(adj[i].tile);
                    }
                    break;
                case 'down':
                    if (!this.down.includes(adj[i].tile)) {
                        this.down.push(adj[i].tile);
                    }
                    break;
                case 'left':
                    if (!this.left.includes(adj[i].tile)) {
                        this.left.push(adj[i].tile);
                    }
                    break;
                default:
                    break;
            }

        }
    }
}