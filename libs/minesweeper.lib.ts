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

export type GameConfig = { bombs: number; size: number };

export class Matrix extends Array<Array<Cell>> {
  status: 'playing' | 'game over' | 'win' = 'playing';
  player: any;

  constructor(gameConfig: GameConfig, player: string = 'player') {
    super();

    this.player = player;
    const maxSize = gameConfig?.size;

    for (let i = 0; i < maxSize; i++) {
      this[i] = [];
      for (let j = 0; j < maxSize; j++) {
        this[i].push(new Cell(i, j));
      }
    }
    if (gameConfig) {
      this.generateBombs(gameConfig);
    }
  }

  /** Generate matrix's initial bombs */
  generateBombs(config: GameConfig) {
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
    addItem(cRow + 1, cCol + 0);
    addItem(cRow - 1, cCol + 1);
    addItem(cRow - 1, cCol - 1);
    addItem(cRow - 1, cCol + 0);
    addItem(cRow + 0, cCol + 1);
    addItem(cRow + 0, cCol - 1);
    return cells;
  }

  reveal(cell: Cell) {
    if (cell.bomb) {
      this.status = 'game over';
      this.revealAllCells();
      return;
    }

    cell.revealed = true;

    if (cell.nearBombs === 0) {
      this.getCellsArround(cell)
        .filter((cell) => cell.revealed == false)
        .forEach((cell) => this.reveal(cell));
    }
  }

  revealAllCells() {
    this.forEach((row) => row.forEach((cel) => (cel.revealed = true)));
  }
}
