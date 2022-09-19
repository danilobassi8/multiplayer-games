import { BaseGameService } from './base-game.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MinesweeperService extends BaseGameService {
  constructor() {
    super('MinesweeperRoom');
  }
}
