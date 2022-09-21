import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'minesweeper',
    loadChildren: () => import('./minesweeper/minesweeper.module').then((m) => m.MinesweeperModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
