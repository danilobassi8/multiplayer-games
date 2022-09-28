import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gameConfig, Matrix } from 'libs/minesweeper.lib';
import {
  gameDifficulty,
  MinesweeperDifficulties,
  MinesweeperService,
} from '../../services/minesweeper.service';

@Component({
  selector: 'app-difficulty-selector',
  templateUrl: './difficulty-selector.component.html',
  styleUrls: ['./difficulty-selector.component.scss'],
})
export class DifficultySelectorComponent implements OnInit {
  public userMatrix!: Matrix;
  public currentConfig!: gameConfig;
  public selectedDifficulty: gameDifficulty = 'easy';
  public difficultyOptions: gameDifficulty[] = [...MinesweeperDifficulties];
  public networkGamemode = 'Offline';

  constructor(public game: MinesweeperService, private router: Router) {
    this.initializeMatrices();
  }

  ngOnInit(): void {}

  initializeMatrices() {
    this.currentConfig = this.game.gameConfig[this.selectedDifficulty];
    this.userMatrix = new Matrix(this.currentConfig);
    // just to let the user test the matrix, lets make the bombs visible
    this.userMatrix.forEach((row) =>
      row.forEach((cell) => {
        if (cell.bomb) cell.revealed = true;
      })
    );
  }

  difficultyChange() {
    console.log(this.selectedDifficulty);
    this.initializeMatrices();
  }

  onPlayButton() {
    if (this.networkGamemode == 'Offline') {
      this.router.navigate(['minesweeper', 'offline', this.selectedDifficulty]);
    } else {
      console.log('TODO: redirect to multiplayer');
    }
  }
}
