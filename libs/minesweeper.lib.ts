import { ArraySet } from './arraySet.lib';
import { RNG } from './RNG.lib';

export class Cell {
  row: number;
  column: number;
  bomb: boolean;
  revealed: boolean;
  flagged: boolean;
  nearBombs: number;

  constructor(row, col) {
    this.row = row;
    this.column = col;
    this.bomb = false;
    this.revealed = false;
    this.nearBombs = 0;
    this.flagged = false;
  }
}

export type gameConfig = { bombs: number; size: number };

export class Matrix extends Array<Array<Cell>> {
  player: any;

  constructor(maxSize: number, player, gameConfig: gameConfig) {
    super();

    this.player = player;

    for (let i = 0; i < maxSize; i++) {
      this[i] = [];
      for (let j = 0; j < maxSize; j++) {
        this[i].push(new Cell(i, j));
      }
    }
    this.generateBombs(gameConfig);
  }

  /** Generate matrix's initial bombs */
  generateBombs(config: gameConfig) {
    const rng = new RNG({ onlyInteger: true });
    const arraySet = new ArraySet();

    while (arraySet.size < config.bombs) {
      const x = rng.between(0, config.size - 1);
      const y = rng.between(0, config.size - 1);

      if (!arraySet.has([x, y])) {
        // add a bomb and calculate near bombs
        arraySet.add([x, y]);
        this[x][y].bomb = true;
        this.getCellsArround(this[x][y]).forEach((cell: Cell) => {
          cell.nearBombs++;
        });
      }
    }
  }

  private getCellsArround(cell: Cell): Cell[] {
    const cells: Cell[] = [];
    const cRow = cell.row;
    const cCol = cell.column;

    const addItem = (x: number, y: number) => {
      if (this[x] && this[x][y]) {
        cells.push(this[x][y]);
      }
      return cells;
    };

    addItem(cRow + 1, cCol + 1);
    addItem(cRow + 1, cCol - 1);
    addItem(cRow + 1, cCol);
    addItem(cRow - 1, cCol + 1);
    addItem(cRow - 1, cCol - 1);
    addItem(cRow - 1, cCol);
    addItem(cRow, cCol + 1);
    addItem(cRow, cCol - 1);
    return cells;
  }
}
