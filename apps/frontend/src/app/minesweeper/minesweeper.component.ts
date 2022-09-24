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

  constructor(private game: MinesweeperService) {
    const gameConfig = this.game.gameConfig;
    this.userMatrix = new Matrix(gameConfig.medium.size, 'userMatrix');
    this.enemyMatrix = new Matrix(gameConfig.medium.size, 'enemyMatrix');
  }

  ngOnInit(): void {}
}
