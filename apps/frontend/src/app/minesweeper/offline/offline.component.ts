import {
  MinesweeperService,
  MinesweeperDifficulties,
  GameDifficultyOption,
  GameDifficulties,
} from './../../services/minesweeper.service';
import { Matrix, GameConfig, Cell } from './../../../../../../libs/minesweeper.lib';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss'],
})
export class OfflineComponent implements OnInit {
  public matrix: Matrix;
  public gameConfig: GameConfig;
  public selectedDifficulty: GameDifficultyOption;
  public allDifficulties = [...MinesweeperDifficulties];
  public nextDifficulty: GameDifficultyOption;
  public usedFlags = 0;

  constructor(
    private game: MinesweeperService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.selectedDifficulty = 'easy';
    this.nextDifficulty = this.selectedDifficulty;
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

  initializeGame(difficulty: GameDifficultyOption) {
    if (difficulty != this.selectedDifficulty) {
      this.router.navigate(['minesweeper', 'offline', difficulty]);
    }

    this.selectedDifficulty = difficulty;
    this.nextDifficulty = difficulty;
    this.gameConfig = this.game.gameConfig[difficulty];
    this.matrix = new Matrix(this.gameConfig);
  }

  onCellClicked(cell: Cell) {
    this.matrix.reveal(cell);
  }

  onCellRightClicked(cell: Cell) {
    this.matrix.toggleCellState(cell);
    this.usedFlags = this.matrix.getUsedFlags();
  }
}
