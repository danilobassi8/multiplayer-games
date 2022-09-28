import {
  MinesweeperService,
  MinesweeperDifficulties,
  GameDifficulty,
} from './../../services/minesweeper.service';
import { Matrix, GameConfig, Cell } from './../../../../../../libs/minesweeper.lib';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss'],
})
export class OfflineComponent implements OnInit {
  public matrix: Matrix;
  public gameConfig: GameConfig;

  constructor(private game: MinesweeperService, private route: ActivatedRoute) {
    this.gameConfig = this.game.gameConfig.easy;
    this.matrix = new Matrix(this.gameConfig);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (MinesweeperDifficulties.includes(params['difficulty'])) {
        this.initializeGame(params['difficulty']);
      } else {
        this.initializeGame(MinesweeperDifficulties[1]);
      }
    });
  }

  initializeGame(difficulty: GameDifficulty) {
    this.gameConfig = this.game.gameConfig[difficulty];
    this.matrix = new Matrix(this.gameConfig);
  }

  onCellClicked(cell: Cell) {
    this.matrix.reveal(cell);
    if (this.matrix.status === 'game over') {
      console.log('game over');
    }
  }
}
