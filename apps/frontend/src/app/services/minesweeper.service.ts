import { BaseGameService } from './base-game.service';
import { Injectable } from '@angular/core';

export type gameDifficulty = 'easy' | 'medium' | 'hard';
export type gameConfig = { bombs: number; size: number };
export type gameConfigs = { [key in gameDifficulty]: gameConfig };

@Injectable({
  providedIn: 'root',
})
export class MinesweeperService extends BaseGameService {
  gameConfig: gameConfigs = {
    easy: { bombs: 10, size: 9 },
    medium: { bombs: 16, size: 40 },
    hard: { bombs: 30, size: 160 },
  };

  constructor() {
    super('MinesweeperRoom');
  }
}
