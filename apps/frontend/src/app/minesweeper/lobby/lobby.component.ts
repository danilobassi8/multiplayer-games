import { MinesweeperService } from './../../services/minesweeper.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
  sortMenuItems = [
    {
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-fw pi-plus' },
        { label: 'Download', icon: 'pi pi-fw pi-download' },
      ],
    },
    {
      label: 'Edit',
      items: [
        { label: 'Add User', icon: 'pi pi-fw pi-user-plus' },
        { label: 'Remove User', icon: 'pi pi-fw pi-user-minus' },
      ],
    },
  ];
  public dificulties: any[] = [];
  public selectedDificulties: any[] = [];

  filteredRooms: any[] = [];
  loading = true;

  constructor(public auth: AuthService, private game: MinesweeperService) {
    this.dificulties = Object.entries(this.game.gameConfig).map(([difficulty, config]) => {
      return { difficulty, config };
    });
    this.selectedDificulties = this.dificulties;
  }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
   this.game.getAvailableRooms().subscribe(res => {
    this.filteredRooms = res;
    this.loading = false;
   })
  }

  onDifficultyChange() {
    console.log('difficulties', this.selectedDificulties);
  }
}
