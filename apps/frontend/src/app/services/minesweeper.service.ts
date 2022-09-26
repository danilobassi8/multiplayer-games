import { BaseGameService } from './base-game.service';
import { Injectable } from '@angular/core';
import { gameConfig } from 'libs/minesweeper.lib';

export const MinesweeperDifficulties = ['easy', 'medium', 'hard'] as const;
export type gameDifficulty = typeof MinesweeperDifficulties[number];
export type gameConfigs = { [key in gameDifficulty]: gameConfig };

@Injectable({
  providedIn: 'root',
})
export class MinesweeperService extends BaseGameService {
  public gameConfig: gameConfigs = {
    easy: { bombs: 10, size: 8 },
    medium: { bombs: 40, size: 16 },
    hard: { bombs: 120, size: 30 },
  };

  constructor() {
    super('MinesweeperRoom');
  }
}
