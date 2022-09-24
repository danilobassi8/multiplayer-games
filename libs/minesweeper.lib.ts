export class Cell {
  row: number;
  column: number;
  bomb: boolean;
  revealed: boolean;
  flagged: boolean;

  constructor(row, col) {
    this.row = row;
    this.column = col;
    this.bomb = true;
    this.revealed = false;
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
    this.generateBombs(gameConfig.bombs);
  }

  generateBombs(bombs: number) {

  }
}
