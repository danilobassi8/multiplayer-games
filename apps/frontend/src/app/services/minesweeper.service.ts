import { BaseGameService } from './base-game.service';
import { AuthService } from '@auth0/auth0-angular';
import { Injectable } from '@angular/core';
import { GameConfig } from 'libs/minesweeper.lib';

export const MinesweeperDifficulties = ['easy', 'medium', 'hard'] as const;
export type GameDifficultyOption = typeof MinesweeperDifficulties[number];
export type GameDifficulties = { [key in GameDifficultyOption]: GameConfig };

@Injectable({
  providedIn: 'root',
})
export class MinesweeperService extends BaseGameService {
  public gameConfig: GameDifficulties = {
    easy: { bombs: 10, size: 8 },
    medium: { bombs: 40, size: 16 },
    hard: { bombs: 120, size: 30 },
  };

  constructor(private authService: AuthService) {
    super('MinesweeperRoom', authService, {
      maxClients: 2,
    });
  }
}
