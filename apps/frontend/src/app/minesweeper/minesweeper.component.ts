import {
  gameConfig,
  gameDifficulty,
  MinesweeperDifficulties,
} from './../services/minesweeper.service';
import { Matrix } from './../../../../../libs/minesweeper.lib';
import { Component, OnInit } from '@angular/core';
import { MinesweeperService } from '../services/minesweeper.service';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.scss'],
})
export class MinesweeperComponent implements OnInit {
  public userMatrix: Matrix;
  public enemyMatrix: Matrix;
  public currentConfig: gameConfig;
  public selectedDifficulty: gameDifficulty = 'easy';
  public difficultyOptions: gameDifficulty[] = [...MinesweeperDifficulties];

  constructor(public game: MinesweeperService) {
    this.currentConfig = this.game.gameConfig.easy;
    this.userMatrix = new Matrix(this.currentConfig.size, 'userMatrix');
    this.enemyMatrix = new Matrix(this.currentConfig.size, 'enemyMatrix');
  }

  ngOnInit(): void {}

  initializeMatrices() {
    this.currentConfig = this.game.gameConfig[this.selectedDifficulty];
    this.userMatrix = new Matrix(this.currentConfig.size, 'userMatrix');
    this.enemyMatrix = new Matrix(this.currentConfig.size, 'enemyMatrix');
  }

  difficultyChange() {
    console.log(this.selectedDifficulty);
    this.initializeMatrices();
  }
}
