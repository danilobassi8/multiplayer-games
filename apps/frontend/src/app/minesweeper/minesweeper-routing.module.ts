import { DifficultySelectorComponent } from './difficulty-selector/difficulty-selector.component';
import { LobbyComponent } from './lobby/lobby.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LobbyComponent },
      { path: 'create', component: DifficultySelectorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinesweeperRoutingModule {}
