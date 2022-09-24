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
  gameConfig: gameConfigs = {
    easy: { bombs: 10, size: 9 },
    medium: { bombs: 30, size: 40 },
    hard: { bombs: 95, size: 50 },
  };

  constructor() {
    super('MinesweeperRoom');
  }
}
