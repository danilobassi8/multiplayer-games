import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'minesweeper',
    loadChildren: () => import('./minesweeper/minesweeper.module').then((m) => m.MinesweeperModule),
  },
  {
    path: 'buscaminas',
    redirectTo: 'minesweeper',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
