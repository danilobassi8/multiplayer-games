import { MinesweeperGameComponent } from './minesweeper-game/minesweeper-game.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'game', component: MinesweeperGameComponent },
      {
        path: '**',
        redirectTo: 'game',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinesweeperRoutingModule {}
