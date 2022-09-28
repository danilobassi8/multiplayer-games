import { MinesweeperService } from './../../services/minesweeper.service';
import { GameConfig, Matrix, Cell } from './../../../../../../libs/minesweeper.lib';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'minesweeper-game-matrix',
  templateUrl: './game-matrix.component.html',
  styleUrls: ['./game-matrix.component.scss', ],
})
export class GameMatrixComponent implements OnInit {
  @Input() matrix: Matrix;
  @Input() currentConfig: GameConfig;
  @Output() cellClicked = new EventEmitter<Cell>();

  constructor(private game: MinesweeperService) {
    this.currentConfig = game.gameConfig.easy;
    this.matrix = new Matrix(this.currentConfig);
  }

  ngOnInit(): void {}
}
