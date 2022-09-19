import { MinesweeperService } from './services/minesweeper.service';
import { Component, OnInit } from '@angular/core';
import { Room } from 'colyseus.js';

@Component({
  selector: 'multitplayer-games-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private room: Room<any> = new Room('');

  constructor(private game: MinesweeperService) {}

  ngOnInit(): void {
    this.game.joinOrCreate().subscribe((room) => {
      this.room = room;
      console.log(room, '////////////////////////////');
    });
  }
}
