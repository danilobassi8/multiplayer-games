import { gameDifficulty, MinesweeperDifficulties } from './../services/minesweeper.service';
import { Matrix, gameConfig } from './../../../../../libs/minesweeper.lib';
import { Component, OnInit } from '@angular/core';
import { MinesweeperService } from '../services/minesweeper.service';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.scss', './matrixStyles.scss'],
})
export class MinesweeperComponent implements OnInit {
  public userMatrix!: Matrix;
  public currentConfig!: gameConfig;
  public selectedDifficulty: gameDifficulty = 'easy';
  public difficultyOptions: gameDifficulty[] = [...MinesweeperDifficulties];

  constructor(public game: MinesweeperService) {
    this.initializeMatrices();
  }

  ngOnInit(): void {}

  initializeMatrices() {
    this.currentConfig = this.game.gameConfig[this.selectedDifficulty];
    this.userMatrix = new Matrix(this.currentConfig.size, 'userMatrix', this.currentConfig);
  }

  difficultyChange() {
    console.log(this.selectedDifficulty);
    this.initializeMatrices();
  }
}
