import { Component, OnInit } from '@angular/core';
import { gameConfig, Matrix } from 'libs/minesweeper.lib';
import {
  gameDifficulty,
  MinesweeperDifficulties,
  MinesweeperService,
} from '../../services/minesweeper.service';

@Component({
  selector: 'app-difficulty-selector',
  templateUrl: './difficulty-selector.component.html',
  styleUrls: ['./difficulty-selector.component.scss', '../matrixStyles.scss'],
})
export class DifficultySelectorComponent implements OnInit {
  public userMatrix!: Matrix;
  public currentConfig!: gameConfig;
  public selectedDifficulty: gameDifficulty = 'easy';
  public difficultyOptions: gameDifficulty[] = [...MinesweeperDifficulties];
  public networkGamemode = 'Offline';

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
