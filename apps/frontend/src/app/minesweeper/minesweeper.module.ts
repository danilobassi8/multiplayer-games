import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinesweeperRoutingModule } from './minesweeper-routing.module';
import { MinesweeperComponent } from './minesweeper.component';


@NgModule({
  declarations: [
    MinesweeperComponent
  ],
  imports: [
    CommonModule,
    MinesweeperRoutingModule
  ]
})
export class MinesweeperModule { }
