import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinesweeperComponent } from './minesweeper.component';

const routes: Routes = [{ path: '', children: [{ path: '', component: MinesweeperComponent }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinesweeperRoutingModule {}
