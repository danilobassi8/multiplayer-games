import { DifficultySelectorComponent } from './difficulty-selector/difficulty-selector.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinesweeperRoutingModule } from './minesweeper-routing.module';
import { LobbyComponent } from './lobby/lobby.component';
import { OfflineComponent } from './offline/offline.component';
import { GameMatrixComponent } from './game-matrix/game-matrix.component';

@NgModule({
  declarations: [
    LobbyComponent,
    DifficultySelectorComponent,
    OfflineComponent,
    GameMatrixComponent,
  ],
  imports: [CommonModule, MinesweeperRoutingModule, SharedModule],
})
export class MinesweeperModule {}
