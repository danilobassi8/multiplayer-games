import { MinesweeperService } from './../../services/minesweeper.service';
import { GameConfig, Matrix, Cell } from './../../../../../../libs/minesweeper.lib';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'minesweeper-game-matrix',
  templateUrl: './game-matrix.component.html',
  styleUrls: ['./game-matrix.component.scss'],
})
export class GameMatrixComponent implements OnInit {
  @Input() matrix: Matrix;
  @Input() currentConfig: GameConfig;
  @Input() maxHeightInPixels: number = 750;
  @Output() cellClicked = new EventEmitter<Cell>();
  @Output() cellRightClicked = new EventEmitter<Cell>();

  public gridTemplateFrString: string = '';

  constructor(private game: MinesweeperService) {
    this.currentConfig = game.gameConfig.easy;
    this.matrix = new Matrix(this.currentConfig);
  }

  ngOnChanges(change: SimpleChanges) {
    if (change['currentConfig']) {
      this.gridTemplateFrString = `repeat(${this.currentConfig.size},calc(min(${this.maxHeightInPixels}px, 90vw) / ${this.currentConfig.size}))`;
    }
  }

  ngOnInit(): void {}

  onRightClick(event: Event, cell: Cell) {
    event.preventDefault();
    this.cellRightClicked.emit(cell);
  }
}
