import { BaseGameService } from './base-game.service';
import { Injectable } from '@angular/core';
import { GameConfig } from 'libs/minesweeper.lib';

export const MinesweeperDifficulties = ['easy', 'medium', 'hard'] as const;
export type GameDifficulty = typeof MinesweeperDifficulties[number];
export type GameConfigsOption = { [key in GameDifficulty]: GameConfig };

@Injectable({
  providedIn: 'root',
})
export class MinesweeperService extends BaseGameService {
  public gameConfig: GameConfigsOption = {
    easy: { bombs: 10, size: 8 },
    medium: { bombs: 40, size: 16 },
    hard: { bombs: 120, size: 30 },
  };

  constructor() {
    super('MinesweeperRoom');
  }
}
