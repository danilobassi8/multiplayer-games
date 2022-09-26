import { DifficultySelectorComponent } from './difficulty-selector/difficulty-selector.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinesweeperRoutingModule } from './minesweeper-routing.module';
import { LobbyComponent } from './lobby/lobby.component';

@NgModule({
  declarations: [LobbyComponent, DifficultySelectorComponent],
  imports: [CommonModule, MinesweeperRoutingModule, SharedModule],
})
export class MinesweeperModule {}
