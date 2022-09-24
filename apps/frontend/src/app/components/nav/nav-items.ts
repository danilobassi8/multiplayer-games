import { MenuItem } from 'primeng/api';

export const NAV_ITEMS: MenuItem[] = [
  {
    label: 'Home',
    icon: 'pi pi-fw pi-file',
    routerLink: '/',
  },
  {
    label: 'Minesweeper',
    icon: 'pi pi-fw pi-pencil',
    routerLink: './minesweeper',
  },
];
