import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NAV_ITEMS } from './nav-items';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public items = NAV_ITEMS;
  public avatarOptions: MenuItem[] = [
    {
      label: 'Logout',
      icon: 'pi pi-fw pi-power-off',
      command: () => this.logout(),
    },
  ];

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }

  getUserLabel(user) {
    if (user.picture) return null;
    return user.name?.[0] || 'NN';
  }
}
