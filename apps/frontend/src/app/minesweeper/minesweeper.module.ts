import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinesweeperRoutingModule } from './minesweeper-routing.module';
import { MinesweeperGameComponent } from './minesweeper-game/minesweeper-game.component';

@NgModule({
  declarations: [MinesweeperGameComponent],
  imports: [CommonModule, MinesweeperRoutingModule],
})
export class MinesweeperModule {}
